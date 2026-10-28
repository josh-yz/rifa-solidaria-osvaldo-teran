'use strict';
const PRICE = 2000;
const PHONE = '56927678167';
const quantity = document.getElementById('quantity');
const minus = document.getElementById('quantity-minus');
const plus = document.getElementById('quantity-plus');
const amount = document.getElementById('total-amount');
const error = document.getElementById('form-error');
const formatCLP = value => '$' + new Intl.NumberFormat('es-CL').format(value);
function validQuantity(value) { const number = Number(value); return value.trim() !== '' && Number.isInteger(number) && number >= 1 && number <= 1000; }
function updateQuantity() {
 const valid = validQuantity(quantity.value);
 const number = Number(quantity.value);
 amount.textContent = valid ? formatCLP(number * PRICE) : '—';
 minus.disabled = !valid || number <= 1;
 plus.disabled = !valid || number >= 1000;
 document.getElementById('quantity-plural').textContent = number === 1 ? '' : 's';
 quantity.setCustomValidity(valid ? '' : 'Ingresa una cantidad entera entre 1 y 1.000.');
 if (valid) error.textContent = '';
}
quantity.addEventListener('input', updateQuantity);
quantity.addEventListener('change', updateQuantity);
minus.addEventListener('click', () => { if (validQuantity(quantity.value) && Number(quantity.value) > 1) { quantity.value = Number(quantity.value) - 1; updateQuantity(); } });
plus.addEventListener('click', () => { if (validQuantity(quantity.value) && Number(quantity.value) < 1000) { quantity.value = Number(quantity.value) + 1; updateQuantity(); } });
document.getElementById('participation-form').addEventListener('submit', event => {
 event.preventDefault();
 updateQuantity();
 if (!event.currentTarget.reportValidity()) return;
 const number = Number(quantity.value);
 const name = document.getElementById('participant-name').value.trim();
 const preferred = document.getElementById('preferred-numbers').value.trim();
 const message = [
 `¡Hola! ${name ? 'Soy ' + name + '. ' : ''}Quiero apoyar la rifa a beneficio de la operación de Osvaldo Terán.`,
 `Me gustaría participar con ${number} ${number === 1 ? 'número' : 'números'} (${formatCLP(number * PRICE)} en total).`,
 preferred ? `Si están disponibles, prefiero estos números: ${preferred}.` : '',
 '¿Me confirman la disponibilidad y cómo puedo realizar el pago? ¡Muchas gracias!'
 ].filter(Boolean).join('\n\n');
 const link = document.createElement('a');
 link.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
 link.target = '_blank'; link.rel = 'noopener noreferrer';
 document.body.appendChild(link); link.click(); link.remove();
});
async function shareRaffle() {
 const status = document.getElementById('share-status');
 const url = window.location.href.split('#')[0].split('?')[0];
 const text = '💛 Apoyemos la operación de Osvaldo Terán. Rifa solidaria con 7 premios y números a $2.000. ¡Cada aporte cuenta!';
 try {
  if (navigator.share && /^https?:$/.test(location.protocol)) {
   await navigator.share({title: 'Rifa solidaria por Osvaldo Terán',text,url});
   status.textContent = '¡Gracias por compartir esta causa!';
  } else if (navigator.clipboard && window.isSecureContext && /^https?:$/.test(location.protocol)) {
   await navigator.clipboard.writeText(`${text}\n${url}`);
   status.textContent = 'Enlace copiado. ¡Gracias por compartir!';
  } else {
   const shareUrl = `https://wa.me/?text=${encodeURIComponent(text + (/^https?:$/.test(location.protocol) ? '\n' + url : '\nContacto: +56 9 2767 8167'))}`;
   window.open(shareUrl, '_blank', 'noopener,noreferrer');
   status.textContent = 'Comparte el mensaje desde WhatsApp.';
  }
 } catch (e) {
  if (e.name === 'AbortError') return;
  status.textContent = 'Puedes copiar el enlace de esta página y compartirlo.';
 }
}
document.getElementById('share-button').addEventListener('click', shareRaffle);
document.getElementById('closing-share').addEventListener('click', shareRaffle);
updateQuantity();
