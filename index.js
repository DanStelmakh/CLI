const contactsOperations = require("./db");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactList = await contactsOperations.listContacts();
      console.table(contactList);
      break;
    case "get":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`There is no contact with id - ${id}`);
      }
      console.log(contact);
      break;
    case "add":
      const newContact = await contactsOperations.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;
    case "remove":
      const removedContact = await contactsOperations.removeContact(id);
      console.log(removedContact);
      break;
    default:
      console.log("No actions");
  }
};
const arr = hideBin(process.argv);
const { argv } = yargs(arr);

invokeAction(argv);
