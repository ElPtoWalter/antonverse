const STARTING_TOKENS = 5;
const STORAGE_KEYS = {
  name: 'antonverse_name',
  tokens: 'antonverse_tokens',
  purchases: 'antonverse_purchases',
  entered: 'antonverse_entered'
};

const phrases = [
  '“Compatriotas, hoy se acaba una era.”',
  '“Que no quede dignidad, pero sí documentación gráfica.”',
  '“Antón no es una persona: es una franquicia.”',
  '“Última noche de libertad. Última oportunidad de castigar.”',
  '“Si el multiverso existe, en alguno Antón ya está arrepentido.”',
  '“Compra tu condena como un ciudadano responsable.”',
  '“Hay despedidas... y luego está este atentado visual.”',
  '“La historia no la escriben los valientes: la compran con tokens.”'
];

const galleryImages = [
  { src: 'assets/images/anton_police_blindfold.jpg', title: 'Antón: arrestado por existir demasiado' },
  { src: 'assets/images/anton_police_belly.jpg', title: 'Antón: barriga al viento edition' },
  { src: 'assets/images/anton_turban_portrait.jpg', title: 'Antón: imán del barrio premium' },
  { src: 'assets/images/anton_president.jpg', title: 'Antón: presidente del caos' },
  { src: 'assets/images/anton_avatar.jpg', title: 'Antón: Avatar del extrarradio' },
  { src: 'assets/images/anton_avatar_donkey.jpg', title: 'Antón: jinete de Pandora' },
  { src: 'assets/images/anton_sabina_boxer.jpg', title: 'Antón: Joaquín Sabina a puñetazo limpio' },
  { src: 'assets/images/anton_podium.jpg', title: 'Antón: candidato a todo, solución a nada' },
  { src: 'assets/images/anton_popolleria.jpg', title: 'Antón: fundador de Popollería' },
  { src: 'assets/images/anton_israel.jpg', title: 'Antón: geopolítica en persona' },
  { src: 'assets/images/anton_kimono.jpg', title: 'Antón: romance internacional' },
  { src: 'assets/images/anton_wolf.jpg', title: 'Antón: furry oscuro del bosque' },
  { src: 'assets/images/anton_bnw_hat.jpg', title: 'Antón: artista de camerino' },
  { src: 'assets/images/anton_otono.jpg', title: 'Antón: otoño 2024, el origen del mal' },
  { src: 'assets/images/anton_sad_vagabundo.jpg', title: 'Antón: vagabundo emocional' },
  { src: 'assets/images/anton_monument.jpg', title: 'Antón: procesión militar deluxe' },
  { src: 'assets/images/anton_group_niqab.jpg', title: 'Antón: álbum familiar alternativo' },
  { src: 'assets/images/anton_niqab_shirtless.jpg', title: 'Antón: portada que jamás debió existir' },
  { src: 'assets/images/anton_water_bottle.jpg', title: 'Antón: cata de agua táctica' },
  { src: 'assets/images/anton_dark_bar.jpg', title: 'Antón: mirada de estar viendo el abismo' },
  { src: 'assets/images/anton_mall_pose.jpg', title: 'Antón: paseo comercial con flow' },
  { src: 'assets/images/anton_comic_buuaaaah.jpg', title: 'Antón: colapso oficial del sistema' }
];

const challenges = [
  {
    id: 'original-2',
    text: 'Que haga 10 sentadillas',
    cost: 1,
    level: 'Suave',
    source: 'original'
  },
  {
    id: 'original-4',
    text: 'Que pida un aplauso en mitad del bar',
    cost: 1,
    level: 'Suave',
    source: 'original'
  },
  {
    id: 'extra-brindis',
    text: 'Que haga un brindis gritando “¡Vivan los novios y viva Antón!”',
    cost: 1,
    level: 'Suave',
    source: 'extra'
  },
  {
    id: 'extra-desfile',
    text: 'Que desfile como si estuviera en la final de Miss Universo',
    cost: 1,
    level: 'Suave',
    source: 'extra'
  },
  {
    id: 'original-1',
    text: 'Que de un abrazo al siguiente desconocido',
    cost: 2,
    level: 'Medio',
    source: 'original'
  },
  {
    id: 'original-6',
    text: 'Bebe de la botella con misterio',
    cost: 2,
    level: 'Medio',
    source: 'original'
  },
  {
    id: 'original-9',
    text: 'Baila y canta la cacion de Bitches Bitches',
    cost: 2,
    level: 'Medio',
    source: 'original'
  },
  {
    id: 'extra-discurso',
    text: 'Que improvise un discurso de dimisión como hombre libre',
    cost: 2,
    level: 'Medio',
    source: 'extra'
  },
  {
    id: 'extra-foto-campana',
    text: 'Que se haga una foto de campaña con 3 amigos como si fuese candidato',
    cost: 2,
    level: 'Medio',
    source: 'extra'
  },
  {
    id: 'extra-audio',
    text: 'Que grabe un audio diciendo “Estoy bien, pero me están humillando”',
    cost: 2,
    level: 'Medio',
    source: 'extra'
  },
  {
    id: 'original-3',
    text: 'Que haga una declaración de amor a su futura mujer (desconocida que se encuentre)',
    cost: 3,
    level: 'Potente',
    source: 'original'
  },
  {
    id: 'original-8',
    text: 'Collejote por parte del comprador o +1 al bote de collejas',
    cost: 3,
    level: 'Potente',
    source: 'original'
  },
  {
    id: 'original-7',
    text: 'Rueda como aprendiste en la mili en Ceuta y entona un alehop',
    cost: 3,
    level: 'Potente',
    source: 'original'
  },
  {
    id: 'extra-vals',
    text: 'Que baile 30 segundos con uno de sus amigos como si fuese el vals nupcial',
    cost: 3,
    level: 'Potente',
    source: 'extra'
  },
  {
    id: 'extra-rueda-prensa',
    text: 'Que dos amigos le hagan una rueda de prensa y él responda totalmente serio',
    cost: 3,
    level: 'Potente',
    source: 'extra'
  },
  {
    id: 'original-5',
    text: '2 huelidas al Popper',
    cost: 4,
    level: 'Legendario',
    source: 'original'
  },
  {
    id: 'original-10',
    text: 'Tumbate en la toalla de algún desconocido',
    cost: 4,
    level: 'Legendario',
    source: 'original'
  },
  {
    id: 'extra-trono',
    text: 'Que se suba a una silla y dé un discurso oficial despidiéndose de la soltería',
    cost: 4,
    level: 'Legendario',
    source: 'extra'
  },
  {
    id: 'extra-personaje',
    text: 'Que el comprador elija una versión de Antón y se meta en el personaje durante 2 minutos',
    cost: 4,
    level: 'Legendario',
    source: 'extra'
  }
];

let state = {
  name: 'Invitado misterioso',
  tokens: STARTING_TOKENS,
  purchases: []
};

const appShell = document.getElementById('app-shell');
const entryScreen = document.getElementById('entry-screen');
const enterButton = document.getElementById('enter-button');
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const musicMute = document.getElementById('music-mute');
const volumeSlider = document.getElementById('volume-slider');
const tokenCount = document.getElementById('token-count');
const meterFill = document.getElementById('meter-fill');
const tokenMessage = document.getElementById('token-message');
const playerName = document.getElementById('player-name');
const playerSubcopy = document.getElementById('player-subcopy');
const renameButton = document.getElementById('rename-button');
const phraseButton = document.getElementById('phrase-button');
const randomPhrase = document.getElementById('random-phrase');
const galleryGrid = document.getElementById('gallery-grid');
const challengeGrid = document.getElementById('challenge-grid');
const purchasesList = document.getElementById('purchases-list');
const purchasesEmpty = document.getElementById('purchases-empty');
const resetButton = document.getElementById('reset-button');
const copySummaryButton = document.getElementById('copy-summary-button');
const toast = document.getElementById('toast');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');
const filterButtons = Array.from(document.querySelectorAll('.filter-button'));

let activeFilter = 'all';
let toastTimer;

function readStorage() {
  const savedName = localStorage.getItem(STORAGE_KEYS.name);
  const savedTokens = Number(localStorage.getItem(STORAGE_KEYS.tokens));
  const savedPurchases = JSON.parse(localStorage.getItem(STORAGE_KEYS.purchases) || '[]');

  if (savedName && savedName.trim()) {
    state.name = savedName.trim();
  }

  if (!Number.isNaN(savedTokens) && savedTokens >= 0 && savedTokens <= STARTING_TOKENS) {
    state.tokens = savedTokens;
  }

  if (Array.isArray(savedPurchases)) {
    state.purchases = savedPurchases;
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEYS.name, state.name);
  localStorage.setItem(STORAGE_KEYS.tokens, String(state.tokens));
  localStorage.setItem(STORAGE_KEYS.purchases, JSON.stringify(state.purchases));
}

function getPurchasedIds() {
  return new Set(state.purchases.map(item => item.id));
}

function updateDashboard() {
  playerName.textContent = state.name;
  playerSubcopy.textContent = state.name === 'Invitado misterioso'
    ? 'Todavía no te has bautizado. Hazlo para que conste en acta.'
    : `Bienvenido, ${state.name}. El tribunal de la vergüenza confía en ti.`;

  tokenCount.textContent = state.tokens;
  meterFill.style.width = `${(state.tokens / STARTING_TOKENS) * 100}%`;

  if (state.tokens === STARTING_TOKENS) {
    tokenMessage.textContent = 'Tienes margen para sembrar el caos.';
  } else if (state.tokens >= 3) {
    tokenMessage.textContent = 'Todavía puedes hacer bastante daño.';
  } else if (state.tokens >= 1) {
    tokenMessage.textContent = 'Te queda poco crédito de maldad.';
  } else {
    tokenMessage.textContent = 'Sin tokens. Tu crueldad ha sido completamente invertida.';
  }
}

function renderGallery() {
  galleryGrid.innerHTML = galleryImages.map(image => `
    <article class="gallery-card" data-src="${image.src}" data-title="${escapeHtml(image.title)}">
      <img src="${image.src}" alt="${escapeHtml(image.title)}" loading="lazy" />
      <p>${escapeHtml(image.title)}</p>
    </article>
  `).join('');

  galleryGrid.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => openLightbox(card.dataset.src, card.dataset.title));
  });
}

function renderChallenges() {
  const purchasedIds = getPurchasedIds();
  const visibleChallenges = activeFilter === 'all'
    ? challenges
    : challenges.filter(challenge => challenge.source === activeFilter);

  challengeGrid.innerHTML = visibleChallenges.map(challenge => {
    const isBought = purchasedIds.has(challenge.id);
    const cantAfford = state.tokens < challenge.cost;
    const disabled = isBought || cantAfford;
    const buttonLabel = isBought ? 'Comprado por ti' : cantAfford ? 'Sin tokens suficientes' : `Comprar por ${challenge.cost} token${challenge.cost > 1 ? 's' : ''}`;

    return `
      <article class="challenge-card ${isBought ? 'bought' : ''}">
        <div class="challenge-badges">
          <span class="badge cost">💰 ${challenge.cost} token${challenge.cost > 1 ? 's' : ''}</span>
          <span class="badge ${challenge.source}">${challenge.source === 'original' ? 'TU RETO' : 'EXTRA'}</span>
          <span class="badge level">${challenge.level}</span>
        </div>
        <p class="challenge-text">${escapeHtml(challenge.text)}</p>
        <div class="challenge-meta">
          <p class="challenge-note">${challenge.source === 'original' ? 'Texto original respetado tal cual.' : 'Añadido extra para enriquecer el desastre.'}</p>
          <button class="buy-button" data-id="${challenge.id}" ${disabled ? 'disabled' : ''}>${buttonLabel}</button>
        </div>
      </article>
    `;
  }).join('');

  challengeGrid.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => buyChallenge(button.dataset.id));
  });
}

function renderPurchases() {
  if (!state.purchases.length) {
    purchasesEmpty.classList.remove('hidden');
    purchasesList.innerHTML = '';
    return;
  }

  purchasesEmpty.classList.add('hidden');
  purchasesList.innerHTML = state.purchases.map(item => `
    <article class="purchase-item">
      <div>
        <p><strong>${escapeHtml(item.text)}</strong></p>
        <small>Comprado por ${escapeHtml(state.name)} · ${escapeHtml(item.time)}</small>
      </div>
      <span class="badge cost">-${item.cost} token${item.cost > 1 ? 's' : ''}</span>
    </article>
  `).join('');
}

function buyChallenge(id) {
  const challenge = challenges.find(item => item.id === id);
  const purchasedIds = getPurchasedIds();
  if (!challenge) return;
  if (purchasedIds.has(id)) {
    showToast('Ese reto ya lo has comprado tú. No abuses tanto.');
    return;
  }
  if (state.tokens < challenge.cost) {
    showToast('No te llegan los tokens para esa barbaridad.');
    return;
  }

  state.tokens -= challenge.cost;
  state.purchases.push({
    id: challenge.id,
    text: challenge.text,
    cost: challenge.cost,
    time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
  });

  persistState();
  updateDashboard();
  renderChallenges();
  renderPurchases();
  showToast(`Has comprado: ${challenge.text}`);
}

function setRandomPhrase() {
  const random = phrases[Math.floor(Math.random() * phrases.length)];
  randomPhrase.textContent = random;
}

function renamePlayer() {
  const current = state.name === 'Invitado misterioso' ? '' : state.name;
  const input = window.prompt('¿Cómo quieres salir en acta?', current);
  if (input === null) return;

  const cleaned = input.trim();
  state.name = cleaned || 'Invitado misterioso';
  persistState();
  updateDashboard();
  renderPurchases();
  showToast(`Nombre actualizado: ${state.name}`);
}

function resetSession() {
  const confirmed = window.confirm('¿Seguro que quieres resetear tus tokens y tus compras en este móvil?');
  if (!confirmed) return;

  state = {
    name: 'Invitado misterioso',
    tokens: STARTING_TOKENS,
    purchases: []
  };

  persistState();
  updateDashboard();
  renderChallenges();
  renderPurchases();
  showToast('Sesión reseteada. Vuelves a tener 5 tokens y cero remordimientos.');
}

function copySummary() {
  const lines = state.purchases.length
    ? state.purchases.map((item, index) => `${index + 1}. ${item.text} (-${item.cost} token${item.cost > 1 ? 's' : ''})`)
    : ['Todavía no he comprado ninguna condena.'];

  const summary = [
    `Participante: ${state.name}`,
    `Tokens restantes: ${state.tokens}/${STARTING_TOKENS}`,
    'Condenas compradas:',
    ...lines
  ].join('\n');

  navigator.clipboard.writeText(summary)
    .then(() => showToast('Resumen copiado al portapapeles. Enseña la sentencia al comité.'))
    .catch(() => showToast('No se pudo copiar. Hazlo a mano como en la prehistoria.'));
}

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play().then(() => {
      musicToggle.textContent = 'Pausar himno';
    }).catch(() => {
      showToast('El navegador ha bloqueado el audio. Prueba a volver a pulsar.');
    });
  } else {
    bgMusic.pause();
    musicToggle.textContent = 'Reanudar himno';
  }
}

function toggleMute() {
  bgMusic.muted = !bgMusic.muted;
  musicMute.textContent = bgMusic.muted ? 'Activar sonido' : 'Silenciar';
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.add('hidden');
  }, 2800);
}

function openLightbox(src, title) {
  lightboxImage.src = src;
  lightboxCaption.textContent = title;
  lightbox.classList.remove('hidden');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.add('hidden');
  lightbox.setAttribute('aria-hidden', 'true');
}

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function handleEntry() {
  entryScreen.classList.add('hidden');
  appShell.classList.remove('hidden');
  bgMusic.volume = Number(volumeSlider.value);
  bgMusic.play().then(() => {
    musicToggle.textContent = 'Pausar himno';
  }).catch(() => {
    musicToggle.textContent = 'Reanudar himno';
    showToast('Pulsa otra vez en reproducir si el navegador bloquea la música.');
  });

  if (state.name === 'Invitado misterioso') {
    setTimeout(renamePlayer, 280);
  }
}

function hydrateUI() {
  readStorage();
  updateDashboard();
  setRandomPhrase();
  renderGallery();
  renderChallenges();
  renderPurchases();

}

enterButton.addEventListener('click', handleEntry);
renameButton.addEventListener('click', renamePlayer);
phraseButton.addEventListener('click', setRandomPhrase);
resetButton.addEventListener('click', resetSession);
copySummaryButton.addEventListener('click', copySummary);
musicToggle.addEventListener('click', toggleMusic);
musicMute.addEventListener('click', toggleMute);
volumeSlider.addEventListener('input', event => {
  bgMusic.volume = Number(event.target.value);
});
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) closeLightbox();
});
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeLightbox();
});
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderChallenges();
  });
});

hydrateUI();
