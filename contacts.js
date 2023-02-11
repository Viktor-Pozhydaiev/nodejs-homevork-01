// Розкоментуйте і запиши значення
const path = require("path");
const fs = require("fs/promises");

const contactsPath = path.resolve("./db/contacts.json");

// TODO: задокументувати кожну функцію
const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return console.log(contacts);
  } catch (error) {
    console.error(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const result = contacts.filter((item) => item.id === contactId);
    return console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const removeContact = async (contactId) => {
  // ...твій код
};

const addContact = async (name, email, phone) => {
  // ...твій код
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
