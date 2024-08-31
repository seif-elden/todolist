import { StyleSheet, Text, ScrollView , View  } from 'react-native';
import React, { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';


export default function Body() {

    const [tasks, setTasks] = useState([]); // State to hold the texts 

    const toggleDone = (index) => {
        const newTasks = [...tasks];
        console.log(newTasks[index].taskname)
        newTasks[index].done = !newTasks[index].done;

        newTasks.sort((a, b) => {
            return a.done - b.done;
        });

        setTasks(newTasks);
    };


    const editTask = (index , name) => {
        const newTasks = [...tasks];
        newTasks[index].taskname = name;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };


    const addtask=(task)=>{
        if (task.taskname.length >= 3) {
            setTasks([...tasks, task]);   
        }else{
            alert("please make sure task name is more than 3 chars")
        }
    }


    return (
        <View style={styles.body}>
                <View >
                    {/* add task */}
                    <AddTask addtask={addtask} ></AddTask>



                    {/* done count */}
                    <Text style={styles.text}>{tasks.filter(task => task.done === true).length} done of {tasks.length}</Text>


                    {/* show tasks */}
                    <ScrollView style={styles.tasksContainer}>
                        {tasks.map((task, index) => (
                            <Task  key={index}  task={task} index={index} toggleDone={toggleDone} editTask={editTask} deleteTask={deleteTask}></Task>
                        ))}
                        {console.log(tasks)}
                    </ScrollView>



                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "black",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: "white",
        textAlign: "center",
        margin:10,
    },
    
});

