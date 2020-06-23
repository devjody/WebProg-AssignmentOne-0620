/* -------------------------------
- @name: Assignement1            -         
- @CourseCode: SODV1201          -
- @class: Intro Web Programming  -
- @author: Jody Boston (devjody) -

Table of Content: 
1. Date code;
2. Intro 10 sec delay code;
Known Bugs:
...
- Was having an ongoing issue with > Uncaught TypeError: Cannot read property 'addEventListener' of null - Have no idea how to fix this, everything works fine in isolation. Ended up moving all the JS to unique files.  
------------------------------- */

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

  /* ===== LOGO ANIMATION TIMEOUT ============= */

  setTimeout(function () {
    document.querySelector('.profile').style.display = "block";
    document.querySelector('.logo').style.display = "block";
  }, 10000);

