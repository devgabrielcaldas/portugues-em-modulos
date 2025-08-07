    // Scroll suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Função para scroll do carrossel de vídeos
    function scrollCarousel(direction) {
    const container = document.getElementById('carouselVideos');
    const scrollAmount = container.querySelector('.video-card').offsetWidth + 20; // 20 = gap
    container.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    }
