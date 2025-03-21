const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

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
