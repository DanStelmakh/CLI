const listContacts = require("./listContacts");
const updateContact = require("./updateContacts");

const removeContact = async (contactId) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === String(contactId));
  if (index === -1) {
    return null;
  }
  const [removedContact] = allContacts.splice(index, 1);
  await updateContact(allContacts);
  return removedContact;
};

module.exports = removeContact;
