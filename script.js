const PUBLIC_TOKENS = 5;
const FRIEND_TOKENS = 15;

const STORAGE_KEYS = {
  name: 'antonverse_name',
  purchases: 'antonverse_purchases',
  jokerUsed: 'antonverse_joker_used',
  revealedImages: 'antonverse_revealed_images'
};

const radioTracks = [
  { src: 'assets/audio/anton.mp3', title: 'Antón, Antón · Versión base' },
  { src: 'assets/audio/anton-cumbia.mp3', title: 'Antón, Antón · Cumbia' },
  { src: 'assets/audio/anton-cumbia-v2.mp3', title: 'Antón, Antón · Cumbia v2' },
  { src: 'assets/audio/anton-cumbia-v3.mp3', title: 'Antón, Antón · Cumbia v3' },
  { src: 'assets/audio/anton-electro-latino.mp3', title: 'Antón, Antón · Electro latino' },
  { src: 'assets/audio/anton-electro-latino-v2.mp3', title: 'Antón, Antón · Electro latino v2' },
  { src: 'assets/audio/anton-electro-latino-v3.mp3', title: 'Antón, Antón · Electro latino v3' },
  { src: 'assets/audio/anton-pop.mp3', title: 'Antón, Antón · Pop' },
  { src: 'assets/audio/anton-pop-v2.mp3', title: 'Antón, Antón · Pop v2' },
  { src: 'assets/audio/anton-ranchera.mp3', title: 'Antón, Antón · Ranchera' },
  { src: 'assets/audio/anton-ranchera-v2.mp3', title: 'Antón, Antón · Ranchera v2' },
  { src: 'assets/audio/anton-ranchera-v3.mp3', title: 'Antón, Antón · Ranchera v3' },
  { src: 'assets/audio/anton-ranchera-v4.mp3', title: 'Antón, Antón · Ranchera v4' },
  { src: 'assets/audio/anton-ranchera-v5.mp3', title: 'Antón, Antón · Ranchera v5' },
  { src: 'assets/audio/anton-ranchera-v6.mp3', title: 'Antón, Antón · Ranchera v6' },
  { src: 'assets/audio/anton-ranchera-v7.mp3', title: 'Antón, Antón · Ranchera v7' },
  { src: 'assets/audio/anton-ranchera-v8.mp3', title: 'Antón, Antón · Ranchera v8' },
  { src: 'assets/audio/anton-ranchera-v9.mp3', title: 'Antón, Antón · Ranchera v9' },
  { src: 'assets/audio/anton-copla.mp3', title: 'Antón, Antón · Copla' },
  { src: 'assets/audio/anton-copla-v2.mp3', title: 'Antón, Antón · Copla v2' },
  { src: 'assets/audio/anton-corrido-tumbado.mp3', title: 'Antón, Antón · Corrido tumbado' },
  { src: 'assets/audio/anton-corrido-tumbado-v2.mp3', title: 'Antón, Antón · Corrido tumbado v2' },
  { src: 'assets/audio/anton-bachata.mp3', title: 'Antón, Antón · Bachata' },
  { src: 'assets/audio/anton-bachata-v2.mp3', title: 'Antón, Antón · Bachata v2' },
  { src: 'assets/audio/anton-christian-ghospel.mp3', title: 'Antón, Antón · Christian gospel' },
  { src: 'assets/audio/anton-christian-ghospel-v2.mp3', title: 'Antón, Antón · Christian gospel v2' },
  { src: 'assets/audio/himno-anton.mpeg', title: 'Himno Antón · WhatsApp original' },
  { src: 'assets/audio/whatsapp-audio-2026-07-08-at-13-21-26.mpeg', title: 'Archivo de WhatsApp · versión 1' },
  { src: 'assets/audio/whatsapp-audio-2026-07-08-at-13-21-26-1.mpeg', title: 'Archivo de WhatsApp · versión 2' }
];



const AUDIO_BASE_PATHS = ['assets/audio/', 'audio/', ''];
const IMAGE_BASE_PATHS = ['assets/images/', 'images/', ''];
const ORIGINAL_AUDIO_FILENAMES = {
  'anton.mp3': ['Antón, antón.mp3'],
  'anton-cumbia.mp3': ['Antón, antón (Cumbia).mp3'],
  'anton-cumbia-v2.mp3': ['Antón, antón (Cumbia)v2.mp3'],
  'anton-cumbia-v3.mp3': ['Antón, antón (Cumbia)v3.mp3'],
  'anton-electro-latino.mp3': ['Antón, antón (ELECTRO LATINO).mp3'],
  'anton-electro-latino-v2.mp3': ['Antón, antón (ELECTRO LATINO)v2.mp3'],
  'anton-electro-latino-v3.mp3': ['Antón, antón (ELECTRO LATINO)v3.mp3'],
  'anton-pop.mp3': ['Antón, antón (POP).mp3'],
  'anton-pop-v2.mp3': ['Antón, antón (POP)v2.mp3'],
  'anton-ranchera.mp3': ['Antón, antón (Ranchera).mp3'],
  'anton-ranchera-v2.mp3': ['Antón, antón (Ranchera)v2.mp3'],
  'anton-ranchera-v3.mp3': ['Antón, antón (Ranchera)v3.mp3'],
  'anton-ranchera-v4.mp3': ['Antón, antón (Ranchera)v4.mp3'],
  'anton-ranchera-v5.mp3': ['Antón, antón (Ranchera)v5.mp3'],
  'anton-ranchera-v6.mp3': ['Antón, antón (Ranchera)v6.mp3'],
  'anton-ranchera-v7.mp3': ['Antón, antón (Ranchera)v7.mp3'],
  'anton-ranchera-v8.mp3': ['Antón, antón (Ranchera)v8.mp3'],
  'anton-ranchera-v9.mp3': ['Antón, antón (Ranchera)v9.mp3'],
  'anton-copla.mp3': ['Antón, antón (Copla).mp3'],
  'anton-copla-v2.mp3': ['Antón, antón (Copla)v2.mp3'],
  'anton-corrido-tumbado.mp3': ['Antón, antón (Corrido tumbado).mp3'],
  'anton-corrido-tumbado-v2.mp3': ['Antón, antón (Corrido tumbado)v2.mp3'],
  'anton-bachata.mp3': ['Antón, antón (BACHATA).mp3'],
  'anton-bachata-v2.mp3': ['Antón, antón (BACHATA)v2.mp3'],
  'anton-christian-ghospel.mp3': ['Antón, antón (Christian ghospel).mp3'],
  'anton-christian-ghospel-v2.mp3': ['Antón, antón (Christian ghospel)v2.mp3'],
  'himno-anton.mpeg': ['WhatsApp Audio 2026-07-08 at 13.21.26.mpeg'],
  'whatsapp-audio-2026-07-08-at-13-21-26-1.mpeg': ['WhatsApp Audio 2026-07-08 at 13.21.26(1).mpeg']
};

function filenameFromPath(path) {
  return String(path || '').split('/').pop();
}

function uniqueList(items) {
  return [...new Set(items.filter(Boolean))];
}

function buildAudioCandidates(src) {
  const normalized = filenameFromPath(src);
  const originals = ORIGINAL_AUDIO_FILENAMES[normalized] || [];
  const filenames = uniqueList([normalized, ...originals]);
  return uniqueList(filenames.flatMap(name => AUDIO_BASE_PATHS.map(base => encodeURI(base + name))));
}

function buildImageCandidates(src) {
  const filename = filenameFromPath(src);
  return uniqueList(IMAGE_BASE_PATHS.map(base => encodeURI(base + filename)));
}

radioTracks.forEach(track => {
  track.candidates = buildAudioCandidates(track.src);
  track.src = track.candidates[0];
});

let currentTrackCandidateIndex = 0;

window.handleAntonImageError = function handleAntonImageError(img) {
  const candidates = String(img.dataset.candidates || '').split('|').filter(Boolean);
  const currentIndex = Number(img.dataset.candidateIndex || 0);
  const nextIndex = currentIndex + 1;
  if (nextIndex < candidates.length) {
    img.dataset.candidateIndex = String(nextIndex);
    img.src = candidates[nextIndex];
  } else {
    img.alt = 'No se pudo cargar esta imagen. Revisa si está en assets/images o images.';
  }
};

const FRIEND_NAMES = [
  'macoy',
  'buah',
  'parlita',
  'il consigliere',
  'caqui',
  'pocoyo',
  '...',
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
  'se mutran de tu menda',
  'cabeza',
  'el caqui',
  'el parlita',
  'padre parlita',
  'dynamic gamer',
  'dynamic gaymer',
  'nomeduele',
  'ilconsigliere',
  'dres',
  'dresete',
  'figure',
  'el gran figure',
  'se muestran de tu menda',
  'na que que tal',
  'samuelto',
  'las conyescas',
  'el vasco',
  'ddt boy',
  'ace',
  'josan',
  'josito',
  'josadri',
  'samu',
  'ou shit',
  '2t'
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
  { src: 'assets/images/anton_comic_buuaaaah.jpg', title: 'Antón: colapso oficial del sistema' },
  { src: 'assets/images/anton_general_caballo_bandera.jpg', title: 'Antón: generalísimo del Antonverso' },
  { src: 'assets/images/anton_su_vida_acabado.jpg', title: 'Antón: su vida se ha acabado' },
  { src: 'assets/images/anton_gran_figure.jpg', title: 'Antón: se casa el gran figure' },
  { src: 'assets/images/anton_minecraft_diamante.jpg', title: 'Antón: armadura de diamante ceremonial' },
  { src: 'assets/images/anton_amigo_padre_parlita.jpg', title: 'Antón: el amigo del padre del hijo del Parlita' },
  { src: 'assets/images/anton_conquistar_puti.jpg', title: 'Antón: a conquistar el puti' },
  { src: 'assets/images/anton_epstein_files.jpg', title: 'Antón: archivo geopolítico clasificado' },
  { src: 'assets/images/anton_llorando_brazo.jpg', title: 'Antón: lágrimas de despedida' }
];


const challenges = [
  { id: "r-10-sentadillas", text: "Que haga 10 sentadillas", cost: 1, level: "Suave", source: "normal" },
  { id: "r-aplauso-bar", text: "Que pida un aplauso en mitad del bar", cost: 1, level: "Suave", source: "normal" },
  { id: "r-pandereta-collejas", text: "Recibe 1 pandereta +1 al bote de collejas", cost: 1, level: "Suave", source: "normal" },
  { id: "r-1-flexion", text: "Hace 1 flexion", cost: 1, level: "Suave", source: "normal" },
  { id: "r-tiron-orejas", text: "Recibe 1 tirón de orejas", cost: 1, level: "Suave", source: "normal" },
  { id: "r-dab-67", text: "Haz un dab 6-7", cost: 1, level: "Suave", source: "normal" },
  { id: "r-brindis-vivan", text: "Que haga un brindis gritando “¡Vivan las putas, que se harten a chuparla!”", cost: 1, level: "Suave", source: "extra" },
  { id: "r-desfile-miss", text: "Que desfile como si estuviera en la final de Miss Universo", cost: 1, level: "Suave", source: "extra" },
  { id: "r-audio-cuki", text: "Que grabe un audio diciendo “Ay mi cuuuuuuuuuuuki”", cost: 1, level: "Suave", source: "extra" },
  { id: "r-haz-colada", text: "Haz una colada", cost: 1, level: "Suave", source: "normal" },
  { id: "r-5-flexiones", text: "5 flexiones", cost: 1, level: "Físico", source: "normal" },
  { id: "r-plancha-20", text: "20 segundos de plancha", cost: 1, level: "Físico", source: "normal" },
  { id: "r-vuelta-corriendo", text: "1 vuelta corriendo alrededor del grupo", cost: 1, level: "Físico", source: "normal" },
  { id: "r-10-abdominales", text: "10 abdominales", cost: 1, level: "Físico", source: "normal" },
  { id: "r-sentadilla-20", text: "Mantener postura de sentadilla 20 segundos", cost: 1, level: "Físico", source: "normal" },
  { id: "r-pose-culturista", text: "Hacer una pose de culturista durante 15 segundos", cost: 1, level: "Físico", source: "normal" },
  { id: "r-juego-sillas", text: "Jugar al juego de las sillas. Castigo grupal para perdedores", cost: 1, level: "Grupo", source: "normal" },
  { id: "r-abrazo-desconocido", text: "Que de un abrazo al siguiente desconocido", cost: 2, level: "Medio", source: "normal" },
  { id: "r-baila-cancion-anton", text: "Baila y canta la canción de Antón, antón", cost: 2, level: "Medio", source: "normal" },
  { id: "r-1-chupito", text: "1 chupito", cost: 2, level: "Medio", source: "normal" },
  { id: "r-lanza-edge", text: "Recibe 1 lanza de edge", cost: 2, level: "Medio", source: "normal" },
  { id: "r-bano-mujeres", text: "Entra a mear al baño de mujeres", cost: 2, level: "Medio", source: "extra" },
  { id: "r-vaper-caqui", text: "1 calada al vaper del caqui", cost: 2, level: "Medio", source: "normal" },
  { id: "r-duelo-sentadillas", text: "Duelo de sentadillas contra el comprador. Castigo para el perdedor", cost: 2, level: "Grupo", source: "normal" },
  { id: "r-plancha-bitches-cantada", text: "Plancha mientras le cantan Bitches Bitches", cost: 2, level: "Físico", source: "normal" },
  { id: "r-10-flexiones", text: "10 flexiones", cost: 2, level: "Físico", source: "normal" },
  { id: "r-20-sentadillas", text: "20 sentadillas", cost: 2, level: "Físico", source: "normal" },
  { id: "r-plancha-30", text: "30 segundos de plancha", cost: 2, level: "Físico", source: "normal" },
  { id: "r-carrera-ida-vuelta", text: "Carrera ida y vuelta hasta un punto cercano. Castigo grupal para perdedores", cost: 2, level: "Grupo", source: "normal" },
  { id: "r-gusano", text: "Hacer el gusano o intentarlo", cost: 2, level: "Físico", source: "normal" },
  { id: "r-5-burpees", text: "Hacer 5 burpees", cost: 2, level: "Físico", source: "normal" },
  { id: "r-pato-barra", text: "andar como pato hasta la barra", cost: 2, level: "Físico", source: "normal" },
  { id: "r-balon-prisionero", text: "Balón prisionero. Castigo grupal para el equipo perdedor", cost: 2, level: "Grupo", source: "normal" },
  { id: "r-collejote", text: "Collejote por parte del comprador o +1 al bote de collejas", cost: 3, level: "Potente", source: "normal" },
  { id: "r-rueda-ceuta", text: "Rueda como aprendiste en la mili en Ceuta y entona un alehop", cost: 3, level: "Potente", source: "normal" },
  { id: "r-acento-5-min", text: "habla con un acento 5 minutos. Si no lo cumple, castigo", cost: 3, level: "Potente", source: "normal" },
  { id: "r-vals-amigo", text: "Que baile 30 segundos con uno de sus amigos como si fuese el vals nupcial", cost: 3, level: "Grupo", source: "extra" },
  { id: "r-rueda-prensa", text: "Que dos amigos le hagan una rueda de prensa y él responda totalmente serio", cost: 3, level: "Grupo", source: "extra" },
  { id: "r-pack-verguenza-express", text: "Pack vergüenza express: 3 retos pequeños seguidos elegidos por el comité", cost: 3, level: "Pack", source: "pack" },
  { id: "r-rueda-militar-ceuta-alehop", text: "rueda militar de Ceuta y alehop", cost: 3, level: "Físico", source: "normal" },
  { id: "r-carretilla-amigo", text: "carrera de carretilla con un amigo", cost: 3, level: "Grupo", source: "normal" },
  { id: "r-boxeador-entrada", text: "Hacer una entrada de boxeador con sombra, saltitos y pose final", cost: 3, level: "Físico", source: "normal" },
  { id: "r-no-letra", text: "No se dice durante 5 minutos la letra indicada por el comprador. Quien pierda, castigo", cost: 3, level: "Grupo", source: "normal" },
  { id: "r-acento-grupal", text: "Reto de acento grupal: todos hablan con acento 3 minutos. Quien se ría, castigo", cost: 3, level: "Grupo", source: "normal" },
  { id: "r-juego-cuerda", text: "Jugar a la cuerda. Castigo grupal para el equipo perdedor", cost: 3, level: "Grupo", source: "normal" },
  { id: "r-flexiones-cuenta-mal", text: "5 flexiones mientras el grupo cuenta fatal a propósito", cost: 4, level: "Potente", source: "extra" },
  { id: "r-numero-mamasita", text: "Consigue el numero móvil de una mamasita", cost: 4, level: "Potente", source: "extra" },
  { id: "r-toalla-desconocido", text: "Tumbate en la toalla de algún desconocido", cost: 4, level: "Potente", source: "normal" },
  { id: "r-tiktok-acompanado", text: "Haces un baile viral de TikTok (puede ser acompañado)", cost: 4, level: "Potente", source: "normal" },
  { id: "r-acento-comprador-10", text: "Que hable con un acento elegido por el comprador durante 10 minutos", cost: 4, level: "Potente", source: "extra" },
  { id: "r-modo-version-anton", text: "Que el comprador elija una versión de Antón y se meta en el personaje durante 2 minutos", cost: 4, level: "Potente", source: "extra" },
  { id: "r-pasillito", text: "Pasillito", cost: 4, level: "Grupo", source: "normal" },
  { id: "r-circuito-militar", text: "circuito militar", cost: 4, level: "Físico", source: "normal" },
  { id: "r-juego-panuelo", text: "Jugar al pañuelo. Castigo grupal para el equipo perdedor", cost: 4, level: "Grupo", source: "normal" },
  { id: "r-1-hidalgo", text: "1 hidalgo", cost: 5, level: "Fuerte", source: "normal" },
  { id: "r-3-panderetas", text: "3 panderetas seguidas", cost: 5, level: "Fuerte", source: "extra" },
  { id: "r-caladita-cigarro", text: "1 caladita al cigarro", cost: 5, level: "Fuerte", source: "normal" },
  { id: "r-discurso-silla", text: "Que se suba a una silla y dé un discurso oficial despidiéndose de la soltería", cost: 5, level: "Fuerte", source: "extra" },
  { id: "r-pack-noche-destruida", text: "Pack noche destruida: 1 reto potente + 2 retos suaves elegidos por el comité", cost: 5, level: "Pack", source: "pack" },
  { id: "r-foto-color", text: "Sacarte foto con alguien con la camiseta de un determinado color en 3 minutos. Si no, castigo", cost: 5, level: "Grupo", source: "normal" },
  { id: "r-comer-beber-letra", text: "Debe comer o beber algo que comience con una letra del abecedario. Si no, castigo", cost: 5, level: "Grupo", source: "normal" },
  { id: "r-plancha-bitches", text: "plancha mientras suena Bitches Bitches", cost: 5, level: "Físico", source: "normal" },
  { id: "r-caballitos", text: "Carrera de caballitos. Castigo grupal para perdedores", cost: 5, level: "Grupo", source: "normal" },
  { id: "r-declaracion-amor", text: "Que haga una declaración de amor a su futura mujer (desconocida que se encuentre)", cost: 10, level: "Putada gorda", source: "normal" },
  { id: "r-brindis-hidalgo-todos", text: "Brindis +  hidalgo por parte de todos", cost: 10, level: "Grupo", source: "extra" },
  { id: "r-ropa-interior-encima", text: "Se debe poner la ropa interior por encima de la ropa", cost: 10, level: "Putada gorda", source: "normal" },
  { id: "r-foto-policia", text: "Foto con policía", cost: 10, level: "Putada gorda", source: "normal" },
  { id: "r-pack-rocky", text: "Pack Rocky Balboa: sombra de boxeo, flexiones, sentadillas y grito final", cost: 10, level: "Físico", source: "normal" },
  { id: "r-circuito-infernal", text: "Circuito infernal: 10 burpees + 20 sentadillas + 10 flexiones", cost: 10, level: "Físico", source: "normal" },
  { id: "r-lqsa", text: "Recreación alguna escena de lqsa", cost: 10, level: "Grupo", source: "normal" },
  { id: "friends-popper", text: "2 huelidas al Popper", cost: 15, level: "Solo amigos", source: "friends", friendsOnly: true },
  { id: "friends-botella-misterio", text: "Bebe de la botella con misterio", cost: 15, level: "Solo amigos", source: "friends", friendsOnly: true },
  { id: "friends-tiktok-redes", text: "Haces un baile viral de TikTok y se publica en redes", cost: 10, level: "Solo amigos", source: "friends", friendsOnly: true },
  { id: "friends-pack-cabron", text: "Pack amigo cabrón: combo de putadas medianas elegido por los amigos", cost: 10, level: "Solo amigos", source: "friends", friendsOnly: true },
  { id: "friends-combo-militar", text: "Combo militar: rueda de Ceuta + alehop + dab final", cost: 10, level: "Solo amigos", source: "friends", friendsOnly: true },
  { id: "friends-bitches-xxl", text: "Pack Bitches Bitches XXL: canta y baila el doble con público alrededor", cost: 10, level: "Solo amigos", source: "friends", friendsOnly: true },
  { id: "friends-boxeo-asalto", text: "Tocadito de boxeo durante 1 asalto (3 min)", cost: 10, level: "Solo amigos", source: "friends", friendsOnly: true },
  { id: "friends-multiverso", text: "Modo multiverso: durante 5 minutos actúa como la versión de Antón que elija el comprador", cost: 10, level: "Solo amigos", source: "friends", friendsOnly: true },
  { id: "friends-combo-verguenza", text: "Combo vergüenza: 3 panderetas + 10 flexiones + 1 chupito", cost: 10, level: "Solo amigos", source: "friends", friendsOnly: true },
  { id: "friends-penitencia", text: "Pack penitencia: cada amigo elige un ejercicio corto y Antón los hace seguidos", cost: 15, level: "Solo amigos", source: "friends", friendsOnly: true }
];

let state = {
  name: 'Invitado misterioso',
  purchases: [],
  jokerUsed: false,
  revealedImages: []
};

let rouletteSelection = null;
let rouletteTimer = null;
let toastTimer = null;
let activeCostFilter = 'all';
let currentTrackIndex = -1;
let wheelRotation = 0;
let wheelChallenges = [];
let wheelSegmentAngle = 0;

const appShell = document.getElementById('app-shell');
const entryScreen = document.getElementById('entry-screen');
const enterButton = document.getElementById('enter-button');
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const musicNext = document.getElementById('music-next');
const musicMute = document.getElementById('music-mute');
const volumeSlider = document.getElementById('volume-slider');
const nowPlaying = document.getElementById('now-playing');
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
const rouletteWheel = document.getElementById('roulette-wheel');
const casinoBall = document.getElementById('casino-ball');
const costFilterButtons = Array.from(document.querySelectorAll('.cost-filter-button'));
const rouletteLegend = document.getElementById('roulette-legend');

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
  const savedRevealedImages = JSON.parse(localStorage.getItem(STORAGE_KEYS.revealedImages) || '[]');

  if (savedName && savedName.trim()) {
    state.name = savedName.trim();
  }

  if (Array.isArray(savedPurchases)) {
    state.purchases = savedPurchases.filter(item => item && item.id && item.text);
  }

  state.jokerUsed = savedJoker === 'true';

  if (Array.isArray(savedRevealedImages)) {
    state.revealedImages = savedRevealedImages.filter(Boolean);
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEYS.name, state.name);
  localStorage.setItem(STORAGE_KEYS.purchases, JSON.stringify(state.purchases));
  localStorage.setItem(STORAGE_KEYS.jokerUsed, String(state.jokerUsed));
  localStorage.setItem(STORAGE_KEYS.revealedImages, JSON.stringify(state.revealedImages));
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
  const revealedSet = new Set(state.revealedImages);

  galleryGrid.innerHTML = galleryImages.map((image, index) => {
    const candidates = image.candidates || buildImageCandidates(image.src);
    const imageId = filenameFromPath(image.src);
    const revealed = revealedSet.has(imageId) || revealedSet.has(image.src);
    return `
      <article class="gallery-card ${revealed ? 'revealed' : 'sealed'}" data-src="${candidates[0]}" data-candidates="${candidates.join('|')}" data-title="${escapeHtml(image.title)}" data-index="${index}" data-image-id="${escapeHtml(imageId)}">
        <div class="gallery-image-wrap">
          <img src="${candidates[0]}" data-candidates="${candidates.join('|')}" data-candidate-index="0" onerror="window.handleAntonImageError(this)" alt="${escapeHtml(image.title)}" loading="lazy" />
          <div class="envelope-cover">
            <div class="envelope-icon">✉️</div>
            <strong>ARCHIVO CLASIFICADO #${String(index + 1).padStart(2, '0')}</strong>
            <span>Pincha para revelar</span>
          </div>
        </div>
        <p>${revealed ? escapeHtml(image.title) : 'Sobre cerrado del Antonverso'}</p>
      </article>
    `;
  }).join('');

  galleryGrid.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.dataset.title;
      const imageId = card.dataset.imageId;
      const imgEl = card.querySelector('img');
      const src = imgEl?.currentSrc || imgEl?.src || card.dataset.src;
      if (!state.revealedImages.includes(imageId)) {
        state.revealedImages.push(imageId);
        persistState();
        showToast('Has abierto un sobre que quizá debía permanecer cerrado.');
        renderGallery();
        return;
      }
      openLightbox(src, title);
    });
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
  if (currentTrackIndex === -1) playRandomTrack(false);
  updateRouletteUI();
  showToast(`Has comprado: ${challenge.text}`);
  return true;
}

function buildWheelChallenges(cheap = false) {
  const eligible = getEligibleChallenges().filter(challenge => !cheap || challenge.cost <= 2);
  return eligible;
}

function shortRouletteLabel(text, maxLength = 72) {
  const cleaned = String(text)
    .replace(/^Que /i, '')
    .replace(/^Haces /i, '')
    .replace(/^Haz /i, '')
    .replace(/^Antón:?/i, '')
    .trim();
  return cleaned.length > maxLength ? `${cleaned.slice(0, maxLength - 3)}...` : cleaned;
}

function renderRouletteWheel(items = null) {
  if (!rouletteWheel) return;

  const sourceItems = items || buildWheelChallenges(false);
  wheelChallenges = sourceItems.length ? sourceItems : [];
  rouletteWheel.querySelectorAll('.wheel-label').forEach(label => label.remove());

  if (!wheelChallenges.length) {
    rouletteWheel.style.background = 'conic-gradient(#3b245b 0 360deg)';
    if (rouletteLegend) rouletteLegend.innerHTML = '<p class="legend-empty">No hay retos disponibles.</p>';
    return;
  }

  const colors = ['#f9d94a', '#cf1020', '#101820', '#159447', '#ffffff', '#e86be8', '#2c7cff', '#ff7b00'];
  wheelSegmentAngle = 360 / wheelChallenges.length;

  const gradientParts = wheelChallenges.map((item, index) => {
    const start = index * wheelSegmentAngle;
    const end = (index + 1) * wheelSegmentAngle;
    return `${colors[index % colors.length]} ${start}deg ${end}deg`;
  });

  rouletteWheel.style.background = `conic-gradient(from 0deg, ${gradientParts.join(', ')})`;

  wheelChallenges.forEach((challenge, index) => {
    const label = document.createElement('div');
    label.className = 'wheel-label wheel-number';
    const angle = index * wheelSegmentAngle + wheelSegmentAngle / 2;
    label.style.transform = `rotate(${angle}deg)`;
    label.innerHTML = `<span>${index + 1}</span>`;
    rouletteWheel.appendChild(label);
  });

  renderRouletteLegend(wheelChallenges);
}

function renderRouletteLegend(items) {
  if (!rouletteLegend) return;

  rouletteLegend.innerHTML = items.map((challenge, index) => {
    const canAfford = getCurrentTokens() >= challenge.cost;
    return `
      <div class="legend-item ${canAfford ? '' : 'legend-locked'}">
        <span class="legend-number">${index + 1}</span>
        <div>
          <strong>${escapeHtml(shortRouletteLabel(challenge.text, 58))}</strong>
          <small>${challenge.cost} token${challenge.cost > 1 ? 's' : ''} · ${escapeHtml(challenge.level)}${canAfford ? '' : ' · sin saldo'}</small>
        </div>
      </div>
    `;
  }).join('');
}

function spinRoulette(cheap = false) {
  const eligible = buildWheelChallenges(cheap);
  if (!eligible.length) {
    rouletteSelection = null;
    updateRouletteUI();
    showToast(cheap ? 'No hay putadas baratas disponibles ahora mismo.' : 'La ruleta no encuentra ninguna putada disponible ahora mismo.');
    return;
  }

  renderRouletteWheel(eligible);
  rouletteBuy.disabled = true;
  rouletteSpin.disabled = true;
  if (cheapSpin) cheapSpin.disabled = true;
  rouletteResult.classList.remove('final-result');
  rouletteResult.classList.add('spinning');
  rouletteResult.textContent = cheap ? 'Girando ruleta barata...' : 'La bolita está girando...';

  const selectedIndex = Math.floor(Math.random() * eligible.length);
  rouletteSelection = eligible[selectedIndex];

  const selectedCenter = selectedIndex * wheelSegmentAngle + wheelSegmentAngle / 2;
  const fullSpins = 6 + Math.floor(Math.random() * 3);
  const targetRotation = fullSpins * 360 + (360 - selectedCenter);
  wheelRotation += targetRotation;

  if (rouletteWheel) {
    rouletteWheel.classList.add('spinning');
    rouletteWheel.style.transform = `rotate(${wheelRotation}deg)`;
  }

  if (casinoBall) {
    casinoBall.classList.remove('ball-spinning');
    void casinoBall.offsetWidth;
    casinoBall.classList.add('ball-spinning');
  }

  window.setTimeout(() => {
    const canAfford = getCurrentTokens() >= rouletteSelection.cost;
    rouletteResult.innerHTML = `
      <strong>Resultado ${selectedIndex + 1}: ${escapeHtml(rouletteSelection.text)}</strong>
      <small>${rouletteSelection.cost} token${rouletteSelection.cost > 1 ? 's' : ''} · ${escapeHtml(rouletteSelection.level)}${canAfford ? '' : ' · no tienes saldo suficiente'}</small>
    `;
    rouletteResult.classList.remove('spinning');
    rouletteResult.classList.add('final-result');
    if (rouletteWheel) rouletteWheel.classList.remove('spinning');
    if (casinoBall) casinoBall.classList.remove('ball-spinning');
    rouletteSpin.disabled = false;
    if (cheapSpin) cheapSpin.disabled = false;
    rouletteBuy.disabled = !canAfford;
    showToast(canAfford ? 'La ruleta ha dictado sentencia.' : 'Ha caído una putada cara. No tienes tokens suficientes.');
  }, 5000);
}

function updateRouletteUI() {
  clearInterval(rouletteTimer);
  rouletteSpin.disabled = false;
  if (cheapSpin) cheapSpin.disabled = false;
  rouletteResult.classList.remove('spinning');

  if (!rouletteSelection) {
    rouletteResult.textContent = 'Pulsa para girar la desgracia';
    rouletteBuy.disabled = true;
    return;
  }

  const selected = challenges.find(item => item.id === rouletteSelection.id);
  const unlocked = selected && getEligibleChallenges().some(item => item.id === selected.id);
  const canAfford = selected && getCurrentTokens() >= selected.cost;
  rouletteBuy.disabled = !(unlocked && canAfford);

  if (!unlocked) {
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
  if (currentTrackIndex === -1) playRandomTrack(false);
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
    jokerUsed: false,
    revealedImages: []
  };
  rouletteSelection = null;

  persistState();
  updateDashboard();
  renderChallenges();
  renderPurchases();
  if (currentTrackIndex === -1) playRandomTrack(false);
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
  if (currentTrackIndex === -1) playRandomTrack(false);
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

function getRandomTrackIndex(excludeIndex = -1) {
  if (radioTracks.length <= 1) return 0;

  let nextIndex = Math.floor(Math.random() * radioTracks.length);
  let attempts = 0;
  while (nextIndex === excludeIndex && attempts < 12) {
    nextIndex = Math.floor(Math.random() * radioTracks.length);
    attempts += 1;
  }
  return nextIndex;
}

function setRadioTrack(index, shouldPlay = false) {
  if (!radioTracks.length) return;

  currentTrackIndex = index;
  currentTrackCandidateIndex = 0;
  const track = radioTracks[currentTrackIndex];
  bgMusic.src = track.candidates?.[0] || track.src;
  bgMusic.load();
  if (nowPlaying) {
    nowPlaying.textContent = `Ahora suena: ${track.title}`;
  }

  if (shouldPlay) {
    playRadio();
  }
}

function playRandomTrack(shouldPlay = false) {
  const nextIndex = getRandomTrackIndex(currentTrackIndex);
  setRadioTrack(nextIndex, shouldPlay);
}

function playRadio() {
  if (!bgMusic.src) {
    playRandomTrack(false);
  }

  bgMusic.volume = Number(volumeSlider.value);
  bgMusic.play().then(() => {
    musicToggle.textContent = 'Pausar radio';
  }).catch(() => {
    musicToggle.textContent = 'Reanudar radio';
    showToast('El navegador ha bloqueado la radio. Pulsa otra vez para reproducir.');
  });
}

function nextRadioTrack() {
  playRandomTrack(true);
  showToast('Radio Antonverse FM ha cambiado de condena musical.');
}

function toggleMusic() {
  if (bgMusic.paused) {
    playRadio();
  } else {
    bgMusic.pause();
    musicToggle.textContent = 'Reanudar radio';
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
  playRandomTrack(true);

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
  if (currentTrackIndex === -1) playRandomTrack(false);
  updateRouletteUI();
}


if (bgMusic) {
  bgMusic.addEventListener('error', () => {
    const track = radioTracks[currentTrackIndex];
    const candidates = track?.candidates || [];
    if (!track || !candidates.length) return;

    const nextCandidate = currentTrackCandidateIndex + 1;
    if (nextCandidate < candidates.length) {
      currentTrackCandidateIndex = nextCandidate;
      bgMusic.src = candidates[currentTrackCandidateIndex];
      bgMusic.load();
      if (nowPlaying) {
        nowPlaying.textContent = `Ahora suena: ${track.title}`;
      }
      showToast('No encontraba el audio. Estoy probando otra ruta automáticamente.');
      return;
    }

    showToast('No encuentro ese audio. Revisa que esté en assets/audio/ y que el nombre coincida.');
  });
}

enterButton.addEventListener('click', handleEntry);
renameButton.addEventListener('click', renamePlayer);
phraseButton.addEventListener('click', setRandomPhrase);
resetButton.addEventListener('click', resetSession);
jokerButton.addEventListener('click', useJoker);
copySummaryButton.addEventListener('click', copySummary);
musicToggle.addEventListener('click', toggleMusic);
musicNext.addEventListener('click', nextRadioTrack);
bgMusic.addEventListener('ended', nextRadioTrack);
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
