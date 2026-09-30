const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('requestForm')?.addEventListener('submit', (event) => {
  event.preventDefault();

  const brand = document.getElementById('brand').value.trim();
  const model = document.getElementById('model').value.trim();
  const year = document.getElementById('year').value.trim();
  const engine = document.getElementById('engine').value.trim();
  const part = document.getElementById('part').value.trim();
  const number = document.getElementById('number').value.trim();

  const message =
`Hallo ZJ Ersatzteile,

ich möchte folgendes Ersatzteil anfragen:

Automarke: ${brand}
Modell: ${model}
Baujahr: ${year || '-'}
Motorisierung: ${engine || '-'}
Ersatzteil: ${part}
Teilenummer: ${number || '-'}

Bitte um Preis und Verfügbarkeit. Danke!`;

  window.open(`https://wa.me/436677995349?text=${encodeURIComponent(message)}`, '_blank');
});

document.getElementById('yearNow').textContent = new Date().getFullYear();
