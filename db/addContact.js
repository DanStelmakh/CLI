const listContacts = require("./listContacts");
const updateContact = require("./updateContacts");
const { v4 } = require("uuid");

const addContact = async (name, email, phone) => {
  const contactList = await listContacts(); //all contacts
  const newProduct = {
    id: v4(),
    name: name.toString(),
    email: email.toString(),
    phone: phone.toString(),
  }; // contact to add with unique id
  contactList.push(newProduct); // add new contact only to the object, not to "contacts.json" ===> need to rewrite "contacts.json"
  await updateContact(contactList);
  return newProduct;
};
//!Почему не работает с ...data, если в index.js передавать data вместо name, email, phone????
// const addContact = async (data) => {
//   const contactList = await listContacts(); //all contacts
//   const newProduct = {
//     id: v4(),
//     ...data,
//   }; // contact to add with unique id
//   contactList.push(newProduct); // add new contact only to the object, not to "contacts.json" ===> need to rewrite "contacts.json"
//   await updateContact(contactList);
//   return newProduct;
// };

module.exports = addContact;
