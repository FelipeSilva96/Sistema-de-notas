import React from 'react';

function StudentList({ students }) {
  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - Média: {student.average.toFixed(2)} - Frequência: {student.attendance}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
