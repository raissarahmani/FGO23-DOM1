// Print judul dokumen
const title = document.querySelector("title")
console.log(title.textContent)

// Print ukuran browser
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
console.log(`Size: ${screenWidth} x ${screenHeight}`)

// Print ID
const word = document.getElementById("service")
console.log(`Print ID: ${word.textContent}`)

// Print Class
const kalimat = document.getElementsByClassName("text")
console.log(`Print Class: ${kalimat[0].textContent}`)

// Print beberapa elemen dengan kelas
const text = document.querySelectorAll(".text")
console.log(`Print Element: ${text[1].textContent}`)

// Elemen baru >> innerHTML
const selectText = document.querySelector(".to")
const newOption = document.createElement("select")

newOption.innerHTML = `
    <option>--Pilih pulau terdekat--</option>
    <option>Sumatera</option>
    <option>Jawa dan Bali</option>
    <option>Kalimantan</option>
    <option>Sulawesi</option>
    <option>Maluku</option>
    <option>Papua</option>`

selectText.append(newOption)

// Ubah menggunakan text content
const newText = newOption
const listPulau = newText.querySelectorAll("option")
listPulau[2].textContent = `Jawa, Bali, Nusa Tenggara`

// Ubah style
const bgText = newText.querySelectorAll("option")
bgText.forEach((opt) => opt.style.backgroundColor = `beige`)

// for loop + create element
const selectService = document.querySelector(".text")
const newService = document.createElement("ul")

for (let i=0; i<5; i++) {
    const listService = document.createElement("li")
    listService.textContent = `Layanan ${i+1}`
    newService.appendChild(listService)
}
selectService.append(newService)

// div kosong + elemen HTML
const selectFAQ = document.querySelector(".faq")
const newFAQ = document.createElement("div")
selectFAQ.append(newFAQ)

const addElement = newFAQ
const newButton = document.createElement("button")
newButton.textContent = `Call Us 0800-000-000`
newButton.style.width = `50%`
addElement.appendChild(newButton)

// insertAdjacentElement
newFAQ.innerHTML = ``
const anotherButton = document.createElement("button")
anotherButton.textContent = `Click Here`
newFAQ.insertAdjacentElement("beforeend", anotherButton)
