import React from 'react';

function Statistics({ students }) {
  if (students.length === 0) return null;

  const disciplinaMedia = Array(5).fill(0);
  students.forEach((s) => {
    s.grades.forEach((grade, i) => {
      disciplinaMedia[i] += grade;
    });
  });

  const mediaPorDisciplina = disciplinaMedia.map((total) => total / students.length);
  const mediaTurma = students.reduce((acc, s) => acc + s.average, 0) / students.length;

  const acimaDaMedia = students.filter((s) => s.average > mediaTurma);
  const baixaFrequencia = students.filter((s) => s.attendance < 75);

  return (
    <div>
      <h2>Estatísticas</h2>
      <p>Média da turma: {mediaTurma.toFixed(2)}</p>
      <h3>Média por disciplina:</h3>
      <ul>
        {mediaPorDisciplina.map((media, index) => (
          <li key={index}>Disciplina {index + 1}: {media.toFixed(2)}</li>
        ))}
      </ul>

      <h3>Alunos acima da média da turma:</h3>
      <ul>
        {acimaDaMedia.map((s, i) => (
          <li key={i}>{s.name} - Média: {s.average.toFixed(2)}</li>
        ))}
      </ul>

      <h3>Alunos com frequência abaixo de 75%:</h3>
      <ul>
        {baixaFrequencia.map((s, i) => (
          <li key={i}>{s.name} - Frequência: {s.attendance}%</li>
        ))}
      </ul>
    </div>
  );
}

export default Statistics;
