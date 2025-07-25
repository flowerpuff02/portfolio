const toggleDark = document.getElementById('toggleDark');
toggleDark.addEventListener('click', () => {
document.documentElement.classList.toggle('dark');
});

// barra di caricamento
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('scrollBar').style.width = `${scrollPercent}%`;
});

// nome ballerino
const typingText = "Georgiana";
let i = 0;
function typeWriter() {
  if (i < typingText.length) {
    document.getElementById("typing").innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}
window.addEventListener("load", typeWriter);

// sezioni che compaiono mano a mano
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll("section").forEach(section => {
  section.classList.add("opacity-0");
  observer.observe(section);
});

// sezione diritti footer
document.querySelector('footer').innerHTML = `© ${new Date().getFullYear()} Georgiana Lazar. Tutti i diritti riservati.`;
