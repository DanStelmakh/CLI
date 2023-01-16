const listContacts = require("./listContacts");

const getContactById = async (id) => {
  //  Read file contacts.json and get all contacts
  const contactList = await listContacts();
  //  Find contact by id
  const contactById = contactList.find((item) => item.id === String(id));
  if (!contactById) {
    return null;
  }
  return contactById;
};

module.exports = getContactById;
