import { createContext, useContext, useState } from "react";
import {createTaskRequest, getTasksResquest, updateTaskRequest, getTaskResquest, deleteTaskRequest } from "../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if(!context) {
        throw new Error("UseTasks must be used within a TasksProvider");
    }
    return context;
}; 

export function TaskProvider ({children}){
    const [tasks, setTasks] = useState([]);

    const getTasks = async() => {
        try {
            const res = await getTasksResquest();
            setTasks(res.data)
        } catch (error) {
            console.error(error);
        }
    };

    const createTask = async(task) => {
      const res = await createTaskRequest(task)
      console.log(res);
    };

    const getTask = async (id) => {
        try {
          const res = await getTaskResquest(id);
          return res.data
        } catch (error) {
          console.log(error);
        }
    };

    const toggleTaskStatus = async(id, complete) => {
        try {
            const updateTask = { completed: complete };
            const res = await updateTaskRequest(id, updateTask);
            if(res.status === 200){
                setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
            }
        } catch (error) {
            console.error(error);
        }
    };

    const deleteTask = async(id) => {
        try {
        const res = await deleteTaskRequest(id);
        if(res.status === 204) setTasks(tasks.filter(task => task._id !== id))
        } catch (error) {
            console.log(error);
        }
    };

    const updateTask = async (id, task) => {
        try {
            await updateTaskRequest(id, task)
        } catch (error) {
            console.error(error);
        }
    }

    return <TaskContext.Provider value={{ tasks, createTask, getTasks, getTask, toggleTaskStatus, updateTask, deleteTask}}>{children}</TaskContext.Provider>;
};