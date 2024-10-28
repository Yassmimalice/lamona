document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Reservation modal
    const modal = document.getElementById('reservationModal');
    const reservationBtns = document.querySelectorAll('#reservationBtn, #heroReservationBtn, #footerReservationBtn');
    const cancelBtn = document.getElementById('cancelReservation');

    reservationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    cancelBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Gallery
    const photos = [
        'https://via.placeholder.com/800x600?text=Prato+1',
        'https://via.placeholder.com/800x600?text=Prato+2',
        'https://via.placeholder.com/800x600?text=Prato+3',
        'https://via.placeholder.com/800x600?text=Ambiente+1',
        'https://via.placeholder.com/800x600?text=Ambiente+2',
    ];
    let currentPhotoIndex = 0;
    const galleryImage = document.getElementById('galleryImage');
    const prevPhotoBtn = document.getElementById('prevPhoto');
    const nextPhotoBtn = document.getElementById('nextPhoto');

    function updateGalleryImage() {
        galleryImage.src = photos[currentPhotoIndex];
    }

    prevPhotoBtn.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
        updateGalleryImage();
    });

    nextPhotoBtn.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        updateGalleryImage();
    });

    // Testimonials
    const testimonials = [
        { name: "Maria Santos", comment: "Uma experiência gastronômica incrível! Cada prato é uma verdadeira obra de arte culinária." },
        { name: "João Oliveira", comment: "O ambiente é sofisticado e acolhedor. A comida é simplesmente divina!" },
        { name: "Ana Rodrigues", comment: "Adorei a criatividade dos pratos. Uma maneira única de redescobrir os sabores brasileiros." },
    ];

    const testimonialsContainer = document.querySelector('.testimonials-content');
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.classList.add('testimonial');
        testimonialElement.innerHTML = `
            <p>"${testimonial.comment}"</p>
            <p><strong>${testimonial.name}</strong></p>
        `;
        testimonialsContainer.appendChild(testimonialElement);
    });

    // Form submission (you may want to add actual form submission logic here)
    const reservationForm = document.getElementById('reservationForm');
    reservationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Reserva enviada com sucesso!');
        modal.style.display = 'none';
    });
});