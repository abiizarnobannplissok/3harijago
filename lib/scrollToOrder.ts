'use client';

export function scrollToOrder(e: React.MouseEvent) {
  e.preventDefault();
  const element = document.getElementById('order');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
