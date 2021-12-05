const musicsData = [
  {
    musicFile: "Adoradores - Teu Santo Nome.mp3",
    albumFile:"Adoradores - teu santo nome.jpg",
    name: "Adoradores",
    performer: "Teu Santo Nome",
  },
  
   {
    musicFile: "Elihana eli - Yeshuati.mp3",
    albumFile:"Elihana eli - Yeshuati.jpg",
    name: "Elihana Eli",
    performer: "Yeshuati",
  },
     {
    musicFile: "Gabriela Rocha - Lugar secreto.mp3",
    albumFile:"Gabriela Rocha - Lugar secreto.jpg",
    name: "Gabriela Rocha",
    performer: "Lugar Secreto",
  },
     {
    musicFile: "Jesus Culture - Your love never fails.mp3",
    albumFile:"Jesus Culture - Your love never fails.jpg",
    name: "Jesus Culture",
    performer: "Your Love Never Fails",
  },
     {
    musicFile: "Joshua Aaron - Kadosh Atah.mp3",
    albumFile:"Joshua Aaron - Kadosh Atah.jpg",
    name: "Joshya Aaron",
    performer: "Kadosh Atah",
  },
     {
    musicFile: "Leonardo Gonçalves - Ele Vive.mp3",
    albumFile:"Leonardo Gonçalves - Ele Vive.jpg",
    name: "Leonardo Gonçalves",
    performer: "Ele Vive",
  },
  {
    musicFile: "Ministério Zoe - Aqueta m'alma.mp3",
    albumFile:"Ministério Zoe - Aqueta m'alma.jpg",
    name: "Ministério Zoe",
    performer: "Aquieta M'alma",
  },
     {
    musicFile: "Pai nosso em Aramaico.mp3",
    albumFile:"Pai nosso em Aramaico.jpg",
    name: "Biblia Sagrada",
    performer: "Pai Nosso (Aramaico version)",
  },
  {
    musicFile: "Yitzchak Fuchs  - Telehim 150.mp3",
    albumFile:"Yitzchak Fuchs  - Telehim 150.jpg",
    name: "Yitzchak Fuchs",
    performer: "Telehim 150 (Salmo 150)",
  },
     {
    musicFile: "Yosef karduner - Hashem Melech.mp3",
    albumFile:"Yosef karduner - Hashem Melech.jpg",
    name: "Yosef Karduner",
    performer: "Hashem Melech",
  },
];

function createMusicWrapper(music, curr) {
  const queueMusic = document.createElement('div');
  const innerContent = `
    <div class="queue__music-album">
      <img src="./assets/images/${music.albumFile}" alt="">
    </div>
    <div class="queue__music-details">
      <h2 class="music-details__name">${music.name}</h2>
      <p class="music-details__performer">${music.performer}</p>
    </div>
    <div class="queue__music-like">
      <i class='bx bxs-heart' id="like-icon"></i>
    </div>
    <div class="queue__music-play">
      <i class='bx bx-play' data-music="${curr}"></i>
    </div>
  `;

  queueMusic.setAttribute('class', 'queue__music');
  queueMusic.innerHTML = innerContent;

  return queueMusic
}

export { musicsData, createMusicWrapper };
