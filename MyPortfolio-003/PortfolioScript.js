document.addEventListener('DOMContentLoaded', function() {
    // เลือกฟอร์มโดยใช้ ID ที่กำหนดใน Portfolio.html
    const contactForm = document.getElementById('contactForm');

    // ตรวจสอบว่าฟอร์มมีอยู่บนหน้าเว็บหรือไม่
    if (contactForm) {
        // เพิ่ม Event Listener สำหรับการ 'submit' ฟอร์ม
        contactForm.addEventListener('submit', function(event) {
            // ป้องกันการส่งฟอร์มตามค่าเริ่มต้นของ HTML ซึ่งจะทำให้หน้าเว็บรีเฟรช
            event.preventDefault();

            // ดึงข้อมูลที่ผู้ใช้กรอกจากช่อง input ต่างๆ
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;

            // แสดงข้อความแจ้งเตือน (alert) ให้ผู้ใช้ทราบ
            // ในโปรเจกต์จริง คุณจะส่งข้อมูลเหล่านี้ไปยังเซิร์ฟเวอร์
            alert(`ขอบคุณสำหรับข้อความของคุณ, ${name}!\n\nเราจะติดต่อกลับไปที่ ${email} โดยเร็วที่สุด\n\nหัวข้อ: ${subject}\nข้อความ: ${message}`);

            // ล้างข้อมูลในฟอร์มทั้งหมดหลังจากที่แสดงแจ้งเตือนเสร็จ
            contactForm.reset();
        });
    }

    // ส่วนของโค้ดนี้จะใช้เพื่อเพิ่ม Animation เมื่อส่วน "card" เลื่อนเข้ามาในหน้าจอ (Optional)
    // ค้นหา Element ทั้งหมดที่มี class ชื่อ 'card'
    const cards = document.querySelectorAll('.card');

    // สร้าง Intersection Observer เพื่อตรวจจับว่า element เข้ามาใน viewport หรือไม่
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // ถ้า element นั้นกำลังปรากฏอยู่ใน viewport
            if (entry.isIntersecting) {
                // เพิ่ม class 'fade-in' เพื่อเริ่ม animation (คุณต้องกำหนด style ของ .fade-in ใน CSS)
                entry.target.classList.add('fade-in');
            } else {
                // ถ้าต้องการให้ animation เล่นซ้ำเมื่อเลื่อนขึ้นลง
                // คุณสามารถ uncomment บรรทัดด้านล่างนี้ได้
                // entry.target.classList.remove('fade-in');
            }
        });
    }, {
        threshold: 0.1 // กำหนดว่าเมื่อใดจึงจะถือว่า 'intersecting' (10% ของ element ปรากฏใน viewport)
    });

    // วนลูปผ่าน card ทั้งหมดและสั่งให้ observer เริ่มสังเกตการณ์
    cards.forEach(card => {
        observer.observe(card);
    });

    // ตัวอย่างการเพิ่ม CSS animation สำหรับ .fade-in (เพิ่มใน Portfoliostyle.css)
    // @keyframes fadeInFromBottom {
    //     from {
    //         opacity: 0;
    //         transform: translateY(30px);
    //     }
    //     to {
    //         opacity: 1;
    //         transform: translateY(0);
    //     }
    // }
    //
    // .card {
    //     opacity: 0;
    //     transform: translateY(30px);
    //     transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    // }
    //
    // .card.fade-in {
    //     animation: fadeInFromBottom 0.8s forwards;
    // }

});