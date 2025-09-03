import {readContacts} from "../utils/readContacts.js";
import {writeContacts} from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";



export const addOneContact = async () => {
try{
    const existContacts = await readContacts() ||[];
    const newContact=createFakeContact();
    const updatedContacts = [...existContacts, newContact ];
    await writeContacts (updatedContacts);
} catch (err){
  console.error("Ошибка при добавлении контакта:", err);
}
};

addOneContact();
