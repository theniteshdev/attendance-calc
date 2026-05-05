// selecting dom
const total_present_day_display = document.querySelector("#total-present-day-display");
const average_daily_display = document.querySelector("#average-daily-display");
const percentage_of_attendace_display = document.querySelector("#percentage-of-attendace-display");

const form = document.querySelector("form");

form.addEventListener("submit", (events) => {
    events.preventDefault();

    let workingDay = document.querySelector("#total-working-day").value;
    let totalStudents = document.querySelector("#total-students").value;
    let totalAbsentDay = document.querySelector("#total-absent").value;

    console.log(workingDay);
    console.log(totalAbsentDay);
    console.log(totalStudents);

    let presentDay = (workingDay * totalStudents) - totalAbsentDay;
    let avgDailyAttendace = (presentDay / workingDay);
    let percentageOfAttendance = (presentDay / (workingDay * totalStudents)) * 100;

    total_present_day_display.innerHTML = truncateAndFormatTwoDecimals(presentDay);
    average_daily_display.innerHTML = truncateAndFormatTwoDecimals(avgDailyAttendace);
    percentage_of_attendace_display.innerHTML = truncateAndFormatTwoDecimals(percentageOfAttendance);
})

function truncateAndFormatTwoDecimals(num) {
    const numStr = num.toString();
    const [integerPart, decimalPart] = numStr.split('.');
    if (!decimalPart) {
        return parseFloat(`${integerPart}.00`);
    };
    const truncatedDecimal = decimalPart.substring(0, 2).padEnd(2, '0');
    return parseFloat(`${integerPart}.${truncatedDecimal}`);
};