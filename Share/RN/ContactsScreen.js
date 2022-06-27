
import React, {useEffect, useState }  from "react";
import { Button, FlatList, Modal, Text, TextInput, View } from "react-native";



class ContactInfo{
    constructor(name, mobileNo, email){
        
        this.name = name;
        this.mobileNo = mobileNo;
        this.email = email;
    }
}
const initContact = new ContactInfo("", "", "");

function Contacts(){

    const [data, setData] = useState([]);
    const [contact, setContact] = useState(initContact);
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    useEffect(()=> {

        loadData();

    }, [])

    async function loadData(){

        
        
    }

    async function mailTo(email){

        
        
    }

    async function share(contact){

        
        
    }
    

    function renderContact(){
        return (
           
                <FlatList 
                    data={data} keyExtractor={item => item.email}
                    renderItem={(result => (
                        <View style={appStyles.itemContainer}>
                            <Text style={{color: 'darkblue', fontSize: 18, textAlign: 'center', marginBottom: 6}}>{result.item.name}</Text>
                            <Text style={{color: 'mediumslateblue', fontSize: 17, marginBottom: 6}}>{`MobileNo: ${result.item.mobileNo}`}</Text>
                            <Text style={{color: 'mediumpurple', fontSize: 17, marginBottom: 6}}>{`Email: ${result.item.email}`}</Text>
                            <View style={appStyles.actionContainer}>
                                <Button title="Call" onPress={() => {}}/>
                                <Button title="Email" onPress={() => mailTo(result.item.email)}/>
                                <Button title="Text" onPress={() => {}}/>
                                <Button title="Share" onPress={() => share(result.item)}/>
                            </View>
                        </View>
                    ))}/>
        )
    }

    function handleChange(propertyName, value){
        
        const copy_of_contact = {...contact};
        copy_of_contact[propertyName] = value;
        setContact(copy_of_contact);
    }

    async function saveContact(){

        try {
            setData([...data, contact]);
            setContact(initContact);
            setIsModalVisible(false)
            
        } catch (error) {
            console.log("saveContact", error);
        }
        
    }
    return (
        <View style={appStyles.container}>
            <Text style={appStyles.titleText}>Contacts</Text>
            <View style={appStyles.actionContainer}>
                <Button title="Add New" onPress={() => setIsModalVisible(true)}/>   
                
            </View>
            <View>
                    {data.length > 0 ? renderContact() : <Text style={appStyles.infoText}>No Contacts</Text>}
            </View>
            
            <View>
                <Modal visible={isModalVisible}>
                    <View style={appStyles.modalContainer}>
                        <Text style={appStyles.titleText}>New Contact</Text>

                        <TextInput style={appStyles.textInput} 
                            placeholder="Name" keyboardType="default" value={contact.name} onChangeText={(value) => handleChange("name", value)}/>
                        <TextInput style={appStyles.textInput} placeholder="MobileNo" 
                                            keyboardType="number-pad" value={contact.mobileNo} onChangeText={(value) => handleChange("mobileNo", value)}/>
                        <TextInput  style={appStyles.textInput} placeholder="Email" 
                                        keyboardType="email-address" value={contact.email} onChangeText={(value) => handleChange("email", value)}/>
                        <View style={appStyles.actionContainer}>
                            <Button title="Save" onPress={saveContact} />
                            <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default Contacts;