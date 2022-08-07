import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Button,
  TouchableHighlight,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.head}>
        <LinearGradient
          colors={["rgb(0, 205, 255 )", "rgba(58, 140, 255, 1)"]}
          style={styles.header}
        >
          <Text style={styles.headerText}>Welcome back</Text>
          <Text style={styles.paragraphText}>Log in to continue</Text>
        </LinearGradient>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email adress"
          placeholderTextColor="#d8d8d8"
        />

        <Text style={styles.formText2}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter your password adress"
          placeholderTextColor="#d8d8d8"
        />
        <View style={styles.checkbox}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            ios_backgroundColor="#3e3e3e"
            style={styles.switch}
          />
        </View>
        <Text style={styles.checkboxText}>Remember me</Text>
        <Button
          title="Login"
          color="rgb(0, 205, 255 )"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  head: {
    height: 250,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    position: "absolute",
    padding: 30,
    left: 0,
    right: 0,
    top: 0,
    height: 250,
  },

  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  paragraphText: {
    fontSize: 16,
    color: "#fff",
  },
  form: {
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
    height: "auto",
  },
  input: {
    borderBottomWidth: 2,
    borderColor: "#eaeaea",
    padding: 10,
    color: "#555",
  },
  formText: {
    fontSize: 16,
    color: "#333",
    paddingStart: 10,
    fontWeight: "bold",
  },
  formText2: {
    fontSize: 16,
    color: "#333",
    paddingStart: 10,
    marginTop: 30,
    fontWeight: "bold",
  },
  checkbox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 30,
    height: "auto",
    paddingStart: 5,
  },
  switch: {
    height: 30,
    width: 50,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 50,
    marginTop: 2,
    color: "rgb(0, 205, 255 )",
    fontWeight: "bold",
    marginBottom: 80,
  },
  btn: {
    marginTop: 30,
    backgroundColor: "rgb(0, 205, 255 )",
    borderRadius: 10,
  },
});
