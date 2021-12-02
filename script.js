// This consts to retrieve information from the HTML
const form = document.getElementById("form");
const countdown = document.getElementById("countdown")
const title = document.getElementById("title")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")
const result = document.getElementById("result")
const button = document.getElementById("button")
const now = new Date() // current date and time

function calendarDate() {
    const date = now.getDate({
        year: year.value,
        month: month.value
    })
}
// Adding days based on the month selected
const days = [];
for (let i = 1; i <= 31; i++) {
    days.push(`<option>${i}</option>`)
}
day.innerHTML = days.join('');
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
    diff()
}

function diff() {
    const now = new Date()
    //const date = now.getDate().fromISO(JSON.parse(localStorage.getItem("result")))

    const diff = now.getDate(now, ["year", "month", "day", "hour", "minute", "seconds"])
}

button.addEventListener("click", function (e) {
    e.preventDefault()
    console.log("okay")

    localStorage.setItem('result', JSON.stringify({
        year: year.value,
        month: month.value,
        day: day.value
    }))
    diff()
    const date = getDate({
        year: year.value,
        month: month.value,
        day: day.value
    })
    const now = new Date()

    if (date > now) {
        const diff = getDate(now, ["years", "months", "days", "hours", "minutes", "seconds"])
        result.style.display = "inline-block"
        console.log("result")
        result.textContent = `${title.value}, ${diff.years} years, ${diff.months} months, ${diff.days} days, ${diff.hours} hours, ${diff.minutes} minutes, and ${diff.seconds} seconds`
    }
})