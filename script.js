// This consts to retrieve information from the HTML
const form = document.getElementById("form");
const countdown = document.getElementById("countdown")
const title = document.getElementById("title")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")
const result = document.getElementById("result")
const button = document.getElementById("button")

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

button.addEventListener('click', function(e) {
    e.preventDefault()
    result.style.display = 'block'
    result.textContent = `${title.value}.`
})
