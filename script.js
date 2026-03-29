document.addEventListener('DOMContentLoaded', () => {
    // استخدام Typed.js للقسم الرئيسي
    new Typed('#typing-text', {
        strings: ["Web Developer", "Graphic Design", "Directing Videos", "Editing Videos"],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true
    });

    // استخدام Typed.js لقسم "عني"
    new Typed('#about-typing-id', {
        strings: ["Web Development", "Graphic Designer", "Creative Director", "Video Editing"],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true
    });

    // تحديث الرابط النشط عند التمرير
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    };
});

// JavaScript for Hamburger Menu Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// إغلاق القائمة عند النقر على أي رابط (للموبايل)
document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };
});

// معالجة إرسال الفورم بدون مغادرة الصفحة
const contactForm = document.querySelector('form');
contactForm.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    });
    
    if (response.ok) {
        alert('شكراً لك! تم إرسال رسالتك بنجاح، سأتواصل معك قريباً.');
        contactForm.reset();
    } else {
        alert('عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى.');
    }
};