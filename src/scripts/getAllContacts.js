import {readContacts} from "../utils/readContacts.js";

export const getAllContacts = async () => {
   const allContacts = await readContacts();
   return allContacts ||[];  // возвращаем все контакты или ничего, если массив пустой
};

console.log(await getAllContacts());
