
import React, {useEffect, useState }  from "react";
import { Button, FlatList, Modal, Text, TextInput, View, Linking, Alert, Share } from "react-native";
import {styles as appStyles} from '../globals/appStyles'
import {NativeModules} from 'react-native'

const {SampleModule} = NativeModules;

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

        try {
            const result = await SampleModule.sayHello("react native module");
            console.log("sayHello result", result);
        } catch (error) {
            console.log("sayHello error", error);
        }

        try {
            const result = await SampleModule.checkCameraFlash();
            console.log("checkCameraFlash result", result);
        } catch (error) {
            console.log("checkCameraFlash error", error);
        }
        
    }

    async function mailTo(email){

        try {
            const result = await Linking.canOpenURL(`mailTo://${email}`);
            await Linking.openURL(`mailTo://${email}`);
        } catch (error) {
            Alert.alert("Message", "No mail apps");
        }
        
        
    }

    async function share(contact){

        const result = await Share.share({
            message: "Share contact " + contact.name
        });

        if(result.action === "sharedAction"){
            Alert.alert("Message", "Shared successfully");
        }
        if(result.action === "dismissedAction"){
            Alert.alert("Message", "Shared dismissed");
        }
        
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
                                <Button title="Call" onPress={() => {Linking.openURL(`tel://${result.item.mobileNo}`)}}/>
                                <Button title="Email" onPress={() => mailTo(result.item.email)}/>
                                <Button title="Text" onPress={() => {Linking.openURL(`sms://${result.item.mobileNo}`)}}/>
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

    async function callNativeModule(){

        console.log("Calling native modules");
    }
    return (
        <View style={appStyles.container}>
            <Text style={appStyles.titleText}>Contacts</Text>
            <View style={appStyles.actionContainer}>
                <Button title="Add New" onPress={() => setIsModalVisible(true)}/>  

                <Button title="Call Native Module" onPress={callNativeModule}/> 
                
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