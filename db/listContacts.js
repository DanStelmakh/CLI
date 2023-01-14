const fs = require("fs").promises;
const filePath = require("./filePath"); // correct way to get file place

const listContacts = async () => {
  // read "contacts.json" & get all contacts
  const data = await fs.readFile(filePath);
  // make an object from string
  const contacts = JSON.parse(data);
  return contacts;
};

module.exports = listContacts;
