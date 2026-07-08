const PUBLIC_TOKENS = 5;
const FRIEND_TOKENS = 15;

const STORAGE_KEYS = {
  name: 'antonverse_name',
  purchases: 'antonverse_purchases',
  jokerUsed: 'antonverse_joker_used'
};

const FRIEND_NAMES = [
  'macoy',
  'buah',
  'parlita',
  'il consigliere',
  'caqui',
  'pocoyo',
  '...',
  '…',
  'pol',
  'sara',
  'yomen',
  'cabesa',
  'walter',
  'nil',
  'putero',
  'puta',
  'nat',
  'natrix',
  'padre del parlita',
  'negri',
  'no me duele',
  'valen',
  'dynamic gamers',
  'dynamic gaymers',
  'dios',
  'se mutran de tu menda'
];

const phrases = [
  '“Compatriotas, hoy se acaba una era.”',
  '“Que no quede dignidad, pero sí documentación gráfica.”',
  '“Antón no es una persona: es una franquicia.”',
  '“Última noche de libertad. Última oportunidad de castigar.”',
  '“Si el multiverso existe, en alguno Antón ya está arrepentido.”',
  '“Compra tu condena como un ciudadano responsable.”',
  '“Hay despedidas... y luego está este atentado visual.”',
  '“La historia no la escriben los valientes: la compran con tokens.”',
  '“Los amigos verdaderos no preguntan: desbloquean modo amigo.”',
  '“La ruleta nunca se equivoca; solo humilla.”'
];

const verdicts = [
  'La dignidad de Antón baja un 17%.',
  'El comité aprueba esta maldad por unanimidad.',
  'Se recomienda grabar en horizontal y no borrar pruebas.',
  'Antón ha sido legalmente sentenciado por el pueblo.',
  'El multiverso tiembla ante esta compra.',
  'La noche acaba de empeorar para el novio.',
  'La historia recordará este acto de cobardía organizada.',
  'La ONU no reconoce esta condena, pero el grupo sí.'
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
  // Retos originales tuyos. Texto respetado tal cual.
  { id: 'original-2', text: 'Que haga 10 sentadillas', cost: 1, level: 'Suave', source: 'original' },
  { id: 'original-4', text: 'Que pida un aplauso en mitad del bar', cost: 1, level: 'Suave', source: 'original' },
  { id: 'original-1', text: 'Que de un abrazo al siguiente desconocido', cost: 2, level: 'Medio', source: 'original' },
  { id: 'original-9', text: 'Baila y canta la cacion de Bitches Bitches', cost: 2, level: 'Medio', source: 'original' },
  { id: 'original-3', text: 'Que haga una declaración de amor a su futura mujer (desconocida que se encuentre)', cost: 3, level: 'Potente', source: 'original' },
  { id: 'original-8', text: 'Collejote por parte del comprador o +1 al bote de collejas', cost: 3, level: 'Potente', source: 'original' },
  { id: 'original-7', text: 'Rueda como aprendiste en la mili en Ceuta y entona un alehop', cost: 3, level: 'Potente', source: 'original' },
  { id: 'original-10', text: 'Tumbate en la toalla de algún desconocido', cost: 4, level: 'Legendario', source: 'original' },
  { id: 'original-5', text: '2 huelidas al Popper', cost: 10, level: 'Putada gorda', source: 'original', friendsOnly: true },
  { id: 'original-6', text: 'Bebe de la botella con misterio', cost: 10, level: 'Putada gorda', source: 'original', friendsOnly: true },

  // Retos de Walter. Texto respetado tal cual.
  { id: 'walter-pandereta-1', text: '1 pandereta', cost: 1, level: 'Suave', source: 'walter' },
  { id: 'walter-flexion-1', text: '1 flexion', cost: 1, level: 'Suave', source: 'walter' },
  { id: 'walter-orejas-1', text: '1 tirón de orejas', cost: 1, level: 'Suave', source: 'walter' },
  { id: 'walter-dab', text: 'Haz un dab 6-7', cost: 1, level: 'Suave', source: 'walter' },
  { id: 'walter-chupito-1', text: '1 chupito', cost: 2, level: 'Medio', source: 'walter' },
  { id: 'walter-hidalgo-1', text: '1 hidalgo', cost: 2, level: 'Medio', source: 'walter' },
  { id: 'walter-lanza-edge-1', text: '1 lanza de edge', cost: 2, level: 'Medio', source: 'walter' },
  { id: 'walter-vaper-1', text: '1 calada al vaper del caqui', cost: 3, level: 'Potente', source: 'walter' },
  { id: 'walter-acento-5', text: 'habla con un acento 5 minutos (si no lo cumple chupito)', cost: 3, level: 'Potente', source: 'walter' },
  { id: 'walter-cigarro-1', text: '1 caladita al cigarro', cost: 3, level: 'Potente', source: 'walter' },
  { id: 'walter-tiktok', text: 'Haces un baile viral de TikTok', cost: 4, level: 'Legendario', source: 'walter' },
  { id: 'walter-tiktok-redes', text: 'Haces un baile viral de TikTok y se publica en redes', cost: 10, level: 'Putada gorda', source: 'walter', friendsOnly: true },

  // Variaciones para que haya más variedad y merezca la pena gastar tokens.
  { id: 'extra-brindis', text: 'Que haga un brindis gritando “¡Vivan los novios y viva Antón!”', cost: 1, level: 'Suave', source: 'extra' },
  { id: 'extra-desfile', text: 'Que desfile como si estuviera en la final de Miss Universo', cost: 1, level: 'Suave', source: 'extra' },
  { id: 'extra-pandereta-3', text: '3 panderetas seguidas, con cara seria y mirada al infinito', cost: 2, level: 'Medio', source: 'extra' },
  { id: 'extra-flexiones-5', text: '5 flexiones mientras el grupo cuenta fatal a propósito', cost: 2, level: 'Medio', source: 'extra' },
  { id: 'extra-foto-campana', text: 'Que se haga una foto de campaña con 3 amigos como si fuese candidato', cost: 2, level: 'Medio', source: 'extra' },
  { id: 'extra-audio', text: 'Que grabe un audio diciendo “Estoy bien, pero me están humillando”', cost: 2, level: 'Medio', source: 'extra' },
  { id: 'extra-discurso', text: 'Que improvise un discurso de dimisión como hombre libre', cost: 2, level: 'Medio', source: 'extra' },
  { id: 'extra-flexiones-10', text: '10 flexiones y al acabar grita “todavía soy libre”', cost: 3, level: 'Potente', source: 'extra' },
  { id: 'extra-vals', text: 'Que baile 30 segundos con uno de sus amigos como si fuese el vals nupcial', cost: 3, level: 'Potente', source: 'extra' },
  { id: 'extra-rueda-prensa', text: 'Que dos amigos le hagan una rueda de prensa y él responda totalmente serio', cost: 3, level: 'Potente', source: 'extra' },
  { id: 'extra-acento-10', text: 'Que hable con un acento elegido por el comprador durante 10 minutos', cost: 4, level: 'Legendario', source: 'extra' },
  { id: 'extra-trono', text: 'Que se suba a una silla y dé un discurso oficial despidiéndose de la soltería', cost: 4, level: 'Legendario', source: 'extra' },
  { id: 'extra-personaje', text: 'Que el comprador elija una versión de Antón y se meta en el personaje durante 2 minutos', cost: 4, level: 'Legendario', source: 'extra' },

  // Packs ahorro y sentencia final. Todo va mezclado en la tienda y se filtra por tokens.
  { id: 'pack-verguenza-express', text: 'Pack vergüenza express: 3 retos pequeños seguidos elegidos por el comité', cost: 3, level: 'Pack ahorro', source: 'extra' },
  { id: 'pack-noche-destruida', text: 'Pack noche destruida: 1 reto potente + 2 retos suaves elegidos por el comité', cost: 5, level: 'Pack ahorro', source: 'extra' },
  { id: 'pack-amigo-cabron', text: 'Pack amigo cabrón: combo de putadas medianas elegido por los amigos', cost: 10, level: 'Pack amigo', source: 'friends', friendsOnly: true },
  { id: 'sentencia-final-anton', text: 'SENTENCIA FINAL DE ANTÓN: videoclip definitivo + discurso de dimisión + foto de preso final', cost: 15, level: 'Sentencia final', source: 'friends', friendsOnly: true },

  // Putadas gordas desbloqueables por nombres de amigo. Van mezcladas en la misma tienda.
  { id: 'friends-combo-mili', text: 'Combo militar: rueda de Ceuta + alehop + dab final', cost: 10, level: 'Putada gorda', source: 'friends', friendsOnly: true },
  { id: 'friends-bitches-xxl', text: 'Pack Bitches Bitches XXL: canta y baila el doble con público alrededor', cost: 10, level: 'Putada gorda', source: 'friends', friendsOnly: true },
  { id: 'friends-juicio-final', text: 'Juicio final de Antón: juez, fiscal, abogado y sentencia pública', cost: 10, level: 'Putada gorda', source: 'friends', friendsOnly: true },
  { id: 'friends-multiverso', text: 'Modo multiverso: durante 5 minutos actúa como la versión de Antón que elija el comprador', cost: 10, level: 'Putada gorda', source: 'friends', friendsOnly: true },
  { id: 'friends-combo-pandereta', text: 'Combo vergüenza: 3 panderetas + 10 flexiones + discurso de dimisión', cost: 10, level: 'Putada gorda', source: 'friends', friendsOnly: true }
];

let state = {
  name: 'Invitado misterioso',
  purchases: [],
  jokerUsed: false
};

let rouletteSelection = null;
let rouletteTimer = null;
let toastTimer = null;
let activeCostFilter = 'all';

const appShell = document.getElementById('app-shell');
const entryScreen = document.getElementById('entry-screen');
const enterButton = document.getElementById('enter-button');
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const musicMute = document.getElementById('music-mute');
const volumeSlider = document.getElementById('volume-slider');
const tokenCount = document.getElementById('token-count');
const tokenMax = document.getElementById('token-max');
const meterFill = document.getElementById('meter-fill');
const tokenMessage = document.getElementById('token-message');
const rankTitle = document.getElementById('rank-title');
const rankSubcopy = document.getElementById('rank-subcopy');
const playerName = document.getElementById('player-name');
const playerSubcopy = document.getElementById('player-subcopy');
const friendModeBadge = document.getElementById('friend-mode-badge');
const renameButton = document.getElementById('rename-button');
const phraseButton = document.getElementById('phrase-button');
const randomPhrase = document.getElementById('random-phrase');
const galleryGrid = document.getElementById('gallery-grid');
const challengeGrid = document.getElementById('challenge-grid');
const purchasesList = document.getElementById('purchases-list');
const purchasesEmpty = document.getElementById('purchases-empty');
const resetButton = document.getElementById('reset-button');
const jokerButton = document.getElementById('joker-button');
const copySummaryButton = document.getElementById('copy-summary-button');
const toast = document.getElementById('toast');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');
const rouletteSpin = document.getElementById('roulette-spin');
const cheapSpin = document.getElementById('cheap-spin');
const rouletteBuy = document.getElementById('roulette-buy');
const rouletteResult = document.getElementById('roulette-result');
const costFilterButtons = Array.from(document.querySelectorAll('.cost-filter-button'));

function normalizeName(name) {
  return String(name || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ');
}

function isFriendName(name) {
  return FRIEND_NAMES.includes(normalizeName(name));
}

function getMaxTokens() {
  return isFriendName(state.name) ? FRIEND_TOKENS : PUBLIC_TOKENS;
}

function getSpentTokens() {
  return state.purchases.reduce((total, item) => total + Number(item.cost || 0), 0);
}

function getCurrentTokens() {
  return Math.max(0, getMaxTokens() - getSpentTokens());
}

function getRank() {
  const spent = getSpentTokens();
  if (spent === 0) return { title: 'Cobarde administrativo', text: 'Aún no has gastado nada. Antón respira tranquilo.' };
  if (spent <= 3) return { title: 'Cómplice menor', text: 'Has empezado a dañar la dignidad del novio.' };
  if (spent <= 7) return { title: 'Destructor de dignidad', text: 'Tu nombre empieza a sonar en el comité.' };
  if (spent <= 12) return { title: 'Enemigo íntimo de Antón', text: 'Esto ya no es amistad, es vocación.' };
  return { title: 'Criminal del Antonverso', text: 'Has exprimido el sistema como una mala persona profesional.' };
}

function randomVerdict() {
  return verdicts[Math.floor(Math.random() * verdicts.length)];
}

function readStorage() {
  const savedName = localStorage.getItem(STORAGE_KEYS.name);
  const savedPurchases = JSON.parse(localStorage.getItem(STORAGE_KEYS.purchases) || '[]');
  const savedJoker = localStorage.getItem(STORAGE_KEYS.jokerUsed);

  if (savedName && savedName.trim()) {
    state.name = savedName.trim();
  }

  if (Array.isArray(savedPurchases)) {
    state.purchases = savedPurchases.filter(item => item && item.id && item.text);
  }

  state.jokerUsed = savedJoker === 'true';
}

function persistState() {
  localStorage.setItem(STORAGE_KEYS.name, state.name);
  localStorage.setItem(STORAGE_KEYS.purchases, JSON.stringify(state.purchases));
  localStorage.setItem(STORAGE_KEYS.jokerUsed, String(state.jokerUsed));
}

function getPurchasedIds() {
  return new Set(state.purchases.map(item => item.id));
}

function updateDashboard() {
  const max = getMaxTokens();
  const tokens = getCurrentTokens();
  const isFriend = isFriendName(state.name);

  playerName.textContent = state.name;
  if (state.name === 'Invitado misterioso') {
    playerSubcopy.textContent = 'Todavía no te has bautizado. Hazlo para que conste en acta.';
  } else if (isFriend) {
    playerSubcopy.textContent = `Bienvenido, ${state.name}. Modo amigo activo: 15 tokens y putadas gordas mezcladas en la tienda.`;
  } else {
    playerSubcopy.textContent = `Bienvenido, ${state.name}. Tienes acceso público al mercado de condenas.`;
  }

  friendModeBadge.classList.toggle('hidden', !isFriend);
  tokenCount.textContent = tokens;
  tokenMax.textContent = max;
  meterFill.style.width = `${max ? (tokens / max) * 100 : 0}%`;

  const rank = getRank();
  rankTitle.textContent = rank.title;
  rankSubcopy.textContent = rank.text;

  if (jokerButton) {
    jokerButton.disabled = state.jokerUsed || !state.purchases.length;
    jokerButton.textContent = state.jokerUsed ? 'Comodín ya usado' : 'Usar comodín del novio';
  }

  if (isFriend && tokens >= 10) {
    tokenMessage.textContent = 'Tienes crédito suficiente para putadas gordas.';
  } else if (tokens === max) {
    tokenMessage.textContent = 'Tienes margen para sembrar el caos.';
  } else if (tokens >= 3) {
    tokenMessage.textContent = 'Todavía puedes hacer bastante daño.';
  } else if (tokens >= 1) {
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

function canAccessChallenge(challenge) {
  return !challenge.friendsOnly || isFriendName(state.name);
}

function getEligibleChallenges() {
  const purchasedIds = getPurchasedIds();
  const tokens = getCurrentTokens();
  return challenges.filter(challenge => {
    if (purchasedIds.has(challenge.id)) return false;
    if (!canAccessChallenge(challenge)) return false;
    return tokens >= challenge.cost;
  });
}

function renderChallenges() {
  const purchasedIds = getPurchasedIds();
  const tokens = getCurrentTokens();

  const visibleChallenges = activeCostFilter === 'all'
    ? challenges
    : challenges.filter(challenge => challenge.cost === Number(activeCostFilter));

  if (!visibleChallenges.length) {
    challengeGrid.innerHTML = '<div class="empty-state">No hay putadas con ese precio todavía.</div>';
    return;
  }

  challengeGrid.innerHTML = visibleChallenges.map(challenge => {
    const isBought = purchasedIds.has(challenge.id);
    const locked = !canAccessChallenge(challenge);
    const cantAfford = tokens < challenge.cost;
    const disabled = isBought || locked || cantAfford;
    const buttonLabel = isBought
      ? 'Comprado por ti'
      : locked
        ? 'Bloqueado: nombre de amigo'
        : cantAfford
          ? 'Sin tokens suficientes'
          : `Comprar por ${challenge.cost} token${challenge.cost > 1 ? 's' : ''}`;
    const sourceLabel = getSourceLabel(challenge.source);

    return `
      <article class="challenge-card ${isBought ? 'bought' : ''} ${locked ? 'locked-card' : ''}">
        <div class="challenge-badges">
          <span class="badge cost">💰 ${challenge.cost} token${challenge.cost > 1 ? 's' : ''}</span>
          <span class="badge ${challenge.source}">${sourceLabel}</span>
          <span class="badge level">${challenge.level}</span>
          ${challenge.friendsOnly ? '<span class="badge locked">🔐 AMIGOS</span>' : ''}
        </div>
        <p class="challenge-text">${escapeHtml(challenge.text)}</p>
        <div class="challenge-meta">
          <p class="challenge-note">${getChallengeNote(challenge, locked)}</p>
          <button class="buy-button" data-id="${challenge.id}" ${disabled ? 'disabled' : ''}>${buttonLabel}</button>
        </div>
      </article>
    `;
  }).join('');

  challengeGrid.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => buyChallenge(button.dataset.id));
  });
}

function getSourceLabel(source) {
  if (source === 'original') return 'ORIGINAL';
  if (source === 'walter') return 'WALTER';
  if (source === 'friends') return 'GORDA';
  return 'EXTRA';
}

function getChallengeNote(challenge, locked) {
  if (locked) return 'Aparece mezclada, pero solo se puede comprar con un nombre secreto.';
  if (challenge.friendsOnly) return 'Putada gorda desbloqueada por modo amigo.';
  if (challenge.source === 'original') return 'Texto original respetado tal cual.';
  if (challenge.source === 'walter') return 'Aportación de Walter respetada tal cual.';
  return 'Añadido extra para enriquecer el desastre.';
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
        ${item.verdict ? `<small class="verdict-line">${escapeHtml(item.verdict)}</small>` : ''}
      </div>
      <span class="badge cost">-${item.cost} token${item.cost > 1 ? 's' : ''}</span>
    </article>
  `).join('');
}

function buyChallenge(id) {
  const challenge = challenges.find(item => item.id === id);
  const purchasedIds = getPurchasedIds();
  const tokens = getCurrentTokens();

  if (!challenge) return false;
  if (!canAccessChallenge(challenge)) {
    showToast('Esta putada está mezclada, pero solo se compra con nombre de amigo.');
    return false;
  }
  if (purchasedIds.has(id)) {
    showToast('Ese reto ya lo has comprado tú. No abuses tanto.');
    return false;
  }
  if (tokens < challenge.cost) {
    showToast('No te llegan los tokens para esa barbaridad.');
    return false;
  }

  state.purchases.push({
    id: challenge.id,
    text: challenge.text,
    cost: challenge.cost,
    verdict: randomVerdict(),
    time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
  });

  persistState();
  rouletteSelection = null;
  updateDashboard();
  renderChallenges();
  renderPurchases();
  updateRouletteUI();
  showToast(`Has comprado: ${challenge.text}`);
  return true;
}

function spinRoulette(cheap = false) {
  const eligible = getEligibleChallenges().filter(challenge => !cheap || challenge.cost <= 2);
  if (!eligible.length) {
    rouletteSelection = null;
    updateRouletteUI();
    showToast(cheap ? 'No hay putadas baratas que puedas pagar ahora mismo.' : 'La ruleta no encuentra ninguna putada que puedas pagar ahora mismo.');
    return;
  }

  rouletteBuy.disabled = true;
  rouletteSpin.disabled = true;
  rouletteResult.classList.add('spinning');
  rouletteResult.textContent = cheap ? 'Buscando putada barata...' : 'Girando la desgracia...';

  let ticks = 0;
  clearInterval(rouletteTimer);
  rouletteTimer = setInterval(() => {
    const preview = eligible[Math.floor(Math.random() * eligible.length)];
    rouletteResult.textContent = preview.text;
    ticks += 1;

    if (ticks >= 18) {
      clearInterval(rouletteTimer);
      rouletteSelection = eligible[Math.floor(Math.random() * eligible.length)];
      rouletteResult.innerHTML = `
        <strong>${escapeHtml(rouletteSelection.text)}</strong>
        <small>${rouletteSelection.cost} token${rouletteSelection.cost > 1 ? 's' : ''} · ${escapeHtml(rouletteSelection.level)}</small>
      `;
      rouletteResult.classList.remove('spinning');
      rouletteSpin.disabled = false;
      rouletteBuy.disabled = false;
      showToast(cheap ? 'La putada barata ha sido seleccionada.' : 'La ruleta ha dictado sentencia.');
    }
  }, 75);
}

function updateRouletteUI() {
  clearInterval(rouletteTimer);
  rouletteSpin.disabled = false;
  rouletteResult.classList.remove('spinning');
  if (!rouletteSelection) {
    rouletteResult.textContent = 'Pulsa para girar la desgracia';
    rouletteBuy.disabled = true;
    return;
  }

  const selected = challenges.find(item => item.id === rouletteSelection.id);
  const canStillBuy = selected && getEligibleChallenges().some(item => item.id === selected.id);
  rouletteBuy.disabled = !canStillBuy;
  if (!canStillBuy) {
    rouletteSelection = null;
    rouletteResult.textContent = 'Pulsa para girar la desgracia';
  }
}

function buyRouletteSelection() {
  if (!rouletteSelection) {
    showToast('Primero gira la ruleta.');
    return;
  }
  buyChallenge(rouletteSelection.id);
}

function setRandomPhrase() {
  const random = phrases[Math.floor(Math.random() * phrases.length)];
  randomPhrase.textContent = random;
}

function renamePlayer() {
  const current = state.name === 'Invitado misterioso' ? '' : state.name;
  const input = window.prompt('¿Cómo quieres salir en acta? Hay nombres secretos de amigo.', current);
  if (input === null) return;

  const cleaned = input.trim();
  state.name = cleaned || 'Invitado misterioso';
  persistState();
  updateDashboard();
  renderChallenges();
  renderPurchases();
  updateRouletteUI();

  if (isFriendName(state.name)) {
    showToast(`Modo amigo desbloqueado para ${state.name}: 15 tokens y putadas gordas mezcladas.`);
  } else {
    showToast(`Nombre actualizado: ${state.name}`);
  }
}

function resetSession() {
  const confirmed = window.confirm('¿Seguro que quieres resetear tu nombre y tus compras en este móvil?');
  if (!confirmed) return;

  state = {
    name: 'Invitado misterioso',
    purchases: [],
    jokerUsed: false
  };
  rouletteSelection = null;

  persistState();
  updateDashboard();
  renderChallenges();
  renderPurchases();
  updateRouletteUI();
  showToast('Sesión reseteada. Vuelves a empezar con tokens limpios.');
}

function useJoker() {
  if (state.jokerUsed) {
    showToast('Ya has usado el comodín del novio en este móvil.');
    return;
  }
  if (!state.purchases.length) {
    showToast('Primero compra algo; si no, no hay nada que cambiar.');
    return;
  }

  const oldPurchase = state.purchases[state.purchases.length - 1];
  const purchasedIds = getPurchasedIds();
  purchasedIds.delete(oldPurchase.id);

  const alternatives = challenges.filter(challenge => {
    if (challenge.id === oldPurchase.id) return false;
    if (purchasedIds.has(challenge.id)) return false;
    if (!canAccessChallenge(challenge)) return false;
    return challenge.cost <= Number(oldPurchase.cost || 0);
  });

  if (!alternatives.length) {
    showToast('No hay una alternativa válida igual o más barata para cambiar el último reto.');
    return;
  }

  const replacement = alternatives[Math.floor(Math.random() * alternatives.length)];
  state.purchases[state.purchases.length - 1] = {
    id: replacement.id,
    text: replacement.text,
    cost: replacement.cost,
    verdict: `COMODÍN DEL NOVIO: sustituye a “${oldPurchase.text}”. ${randomVerdict()}`,
    time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
  };
  state.jokerUsed = true;
  rouletteSelection = null;

  persistState();
  updateDashboard();
  renderChallenges();
  renderPurchases();
  updateRouletteUI();
  showToast(`Comodín usado. Nuevo reto: ${replacement.text}`);
}

function copySummary() {
  const lines = state.purchases.length
    ? state.purchases.map((item, index) => `${index + 1}. ${item.text} (-${item.cost} token${item.cost > 1 ? 's' : ''})${item.verdict ? ' · ' + item.verdict : ''}`)
    : ['Todavía no he comprado ninguna condena.'];

  const summary = [
    `Participante: ${state.name}`,
    `Modo amigo: ${isFriendName(state.name) ? 'Sí' : 'No'}`,
    `Tokens restantes: ${getCurrentTokens()}/${getMaxTokens()}`,
    `Rango: ${getRank().title}`,
    `Comodín usado: ${state.jokerUsed ? 'Sí' : 'No'}`,
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
  updateRouletteUI();
}

enterButton.addEventListener('click', handleEntry);
renameButton.addEventListener('click', renamePlayer);
phraseButton.addEventListener('click', setRandomPhrase);
resetButton.addEventListener('click', resetSession);
jokerButton.addEventListener('click', useJoker);
copySummaryButton.addEventListener('click', copySummary);
musicToggle.addEventListener('click', toggleMusic);
musicMute.addEventListener('click', toggleMute);
rouletteSpin.addEventListener('click', () => spinRoulette(false));
cheapSpin.addEventListener('click', () => spinRoulette(true));
rouletteBuy.addEventListener('click', buyRouletteSelection);
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

costFilterButtons.forEach(button => {
  button.addEventListener('click', () => {
    activeCostFilter = button.dataset.cost;
    costFilterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderChallenges();
  });
});

hydrateUI();
