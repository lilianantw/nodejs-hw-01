import {readContacts} from "../utils/readContacts.js";
import {writeContacts} from "../utils/writeContacts.js";

export const removeLastContact = async () => {
try{
const contacts = await readContacts() || [];

if(contacts.length === 0){
    console.log("Нет контактов для удаления");
    return;
};

    const newArrayContact=contacts.slice(0, contacts.length - 1);//новый массив без последнего элемента;
    await writeContacts(newArrayContact);  // записываем новый массив без последнего элемента;
}

catch (err){
    console.error("Ошибка при удалении контакта:", err);
}

};

removeLastContact();
