import {openDatabase, enablePromise} from 'react-native-sqlite-storage';

enablePromise(true);

export const getConnection = async  () => {

    const db =  openDbConnection();
    console.log(db);
    return db;
}

export const openDbConnection = async () => {
    console.log("openDbConnection")
    return await openDatabase({name: "contactsDB", location: 'default'});
}

export const createTable = async (db) => {

    try {
        
         const query = `CREATE TABLE IF NOT EXISTS CONTACTS 
                                        (name TEXT, mobile TEXT, email TEXT)`;
        await db.executeSql(query);
    } catch (error) {

        console.log("createTable error", error);
    }

}


export const saveContact = async (db, contact) => {

    try {
        
        if(contact){
            const query = `INSERT INTO CONTACTS(name, mobile, email) 
                                    values('${contact.name}', '${contact.mobileNo}', '${contact.email}') `
            return db.executeSql(query);

        }


    } catch (error) {
        console.log("saveContact error", error);
    }
}


export const fetchContacts = async (db) => {

    const contacts = [];
    try {
        
        const results = await db.executeSql("SELECT name, mobile, email FROM CONTACTS");
        console.log("fetchContacts results", results);
        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                const row = result.rows.item(index);
                contacts.push(row) ;
                
            }
        })
        return contacts;

    } catch (error) {
        console.log("fetchContacts error", error);
    }

}