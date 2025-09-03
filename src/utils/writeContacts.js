import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';


export const writeContacts = async (updatedContacts) => {
    const data = JSON.stringify(updatedContacts, null, 2);
try{
    await fs.writeFile(PATH_DB, data, "utf8" );
    return updatedContacts;
}
catch (err){
     console.error("Ошибка записи файла:", err.message);
    return null;
}
};
