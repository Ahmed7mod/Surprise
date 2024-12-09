document.getElementById('explodeBtn').addEventListener('click', function() {
    setInterval(() => createHearts(), 10);  // كل 10 ملي ثانية يظهر قلب جديد
});

document.body.addEventListener('mousemove', function(event) {
    createHearts(event.clientX, event.clientY);
});

function createHearts(x = null, y = null) {
    const heartsContainer = document.getElementById('hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = `${x ? x - 20 : Math.random() * window.innerWidth}px`;
    heart.style.top = `${y ? y - 20 : Math.random() * window.innerHeight}px`;
    
    heartsContainer.appendChild(heart);
}