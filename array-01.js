const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const weekly_weather = [70, 72, 68, 65, 74, 73, 71]

for (let i = 0; i < weekdays.length; i++) {
    let weekday = weekdays[i];
    let temp = weekly_weather[i];
    console.log("The temperature on", weekday, "was:", temp)
}