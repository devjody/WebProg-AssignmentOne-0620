  /* ===== TEMP CONVERSION JS ============= */

  $('.temp-convert-button').on('click', () => {
    let inputF = $('input').val();
    celsius = ((inputF - 32) * (5 / 9)).toFixed(1);
    $('.outputC').text(celsius);
    kelvin = ((inputF - 32) * (5 / 9) + 273.15).toFixed(2);
    $('.outputK').text(kelvin);
  });
  $('body').on('keypress', (e) => {
    if (e.which == 13) {
      let inputF = $('input').val();
      celsius = ((inputF - 32) * (5 / 9)).toFixed(1);
      $('.outputC').text(celsius);
      kelvin = ((inputF - 32) * (5 / 9) + 273.15).toFixed(2);
      $('.outputK').text(kelvin);
    }
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