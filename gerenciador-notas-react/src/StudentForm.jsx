import React, { useState } from 'react';

const initialState = {
  name: '',
  grades: ['', '', '', '', ''],
  attendance: '',
};

function StudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name === 'grades') {
      const updatedGrades = [...formData.grades];
      updatedGrades[index] = value;
      setFormData({ ...formData, grades: updatedGrades });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const grades = formData.grades.map(Number);
    const attendance = parseFloat(formData.attendance);
    const average = grades.reduce((a, b) => a + b, 0) / grades.length;

    onAddStudent({ name: formData.name, grades, attendance, average });
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Nome do aluno"
        value={formData.name}
        onChange={(e) => handleChange(e)}
        required
      />
      {formData.grades.map((grade, index) => (
        <input
          key={index}
          name="grades"
          type="number"
          placeholder={`Nota ${index + 1}`}
          value={grade}
          min="0"
          max="10"
          onChange={(e) => handleChange(e, index)}
          required
        />
      ))}
      <input
        name="attendance"
        type="number"
        placeholder="Frequência (%)"
        value={formData.attendance}
        min="0"
        max="100"
        onChange={(e) => handleChange(e)}
        required
      />
      <button type="submit">Adicionar Aluno</button>
    </form>
  );
}

export default StudentForm;
