import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(enteredText);
    setEnteredText("");
  };
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Course goals"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonParent}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={props.cancelModalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1.5,
    width: "80%",
    padding: 10,
    borderRadius: 3,
    marginBottom: 10,
  },
  buttonParent: {
    flexDirection: "row",
    width: "80%",
    height: 100,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    width: 100,
  },
});

export default GoalInput;
