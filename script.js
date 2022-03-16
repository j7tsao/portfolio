// sticky menu Bar effect 
window.addEventListener('scroll', () => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)

})

// hamburger menu toggle menu effect
const toggleButton = document.querySelector('.toggle-button')
const sideMenu = document.querySelector('.sideNav')

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('open')
    sideMenu.classList.toggle('on')
})

// Items move in by scroll 
const items = document.querySelectorAll(".about-me, .card")

let options = {
    rootMargin: '100px',
    threshold: 0.5
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, options)

items.forEach(item => {
    observer.observe(item)
})

// Flipping work cards
const flips1 = document.querySelectorAll(".flip1")
const card1 = document.querySelector(".card1")

flips1.forEach((flip) => {
    flip.addEventListener('click', () => {
        card1.classList.toggle("turn")
    })
})
const flips2 = document.querySelectorAll(".flip2")
const card2 = document.querySelector(".card2")

flips2.forEach((flip) => {
    flip.addEventListener('click', () => {
        card2.classList.toggle("turn")
    })
})
const flips3 = document.querySelectorAll(".flip3")
const card3 = document.querySelector(".card3")

flips3.forEach((flip) => {
    flip.addEventListener('click', () => {
        card3.classList.toggle("turn")
    })
})
const flips4 = document.querySelectorAll(".flip4")
const card4 = document.querySelector(".card4")

flips4.forEach((flip) => {
    flip.addEventListener('click', () => {
        card4.classList.toggle("turn")
    })
})
const flips5 = document.querySelectorAll(".flip5")
const card5 = document.querySelector(".card5")

flips5.forEach((flip) => {
    flip.addEventListener('click', () => {
        card5.classList.toggle("turn")
    })
})
