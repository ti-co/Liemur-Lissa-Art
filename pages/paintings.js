const source = document.getElementById('paintingsTemp').innerHTML;
const template = Handlebars.compile(source);

const context = { 
  paintings1: [
    {
      image: "../resources/horizontalPaintings/buenhombre.jpg", 
      title: 'Buen Hombre',
      artist: 'Liemur Lissa',
      date: '2020', 
      location: 'Dominican Republic',
      sizeInCm: '80 * 55 cm', 
      sizeInInch: `31.5" * 21.7"`, 
      materials: 'oil',
      medium: 'framed canvas',
      previousID: 'index21',
      ID: 'navbar',
      nextID: 'index1'
    }, 
    {
      image: "../resources/horizontalPaintings/origin.jpg", 
      title: 'Origin',
      artist: 'Liemur Lissa',
      date: '2020', 
      location: 'Dominican Republic',
      sizeInCm: ' 60 * 50 cm', 
      sizeInInch: `23.6" * 19.7"`,
      materials: 'oil',
      medium: 'framed canvas', 
      previousID: 'navbar',
      ID: 'index1',
      nextID: 'index2'
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
      medium: 'framed canvas', 
      previousID: 'index1',
      ID: 'index2',
      nextID: 'index3'
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
      medium: 'framed canvas', 
      previousID: 'index2',
      ID: 'index3',
      nextID: 'index4'   
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
      medium: 'canvas on cardboard',
      previousID: 'index3',
      ID: 'index4',
      nextID: 'index5'
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
      medium: 'canvas on cardboard', 
      previousID: 'index4',
      ID: 'index5',
      nextID: 'index6'
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
      medium: 'canvas on cardboard', 
      previousID: 'index5',
      ID: 'index6',
      nextID: 'index7'
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
      medium: 'canvas on cardboard', 
      previousID: 'index6',
      ID: 'index7',
      nextID: 'index8'
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
      medium: 'canvas on cardboard', 
      previousID: 'index7',
      ID: 'index8',
      nextID: 'index9'
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
      medium: 'canvas on cardboard', 
      previousID: 'index8',
      ID: 'index9',
      nextID: 'index10'
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
      medium: 'framed canvas', 
      previousID: 'index9',
      ID: 'index10',
      nextID: 'index11'
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
      medium: 'wooden frame', 
      previousID: 'index10',
      ID: 'index11',
      nextID: 'index12'
    },
    {
      image: "../resources/horizontalPaintings/whisper.JPG", 
      title: 'Whisper',
      artist: 'Liemur Lissa',
      date: '2021', 
      location: 'Moscow',
      sizeInCm: '60 * 45 cm', 
      sizeInInch: `23.6" * 17.7"`, 
      materials: 'oil',
      medium: 'framed canvas', 
      previousID: 'index11',
      ID: 'index12',
      nextID: 'index13'
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
      medium: 'framed canvas', 
      previousID: 'index12',
      ID: 'index13',
      nextID: 'index14'
    }, 
    {      
      image: "../resources/horizontalPaintings/doubts.jpg", 
      title: 'Eternal Doubt',
      artist: 'Liemur Lissa',
      date: '2021', 
      location: 'Moscow',
      sizeInCm: '80 * 60 cm', 
      sizeInInch: `31.5" * 23.6"`,
      materials: 'oil',
      medium: 'framed canvas', 
      previousID: 'index13',
      ID: 'index14',
      nextID: 'index15'   
    }
  ],
  paintings2: [
    {
      image: "../resources/verticalPaintings/streamoflights.jpg", 
      title: `the Lightstream`,
      artist: 'Liemur Lissa',
      date: '2021', 
      location: 'Moscow',
      sizeInCm: '50 * 70 cm', 
      sizeInInch: `19.7" * 27.6"`, 
      materials: 'oil',
      medium: 'framed canvas', 
      previousID: 'index14',
      ID: 'index15',
      nextID: 'index16'        
    },
    {
      image: "../resources/verticalPaintings/lightinthedarkness.jpg", 
      title: `Light in the Darkness`,
      artist: 'Liemur Lissa',
      date: '2020', 
      location: 'Moscow',
      sizeInCm: '60 * 80 cm', 
      sizeInInch: `23.6" * 31.5"`, 
      materials: 'oil',
      medium: 'framed canvas', 
      previousID: 'index15',
      ID: 'index16',
      nextID: 'index17'        
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
      medium: 'framed canvas', 
      previousID: 'index16',
      ID: 'index17',
      nextID: 'index18'
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
      medium: 'framed canvas', 
      previousID: 'index17',
      ID: 'index18',
      nextID: 'index19'
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
      medium: 'framed canvas', 
      previousID: 'index18',
      ID: 'index19',
      nextID: 'index20'
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
      medium: 'framed canvas', 
      previousID: 'index19',
      ID: 'index20',
      nextID: 'index21'
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
      medium: 'framed canvas?', 
      previousID: 'index20',
      ID: 'index21',
      nextID: 'navbar'
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


smoothScroll();
function smoothScroll() {
	var links = document.getElementsByTagName('a');
	for (let i = 0; i < links.length; i++) {
		const link = links[i];
		if ((link.href && link.href.indexOf('#') != -1) && ((link.pathname == location.pathname) || ('/' + link.pathname == location.pathname)) && (link.search == location.search)) {
			link.onclick = scrollAnchors;
		}
	}
}

function scrollAnchors(e, respond = null) {
  let scrollDist; 
  let progress;
  let prevTime = 0; 
  let currentLapse;
  let refactor;
  const footer = document.getElementById('footer'); 
  let start; 
  let dist;
  
  var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
  console.log(targetAnchor)
	if (!targetAnchor) return;
	let distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
  scrollDist = distanceToTop(targetAnchor); 
  const maxScrollDist = footer.getBoundingClientRect().bottom - window.innerHeight + 35; 
  maxScrollDist < scrollDist ? scrollDist = maxScrollDist : scrollDist = scrollDist;
  window.requestAnimationFrame(() => {
    scrollSmooth();  
  });
  
  function scrollSmooth(timestamp) {
    let atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    let atTop = window.pageYOffset <= 0; 
    let arrived;
    let noMoreScroll;
    prevTime = timestamp;
    timestamp = new Date().getTime();
    if (start === undefined) {start = timestamp};
    if (dist === undefined) {
      scrollDist > 500? dist = scrollDist+scrollDist*0.02: dist=scrollDist;
    };
    if (progress === undefined) {progress = 0};
    const scrollDuration = Math.max(Math.abs(Math.floor(dist/4))+200, 200); 
    let elapsed = timestamp - start;
    prevTime? currentLapse = timestamp - prevTime : currentLapse = 15 ; 
    if (Math.abs(progress) < Math.abs(dist)) {
      let factor = dist/scrollDuration*currentLapse; 
      let progression = elapsed/scrollDuration;
      const easing = easeInOut(progression);
      refactor = factor*easing; 
    } else {
      refactor = dist/scrollDuration*currentLapse;
    }
       
    dist > 0? f = Math.min(refactor, distanceToTop(targetAnchor)) : f = Math.max(refactor, distanceToTop(targetAnchor)); 
    window.scrollBy({
      top: f,
      left: 0,
    });
    progress += f;
    dist>0? arrived = distanceToTop(targetAnchor) <= 0 : arrived = distanceToTop(targetAnchor) >= 0 ; 
    dist > 0? noMoreScroll = atBottom : noMoreScroll = atTop; 
    if (!arrived && !noMoreScroll) {
      window.requestAnimationFrame (()=>{
        scrollSmooth(timestamp);
      });   
    } else {
        dist = undefined;
        start = undefined;
        window.cancelAnimationFrame(scrollSmooth);
      }   
  }

  function easeInOut(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  }
}
