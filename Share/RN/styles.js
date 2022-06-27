import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 7,
        margin: 7
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
        padding: 10,
        margin: 8
    },
    itemContainer: {
        
        backgroundColor: 'mintcream',
        padding: 10,
        margin: 8
    },
    titleText:{
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },  
    infoText:{
        color: 'lightblue',
        fontSize: 15,
        fontStyle: 'italic'
    },

    actionContainer:{

        flexDirection: "row",
        justifyContent:'space-around',
        marginTop: 10
    },
    textInput:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 10
    }
})