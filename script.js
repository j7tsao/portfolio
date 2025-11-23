// sticky menu Bar effect 
window.addEventListener('scroll', () => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)

})

// Highlight Nav Menu on scroll 
const sections = document.querySelectorAll("#about, #works, #certificate, #resume, #contact");
const navLi = document.querySelectorAll("header .topNav ul li")

// Note: "window.pageYOffset" is exactly the same as "scrollY"

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    })
    navLi.forEach(li => {
        li.classList.remove('highlight');
        if (li.classList.contains(current)) {
            li.classList.add('highlight')
        }
    })
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

// Typewriter effect
function typeWriter(el, text, speed=100) {
  el.textContent = "";
  let i = 0;
  function writer() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(writer, speed);
    }
  }
  writer();
}

// observer for typewriter effect
function setupTypewriterOnView(id) {
  const el = document.getElementById(id);
  const text = el.textContent;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeWriter(el, text);
        observer.disconnect(); // Stop observing after animation starts
      }
    });
  }, { threshold: 0.7 });
  observer.observe(el);
}

// Initialize typewriter effects for each target element id
setupTypewriterOnView('typewriter1');
setupTypewriterOnView('typewriter2');
setupTypewriterOnView('typewriter3');
