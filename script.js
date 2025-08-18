    // Scroll suave para âncoras com offset da navbar fixa
    (function () {
    const navbar = document.querySelector('.navbar');

    function smoothScrollToHash(hash) {
    const target = document.querySelector(hash);
    if (!target) return;
    const navH = navbar ? navbar.offsetHeight : 0; // calcula na hora
    const top = target.getBoundingClientRect().top + window.pageYOffset - navH;
    window.scrollTo({ top, behavior: 'smooth' });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        const hash = this.getAttribute('href');
        if (!hash || hash === '#') return;
        e.preventDefault();
        smoothScrollToHash(hash);
        // Se clicou a partir do menu mobile, feche o drawer
        closeDrawer();
        });
    });

    // ----- Drawer (menu mobile) -----
    const hamburger = document.querySelector('.hamburger');
    const drawer = document.getElementById('mobileMenu');
    const closeBtn = document.querySelector('.drawer-close');
    const backdrop = document.getElementById('backdrop');

    function openDrawer() {
        if (!drawer) return;
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
        if (backdrop) backdrop.hidden = false;
        document.body.classList.add('no-scroll');
    }

    function closeDrawer() {
        if (!drawer) return;
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
        if (backdrop) backdrop.hidden = true;
        document.body.classList.remove('no-scroll');
    }

    if (hamburger) {
        hamburger.addEventListener('click', () => {
        const isOpen = drawer && drawer.classList.contains('open');
        isOpen ? closeDrawer() : openDrawer();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeDrawer);
    }

    if (backdrop) {
        backdrop.addEventListener('click', closeDrawer);
    }

    // Fecha com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });

    // Ajuste do carrossel
    window.scrollCarousel = function(direction) {
        const container = document.getElementById('carouselVideos');
        if (!container) return;
        const card = container.querySelector('.video-card');
        const gap = 20; // mesmo gap definido no CSS do desktop (no mobile você usa 10)
        const scrollAmount = (card ? card.offsetWidth : 320) + gap;
        container.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    };
    })();
