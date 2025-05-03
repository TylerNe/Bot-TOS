// Hiệu ứng cuộn mượt cho các liên kết điều hướng
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hiệu ứng fade-in cho các section khi cuộn tới
function revealOnScroll() {
  const reveals = document.querySelectorAll('.features-section, .commands-section, .premium-section, .support-section');
  const windowHeight = window.innerHeight;
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      section.style.transition = 'opacity 0.8s, transform 0.8s';
    } else {
      section.style.opacity = 0;
      section.style.transform = 'translateY(40px)';
      section.style.transition = 'opacity 0.8s, transform 0.8s';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Hiệu ứng hover cho các feature-item
document.querySelectorAll('.feature-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
    item.style.boxShadow = '0 8px 32px 0 rgba(99,102,241,0.15)';
    item.style.transition = 'transform 0.2s, box-shadow 0.2s';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
    item.style.boxShadow = '';
    item.style.transition = 'transform 0.2s, box-shadow 0.2s';
  });
});

// Hiệu ứng nhấp nháy cho nút CTA
document.querySelectorAll('.cta-btn, .invite-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 4px 24px 0 rgba(99,102,241,0.25)';
    btn.style.transform = 'scale(1.04)';
    btn.style.transition = 'box-shadow 0.2s, transform 0.2s';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = '';
    btn.style.transform = 'scale(1)';
    btn.style.transition = 'box-shadow 0.2s, transform 0.2s';
  });
});
