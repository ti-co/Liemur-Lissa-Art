const source = document.getElementById('paintingsTemp').innerHTML;
const template = Handlebars.compile(source);

const context = { 
  paintings1: [
    {
      image: "../resources/horizontalPaintings/origin.jpg", 
      title: 'Origin',
      artist: 'Liemur Lissa',
      date: '2020', 
      location: 'Dominican Republic',
      sizeInCm: ' 60 * 50 cm', 
      sizeInInch: `23.6" * 19.7"`,
      materials: 'oil',
      medium: 'framed canvas'
    }, 
    {
      image: "../resources/horizontalPaintings/buenhombre.jpg", 
      title: 'Buen Hombre',
      artist: 'Liemur Lissa',
      date: '2020', 
      location: 'Dominican Republic',
      sizeInCm: '80 * 55 cm', 
      sizeInInch: `31.5" * 21.7"`, 
      materials: 'oil',
      medium: 'framed canvas'
    }, 
    {
      image: "../resources/horizontalPaintings/timetogohome.jpg", 
      title: 'Time to go Home',
      artist: 'Liemur Lissa',
      date: '2021', 
      location: 'Moscow',
      sizeInCm: '70 * 50 cm', 
      sizeInInch: `27.6" * 19.7"`,  
      materials: 'oil',
      medium: 'framed canvas'
    },
    {
      image: "../resources/horizontalPaintings/storminJapan.jpg", 
      title: 'Storm in Japan',
      artist: 'Liemur Lissa',
      date: 'winter 2018', 
      location: 'China',
      sizeInCm: '70 * 50 cm', 
      sizeInInch: `27.6" * 19.7"`,
      materials: 'oil',
      medium: 'framed canvas'   
    },
    {
      image: "../resources/horizontalPaintings/seeds.jpg", 
      title: 'Seeds',
      artist: 'Liemur Lissa',
      date: '2017', 
      location: 'Moscow',
      sizeInCm: '50 * 35 cm', 
      sizeInInch: `19.7" * 13.8"`, 
      materials: 'acrylic',
      medium: 'canvas on cardboard'
    },
    {
      image: "../resources/horizontalPaintings/autumnleaves.jpg", 
      title: 'Autumn Leaves',
      artist: 'Liemur Lissa',
      date: '2017', 
      location: 'Moscow',
      sizeInCm: '50 * 35 cm', 
      sizeInInch: `19.7" * 13.8"`, 
      materials: 'acrylic',
      medium: 'canvas on cardboard'
    },
    {
      image: "../resources/horizontalPaintings/oceaneye.jpg", 
      title: 'Ocean Eye',
      artist: 'Liemur Lissa',
      date: '2017', 
      location: 'Moscow',
      sizeInCm: '50 * 40 cm', 
      sizeInInch: `19.7" * 15.7"`, 
      materials: 'oil',
      medium: 'canvas on cardboard'
    },
    {
      image: "../resources/horizontalPaintings/lalaguna.jpg", 
      title: 'La Laguna',
      artist: 'Liemur Lissa',
      date: '2017', 
      location: 'Moscow',
      sizeInCm: '40 * 30 cm', 
      sizeInInch: `15.7" * 11.8"`, 
      materials: 'oil',
      medium: 'canvas on cardboard'
    },
    {
      image: "../resources/horizontalPaintings/changeofseason.jpg", 
      title: 'Change of Season',
      artist: 'Liemur Lissa',
      date: '2017', 
      location: 'Moscow',
      sizeInCm: '40 * 30 cm', 
      sizeInInch: `15.7" * 11.8"`, 
      materials: 'oil',
      medium: 'canvas on cardboard'
    },
    {
      image: "../resources/horizontalPaintings/eveningsplash.jpg", 
      title: 'Splashing Eve',
      artist: 'Liemur Lissa',
      date: '2016', 
      location: 'Moscow',
      sizeInCm: '40 * 30 cm', 
      sizeInInch: `15.7" * 11.8"`, 
      materials: 'acrylic',
      medium: 'canvas on cardboard'
    },
    {
      image: "../resources/horizontalPaintings/crosstheocean.jpg", 
      title: 'Across the Ocean',
      artist: 'Liemur Lissa',
      date: '2018', 
      location: 'Moscow',
      sizeInCm: 'Triptych 35*50 35*60 35*50 cm', 
      sizeInInch: `13.8"*19.7" 13.8"*23.6" 13.8"*19.7"`, 
      materials: 'oil',
      medium: 'framed canvas'
    },
    {
      image: "../resources/horizontalPaintings/matingdance.jpg", 
      title: 'The Mating Dance',
      artist: 'Liemur Lissa',
      date: '2019', 
      location: 'Moscow',
      sizeInCm: '90*60 cm', 
      sizeInInch: `35.4" * 23.6"`, 
      materials: 'epoxy resin',
      medium: 'wooden frame'
    },
    {
      image: "../resources/horizontalPaintings/whisper.jpg", 
      title: 'Whisper',
      artist: 'Liemur Lissa',
      date: '2021', 
      location: 'Moscow',
      sizeInCm: '60 * 45 cm', 
      sizeInInch: `23.6" * 17.7"`, 
      materials: 'oil',
      medium: 'framed canvas'
    },
    {
      image: "../resources/horizontalPaintings/thisaintdarkness.jpg", 
      title: `This ain't Darkness`,
      artist: 'Liemur Lissa',
      date: '2021', 
      location: 'Moscow',
      sizeInCm: '60 * 50 cm', 
      sizeInInch: `23.6" * 19.7"`, 
      materials: 'oil',
      medium: 'framed canvas'
    }
  ],
  paintings2: [
    {
      image: "../resources/verticalPaintings/lightinthedarkness.jpg", 
      title: `Light in the Darkness`,
      artist: 'Liemur Lissa',
      date: '2020', 
      location: 'Moscow',
      sizeInCm: '60 * 80 cm', 
      sizeInInch: `23.6" * 31.5"`, 
      materials: 'oil',
      medium: 'framed canvas'        
      },
    {
      image: "../resources/verticalPaintings/roserouge.jpg", 
      title: 'Rose Rouge',
      artist: 'Liemur Lissa',
      date: '2020', 
      location: 'Moscow',
      sizeInCm: '60 * 80 cm', 
      sizeInInch: `23.6" * 31.5"`, 
      materials: 'oil',
      medium: 'framed canvas'
    }, 
    {
      image: "../resources/verticalPaintings/thegoodflow.jpg", 
      title: 'The Good Flow',
      artist: 'Liemur Lissa',
      date: '2018', 
      location: 'Moscow',
      sizeInCm: '50 * 70 cm', 
      sizeInInch: `19.7" * 27.6"`, 
      materials: 'oil',
      medium: 'framed canvas'
    },
    {
      image: "../resources/verticalPaintings/greenland.jpg", 
      title: 'Green Land',
      artist: 'Liemur Lissa',
      date: '2020', 
      location: 'Dominican Republic',
      sizeInCm: ' 40 * 50 cm', 
      sizeInInch: `15.7" * 19.7"`, 
      materials: 'oil',
      medium: 'framed canvas'
    },
    {
      image: "../resources/verticalPaintings/roserougeblues.jpg", 
      title: 'Rose Rouge Blues',
      artist: 'Liemur Lissa',
      date: '2020', 
      location: 'Moscow',
      sizeInCm: '60 * 80 cm', 
      sizeInInch: `23.6" * 31.5"`, 
      materials: 'oil',
      medium: 'framed canvas'
    },
    {
      image: "../resources/verticalPaintings/embracehistears.jpg", 
      title: 'Embrace his Tears',
      artist: 'Liemur Lissa',
      date: '2018?', 
      location: 'Moscow?',
      sizeInCm: '?', 
      sizeInInch: `?" * ?"`,
      materials: 'oil?',
      medium: 'framed canvas?'
    }
  ],
  videos: [
    {
      iframeSrc: "https://www.youtube.com/embed/rLTn3LWzRCM"
    },
    {
      iframeSrc: "https://www.youtube.com/embed/AyH2CgOMSs0" 
    },
    {
      iframeSrc: "https://www.youtube.com/embed/Ph7jJ1j9tL8" 
    },
    {
      iframeSrc: "https://www.youtube.com/embed/_3oK7jU1MCc"
    },
    {
      iframeSrc: "https://www.youtube.com/embed/HV5GHrjlAKc"
    }
  ]
};

const compiledHtml = template(context);
const displayPaintingsFrame = document.getElementById('paintingsFrame');
displayPaintingsFrame.innerHTML = compiledHtml;
