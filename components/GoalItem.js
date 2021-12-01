import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.itemKey)}>
      <View style={styles.listItems}>
        <Text>{props.itemData}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "pink",
    color: "white",
  },
});

export default GoalItem;
