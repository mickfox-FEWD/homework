function hasBirthdayAlreadyPassedThisYear(birthday_date, now_Date) {
  if (now_Date.getMonth() > birthday_date.getMonth()) return true;
  else if (now_Date.getMonth() < birthday_date.getMonth()) return false;
  else if (now_Date.getMonth() == birthday_date.getMonth()) {
    // same month as birthday
    if (now_Date.getDate() >= birthday_date.getDate())
      return true; //saying birthday is already passed on birthday
    else return false;
  } else return null; //should never happen
}
function daysInMonth(month, year) {
  let days;
  if (month == 2) {
    // Feb 28 days
    days = 28;
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
      days = 29; // Leap year
    }
  } else if (
    month == 4 || // Apr has 30 days
    month == 6 || // Jun 30 days
    month == 9 || // Sept 30 days
    month == 11 // Nov has 30 days
  ) {
    days = 30;
  } else {
    days = 31; // All other months
  }
  console.log("returning daysInMonth(): " + days);
  return days;
}

// function daysLastMonth(thisMonth, thisYear) {
//   if (thisMonth == 2) {
//     //if it's Mar, then Feb had 28 days (TODO: leap years)
//     return 28;
//   } else if (
//     thisMonth == 4 || //if it's May, then Apr had 30 days
//     thisMonth == 6 || //if it's Jul, then Jun had 30 days
//     thisMonth == 9 || //if it's Oct, then Sept had 30 days
//     thisMonth == 11 //if it's Dec, then Nov had 30 days
//   ) {
//     return 30;
//   } else return 31; // all the rest of the months
// }

function calcDaysRemainingInMonth(day, month, year) {
  totalDaysInMonth = daysInMonth(month, year);
  daysLeftInMonth = totalDaysInMonth - day;
  console.log(
    `daysInMonth: ${totalDaysInMonth}, daysLeftInMonth: ${daysLeftInMonth}`
  );
  return daysLeftInMonth;
}

function calcDaysRemainingInLastMonth(day, month, year) {
  if (month == 1) {
    working_month = 12;
    working_year = year - 1;
  } else {
    working_month = month - 1;
    working_year = year;
  }
  retval = calcDaysRemainingInMonth(day, working_month, working_year);
  return retval;
}

// function calcDaysPassedInMonth(day, month) {
//   daysInMonth = daysInMonth(month);
//   if (day > daysInMonth) {
//     daysPassedInMonth = daysInMonth - day;
//   } else if (day = daysInMonth){
//     daysPassedInMonth = 0 }
//   } else if (day < daysInMonth){
//     daysPassedInMonth = 0 }

//     console.log(
//       `daysInMonth: ${daysInMonth}, daysLeftInMonth: ${daysLeftInMonth}`
//     );
//   return daysLeftInMonth;

const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = form.querySelector("#birthdaytime").value;
  console.log("formData is: " + formData);

  let birthday_DateObj = new Date(formData);
  let birthday_Month = birthday_DateObj.getMonth() + 1;
  let birthday_Year = birthday_DateObj.getFullYear();
  let birthday_Days = birthday_DateObj.getDate();

  let now_DateObj = new Date();
  let now_Month = now_DateObj.getMonth() + 1;
  let now_Year = now_DateObj.getFullYear();
  let now_Days = now_DateObj.getDate();
  let birthday_already_passed = hasBirthdayAlreadyPassedThisYear(
    birthday_DateObj,
    now_DateObj
  );

  console.log(`
    now_DateObj is ${now_DateObj}
    now_Days is ${now_Days}
    now_Month is ${now_Month}
    now_Year is ${now_Year}

    birthday_DateObj is: ${birthday_DateObj}
    birthday_Days is ${birthday_Days}
    birthday_Month is ${birthday_Month}
    birthday_Year is ${birthday_Year}

    birthday_already_passed is: ${birthday_already_passed}`);

  // General solution pseudocode
  // if Birthday_already_passed:
  //     year_diff = now_year - birthday_year
  //     month_diff = now_month - birthday_month (subtract 1 more if (month_diff>0 and now_date < birthday_date))
  //     day_diff = if (now_date < birthday_date) then day_diff=(days remaining in birthday month + days passed this month)
  //          else day_diff = now_date - birthday_date
  //
  // total_diff = year_diff + month_diff + day_diff

  // if !Birthday_already_passed
  //     year_diff = now_year - birthday_year - 1
  //     month_diff = 12 - birthday_month -1 + now_month
  //     day_diff = if (now_date < birthday_date) then day_diff=(days remaining in birthday month + days passed this moonth)
  //          else day_diff = now_date - birthday_date

  let outputStr = "";
  let year_diff = 0;
  let month_diff = 0;
  let day_diff = 0;

  switch (birthday_already_passed) {
    case true:
      year_diff = now_Year - birthday_Year;
      month_diff = now_Month - birthday_Month;
      if (month_diff > 0 && now_Days < birthday_Days) {
        month_diff--;
      }
      if (now_Days < birthday_Days) {
        day_diff =
          now_Days +
          calcDaysRemainingInLastMonth(
            birthday_Days,
            birthday_Month,
            birthday_Year
          );
      } else if (now_Days > birthday_Days) {
        day_diff = now_Days - birthday_Days;
      } else {
        day_diff = 0;
      }
      console.log(`
        year_diff: ${year_diff}, month_diff: ${month_diff}, day_diff: ${day_diff} 
      `);
      break;

    case false:
      year_diff = now_Year - birthday_Year - 1;
      month_diff = 12 - birthday_Month + now_Month; //todo fix this - off by 1

      // day_diff = if (now_date < birthday_date) then day_diff=(days remaining in birthday month + days
      // passed this moonth)
      //   else day_diff = now_date - birthday_date

      if (now_Days < birthday_Days) {
        day_diff =
          now_Days +
          calcDaysRemainingInMonth(
            birthday_Days,
            birthday_Month,
            birthday_Year
          );
      } else if (now_Days > birthday_Days) {
        day_diff = now_Days - birthday_Days;
      } else {
        day_diff = 0;
      }
      console.log(`
        year_diff: ${year_diff}, month_diff: ${month_diff}, day_diff: ${day_diff}
      `);
      break;

    case null:
      console.log("er .... sorry");
      break;
  } //switch

  outputStr = `Your Age is ${year_diff} Years, ${month_diff} months and ${day_diff} days`;
  console.log("outputStr: " + outputStr);

  document.querySelector("#updateMe").innerHTML =
    "<p><br>" + outputStr + "</p>";
});
// Function to get yesterday's date in YYYY-MM-DD format
function getYesterdayDate() {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1); // Subtract one day
  return yesterday.toISOString().split("T")[0]; // Format as YYYY-MM-DD
}

// Set the max and value attributes of the input element
const birthdayInput = document.querySelector("#birthdaytime");
const yesterdayDate = getYesterdayDate();
birthdayInput.setAttribute("max", yesterdayDate);
birthdayInput.setAttribute("value", yesterdayDate);
