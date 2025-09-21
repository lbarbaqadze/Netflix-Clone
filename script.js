function updateLanguageText() {
    const option = document.getElementById("en");
    if (window.innerWidth <= 430) {
        option.textContent = "EN";
    } else {
        option.textContent = "English";
    }
}
function updateLanguageText2(){
    const option1 = document.getElementById("ge");
     if (window.innerWidth <= 430) {
        option1.textContent = "GE";
    } else {
        option1.textContent = "Georgian";
    }
}
updateLanguageText2();
updateLanguageText();
window.addEventListener('resize', updateLanguageText2)
window.addEventListener('resize', updateLanguageText);


function next() {
    const slider = document.getElementById('slider');
    slider.scrollLeft += 500;
}

function back() {
    const slider = document.getElementById('slider');
    slider.scrollLeft -= 500;
}

function slide1() {
    const slide = document.getElementById('slide1');
    const toggle = document.getElementById('h1-1');

    slide.classList.toggle('active');

    toggle.textContent = slide.classList.contains('active') ? '-' : '+';
}
function slide2() {
    const slide = document.getElementById('slide2');
    const toggle = document.getElementById('h1-2');

    slide.classList.toggle('active');

    toggle.textContent = slide.classList.contains('active') ? '-' : '+';
}
function slide3() {
    const slide = document.getElementById('slide3');
    const toggle = document.getElementById('h1-3');

    slide.classList.toggle('active');

    toggle.textContent = slide.classList.contains('active') ? '-' : '+';
}
function slide4() {
    const slide = document.getElementById('slide4');
    const toggle = document.getElementById('h1-4');

    slide.classList.toggle('active');

    toggle.textContent = slide.classList.contains('active') ? '-' : '+';
}
function slide5() {
    const slide = document.getElementById('slide5');
    const toggle = document.getElementById('h1-5');

    slide.classList.toggle('active');

    toggle.textContent = slide.classList.contains('active') ? '-' : '+';
}
function slide6() {
    const slide = document.getElementById('slide6');
    const toggle = document.getElementById('h1-6');

    slide.classList.toggle('active');

    toggle.textContent = slide.classList.contains('active') ? '-' : '+';
}
function slide7() {
    const slide = document.getElementById('slide7');
    const toggle = document.getElementById('h1-7');

    slide.classList.toggle('active');

    toggle.textContent = slide.classList.contains('active') ? '-' : '+';
}

const movieData = [
    {
      img: 'images/movieicon1.jpg',
      title: 'Thank You Next',
      tags: ['2025', '16+', 'Show', 'Comedies', 'Romance', 'Dramas'],
      description: 'After a painful breakup, a young lawyer dives head first into the confusing world of modern dating, with the unwavering support of her best friends.'
    },
    {
      img: 'images/movieicon9.jpg',
      title: 'Emily In Paris',
      tags: ['2024', '16+', 'Romance', 'Dramas', 'Shows', 'Comedies'],
      description: 'New passions. New fashions. New Emily? A plucky American marketing whiz spreads her wings in life and love after landing her dream job in Paris.'
    },
    {
      img: 'images/movieicon3.jpeg',
      title: 'Black Mirror',
      tags: ['2025', '16+', 'Show', 'Thrillers', 'Sci-Fi', 'Dramas'],
      description: 'Twisted tales run wild in this mind-bending anthology series that reveals humanitys worst traits, greatest innovations and more.'
    },
    {
      img: 'images/movieicon4.avif',
      title: 'You',
      tags: ['2025', '16+', 'Show', 'Mystery', 'Dramas'],
      description: 'A dangerously charming, obsessive man goes to extreme measures to insert himself into the lives of women who fascinate him.'
    },
    {
      img: 'images/movieicon5.jpg',
      title: 'Bad Influence',
      tags: ['2025', '16+', 'Movie', 'Thrillers', 'Romance', 'Drama'],
      description: 'An ex-con gets a fresh start when hired to protect a wealthy heiress from a stalker — but their chemistry is hard to resist as they grow closer.'
    },
    {
      img: 'images/movieicon6.jpg',
      title: 'Squid Gmae',
      tags: ['2024', '16+', 'Shows', 'Dramas', 'Thrillers'],
      description: 'Hundreds of cash-strapped players accept a strange invitation to compete in childrens games. Inside, a tempting prize awaits — with deadly high stakes.'
    },
    {
      img: 'images/movieicon7.png',
      title: 'Adolescence',
      tags: ['2025', '16+', 'Thrillers', 'Show', 'Dramas'],
      description: 'When a 13-year-old is accused of the murder of a classmate, his family, therapist and the detective in charge are all left asking: what really happened?'
    },
    {
      img: 'images/movieicon8.jpg',
      title: 'Havoc',
      tags: ['2025', '16+', 'Movie', 'Thrillers', 'Action'],
      description: 'When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt citys criminal underworld to save a politicians son.'
    },
    {
      img: 'images/movieicon2.jpg',
      title: 'Love Death Robots',
      tags: ['2025', '18+', 'Show', 'Horror', 'Action', 'Thrilles', 'Sci-Fi'],
      description: 'Terrifying creatures, wicked surprises and dark comedy converge in this NSFW anthology of animated stories presented by Tim Miller and David Fincher.'
    },
    {
      img: 'images/movieicon10.jpg',
      title: 'Rotten Legact',
      tags: ['2025', '18+', 'Thrillers', 'Drama'],
      description: 'After a grave illness, a media mogul discovers his childrens tactics threaten the empire he carefully built — and hell do whatever it takes to save it.'
    }
  ];

  window.openChoose = function(index) {
  const movie = movieData[index];
  
  document.getElementById('modalImage').src = movie.img;
  document.getElementById('modalTitle').innerText = movie.title;

  const tagsContainer = document.getElementById('modalTags');
  tagsContainer.innerHTML = ''; 
  movie.tags.forEach(tag => {
    const tagElement = document.createElement('p');
    tagElement.textContent = tag;
    tagsContainer.appendChild(tagElement);
        });

  document.getElementById('modalDescription').innerText = movie.description;
  document.getElementById('choose').classList.remove('close1');
    };

  window.closeChoose = function() {
  document.getElementById('choose').classList.add('close1');
    };


    function login() {
      const emailInput = document.getElementById('regEmail');
      const email = emailInput.value.trim();
      const text = document.getElementById('p1');

      text.textContent = '';

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (email === '') {
        text.textContent = "Email is required.";
        emailInput.style.color = "red";
        emailInput.style.border = '1px solid red'
      } else if (!emailPattern.test(email)) {
        text.textContent = "Please enter a valid email address.";
        emailInput.style.border = '1px solid red'
      }
    }