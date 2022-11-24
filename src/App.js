import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';

import './App.css';

function App() {
  // List of tasks state
  const [toDo, setToDo] = useState([]);
  // Todo new single task
  const [newTask, setNewTask] = useState('');
  // Edited todo task
  const [updateData, setUpdateData] = useState('');
  // Function Add task
  const addTaskHandler = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  };
  // Function Delete task
  const deleteTaskHandler = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };
  // Function Mark as done task
  const markDoneHandler = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };
  // Function Cancel update
  const cancelUpdateHandler = () => {
    setUpdateData('');
  };
  // Function change task for update
  const changeTaskHandler = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };
  // Function update task - filerujemo originalnu todo listu prolazimo kroz sve elemente pronalazimo nas element po id, sa filter cuvamo sve elemente koji nemaju isti id kao id koji trazimo zatim uklanjamo original i dodajemo novi izmenjeni
  const updateTaskHandler = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData('');
  };
  return (
    <div className="container App">
      <h2>Todo List App</h2>
      {/* Forma za update postojeceg taska sa cancel dugmetom */}
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTaskHandler={changeTaskHandler}
          updateTaskHandler={updateTaskHandler}
          cancelUpdateHandler={cancelUpdateHandler}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTaskHandler={addTaskHandler}
        />
      )}

      {/* Forma za dodavanje novog taska */}

      {toDo && toDo.length ? '' : 'No Tasks...'}
      <ToDo
        toDo={toDo}
        markDoneHandler={markDoneHandler}
        setUpdateData={setUpdateData}
        deleteTaskHandler={deleteTaskHandler}
      />
    </div>
  );
}

export default App;
