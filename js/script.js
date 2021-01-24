$(document).ready(function() {

  // Creiamo una select nell'html per filtrare le carte attraverso la proprietà power, per un valore che va da 1 a 5.

  // const powerValues = [1, 2, 3, 4, 5]

  const printCard = document.getElementById('print-card');

  const fieldCodes = [
    'W', 'U', 'B', 'R', 'G'
  ]

  const cardTypes = [
    'terre',
    'creature',
    'incantesimi',
    'artefatti',
    'instantanei',
    'stregonerie'
  ]

  // Abbiamo creato un oggetto di oggetti, come riferimento
  // di una edizione. Se ad esempio scrivo editions['SP']
  // allora otterrò tutto un oggetto che descrive
  // con più dettagli l'edizione.
  // come oggetto di oggetti, può essere navigato solo con il for-in
  const editions = {

    'BL': {
      edition: 'Boolean',
      rarity: 'blue'
    },

    'SP': {
      edition: 'Special',
      rarity: 'red'
    }

  }

  // Organizzare un array di carte (oggetti) Magic  (almeno 5 all'inizio), con tutte le loro proprietà.
  const cards = [{

      cardName: 'Grizzly Bears',

      cost: {
        genericCostNumber: 1,
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[0], // 'W',  - un suo riferimento
          fieldCodes[2] // 'B'
        ],
      },

      picture: 'images/i.png',
      cardType: cardTypes[1],
      cardObject: 'Bear',

      editionType: editions['BL'],

      description: 'Lorem ipsum',
      story: 'Naltro Lorem Ipsum',

      score: {
        power: 4, // filtrarlo per power
        toughness: 3
      }

    },
    {

      cardName: 'Sviluppatore Guerriero',

      cost: {
        genericCostNumber: 3,
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[2],
          fieldCodes[3]
        ],
      },

      picture: 'images/g.png', // da inserire immagine
      cardType: cardTypes[1],
      cardObject: 'Bear',

      editionType: editions['BL'],

      description: 'Lo sviluppatore guerriero spezza i byte in bit!',
      story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

      score: {
        power: 3, // r
        toughness: 3
      }

    },
    {

      cardName: 'Angelo dell\'Egida',

      cost: {
        genericCostNumber: 3,
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[2],
          fieldCodes[3]
        ],
      },

      picture: 'images/g.png', // da inserire immagine
      cardType: cardTypes[2],
      cardObject: 'Angel',

      editionType: editions['BL'],

      description: 'Quando l\'Angelo dell\'Egida entra in campo, un altro permanente bersaglio è indistruttibile fintanto che controlli l\'Angelo dell\'Egida.',
      story: 'Vola angelo, vola!',

      score: {
        power: 5, // r
        toughness: 3
      }

    },
    {

      cardName: 'Gargadonte Maggiore',

      cost: {
        genericCostNumber: 3,
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[2],
          fieldCodes[3]
        ],
      },

      picture: 'images/g.png', // da inserire immagine
      cardType: cardTypes[4],
      cardObject: 'Bestia',

      editionType: editions['BL'],

      description: 'Sospendere 10',
      story: 'Una volta il Gargadonte era minore. Adesso non più.',

      score: {
        power: 5, // r
        toughness: 5
      }

    },
    {

      cardName: 'Cronista Secolare',

      cost: {
        genericCostNumber: 3,
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[2],
          fieldCodes[3]
        ],
      },

      picture: 'images/g.png', // da inserire immagine
      cardType: cardTypes[1],
      cardObject: 'Bestia',

      editionType: editions['BL'],

      description: 'La forza e la costituzione del Cronista Secolare sono pari al numero di carte nella tua mano.',
      story: 'Così secolare da far impallidire Caressa',

      score: {
        power: 3, // r
        toughness: 3
      }

    },

    {
      cardName: 'Palude',

      cost: {
        genericCostNumber: 0,
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[0],
          fieldCodes[0]
        ],
      },

      picture: 'images/g.png', // da inserire immagine
      cardType: cardTypes[0],
      cardObject: 'Bestia',

      editionType: editions['BL'],

      description: 'La forza e la costituzione del Cronista Secolare sono pari al numero di carte nella tua mano.',
      story: 'Così secolare da far impallidire Caressa',

      score: {
        power: 0, // r
        toughness: 0
      }

    },
  ];



  // Creiamo una select nell'html per filtrare le carte attraverso la proprietà power, per un valore che va da 1 a 5.

  const powerValue = [0 + (' (terre)'), 1, 2, 3, 4, 5];
  const selector = document.getElementById('power-select');
  const filteredByPower = $('#power-select');

  //filling search field with power values
  powerValue.forEach((item) => {
    selector.innerHTML +=
      `<option value="${item}">${item}</option>`
  });


  filteredByPower.change(function() {
    // emptying the container
    printCard.innerHTML = '';

    const powerSelected = parseInt($(this).val());
    const allCards = $(this).val();

    let filteredArray;

    if (allCards !== 'all') {
      filteredArray = cards.filter((item) => {
        return item.score.power === powerSelected
      })
    } else {
      filteredArray = cards;
    }

    // Visualizzare nell'html la lista di queste carte mostrando SOLO il nome della carta. Non grafichiamo nulla.
    filteredArray.forEach((item) => {
      printCard.innerHTML += `
      <div>
      <h1>${item.cardName}</h1>
      </div>
      `
    });

  });

  filteredByPower.change();

  // Superpoweredbonus. E se volessi un'altra select e filtrare gli elementi
  // attraverso la proprietà che abbiamo chiamato cardType?

  const typeSelector = document.getElementById('type-select');
  const filteredByType = $('#type-select');
  const typeOptions = [];

  cards.forEach((item) => {
    if (!typeOptions.includes(item.cardType)) {
      typeOptions.push(item.cardType);
    }
  });

  //filling search field with type values
  typeOptions.forEach((item) => {
    typeSelector.innerHTML +=
      `<option value="${item}">${item}</option>`
  });


  filteredByType.change(function() {
    // emptying the container
    printCard.innerHTML = '';

    const allCards = $(this).val();

    let filteredArray;

    if (allCards !== 'all') {
      filteredArray = cards.filter((item) => {
        return item.cardType === allCards
      })
    } else {
      filteredArray = cards;
    }

    // Visualizzare nell'html la lista di queste carte mostrando SOLO il nome della carta. Non grafichiamo nulla.
    filteredArray.forEach((item) => {
      printCard.innerHTML += `
      <div>
      <h1>${item.cardName}</h1>
      </div>
      `
    });

  });

  filteredByType.change();



});
// END DOCUMENT.READY
