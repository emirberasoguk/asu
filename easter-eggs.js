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
            showVintageAlert("Uyarı: 101 Okey oynarken perleri çalanlara ve dost kazığı atanlara tarih asla affetmez!");
            okeyTile.style.transform = "rotate(360deg) scale(0)";
            setTimeout(() => { okeyTile.style.display = 'none'; }, 500);
        });
    }

    function showVintageAlert(message) {
        const overlay = document.createElement('div');
        overlay.className = 'telegram-modal active';
        overlay.style.zIndex = '1000';
        
        const paper = document.createElement('div');
        paper.className = 'vintage-paper';
        paper.innerHTML = `
            <span class="close-modal" style="position: absolute; top: 10px; right: 15px; cursor: pointer; font-size: 1.5rem; font-family: sans-serif; color: #888;">&times;</span>
            <h3 style="text-align: center; border-bottom: 2px dashed #5a5a5a; padding-bottom: 1rem; margin-bottom: 2rem; text-transform: uppercase; letter-spacing: 2px;">Mühim Bir İkaz</h3>
            <div class="dialogue"><p style="font-size: 1.1rem; line-height: 1.5; text-align: center;">${message}</p></div>
        `;
        
        overlay.appendChild(paper);
        document.body.appendChild(overlay);
        
        paper.querySelector('.close-modal').addEventListener('click', () => {
            overlay.remove();
        });
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.remove();
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
