import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import Statistics from './Statistics';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gerenciador de Notas</h1>
      <StudentForm onAddStudent={addStudent} />
      <StudentList students={students} />
      <Statistics students={students} />
    </div>
  );
}

export default App;
