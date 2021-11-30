// This consts to retrieve information from the HTML
const form = document.getElementById("form");
const countdown = document.getElementById("countdown")
const title = document.getElementById("title")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")
const result = document.getElementById("result")
const button = document.getElementById("button")

var DateTime = luxon.DateTime;
const now = DateTime.local()

function calendarDate() {
    const date = DateTime.fromObject({
        year: year.value,
        month: month.value
    })
    // Adding days based on the month selected
    const days = [];
    for (let i = 1; i <= 31; i++) {
        days.push(`<option>${i}</option>`)
    }
    day.innerHTML = days.join('');

}
// Adding years to the input form
const years = [];
for (let i = 2021; i <= 3020; i++) {
    years.push(`<option>${i}</option>`)
}
year.innerHTML = years.join('');
year.addEventListener('select', calendarDate)
month.addEventListener('select', calendarDate)

//LocalStorage
let localstorage = localStorage.getItem("result")
if (localStorage) {
    equation()
}

function equation() {
    const now = DateTime.local()
    const date = DateTime.fromISO(JSON.parse(localStorage.getItem("result")))

    const diff = date.equation(now, ["year", "month", "day", "hour", "minute", "seconds"]).toObject()
}

button.addEventListener('click', function (e) {
    e.preventDefault()
    console.log("okay")

    localStorage.setItem('result', JSON.stringify({
        year: year.value,
        month: month.value,
        day: day.value
    }))
    equation()
    const date = DateTime.fromObject({
        year: year.value,
        month: month.value,
        day: day.value
    })
    if (date > now) {
        const diff = date.equation(now, ["years", "months", "days", "hours", "minutes", "seconds"]).toObject()
        result.style.display = "inline-block"
        result.textContent = `${title.value}, ${diff.years} years, ${diff.months} months, ${diff.days} days, ${diff.hous} hours, ${diff.minutes} minutes, and ${diff.seconds} seconds`
    }
})