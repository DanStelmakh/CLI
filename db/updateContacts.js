const filePath = require("./filePath"); // correct way to get file place
const fs = require("fs").promises;

const updateContact = async (contactList) => {
  await fs.writeFile(filePath, JSON.stringify(contactList));
};

module.exports = updateContact;
