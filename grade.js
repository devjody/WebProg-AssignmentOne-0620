  /* ===== MARK TO GRADE JS ============= */

  let markInput = '';
  markInput = document.querySelector(".markInput");
  const gradeOutput = document.querySelector(".gradeOutput");
  const err1 = document.querySelector(".err1");
  const err2 = document.querySelector(".err2");
  
  document.querySelector(".grade").addEventListener("click", (event) => {
    
    event.preventDefault();
    gradeOutput.textContent = '';
    err1.textContent = '';
    err2.textContent = '';

    if (markInput.value > 100 || markInput.value < 0 || markInput.value == null || markInput.value == '') {
      err1.textContent = '⛔ INVALID ENTRY ⛔';
      err2.textContent = 'Please try again! Between 0 - 100...';
    } else if (markInput.value == 0) gradeOutput.textContent = 'F - Fail 🤬';
    else if (markInput.value < 50) gradeOutput.textContent = 'F - Fail 🤬';
    else if (markInput.value >= 50 && markInput.value < 70) gradeOutput.textContent = 'D - Pass 🤢';
    else if (markInput.value >= 70 && markInput.value < 80) gradeOutput.textContent = 'C - Pass 😎';
    else if (markInput.value >= 80 && markInput.value < 90) gradeOutput.textContent = 'B - Pass 🤩';
    else gradeOutput.textContent = 'A - Pass ⭐';

  });

    /* ===== DATE SCRIPT =======================*/

  // GRABS DATE OBJ
  const newDate = new Date();
  // MONTHS ARE RTN 0-11
  const mth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // GRABS DAY, MONTH, YEAR
  const month = mth[newDate.getMonth()];
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  // PADDING FOR DIGITS
  const padNum = () => {
    if (day < 10) day = '0' + day
  };
  // OUTPUT
  document.querySelector('.date-value').textContent = day + "/" + month + "/" + year;