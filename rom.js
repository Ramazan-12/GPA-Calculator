function addRow() {document.getElementById('add-btn').addEventListener('click', addSubject);
document.getElementById('calc-btn').addEventListener('click', calculateGPA);

function addSubject() {
  const div = document.createElement('div');
  div.className = 'subject';
  div.innerHTML = `
    <input type="text" placeholder="Пән атауы">
    <input type="number" placeholder="Баға (мысалы 3.5)" step="0.1">
    <input type="number" placeholder="Кредит саны">
  `;
  document.getElementById('subjects').appendChild(div);
}

function calculateGPA() {
  const subjects = document.querySelectorAll('.subject');
  let totalPoints = 0;
  let totalCredits = 0;

  subjects.forEach(sub => {
    const grade = parseFloat(sub.children[1].value);
    const credit = parseFloat(sub.children[2].value);

    if (!isNaN(grade) && !isNaN(credit)) {
      totalPoints += grade * credit;
      totalCredits += credit;
    }
  });

  const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
  document.getElementById('result').innerText = `Сіздің GPA: ${gpa}`;
}


