import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js"; // твоя готовая функция с faker

 export const generateContacts = async (number) => {

  const existContacts = await readContacts() || [];// читает смассив существующих контактов


  const newContacts = [];
  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());//создаем новые конакты
  }

  const updatedContacts = [...existContacts, ...newContacts];//объединяем старый массив и новые контакты

  await writeContacts(updatedContacts);  // записываем в файл
};

generateContacts(5);

