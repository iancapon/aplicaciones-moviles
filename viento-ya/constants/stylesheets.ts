import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    informationContainer: {
        width: "80%",
        height: "80%",
        padding: 10,
        backgroundColor:"white",

    },
    topContainer: {
        flex: 1,

    },
    bottomContainer: {
        flex:2,
        alignItems:"flex-start",
        marginHorizontal:60,

    },
    isolatedInfo:{
        width:200,
        borderWidth:1
    },
    title: {
        fontSize: 20,
        paddingVertical:5
    },
    subtitle: {
        fontSize: 15
    },
    text: {
        fontSize: 12
    }

})

export { styles };

