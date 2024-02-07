import { useState, useEffect } from "react";

export const useTasks = ()=>{
    const getInitialLocalStorage=()=>{
        const taskFromLocalStorage = localStorage.getItem("tasks");
        
        return taskFromLocalStorage ? JSON.parse(taskFromLocalStorage,"tasks") : []
    }

    const [tasks, setTasks] = useState(
        getInitialLocalStorage()
      );
  
    useEffect(()=>{
      localStorage.setItem("tasks", JSON.stringify(tasks))
    },[tasks])
  /*
    const taskFromLocalStorage = localStorage.getItem("tasks");
  
    const [tasks, setTasks] = useState(
      taskFromLocalStorage ? JSON.parse(taskFromLocalStorage,"tasks"):[]
    );
  
    useEffect(()=>{
      localStorage.setItem("tasks", JSON.stringify(tasks))
    },[tasks])
  */
    /*
    const [tasks, setTasks] = useState([
        {
          id: 1, content: "Zrobić podstawową todo liste w JS", done: true,
        },
        {
          id: 2, content: "Przenieść podstawową todo liste do React-a", done: false,
        },
      ]);
    */
  
  
    const removeTask = (id) => {
      setTasks(tasks => tasks.filter(task => task.id !== id))
    };
  
    const toggleDoneTask = (id) => {
      setTasks(tasks => tasks.map(task => {
        if (task.id === id)
          return {
            ...task, done: !task.done
          }
        return task
      }))
    };
  
    const toggleAllDone = () => {
      setTasks(tasks => tasks.map(task => ({
        ...task, done: true,
      })))
    };
  
    const addNewTasks = (content) => {
      setTasks(tasks => [
        ...tasks,
        {
          content,
          done: false,
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        },
      ])
    }
    return{
        tasks,
        addNewTasks,
        toggleAllDone,
        removeTask,
        toggleDoneTask,
    }
}