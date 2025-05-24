document.getElementById('startBtn').addEventListener('click', function() {
    const loading = document.getElementById('loading');
    loading.style.display = 'flex';
    
    setTimeout(() => {
        window.location.href = 'game.html';
    }, 3000);
});