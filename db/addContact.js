const listContacts = require("./listContacts");
const updateContact = require("./updateContacts");
const { v4 } = require("uuid");

const addContact = async (data) => {
  const contactList = await listContacts(); //all contacts
  const newProduct = {
    id: v4(),
    ...data,
  };
  contactList.push(newProduct); // add new contact only to the object, not to "contacts.json" ===> need to rewrite "contacts.json"
  await updateContact(contactList);
  return newProduct;
};

module.exports = addContact;
