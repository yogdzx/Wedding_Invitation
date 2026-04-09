const params = new URLSearchParams(window.location.search);
const nama = params.get('to');
if (nama) {
    const el = document.getElementById('guest-name');
    if (el) el.innerText = nama.replace(/\+/g, ' ');
}

function bukaUndangan() {
    const cover = document.getElementById('cover');
    const main = document.getElementById('main-content');
    const music = document.getElementById('weddingMusic');

    cover.style.transform = 'translateY(-100%)';
    cover.style.transition = 'transform 1.2s ease-in-out';
    main.style.opacity = '1';

    if (music) {
        music.loop = true; // Tambahan: Membuat musik mengulang otomatis
        music.play().catch(() => {
            console.log("Autoplay dicegah oleh browser, musik akan jalan setelah interaksi user.");
        });
    }

    setTimeout(() => {
        cover.style.display = 'none';
        window.scrollTo(0, 0);
    }, 1200);
}

function toggleGift() {
    const giftContainer = document.getElementById('gift-container');
    if (giftContainer.style.display === "none" || giftContainer.style.display === "") {
        giftContainer.style.display = "block";
        // Animasi halus sederhana
        giftContainer.style.opacity = 0;
        setTimeout(() => {
            giftContainer.style.opacity = 1;
            giftContainer.style.transition = "opacity 0.5s ease";
        }, 10);
    } else {
        giftContainer.style.display = "none";
    }
}

function copyText(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Nomor rekening berhasil disalin: " + text);
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });
}

function toggleMusic() {
    const music = document.getElementById('weddingMusic');
    const icon = document.getElementById('music-icon');
    
    if (music.paused) {
        music.play();
        icon.innerText = '🎵';
    } else {
        music.pause();
        icon.innerText = '🔇';
    }
}