document.getElementById('explodeBtn').addEventListener('click', function(event) {
    // عند الضغط على الزر، القلوب ستظهر في المنتصف.
    createHearts(event.clientX, event.clientY);
});

document.body.addEventListener('mousemove', function(event) {
    // عند تحريك الفأرة، القلوب ستظهر في مكان الفأرة.
    createHearts(event.clientX, event.clientY);
});

function createHearts(x, y) {
    const heartsContainer = document.getElementById('hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // تحديد مكان ظهور القلوب بناءً على مكان الضغط أو تحريك الفأرة.
    heart.style.left = `${x - 20}px`;
    heart.style.top = `${y - 20}px`;
    
    heartsContainer.appendChild(heart);
}
