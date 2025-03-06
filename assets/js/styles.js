import { StyleSheet } from "react-native";

const formStyles = StyleSheet.create({
    Wrapper: {
      flex: 1,
      backgroundColor: "black",
      padding: 16,
    },
    formContainer: {
      flex: 1,
      padding: 16,
      backgroundColor: "white",
      width: "100%",
    },
    formHeader: {
      alignItems: "center",
    },
    logo: {
      width: 200,
      height: 100,
      resizeMode: "contain",
      marginBottom: 16,
    },
    welcomeMsg: {
      fontSize: 24,
      fontWeight: 500,
      color: "#333333",
      marginBottom: 4,
    },
    welcomeMsgLine: {
      fontSize: 8,
      fontWeight: 200,
      marginBottom: 24,
      color: "#E6E6E6",
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
      },
    inputControl: {
        flex: 1,
        marginBottom: 12,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 14,
        borderRadius: 10,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    btn: {
      backgroundColor: '#F7941D',
      color: "white",
    }
  })

  export default formStyles;