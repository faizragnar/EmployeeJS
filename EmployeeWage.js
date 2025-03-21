const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;

// Employee Attendance Check
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck === IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is PRESENT");
}

// UC 2 
let empHrs = 0;
let workCheck = Math.floor(Math.random() * 10) % 3;
switch (workCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage (UC2): " + empWage);

// UC 3 
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let empHrsUC3 = getWorkingHours(workCheck);
let empWageUC3 = empHrsUC3 * WAGE_PER_HOUR;
console.log("Emp Wage (UC3): " + empWageUC3);

// UC 4

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}

console.log("Total Hrs: " + empHrs + " Emp Wage: " + empWage);

// UC 5

let totalEmpHrs = 0;
let totalWorkingDays = 0;

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
       totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}

console.log("UC5 – Total Days: " + totalWorkingDays +
            " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

            // UC 6 Arrays

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}



let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
       totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empcalcWage = calcDailyWage(totalEmpHrs);
console.log("UC6 – Total Days: " + totalWorkingDays +
            " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);
