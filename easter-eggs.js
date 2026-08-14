document.addEventListener('DOMContentLoaded', () => {
    // 1. Telgraf (Telegram) Easter Egg
    const telegramTrigger = document.querySelector('.telegram-trigger');
    const telegramModal = document.getElementById('telegram-modal');
    const closeBtn = document.querySelector('.close-modal');

    if (telegramTrigger && telegramModal) {
        telegramTrigger.addEventListener('click', (e) => {
            telegramModal.classList.add('active');
            
            // Konfeti veya toz efekti gibi bir şey eklenebilir
            createDustEffect(e.clientX, e.clientY);
        });

        closeBtn.addEventListener('click', () => {
            telegramModal.classList.remove('active');
        });

        telegramModal.addEventListener('click', (e) => {
            if (e.target === telegramModal) {
                telegramModal.classList.remove('active');
            }
        });
    }

    // 2. İskambil Kartı (Blöf / Dost Kazığı) Easter Egg
    const playingCard = document.querySelector('.playing-card');
    if (playingCard) {
        playingCard.addEventListener('click', () => {
            playingCard.classList.toggle('flipped');
        });
    }

    // 3. Okey Taşı Easter Egg
    const okeyTile = document.querySelector('.okey-tile');
    if (okeyTile) {
        okeyTile.addEventListener('click', () => {
            alert("Uyarı: 101 Okey oynarken perleri çalanlara ve dost kazığı atanlara tarih asla affetmez! 🀄");
            okeyTile.style.transform = "rotate(360deg) scale(0)";
            setTimeout(() => { okeyTile.style.display = 'none'; }, 500);
        });
    }

    // Basit bir "Toz" efekti (Antik bir belge açılıyormuş hissi)
    function createDustEffect(x, y) {
        for (let i = 0; i < 15; i++) {
            const dust = document.createElement('div');
            dust.classList.add('dust-particle');
            document.body.appendChild(dust);
            
            const size = Math.random() * 5 + 2;
            const destX = x + (Math.random() - 0.5) * 100;
            const destY = y + (Math.random() - 0.5) * 100;
            
            dust.style.width = `${size}px`;
            dust.style.height = `${size}px`;
            dust.style.left = `${x}px`;
            dust.style.top = `${y}px`;
            
            setTimeout(() => {
                dust.style.transform = `translate(${destX - x}px, ${destY - y}px)`;
                dust.style.opacity = '0';
            }, 10);
            
            setTimeout(() => {
                dust.remove();
            }, 1000);
        }
    }
});
