const contactsOperations = require("./db");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const invokeAction = async ({ action, id, data }) => {
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
      const newContact = await contactsOperations.addContact(data);
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
// *Get all contacts
// invokeAction({ action: "list" });
// *Get contact by id
// const id = "4";
// invokeAction({ action: "get", id });
// *Add contact
// const contactToAdd = {
//   name: "Danila",
//   email: "Danila.ante@vestibul.com.ua",
//   phone: "(999) 999-9999",
// };
// invokeAction({ action: "add", data: contactToAdd });
// *Remove contact
// const idToRemove = "4";
// invokeAction({ action: "remove", id: idToRemove });
