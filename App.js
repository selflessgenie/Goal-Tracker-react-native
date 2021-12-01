import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredText) => {
    if (enteredText != null && enteredText != "" && enteredText.trim() != "") {
      setCourseGoals((currentGoals) => [
        ...courseGoals,
        { key: Math.random().toString(), value: enteredText },
      ]);
      setIsAddMode(false);
    }
  };

  const deleteItem = (key) => {
    setCourseGoals((currentGoals) => {
      return courseGoals.filter((goals) => goals.key !== key);
    });
  };

  const openModal = () => {
    setIsAddMode(true);
  };

  const closeModal = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={openModal} />
      <GoalInput
        visible={isAddMode}
        cancelModalHandler={closeModal}
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={deleteItem}
            itemData={itemData.item.value}
            itemKey={itemData.item.key}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60,
  },
});
