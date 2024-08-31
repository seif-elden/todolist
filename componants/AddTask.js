import { StyleSheet, View , Button ,TextInput } from 'react-native';
import React, { useState } from 'react';

export default function AddTask(props) {
    const [task, setTask] = useState({
        taskname:"",
        done:false,
    }); 
    
  return (
    <View>
        <TextInput
            style={styles.input}
            placeholder="Enter task"
            placeholderTextColor="#fff" 
            value={task.taskname}
            onChangeText={(text) => setTask({ ...task, taskname: text })}
        >
        </TextInput>

        <Button color={"red"} onPress={()=>{props.addtask(task);setTask({ ...task, taskname: "" }); }} title='add'></Button>
    </View>
  )
}


const styles = StyleSheet.create({

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        color:"white",
        width:300,
        margin:20,
    },
    
});

