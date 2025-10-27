// Enhanced client-side message storage with global sync capabilities
class ContactStorage {
  constructor() {
    this.storageKey = 'cracoe_messages';
    this.syncKey = 'cracoe_sync_queue';
    this.deviceId = this.getOrCreateDeviceId();
  }

  getOrCreateDeviceId() {
    let deviceId = localStorage.getItem('cracoe_device_id');
    if (!deviceId) {
      deviceId = 'device_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('cracoe_device_id', deviceId);
    }
    return deviceId;
  }

  saveMessage(messageData) {
    try {
      const messages = this.getMessages();
      const newMessage = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        deviceId: this.deviceId,
        synced: false,
        ...messageData
      };
      
      messages.push(newMessage);
      localStorage.setItem(this.storageKey, JSON.stringify(messages));
      
      // Add to sync queue for global delivery
      this.addToSyncQueue(newMessage);
      
      return true;
    } catch (error) {
      console.error('Failed to save message:', error);
      return false;
    }
  }

  addToSyncQueue(message) {
    try {
      const syncQueue = this.getSyncQueue();
      syncQueue.push(message);
      localStorage.setItem(this.syncKey, JSON.stringify(syncQueue));
      
      // Attempt immediate sync
      this.attemptSync();
    } catch (error) {
      console.error('Failed to add to sync queue:', error);
    }
  }

  getSyncQueue() {
    try {
      const stored = localStorage.getItem(this.syncKey);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      return [];
    }
  }

  async attemptSync() {
    const syncQueue = this.getSyncQueue();
    if (syncQueue.length === 0) return;

    try {
      // Try multiple sync methods
      await this.syncViaWebhook(syncQueue);
      
      // Clear sync queue on success
      localStorage.setItem(this.syncKey, JSON.stringify([]));
    } catch (error) {
      console.log('Sync will retry later:', error.message);
    }
  }

  async syncViaWebhook(messages) {
    const webhookUrls = [
      'https://hooks.zapier.com/hooks/catch/your-webhook-id/',
      'https://maker.ifttt.com/trigger/cracoe_message/with/key/your-key',
      'https://api.telegram.org/bot<token>/sendMessage' // For Telegram notifications
    ];

    for (const message of messages) {
      for (const url of webhookUrls) {
        try {
          await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...message,
              source: 'CRACOE Contact Form',
              delivery_method: 'global_webhook'
            })
          });
          break; // Success, move to next message
        } catch (error) {
          continue; // Try next webhook
        }
      }
    }
  }

  getMessages() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Failed to load messages:', error);
      return [];
    }
  }

  deleteMessage(id) {
    try {
      const messages = this.getMessages();
      const filtered = messages.filter(msg => msg.id !== id);
      localStorage.setItem(this.storageKey, JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error('Failed to delete message:', error);
      return false;
    }
  }

  // Get messages from other devices (for admin panel)
  async getGlobalMessages() {
    try {
      const response = await fetch('https://api.cracoe.com/messages', {
        headers: {
          'X-Device-ID': this.deviceId
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        return data.messages || [];
      }
    } catch (error) {
      console.log('Using local messages only');
    }
    
    return this.getMessages();
  }

  // Mark message as read globally
  async markAsRead(messageId) {
    try {
      await fetch(`https://api.cracoe.com/messages/${messageId}/read`, {
        method: 'PUT',
        headers: {
          'X-Device-ID': this.deviceId
        }
      });
    } catch (error) {
      // Update locally if global update fails
      const messages = this.getMessages();
      const message = messages.find(m => m.id === messageId);
      if (message) {
        message.status = 'read';
        localStorage.setItem(this.storageKey, JSON.stringify(messages));
      }
    }
  }

  // Setup periodic sync for offline messages
  startPeriodicSync() {
    setInterval(() => {
      this.attemptSync();
    }, 30000); // Sync every 30 seconds
  }
}

window.ContactStorage = ContactStorage;
