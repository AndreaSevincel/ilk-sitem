document.getElementById("buongiorno").innerText = 0

let countEl = document.getElementById("buongiorno")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}
