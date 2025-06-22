const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const buttonsDiv = document.querySelector('.buttons');
const mainImage = document.getElementById('mainImage');

let noScale = 1;
let clickCount = 0;
const maxClicks = 3;
const minNoScale = 0.25; // เล็กสุดจนมองไม่เห็น

let yesScale = 1;
const maxYesScale = 1.7; // ขนาดใหญ่สุดของปุ่ม Yes

noButton.addEventListener('click', () => {
    clickCount++;
    // เปลี่ยนภาพตามจำนวนครั้งที่กด No
    if (clickCount === 1) {
        mainImage.src = 'why1.png';
    } else if (clickCount === 2) {
        mainImage.src = 'why2.png';
    } else if (clickCount === 3) {
        mainImage.src = 'why3.png';
    }

    if (clickCount <= maxClicks) {
        noScale -= 0.1;
        if (noScale < minNoScale) noScale = minNoScale;
        noButton.style.transform = `scale(${noScale})`;
    }
    if (clickCount === maxClicks) {
        setTimeout(() => {
            noButton.style.display = 'none';
            yesButton.style.margin = '0 auto';
            buttonsDiv.style.justifyContent = 'center';
        }, 300);
    }
});

yesButton.addEventListener('click', () => {
    window.location.href = 'yes.html'; // ไปยังหน้า yes.html
});

// ฟังก์ชันสร้างหัวใจลอยขึ้น
function createFloatingHeart() {
    const heart = document.createElement('img');
    heart.src = "pic/heart.png"; // เปลี่ยนเป็นชื่อไฟล์หัวใจของคุณ
    heart.className = 'floating-heart';
    // สุ่มขนาดและตำแหน่ง
    const size = Math.random() * 40 + 30; // 30-70px
    heart.style.width = `${size}px`;
    heart.style.left = `${Math.random() * 90}%`;
    // เริ่มที่ล่างสุด
    heart.style.bottom = '-80px';
    document.body.appendChild(heart);
    // สุ่มระยะเวลาลอย
    const duration = Math.random() * 2 + 3; // 3-5 วินาที
    // trigger aniation
    setTimeout(() => {
        heart.style.transform = `translateY(-110vh)`;
        heart.style.opacity = 1;
    }, 50);
    // ลบออกเมื่อพ้นจอ
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
// สร้างหัวใจใหม่เรื่อยๆ
setInterval(createFloatingHeart, 600);