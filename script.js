// 1. タイピング
const typingTarget = document.getElementById("typing");
const text = "Hello, I'm dauch.";
let i = 0;

function type() {
    if(i < text.length) {
        typingTarget.textContent += text.charAt(i);
        i++;
        setTimeout(type, 150);
    }
}
type();

// 2. スクロール監視
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-el').forEach(el => {
    observer.observe(el);
});