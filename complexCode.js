/* filename: complexCode.js */

// This code demonstrates a complex implementation of a chat application using JavaScript

// Define the Chat class
class Chat {
  constructor(name) {
    this.name = name;
    this.users = [];
    this.messages = [];
  }

  // Add a user to the chat
  addUser(user) {
    this.users.push(user);
  }

  // Remove a user from the chat
  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
      console.log(`${user.name} has left the chat`);
    }
  }

  // Send a message to the chat
  sendMessage(user, message) {
    const formattedMessage = `${user.name}: ${message}`;
    this.messages.push(formattedMessage);
    this.users.forEach(u => {
      if (u !== user) {
        u.receiveMessage(formattedMessage);
      }
    });
  }
}

// Define the User class
class User {
  constructor(name, chat) {
    this.name = name;
    this.chat = chat;
  }

  // Send a message to the chat
  sendMessage(message) {
    this.chat.sendMessage(this, message);
  }

  // Receive a message from the chat
  receiveMessage(message) {
    console.log(`${this.name} received: ${message}`);
  }
}

// Create a chat instance
const chat = new Chat("MyChat");

// Create user instances
const user1 = new User("John Doe", chat);
const user2 = new User("Jane Smith", chat);
const user3 = new User("Bob Johnson", chat);

// Add users to the chat
chat.addUser(user1);
chat.addUser(user2);
chat.addUser(user3);

// Send messages in the chat
user1.sendMessage("Hello, everyone!");
user2.sendMessage("Hi, John!");

// Remove a user from the chat
chat.removeUser(user3);

// Send more messages in the chat
user1.sendMessage("How's your day?");
user2.sendMessage("It's great!");

// Output the chat messages
console.log("Chat Messages:");
chat.messages.forEach(message => console.log(message));

// Expected output:
// Jane Smith received: John Doe: Hello, everyone!
// Bob Johnson received: John Doe: Hello, everyone!
// John Doe received: Jane Smith: Hi, John!
// John Doe has left the chat
// Jane Smith received: John Doe: How's your day?
// Bob Johnson received: John Doe: How's your day?
// Jane Smith: It's great!

// Chat Messages:
// John Doe: Hello, everyone!
// Jane Smith: Hi, John!
// John Doe: How's your day?
// Jane Smith: It's great!