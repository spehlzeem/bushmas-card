// Minimal, no-dependency sprinkles for motion
document.documentElement.style.scrollBehavior = 'smooth';

const reveal = () => {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-show');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    document.querySelectorAll('.fade-seed').forEach(el => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(
        '.gallery-card, .profile-card, .timeline-item, .closing-card, .hero-copy, .hero-photo'
    ).forEach(el => el.classList.add('fade-seed'));

    reveal();
});
