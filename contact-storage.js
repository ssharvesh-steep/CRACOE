// Simple client-side message storage using localStorage
class ContactStorage {
  constructor() {
    this.storageKey = 'cracoe_messages';
  }

  saveMessage(messageData) {
    try {
      const messages = this.getMessages();
      const newMessage = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        ...messageData
      };
      
      messages.push(newMessage);
      localStorage.setItem(this.storageKey, JSON.stringify(messages));
      return true;
    } catch (error) {
      console.error('Failed to save message:', error);
      return false;
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
}

window.ContactStorage = ContactStorage;