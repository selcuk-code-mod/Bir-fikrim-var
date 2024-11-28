// =====AOS animation=====
AOS.init({
  offset: 120,
  delay: 0,
  duration: 2000,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

// =====Banner circle and text=====
function applyTextRotation(selector, degree) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = element.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * degree}deg)">${char}</span>`
      )
      .join("");
  }
}

// Apply rotation to the desired elements
applyTextRotation(".animated-circle.bannerOne .text p", 8.3);
applyTextRotation(".animated-circle.about .text p", 8.3);
applyTextRotation(".animated-circle.footer .text p", 8.3);
applyTextRotation(".animated-circle.home-two .text p", 8.3);

// =====Home one Video section=====
document.addEventListener("DOMContentLoaded", function () {
  var playButtons = document.querySelectorAll(".play-button");

  playButtons.forEach(function (playButton) {
    var video = playButton.previousElementSibling;

    // Video bittiğinde poster'ı göster
    video.addEventListener("ended", function () {
      video.load(); // Video'yu resetle ve poster'ı göster
      playButton.textContent = "PLAY";
    });

    playButton.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        playButton.textContent = "STOP";
      } else {
        video.pause();
        playButton.textContent = "PLAY";
      }
    });

    video.addEventListener("pause", function () {
      playButton.textContent = "PLAY";
    });

    video.addEventListener("play", function () {
      playButton.textContent = "STOP";
    });
  });
});

// =====Amazing Work=====
document.addEventListener("DOMContentLoaded", function () {
  let nextDom = document.getElementById("next");
  let prevDom = document.getElementById("prev");

  let carouselDom = document.querySelector(".carousel");
  if (!carouselDom) return; // Exit if there is no carousel on the page

  let SliderDom = carouselDom.querySelector(".list");
  if (!SliderDom) return; // Exit if there is no slider list

  let thumbnailBorderDom = document.querySelector(".thumbnail");
  if (!thumbnailBorderDom) return; // Exit if there is no thumbnail border

  let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
  if (thumbnailItemsDom.length === 0) return; // Exit if there are no thumbnail items

  let timeDom = document.querySelector(".time");

  thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
  let timeRunning = 3000;
  let timeAutoNext = 7000;

  if (nextDom) {
    nextDom.onclick = function () {
      showSlider("next");
    };
  }

  if (prevDom) {
    prevDom.onclick = function () {
      showSlider("prev");
    };
  }

  let runTimeOut;
  let runNextAuto = setTimeout(() => {
    if (nextDom) nextDom.click();
  }, timeAutoNext);

  function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll(".item");
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

    if (type === "next") {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add("next");
    } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      carouselDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      if (nextDom) nextDom.click();
    }, timeAutoNext);
  }
});

// =====Meet Our Professional section=====
var shareButtons = document.querySelectorAll(".share-button");
var socialLinksList = document.querySelectorAll(".social-links");

shareButtons.forEach(function (shareButton, index) {
  shareButton.addEventListener("click", function () {
    socialLinksList[index].classList.toggle("professional-hideLink");
  });
});

// =====Google Maps Api=====
function initMap() {
  let mapOptions = {
    center: { lat: 51.50852519215726, lng: -0.13461554383087837 },
    zoom: 12,
  };
  let map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // infoWindow
  let marker = new google.maps.Marker({
    position: { lat: 51.50852519215726, lng: -0.13461554383087837 },
    map: map,
  });
  const infoWindowOptions = {
    position: { lat: 51.50852519215726, lng: -0.13461554383087837 },
    pixelOffset: new google.maps.Size(-40, 10),
  };
  const infoWindow = new google.maps.InfoWindow(infoWindowOptions);
  infoWindow.setContent(`
      <div class="first-title"> <h4>Global Locations</h4></div>
    
      <div class="all-location">
        <div class="location-card">
            <div class="location-header" onclick="toggleDetails('london')">
                <span>London Office</span>
                <span class="toggle-button" id="london-button">+</span>
            </div>
            <div class="location-details" id="london-details">                     
              <p>Phone:
                <a class="text-white" href="tel:+1999806915">+199(980) 6915</a>
              </p>
              <p>Email:  
                <a class="text-white" href="mailto:shifamoni@gmail.com">shifamoni@gmail.com</a>
              </p>
              <p>Address: 2709 Beverley Rd Brooklyn Nm</p>
              <p>Hours: Fri-Mon: 6am - 9pm</p>
            </div>
        </div>

        <div class="location-card">
            <div class="location-header" onclick="toggleDetails('berlin')">
                <span>Berlin Office</span>
                <span class="toggle-button" id="berlin-button">+</span>
            </div>
            <div class="location-details" id="berlin-details">
                <p>Phone:
                <a class="text-white" href="tel:+1999806915">+199(980) 6915</a>
              </p>
              <p>Email:  
                <a class="text-white" href="mailto:shifamoni@gmail.com">shifamoni@gmail.com</a>
              </p>
              <p>Address: 2709 Beverley Rd Brooklyn Nm</p>
              <p>Hours: Fri-Mon: 6am - 9pm</p>
            </div>
        </div>

        <div class="location-card">
            <div class="location-header" onclick="toggleDetails('bangladesh')">
                <span>Bangladesh Office</span>
                <span class="toggle-button" id="bangladesh-button">+</span>
            </div>
            <div class="location-details" id="bangladesh-details">
                <p>Phone:
                <a class="text-white" href="tel:+1999806915">+199(980) 6915</a>
              </p>
              <p>Email:  
                <a class="text-white" href="mailto:shifamoni@gmail.com">shifamoni@gmail.com</a>
              </p>
              <p>Address: 2709 Beverley Rd Brooklyn Nm</p>
              <p>Hours: Fri-Mon: 6am - 9pm</p>
            </div>
        </div>

      </div>     
    `);

  const infoWindowOpenOptions = {
    map: map,
    anchor: marker,
    shouldFocus: false,
  };

  infoWindow.open(infoWindowOpenOptions);
}
function toggleDetails(location) {
  // Hide all location details
  var allDetails = document.querySelectorAll(".location-details");
  var allButtons = document.querySelectorAll(".toggle-button");

  allDetails.forEach(function (details) {
    details.style.display = "none";
  });

  allButtons.forEach(function (button) {
    button.textContent = "+";
  });

  // Show the selected location details
  var details = document.getElementById(location + "-details");
  var button = document.getElementById(location + "-button");

  if (details.style.display === "block") {
    details.style.display = "none";
    button.textContent = "+";
  } else {
    details.style.display = "block";
    button.textContent = "-";
  }
}

//     <div class="location-card">
//         <div class="location-header" onclick="toggleDetails('london')">
//             <span>London Office</span>
//             <span class="toggle-button" id="london-button">+</span>
//         </div>
//         <div class="location-details" id="london-details">
//             <!-- Details for London Office -->
//         </div>
//     </div>
//     <div class="location-card">
//         <div class="location-header" onclick="toggleDetails('berlin')">
//             <span>Berlin Office</span>
//             <span class="toggle-button" id="berlin-button">-</span>
//         </div>
//         <div class="location-details" id="berlin-details">
//             <p>Phone: 01063914760</p>
//             <p>Email: info@comesupercheroes.com</p>
//             <p>Address: 2709 Beverley Rd Brooklyn Nm</p>
//             <p>Hours: Fri-Mon: 6am - 9pm</p>
//         </div>
//     </div>
//     <div class="location-card">
//         <div class="location-header" onclick="toggleDetails('bangladesh')">
//             <span>Bangladesh Office</span>
//             <span class="toggle-button" id="bangladesh-button">+</span>
//         </div>
//         <div class="location-details" id="bangladesh-details">
//             <!-- Details for Bangladesh Office -->
//         </div>
//     </div>
// </div>

// function toggleDetails(location) {
//   var details = document.getElementById(location + "-details");
//   var button = document.getElementById(location + "-button");
//   if (details.style.display === "block") {
//     details.style.display = "none";
//     button.textContent = "+";
//   } else {
//     details.style.display = "block";
//     button.textContent = "-";
//   }
// }

// =====Back to Button=====
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");

  let pos = document.documentElement.scrollTop;

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#cf8a17 ${scrollValue}%, #fff ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// =====counting numbers Home two=====
document.addEventListener("DOMContentLoaded", function () {
  function startCounter(elementId, endCount, duration) {
    const element = document.getElementById(elementId);
    if (element) {
      let count = 0;
      const increment = endCount / ((duration / 1000) * 60);
      const interval = 1000 / 60;

      const intervalId = setInterval(() => {
        count += increment;
        if (count >= endCount) {
          count = endCount;
          clearInterval(intervalId);
        }
        element.textContent = Math.ceil(count);
      }, interval);
    }
  }

  const counters = [
    { id: "more-reviews", endCount: 2, duration: 2000 },
    { id: "counting-one", endCount: 3900, duration: 8000 },
    { id: "counting-two", endCount: 39, duration: 4000 },
    { id: "award-number", endCount: 22, duration: 3000 },
    { id: "rating-number-business", endCount: 90, duration: 7000 },
    { id: "rating-number-happy", endCount: 80, duration: 6000 },
    { id: "project-number", endCount: 25, duration: 6000 },
    { id: "award-number-two", endCount: 45, duration: 10000 },
    { id: "customer-number", endCount: 30, duration: 7000 },
    { id: "team-number", endCount: 40, duration: 8000 },
    { id: "rating-number-product", endCount: 70, duration: 5000 },
    { id: "rating-number-tech", endCount: 60, duration: 4000 },
    { id: "rating-number-customer", endCount: 80, duration: 6000 },
    { id: "rating-number-network", endCount: 50, duration: 3000 },
    { id: "rating-number-communi", endCount: 90, duration: 7000 },
  ];

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = counters.find(
            (counter) => counter.id === entry.target.id
          );
          if (counter) {
            startCounter(counter.id, counter.endCount, counter.duration);
            observer.unobserve(entry.target); // Stop observing once the animation has started
          }
        }
      });
    },
    { threshold: 0.1 }
  ); // Adjust the threshold as needed

  counters.forEach((counter) => {
    const element = document.getElementById(counter.id);
    if (element) {
      observer.observe(element);
    }
  });
});

// =====window Video Popup Modal Plugin=====
document.addEventListener("DOMContentLoaded", function () {
  const hideAOSAnimation = document.querySelector(".hideAOSAnimation");
  const btn = document.querySelector(".btn");
  const clip = document.querySelector(".clip");
  const close = document.querySelector(".close");
  const video = document.querySelector("video");

  if (btn && clip && close && video && hideAOSAnimation) {
    btn.onclick = function () {
      hideAOSAnimation.removeAttribute("data-aos");
      btn.classList.add("active");
      clip.classList.add("active");
      video.play();
      video.currentTime = 0;
    };

    close.onclick = function () {
      hideAOSAnimation.setAttribute("data-aos", "fade-up");
      btn.classList.remove("active");
      clip.classList.remove("active");
      video.pause();
    };
  }
});

/* =====filter Project ===== */
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
  document.querySelector("#filter-buttons .active").classList.remove("active");
  e.target.classList.add("active");

  filterableCards.forEach((card) => {
    // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
    if (
      card.dataset.name === e.target.dataset.filter ||
      e.target.dataset.filter === "all"
    ) {
      return card.classList.replace("hide", "show");
    }
    card.classList.add("hide");
  });
};

filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);

// =====textillate-master=====
$(".tlt").textillate({
  // the default selector to use when detecting multiple texts to animate
  selector: ".texts",

  // enable looping
  loop: false,

  // sets the minimum display time for each text before it is replaced
  minDisplayTime: 2000,

  // sets the initial delay before starting the animation
  // (note that depending on the in effect you may need to manually apply
  // visibility: hidden to the element before running this plugin)
  initialDelay: 0,

  // set whether or not to automatically start animating
  autoStart: true,

  // custom set of 'in' effects. This effects whether or not the
  // character is shown/hidden before or after an animation
  inEffects: [],

  // custom set of 'out' effects
  outEffects: ["hinge"],

  // in animation settings
  in: {
    // set the effect name
    effect: "fadeInLeft",

    // set the delay factor applied to each consecutive character
    delayScale: 1.5,

    // set the delay between each character
    delay: 50,

    // set to true to animate all the characters at the same time
    sync: false,

    // randomize the character sequence
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: false,

    // reverse the character sequence
    // (note that reverse doesn't make sense with sync = true)
    reverse: false,

    // callback that executes once the animation has finished
    callback: function () {},
  },

  // out animation settings.
  out: {
    effect: "hinge",
    delayScale: 1.5,
    delay: 50,
    sync: false,
    shuffle: false,
    reverse: false,
    callback: function () {},
  },

  // callback that executes once textillate has finished
  callback: function () {},

  // set the type of token to animate (available types: 'char' and 'word')
  type: "char",
});

// =====Project Gallery=====
document.querySelectorAll(".zoom-in").forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.closest(".image-wrapper").querySelector("img");
    let scale = getComputedStyle(img).transform.match(/matrix\(([^,]*),/);
    scale = scale ? parseFloat(scale[1]) + 0.5 : 1.1;
    img.style.transform = `scale(${scale})`;
  });
});

document.querySelectorAll(".zoom-out").forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.closest(".image-wrapper").querySelector("img");
    let scale = getComputedStyle(img).transform.match(/matrix\(([^,]*),/);
    scale = scale ? parseFloat(scale[1]) - 0.5 : 1;
    if (scale > 1) {
      img.style.transform = `scale(${scale})`;
    }
  });
});

// =====Testimonials Section=====
$(".testimonial-slider").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  slickGoTo: 0,
  speed: 4000,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// =====Blog Pagination=====

let paginationLinks = document.querySelectorAll(".link");
let blogCards = document.querySelectorAll(".blog-card");
let currentValueBlog = 1;
function activeLink(event) {
  if (event && event.currentTarget) {
    paginationLinks.forEach((link) => link.classList.remove("active-link"));
    event.currentTarget.classList.add("active-link");
    currentValueBlog = parseInt(event.currentTarget.getAttribute("value"));
    blogCards.forEach((card) => card.classList.remove("blog-active"));
    blogCards[currentValueBlog - 1].classList.add("blog-active");
  }
}
function backBtn() {
  if (currentValueBlog > 1) {
    currentValueBlog--;
    updatePagination();
  }
}
function nextBtn() {
  if (currentValueBlog < paginationLinks.length) {
    currentValueBlog++;
    updatePagination();
  }
}
function updatePagination() {
  paginationLinks.forEach((link) => link.classList.remove("active-link"));
  paginationLinks[currentValueBlog - 1].classList.add("active-link");
  blogCards.forEach((card) => card.classList.remove("blog-active"));
  blogCards[currentValueBlog - 1].classList.add("blog-active");
}
// Add event listeners to the pagination links
paginationLinks.forEach((link) => link.addEventListener("click", activeLink));

document.addEventListener("DOMContentLoaded", function () {
  // Tüm gerekli elementleri seçelim
  const modal = document.getElementById("basvurModal");
  const basvurBtn = document.getElementById("basvurButton");
  const iconBtn = document.getElementById("iconButton");
  const span = document.getElementsByClassName("close")[0];

  // İkon butonuna tıklama olayı
  if (iconBtn) {
    iconBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("İkon butonuna tıklandı"); // Test için
      openModal();
    });
  } else {
    console.log("İkon butonu bulunamadı"); // Hata tespiti için
  }

  // Başvur butonuna tıklama olayı
  if (basvurBtn) {
    basvurBtn.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  }

  // Modal açma fonksiyonu
  function openModal() {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  // Modal kapatma olayları
  if (span) {
    span.addEventListener("click", closeModal);
  }

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      closeModal();
    }
  });

  // Modal kapatma fonksiyonu
  function closeModal() {
    modal.style.opacity = "0";
    setTimeout(() => {
      modal.style.display = "none";
      modal.style.opacity = "1";
      document.body.style.overflow = "auto";
    }, 300);
  }
});

$(document).ready(function () {
  $(".team-slider").slick({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  // Mevcut team-slider konfigürasyonu...

  // Quotes slider konfigürasyonu
  $(".quotes-slider").slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
