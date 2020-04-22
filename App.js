import React, {useState} from 'react';
import { StyleSheet, Button, View, FlatList} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [isAddMode, setIsAddMode] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = goalTitle => {
        setCourseGoals(currentGoals => [
            ...currentGoals,
            {id: Math.random().toString(), value: goalTitle}
        ]);
        setIsAddMode(false);
    };

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter(goal => goal.id !== goalId);
        });
    };

    const cancelGoalAdditionHandler = () => {
        setIsAddMode(false);
    };


    return (
        <View style={styles.screen}>
            <Button title='ADD NEW GOAL'  onPress={() => setIsAddMode(true)}/>
                <GoalInput
                    visible={isAddMode}
                    onAddGoal={addGoalHandler}
                    onCancel={cancelGoalAdditionHandler}

                />
            <FlatList
            data={courseGoals}
            renderItem={itemData => (

                    <GoalItem title={itemData.item.value}
                              id={itemData.item.id}
                    onDelete={removeGoalHandler}/>


            )}/>
            <View>




            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },



});


