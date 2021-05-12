const source = document.getElementById('projectsTemp').innerHTML;
const template = Handlebars.compile(source);

const context = { 
  paintings1: [
    {
      image: "./resources/horizontalPaintings/origin.jpg", 
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
      image: "./resources/horizontalPaintings/buenhombre.jpg", 
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
      image: "./resources/horizontalPaintings/timetogohome.jpg", 
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
      image: "./resources/horizontalPaintings/storminJapan.jpg", 
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
      image: "./resources/horizontalPaintings/doubts.jpg", 
      title: 'Eternal Doubt',
      artist: 'Liemur Lissa',
      date: '2021', 
      location: 'Moscow',
      sizeInCm: '80 * 60 cm', 
      sizeInInch: `31.5" * 23.6"`,
      materials: 'oil',
      medium: 'framed canvas'   
    },
    {
      image: "./resources/horizontalPaintings/seeds.jpg", 
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
      image: "./resources/horizontalPaintings/autumnleaves.jpg", 
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
      image: "./resources/horizontalPaintings/oceaneye.jpg", 
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
      image: "./resources/horizontalPaintings/lalaguna.jpg", 
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
      image: "./resources/horizontalPaintings/changeofseason.jpg", 
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
      image: "./resources/horizontalPaintings/eveningsplash.jpg", 
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
      image: "./resources/horizontalPaintings/crosstheocean.jpg", 
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
      image: "./resources/horizontalPaintings/matingdance.jpg", 
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
      image: "./resources/horizontalPaintings/whisper.JPG",  
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
      image: "./resources/horizontalPaintings/thisaintdarkness.jpg", 
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
      image: "./resources/verticalPaintings/streamoflights.jpg", 
      title: `the Lightstream`,
      artist: 'Liemur Lissa',
      date: '2021', 
      location: 'Moscow',
      sizeInCm: '50 * 70 cm', 
      sizeInInch: `19.7" * 27.6"`, 
      materials: 'oil',
      medium: 'framed canvas'        
    },
    {
      image: "./resources/verticalPaintings/roserouge.jpg", 
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
      image: "./resources/verticalPaintings/thegoodflow.jpg", 
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
      image: "./resources/verticalPaintings/greenland.jpg", 
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
      image: "./resources/verticalPaintings/roserougeblues.jpg", 
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
      image: "./resources/verticalPaintings/embracehistears.jpg", 
      title: 'Embrace his Tears',
      artist: 'Liemur Lissa',
      date: '2018?', 
      location: 'Moscow?',
      sizeInCm: '?', 
      sizeInInch: `?" * ?"`,
      materials: 'oil?',
      medium: 'framed canvas?'
    }, 
    {
      image: "./resources/verticalPaintings/lightinthedarkness.jpg", 
      title: `Light in the Darkness`,
      artist: 'Liemur Lissa',
      date: '2020', 
      location: 'Moscow',
      sizeInCm: '60 * 80 cm', 
      sizeInInch: `23.6" * 31.5"`, 
      materials: 'oil',
      medium: 'framed canvas'        
    }
  ],
  videos: [
    {
      image: "./resources/video/sunpursuit.mp4",
      iframeSrc: "https://www.youtube.com/embed/rLTn3LWzRCM?autoplay=1&VQ=HD1080&rel=0&modestbranding=1", 
      posterImage: './resources/video/postersunpursuit2LR.jpg'
    },
    {
      image: "./resources/video/feelthailand.mp4", 
      iframeSrc: "https://www.youtube.com/embed/AyH2CgOMSs0?autoplay=1&VQ=HD1080&rel=0&modestbrand",
      posterImage: "./resources/video/posterfeelThailand3.jpg" 
    },
    {
      image: "./resources/video/Samuimylove.mp4", 
      iframeSrc: "https://www.youtube.com/embed/Ph7jJ1j9tL8?autoplay=1&VQ=HD1080&rel=0&modestbrand",
      posterImage: "./resources/video/posterSamuiLR.jpg" 
    },
    {
      image: "./resources/video/WinterInChina.mp4",
      iframeSrc: "https://www.youtube.com/embed/_3oK7jU1MCc?autoplay=1&VQ=HD1080&rel=0&modestbrand", 
      posterImage: "./resources/video/posterwinterinChina2LR.jpg"
    },
    {
      image: "./resources/video/UnchartedThailand.mp4", 
      iframeSrc: "https://www.youtube.com/embed/HV5GHrjlAKc?autoplay=1&VQ=HD1080&rel=0&modestbrand",
      posterImage: "./resources/video/posterThailandunchartedLR.jpg"
    }
  ]
};

const compiledHtml = template(context);
const displayFrame = document.getElementById('frame');
displayFrame.innerHTML = compiledHtml;

window.requestAnimationFrame = window.requestAnimationFrame
|| window.mozRequestAnimationFrame
|| window.webkitRequestAnimationFrame
|| window.msRequestAnimationFrame
|| function(f){return setTimeout(f, 1000/60)} // simulate calling code 60 

window.cancelAnimationFrame = window.cancelAnimationFrame
|| window.mozCancelAnimationFrame
|| function(requestID){clearTimeout(requestID)} //fall back

const frameholders = document.getElementsByClassName('frameholder');
const sliders = document.getElementsByClassName('slider');
const q = sliders.length;
const next = document.getElementsByClassName('next');
const prev = document.getElementsByClassName('prev');
const videoBox = document.getElementById('videoBox');
const footer = document.getElementById('footer');
const navBar = document.getElementById('navbar');
const closedNavHeight = navBar.offsetHeight; 

let hasVisited = sessionStorage.getItem('washere');
if (!hasVisited ) {
  sessionStorage.setItem('washere', true);
} else {
  navBar.classList.remove('washere');
  navBar.style.opacity = '1';
}

// Get the modal elements
var modal = document.getElementById("myModal");
const modalContent = document.getElementById('modal-content');
var crosses = document.getElementsByClassName("close");
const popup = document.getElementsByClassName("popuptext");

const z = window.matchMedia("(min-width: 560px)");
const y = window.matchMedia("(max-width: 895px)");
const x = window.matchMedia("(min-width: 895px)");

let start; 
let dist;
const duration = 1500; 
let n = [];
let m = []; 

const arrays = [context.paintings1, context.paintings2, context.videos, context.paintings1]; 
const heightRatios = [0.7, 1.35, 1.1625, 0.65]
const indexes = [];


const setSlides = () => {
  for (let j = 0; j < q; j++){
    const slider = sliders[j];
    const array = arrays[j];
    const slides = slider.getElementsByClassName("slide");
    let dif = 0; 
    array.length > 4 ? dif = 10 - slides.length : dif = 1;
    indexes.push([]);
    let index = indexes[j];
    n.push(0);
    m.push(0);
    for (let i = 0; i < array.length; i++) {
      index.push(i);
      if (y.matches) {
        showSlides(i, index[i], slider, array);
      }
    };  
    if (x.matches) {
      if (dif > 0) {
        for (let p = 0; p < dif; p++) {
          let temp = slider.firstElementChild.cloneNode(true);
          sliders[j].appendChild(temp);
        };
      } else if (dif < 0) {
          for (let k = 0; k > dif; k--) {
            slider.removeChild(slider.lastElementChild); 
          } 
        }; 
    switchSlides(-1, index, slider, array);  
    };
  }
};
setSlides();

let timer;
function showSlides(slideIndex, cardIndex, slider, array) {
  const slide = slider.children[slideIndex];
  const card = array[cardIndex];
  const videoButton = slide.getElementsByTagName('button')[0];
  if (slide.children[1].tagName === 'VIDEO') {
    slide.children[1].poster = card.posterImage;
    slide.addEventListener("mouseenter", function() {  
      if (document.fullscreenElement !== slide.children[1]) {
        timer = setTimeout ( function () {
          slide.children[1].children[0].src = card.image;
          slide.children[1].load();
          slide.children[1].volume = 0.05;  
        }, 500)
      }        
    });
    slide.addEventListener("mouseleave", function() {  
      clearTimeout(timer);   
    });
    videoButton.addEventListener('click', function() {
      if (!videoBox.children[1]) {
        videoBox.getElementsByTagName('img')[0].style.display = 'none';
        const iframe = document.createElement('iframe');
        videoBox.append(iframe);
        iframe.setAttribute("src","");
        iframe.setAttribute("width","1920");
        iframe.setAttribute("height","1080");
        iframe.setAttribute("frameborder","0");
        iframe.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        iframe.setAttribute("allowfullscreen","true");
      }
      slide.children[1].pause();
      const frame = videoBox.getElementsByTagName('iframe')[0];
      frame.src = card.iframeSrc;
      const scrollDown = slider.children[slideIndex+1].offsetHeight; 
      const positionYVideo = slider.children[slideIndex+1].children[1].getBoundingClientRect().bottom + window.pageYOffset - 30; 
      window.scrollTo(0, positionYVideo);
      console.log(positionYVideo);
      setTimeout( function() {
        frame.click();
        var event1 = new Event('touchstart');
        var event2 = new Event('touchend'); 
        frame.dispatchEvent(event1); 
        frame.dispatchEvent(event2);
      }, 1000);
    });
  } else {
    slide.children[0].children[0].src = card.image;
    slide.children[1].children[0].innerHTML = `${card.sizeInCm} &nbsp; &nbsp;-&nbsp; &nbsp; ${card.sizeInInch}`;
    slide.children[1].children[1].innerHTML = 'Click the image to see more.';
    slide.addEventListener("click", function() {
      modalContent.children[0].children[0].innerHTML = card.title;
      modalContent.children[1].children[0].src = array[cardIndex].image;
      modalContent.children[1].children[1].children[1].innerHTML = `${card.title}<br> by ${card.artist}<br>${card.date}<br>${card.location}`;
      modal.style.display = "flex";
      popup[0].innerHTML = `${card.title}<br>by ${card.artist}<br>${card.date}<br>${card.location}<br><br>${card.sizeInCm}<br>${card.sizeInInch}<br>${card.materials}<br>${card.medium}`;
      popup[1].innerHTML = `${card.sizeInCm}<br>${card.sizeInInch}<br>${card.materials}<br>${card.medium}`; 
    });
  }
}

function pop(index) {
  popup[index].classList.toggle("show");
}
// When the user clicks on (x), close the modal
for (let i = 0; i< crosses.length; i++) {
  crosses[i].onclick = function() {
    modal.style.display = "none";
    for (let i = 0; i<popup.length; i++) {
      if (popup[i].classList.contains('show')) {
        popup[i].classList.toggle("show");
      }
    }
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    for (let i = 0; i<popup.length; i++) {
      if (popup[i].classList.contains('show')) {
        popup[i].classList.toggle("show");
      }
    }
  }
}

//open the aboutMe section in jumbotron - introvideo
const collapseAboutSection = (e) => {
  e = e || window.event;
  var target = e.target || e.srcElement;
  if (target.innerHTML === 'Read about me') {
    target.innerHTML = 'Hide about me'; 
    target.nextElementSibling.style.display = 'flex';
    target.nextElementSibling.style.visibility = 'visible';
    if (!z.matches || y.matches&&window.innerWidth > window.innerHeight) {
      document.getElementById('logo').style.display = 'none'
      } else {
        target.nextElementSibling.style.width = '60%';
      }
    } else {
    target.innerHTML = 'Read about me';
    if (!z.matches || y.matches&&window.innerWidth > window.innerHeight) {
      target.nextElementSibling.style.display = 'none';
      }
    target.nextElementSibling.style.visibility = 'hidden';
    document.getElementById('logo').style.display = 'block';
  }
}


function switchSlides(num, slindex, slider, array) {
  let slides = slider.getElementsByClassName('slide');
  const diff = slides.length - array.length;
  let sl = slindex.length;
  for (let i = 0; i < sl; i++) {
    slindex[i] += num; 
    if (slindex[i] >= sl) {slindex[i] -= sl};
    if (slindex[i] < 0) {slindex[i] += sl};
    if (y.matches || diff >= 0) {
      showSlides(i, slindex[i], slider, array);
    } 
  };
  for (let p = 0; p < diff; p++) {
    newIndex = p+array.length;
    showSlides(newIndex, slindex[p], slider, array);
  };
  if (diff < 0) {
    for (let k = 0; k < 10; k++) {
      showSlides(k, slindex[k], slider, array);
    };
  }
}; 

//section with media queries
function resetSlides() {
  if (x.matches) {
    for (let j = 0; j < q; j++) {
      let slider = sliders[j];
      const slides = slider.getElementsByClassName("slide");
      const index = indexes[j];
      let diff = 0; 
      slides.length > 4 ? diff = 10 - index.length : diff = 1;
      for (let i=0; i < index.length; i++) {
        index[i] = i;
        n[i] = 0; 
        m[i] = 0;
      }      
      if (diff > 0) {
        for (let p = 0; p < diff; p++) {
          let temp = slider.firstElementChild.cloneNode(true);
          slider.appendChild(temp);
          newIndex = p+index.length;
        }
      } else if (diff < 0) {
          for (let k = 0; k > diff; k--) {
            slider.removeChild(slider.lastElementChild); 
          };
        }
      switchSlides(-1, indexes[j], sliders[j], arrays[j]) 
    }; 
  };
};

function reswipe () {
  if (y.matches) {
    for (let i=0; i<q; i++) {
      const slindex = indexes[i];
      let slider = sliders[i];
      const slides = slider.getElementsByClassName("slide");
      const dif = slides.length - arrays[i].length;
      for (let j=0; j<dif; j++) {
        slider.removeChild(slider.lastElementChild);
      }
      for (let k = 0; k > dif; k--) {
          let temp = slider.firstElementChild.cloneNode(true);
          slider.appendChild(temp);
        };
      if (n[i] > 0) {
        slidePlus(-3,i);
      }
      switchSlides(1, slindex, slider, arrays[i]); 
    } 
  }
};

const setSliderWidth = () => {
  const windowWidth = document.documentElement.clientWidth;
  const jumbo = document.getElementById('jumbo');
  const navBar = document.getElementById('navbar');
  
  for (let i=0; i<q; i++) {
    let l = arrays[i].length;
    if (x.matches) {
      if (l > 4) {
        l=10
      } else if (l <= 4) 
        {l++};
      sliders[i].style.width = `${23.5*l}%`;
      } else if (z.matches) {
        sliders[i].style.width = `${32*l}%`;
        sliders[i].style.paddingRight = '45px';
        } else {
          sliders[i].style.width = `${68*l}%`;
          sliders[i].style.paddingRight = '45px';
          };  
  }

  let widthLeft = sliders[1].children[0].getBoundingClientRect().right; 
  let positionSlideFive = sliders[1].children[5].getBoundingClientRect().x;
  let widthRight = windowWidth - positionSlideFive;

  for (let i=0; i<q; i++) {
    let slideWidth = sliders[i].children[0].offsetWidth;
    let slideHeight = slideWidth*heightRatios[i];
    let cards = sliders[i].getElementsByClassName('card');
    for (let j = 0; j < cards.length; j++) {
      if (cards[j].children[1].tagName === 'VIDEO') {
        cards[j].children[1].style.height = `${slideHeight}px`; 
      } else {
        cards[j].children[0].style.height = `${slideHeight}px`; 
      }
    }

    let forwards = frameholders[i].getElementsByClassName('forwards');
    forwards[0].style.width = `${widthRight}px`;
    forwards[0].style.left = `${positionSlideFive}px`;
    let spaceRight = forwards[0].getBoundingClientRect().x;
    let margin = spaceRight - positionSlideFive; 
    forwards[0].style.left = `${positionSlideFive - margin}px`;

    let backwards = frameholders[i].getElementsByClassName('backwards');
    let spaceLeft = backwards[0].getBoundingClientRect().x;
    backwards[0].style.width = `${widthLeft}px`;
    backwards[0].style.marginLeft = `-${spaceLeft}px`;
  };

  if (y.matches) {
    logo.style.marginLeft = '';
    const navbarNav = document.getElementById('navbar-nav');
    navbarNav.style.marginRight = '';
    const sliderTitels = document.getElementsByClassName('sliderTitle');
    for (let i=0; i<q; i++) {
      sliderTitels[i].style.marginLeft = '';
    };
    videoBox.style.width = '';
    videoBox.style.marginLeft = ''; 
  } else {
    const logo = document.getElementById('logoInNavbar');
    let spaceLeft = logo.getBoundingClientRect().x; 
    logo.style.marginLeft = `${widthLeft + 6 - spaceLeft}px`;

    const navbarNav = document.getElementById('navbar-nav');
    let spaceRight = navbarNav.getBoundingClientRect().right;
    let margin = windowWidth - spaceRight; 
    navbarNav.style.marginRight = `${widthRight - margin}px`;
    
    const sliderTitels = document.getElementsByClassName('sliderTitle');
    spaceLeft = sliderTitels[0].getBoundingClientRect().x; 
    for (let i=0; i<q; i++) {
      sliderTitels[i].style.marginLeft = `${widthLeft + 6 - spaceLeft}px`;
    };

    videoBox.style.width = `${positionSlideFive - widthLeft - 12}px`;
    spaceLeft = videoBox.getBoundingClientRect().x
    videoBox.style.marginLeft = `${widthLeft + 8 - spaceLeft}px`;  
    }

  videoBox.style.height = `${videoBox.offsetWidth*0.5625}px`;
  const jumboHeight = window.innerHeight - navBar.offsetHeight + 3;
  jumbo.style.height = `${jumboHeight}px`;
};


function showCard() {
  if (x.matches) {
    for (let k = 0; k < q; k++) {
      sliders[k].children[0].style.visibility = 'hidden';
    }
  } else {
    for (let k = 0; k < q; k++) {
      sliders[k].children[0].style.visibility = 'visible'; 
    }
  }
};

z.addEventListener("change", (e) => {
  setSliderWidth();
});
y.addEventListener("change", (e) => {
  reswipe();
});
x.addEventListener("change", (e) => {
  resetSlides();
  showCard();
  setSliderWidth();
});
setSliderWidth();
showCard();


function slidePlus (num, index) {
  const slider = sliders[index];
  const array = arrays[index];
  let l = 10;
  const slindex = indexes[index];
  const prevButton = prev[index];
  if (slider.children[0].children[1].tagName === 'VIDEO'){
    if ( n[index] === 0) {
      slider.children[5].children[1].removeAttribute('controls');
    }
    const videoSlides = slider.getElementsByClassName('slide');
    for (let i = 0; i < videoSlides.length; i++) {
    videoSlides[i].children[0].classList.remove('entered');
    }    
  };
  if (!slider.classList.contains('sliding')) {
    setTimeout( () => {
      for (let i=0; i<sliders.length; i++) {
        sliders[i].classList.add('sliding');
      };
    }, 5) 
    if (num > 0 && n[index] > 0) {
        switchSlides(num, slindex, slider, array)
    } else if (num < 0 && n[index] === 0) {
        switchSlides(num, slindex, slider, array);
      };
    requestAnimationFrame(() => {
      if (num > 0) {
        slideRight(num);
        n[index] ++;
        m[index] ++; 
        if (m[index] === 1) { 
          const timer = setTimeout( () => {  
            prevButton.style.visibility = 'visible';    
            prev[index].style.opacity = '1';
            prev[index].style.transition = 'opacity 100ms ease-in 0ms';
          }, 550);
          frameholders[index].addEventListener('mouseout', () => {
            clearTimeout(timer);
          });  
        };
      } else {
        slideLeft(num);
        n[index] = 0;
      };    
  });
  } else {
    return
  }

  const easeOut = progress => Math.pow(--progress, 1) + 1;
  
  function easeInOut(x) {
    return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;
    }

  function slideRight(num) {
    timestamp = new Date().getTime();
    if (start === undefined) {start = timestamp};
    const fraction = 100/l;
    if (dist === undefined) {dist = fraction*num};
    const f = Math.abs(dist/duration);
    let elapsed = timestamp - start;
    let progress = elapsed/duration;
    const easing = easeInOut(progress);
    const refactor = easing*f;
    slider.style.transform = 'translateX(-' + Math.min(refactor*elapsed, dist) + "%)";
    if (elapsed < duration) {
      requestAnimationFrame(slideRight);
    } else {
      for (let i=0; i<sliders.length; i++) {
        sliders[i].classList.remove('sliding');
      }
      dist = undefined;
      start = undefined;
      slider.style.position = 'relative';
      slider.children[0].style.visibility = 'visible';
      m[index] ++;
      if (slider.children[0].children[1].tagName === 'VIDEO') {
        slider.children[5].children[1].setAttribute('controls', true);
      }
    };
  }

  function easeInOutElastic(x) {
    const c5 = (2 * Math.PI) / 4.5;
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5
      ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
      : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
    }

  function slideLeft(num) {
    timestamp = new Date().getTime();
    if (start === undefined) {start = timestamp};
    const fraction = 100/l;
    if (dist === undefined) {dist = fraction*num};
    const f = Math.abs(dist/duration);
    let elapsed = timestamp - start;
    let progress = elapsed/duration;
    const easing = easeInOutElastic(progress);
    const refactor = easing*f;
    slider.style.transform = 'translateX(' + Math.min(dist+(refactor*elapsed), 0) + "%)";
    if (elapsed < duration) {
      requestAnimationFrame(slideLeft);
    } else {
      for (let i=0; i<sliders.length; i++) {
        sliders[i].classList.remove('sliding');
      } 
      dist = undefined;
      start = undefined;
      slider.style.position = 'relative';
    }
  }
};
  

const showButtons = (j) => { 

  next[j].addEventListener('mouseenter', () => {
    next[j].style.visibility = 'visible';
    next[j].style.opacity = '1';
    m[j] > 0 ?  prev[j].style.visibility = 'visible' : 'hidden'; 
    m[j] > 0 ?  prev[j].style.opacity = '1': '0';
  });

  prev[j].addEventListener('mouseenter', () => {
    prev[j].style.visibility = 'visible';
    prev[j].style.opacity = '1';
    next[j].style.visibility = 'visible';
    next[j].style.opacity = '1'; 
  });
 
  next[j].addEventListener('mouseleave', () => {
    next[j].style.visibility = '0';
    next[j].style.opacity = '0';
    prev[j].style.visibility = '0';
    prev[j].style.opacity = '0';
  });

  prev[j].addEventListener('mouseleave', () => {
    prev[j].style.visibility = '0';
    prev[j].style.opacity = '0';
    next[j].style.visibility = '0';
    next[j].style.opacity = '0';
  });

}  

const zoomCard = (j) => {
  let i;
  let timer;
  const frameHeight = frameholders[j].offsetHeight;
  let coll = sliders[j].getElementsByClassName("card");
  for (i = 0; i < coll.length; i++) {
    let _this = coll[i];
    let content = coll[i].children[1];
    
    if (y.matches && _this.children[1].tagName === 'VIDEO') {
      const video = _this.children[1];
      video.addEventListener("playing", function() { 
      _this.children[0].classList.add('entered');
      });
    } else if (x.matches) {
        _this.addEventListener("mouseenter", function() {
        coll.length > 5 ? next[j].style.visibility = 'visible': '';
        m[j] > 0 ? prev[j].style.visibility = 'visible': 'hidden';
        next[j].style.opacity = '1';
        next[j].style.transition = 'opacity 150ms ease-in 10ms';
        prev[j].style.opacity = '1';
        if (m[j] > 1) {
          prev[j].style.transition = 'opacity 150ms ease-in 10ms';
        } else {
          prev[j].style.transition = 'opacity 650ms ease-in 100ms';
        };
        let spaceY = _this.getBoundingClientRect().y;
        const windowHeight = document.documentElement.clientHeight;  
        let bottomMarginY = windowHeight - _this.getBoundingClientRect().bottom; 
        if (spaceY > 45 && bottomMarginY > 0){
          timer = setTimeout( () => {
            zoom();    
            }, 750);
        }
        if (n[j] > 0) {
          this === coll[5] ?  this.style.transformOrigin = 'left center' : this.style.tranformOrigin = 'center center'; 
          this === coll[8] ?  this.style.transformOrigin = 'right center' : this.style.tranformOrigin = 'center center';
          this === coll[4] || this === coll[9] ? clearTimeout(timer) : setTimeout(timer);
        } else {
          this === coll[1] ?  this.style.transformOrigin = 'left center' : this.style.tranformOrigin = 'center center'; 
          this === coll[4] ?  this.style.transformOrigin = 'right center' : this.style.tranformOrigin = 'center center';
          this === coll[0] || this === coll[5] ? clearTimeout(timer) : setTimeout(timer);
        }  
      });

      const zoom = () => {
        _this.style.zIndex = '100001';
        sliders[j].style.zIndex = '100001';
        if (_this.children[1].tagName !== 'VIDEO') {
          content.style.display = "block";
          _this.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
          _this.children[0].style.height = 'auto';
          _this.style.transition = 'transform 800ms ease-out 20ms';
          _this.style.transform = 'scale(1.3)';  
        } else if (_this.children[1].tagName === 'VIDEO' && document.fullscreenElement !== _this.children[1]) {
          _this.children[0].classList.add('entered');
          _this.children[1].play();
          _this.style.transition = 'transform 800ms ease-out 20ms';
          _this.style.transform = 'scaleX(2.02) scaleY(1.72)';  
        }
        let slideHeight = frameholders[j].offsetHeight;
        sliders[j].style.marginBottom = `-${Math.abs(frameHeight-slideHeight)}px`; 
        next[j].style.visibility = 'hidden';
        prev[j].style.visibility = 'hidden';
        prev[j].style.opacity = '0';
        next[j].style.opacity = '0';
      }

      _this.addEventListener("mouseleave", function() {
        clearTimeout(timer);
        if (_this.children[1].tagName !== 'VIDEO') {
          content.style.display = "none";
          _this.style.backgroundColor = "white"
          let slideWidth = _this.offsetWidth;
          let slideHeight = slideWidth*heightRatios[j];
          _this.children[0].style.height = `${slideHeight}px`;
        }
          _this.style.transition = 'transform 100ms ease-out 20ms';
        _this.style.transform = 'scale(1)'; 
        sliders[j].style.marginBottom = '0';
        _this.style.zIndex = '0';
        sliders[j].style.zIndex = '0';
        next[j].style.visibility = 'hidden';
        prev[j].style.visibility = 'hidden';
        prev[j].style.opacity = '0';
        next[j].style.opacity = '0';
        if (_this.children[1].tagName === 'VIDEO') {
          if (document.fullscreenElement) {
            return
          } else {
            _this.children[1].pause();
            _this.children[1].load();
            _this.children[1].removeAttribute('controls');
            setTimeout( function () {
              _this.children[1].setAttribute('controls', true);
            }, 1500)
          }  
        }
      });
    };
  }
};

for (j=0; j < sliders.length; j++) {
  if (frameholders[j].style.overflowX !== 'scroll') {
    if (arrays[j].length > 4) {
      showButtons(j);
    };
    zoomCard(j); 
  }
  
};

const introvideo = document.getElementById('introvideo');
document.addEventListener('scroll', function () {
  isInViewport(introvideo) ? player.playVideo() : player.pauseVideo();
  }); 



function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (    
      rect.bottom > -80
  );
}


const toggleNavButton = () => {
  if (y.matches) {
    const navButton = document.getElementById('navbutton'); 
    navButton.click();
  }  
}

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
  
  var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	let distanceToTop = el => {
    if (navBar.classList.contains('sticky-top') && targetAnchor !== navBar) {
      return Math.floor(el.getBoundingClientRect().top - closedNavHeight);
    } else {
      return Math.floor(el.getBoundingClientRect().top); 
      }
  }
	e.preventDefault();
  scrollDist = distanceToTop(targetAnchor); 
  const maxScrollDist = footer.getBoundingClientRect().bottom - window.innerHeight + 35; 
  maxScrollDist < scrollDist ? scrollDist = maxScrollDist : scrollDist = scrollDist;
  window.requestAnimationFrame(() => {
    scrollSmooth()  
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
      scrollDist > 0? dist = scrollDist + closedNavHeight : dist = scrollDist - closedNavHeight;
    };
    if (progress === undefined) {progress = 0};
    const scrollDuration = Math.max(Math.abs(Math.floor(dist/2.4))+200, 300); 
    let elapsed = timestamp - start;
    prevTime? currentLapse = timestamp - prevTime : currentLapse = 15 ; 
    if (Math.abs(progress) < Math.abs(dist)) {
      let factor = dist/scrollDuration*currentLapse; 
      let progression = elapsed/scrollDuration;
      const easing = easeInOut(progression);
      refactor = factor*easing; 
    } else {
      refactor = dist/scrollDuration*15;
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


const showNavMenu = () => {
  console.log(navBar.offsetHeight);
 
  const navContent = document.getElementById('navbarSupportedContent');
  navHeight = navContent.offsetHeight;
  console.log(navHeight);
  let spaceToBottom = navBar.getBoundingClientRect().bottom - window.innerHeight + 160
  const navAtBottom = window.innerHeight - navBar.getBoundingClientRect().bottom <= 160;
  if (navHeight === 0 && navAtBottom) {
    setTimeout( () => {
      window.scrollBy(0, spaceToBottom)
    }, 120);
  }
}
