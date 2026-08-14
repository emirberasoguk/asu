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
    // --- YENİ EASTER EGGS ---

    // 4. Matematik 2 Vize Sınavı Kağıdı
    const mathTrigger = document.getElementById('math-exam-trigger');
    if (mathTrigger) {
        mathTrigger.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.className = 'telegram-modal active';
            overlay.style.zIndex = '1000';
            
            const paper = document.createElement('div');
            paper.className = 'math-exam';
            paper.innerHTML = `
                <span class="close-modal" style="position: absolute; top: 10px; right: 15px; cursor: pointer; font-size: 1.5rem; font-family: sans-serif; color: #888; z-index: 10;">&times;</span>
                <h4>T.C. Üniversite - Matematik 2 Vize Sınavı</h4>
                <div class="grade">40</div>
                <div class="questions">
                    <p><strong>Soru 1:</strong> lim(x→0) (sin x)/x = ? <br><em>Cevap: 1 (Lütfen hocam)</em></p>
                    <p><strong>Soru 2:</strong> ∫ e^x dx = ? <br><em>Cevap: e^x + C (C'yi unutmadım)</em></p>
                    <p><strong>Soru 3-5:</strong> [Buralar karalanmış, okunamıyor...]</p>
                </div>
                <div class="note">
                    <p><strong>Öğrenci Notu:</strong> Hocam n'olur geçirin, inanın 5 saattir buraya bakıyorum hiçbir şey anlamadım. Mezuniyetim size bağlı, canım hocam...</p>
                    <p style="color:#d32f2f; margin-top: 10px;"><strong>Hoca:</strong> Sınıftakiler daha kötü yaptığı için geçtin. Tebrikler.</p>
                </div>
            `;
            
            overlay.appendChild(paper);
            document.body.appendChild(overlay);
            
            paper.querySelector('.close-modal').addEventListener('click', () => overlay.remove());
            overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
        });
    }

    // 5. Müze Sesli Rehberi
    const audioGuideBtn = document.getElementById('audio-guide-btn');
    if (audioGuideBtn) {
        audioGuideBtn.addEventListener('click', () => {
            showVintageAlert("Sesli Rehber: 'Sol tarafınızda gördüğünüz bu yorgun figür, Topkapı Sarayı'nda tarihi eserleri incelerken yorgunluktan bitap düşmüş Asu'yu tasvir etmektedir. Lütfen esere flaş patlatmayınız.'");
        });
    }

    // 6. Çay Lekesi
    const teaTrigger = document.getElementById('tea-trigger');
    if (teaTrigger) {
        let teaTimer;
        teaTrigger.addEventListener('mouseenter', (e) => {
            teaTimer = setTimeout(() => {
                const stain = document.createElement('div');
                stain.className = 'tea-stain';
                stain.style.left = e.pageX + 'px';
                stain.style.top = e.pageY + 'px';
                document.body.appendChild(stain);
                
                const tooltip = document.createElement('div');
                tooltip.className = 'tea-tooltip';
                tooltip.innerText = "Eyvah, çay döküldü... Neyse ki deniz yoluyla gelmişti.";
                tooltip.style.left = e.pageX + 'px';
                tooltip.style.top = (e.pageY - 20) + 'px';
                document.body.appendChild(tooltip);
                
                setTimeout(() => { stain.remove(); tooltip.remove(); }, 3000);
            }, 500); // 0.5s hover
        });
        teaTrigger.addEventListener('mouseleave', () => {
            clearTimeout(teaTimer);
        });
    }

    // 7. Karadeniz Yağmuru
    const rainTrigger = document.getElementById('rain-trigger');
    if (rainTrigger) {
        rainTrigger.addEventListener('click', () => {
            for(let i=0; i<30; i++) {
                setTimeout(() => {
                    const drop = document.createElement('div');
                    drop.className = 'rain-drop';
                    drop.style.left = Math.random() * window.innerWidth + 'px';
                    drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
                    document.body.appendChild(drop);
                    setTimeout(() => drop.remove(), 1000);
                }, i * 100);
            }
        });
    }
});
