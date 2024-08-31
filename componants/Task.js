import { StyleSheet, Text, View ,TouchableOpacity ,TextInput  } from 'react-native';
import CheckBox from 'expo-checkbox';
import React, { useState ,useEffect } from 'react';



export default function Task(props){

    const [isEditable, setIsEditable] = useState(false);
    const [buttonLabel, setButtonLabel] = useState('Edit');
    const [editableTaskName, setEditableTaskName] = useState(props.task.taskname);

    useEffect(() => {
        setEditableTaskName(props.task.taskname);
    }, [props.task]);


    const handleEditPress = () => {
        if (isEditable) {
            setIsEditable(false);
            setButtonLabel('Edit');
            props.editTask(props.index, editableTaskName); 
        } else {
            setIsEditable(true);
            setButtonLabel('Save');
        }
    };

    const handleTextChange = (text) => {
        setEditableTaskName(text);
    };

    return(

        <View style={styles.taskContainer}>
            <TextInput
                style={styles.taskName}
                value={editableTaskName}
                onChangeText={handleTextChange}
                editable={isEditable}
            />
            <View style={styles.actions}>
            <CheckBox
                value={props.task.done}
                onValueChange={() => props.toggleDone(props.index)}
                style={styles.checkbox}
            />
            <Text style={styles.actionText}>Done</Text>
            <TouchableOpacity onPress={handleEditPress} style={styles.editButton}>
                <Text style={styles.actionText}>{buttonLabel}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.deleteTask(props.index)} style={styles.deleteButton}>
                <Text style={styles.actionText}>Delete</Text>
            </TouchableOpacity>
            </View>
        </View>
  
    )
}





const styles = StyleSheet.create({
    taskContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#e0e0e0',
      padding: 10,
      borderRadius: 20,
      marginVertical: 5,
    },
    taskName: {
      flex: 1,
      fontSize: 18,
    },
    actions: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      marginRight: 5,
    },
    actionText: {
      marginHorizontal: 10,
      fontSize: 18,
    },
    deleteButton: {
      marginLeft: 10,
    },
});
  
