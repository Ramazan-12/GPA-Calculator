function addRow() {
  const table = document.getElementById("gradeTable");
  const newRow = table.insertRow();
  for (let i = 0; i < 5; i++) {
    const cell = newRow.insertCell(i);
    if(i===0) cell.innerHTML='<input type="text" placeholder="Пән атауы">';
    else cell.innerHTML='<input type="number" min="0" max="100">';
  }
}

function calculateGPA() {
  const rows = document.querySelectorAll("#gradeTable tr");
  let totalCredits=0, totalPoints=0;
  for(let i=1;i<rows.length;i++){
    const inputs = rows[i].querySelectorAll("input");
    const rk1=parseFloat(inputs[1].value)||0;
    const rk2=parseFloat(inputs[2].value)||0;
    const exam=parseFloat(inputs[3].value)||0;
    const credit=parseFloat(inputs[4].value)||0;
    const total=(rk1*0.3)+(rk2*0.3)+(exam*0.4);
    const gpa=getGPA(total);
    totalCredits+=credit;
    totalPoints+=gpa*credit;
  }
  const finalGPA=(totalPoints/totalCredits).toFixed(2);
  const resultDiv=document.getElementById("result");
  if(!finalGPA || isNaN(finalGPA)){
    resultDiv.innerHTML="⚠️ Алдымен барлық мәндерді енгіз!";
  } else {
    let msg="";
    if(finalGPA>=3.5) msg="🌟 Жарайсың, үздік студент!";
    else if(finalGPA>=2.5) msg="🙂 Жақсы нәтиже!";
    else msg="😅 Көбірек тырыс!";
    resultDiv.innerHTML=`Жалпы GPA: <b>${finalGPA}</b><br>${msg}`;
  }
}

function getGPA(score){
  if(score>=90) return 4.0;
  if(score>=85) return 3.7;
  if(score>=80) return 3.3;
  if(score>=75) return 3.0;
  if(score>=70) return 2.7;
  if(score>=65) return 2.3;
  if(score>=60) return 2.0;
  if(score>=50) return 1.7;
  return 0.0;
}
