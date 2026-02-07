document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.servico-card');

  if (!('IntersectionObserver' in window)) {
    // fallback simples
    cards.forEach(card => card.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          // quando sair da tela, remove para animar de novo
          entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      threshold: 0.25,
      rootMargin: '0px 0px -10% 0px'
    }
  );

  cards.forEach(card => observer.observe(card));
});
