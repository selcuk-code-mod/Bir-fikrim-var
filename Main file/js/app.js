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
  if (!carouselDom) return; // Eğer carousel yoksa çık

  let SliderDom = carouselDom.querySelector(".list");
  if (!SliderDom) return; // Eğer slider listesi yoksa çık

  let thumbnailItemsDom = SliderDom.querySelectorAll(".item");
  if (thumbnailItemsDom.length === 0) return; // Eğer thumbnail öğesi yoksa çık

  let currentIndex = 0; // Başlangıçta ilk index

  // İlk açılışta ilk resmi göster
  updateSlider();

  // "next" butonuna tıklama olayı
  if (nextDom) {
    nextDom.onclick = function () {
      currentIndex = (currentIndex + 1) % thumbnailItemsDom.length; // Sonraki index
      updateSlider();
    };
  }

  // "prev" butonuna tıklama olayı
  if (prevDom) {
    prevDom.onclick = function () {
      currentIndex =
        (currentIndex - 1 + thumbnailItemsDom.length) %
        thumbnailItemsDom.length; // Önceki index
      updateSlider();
    };
  }

  function updateSlider() {
    // Tüm slaytları pasif yap
    thumbnailItemsDom.forEach((item) => {
      item.classList.remove("active"); // Tüm slaytları pasif yap
      item.style.opacity = 0; // Opaklığı sıfırla
    });

    // Güncel slaytı ekle
    let currentSlide = thumbnailItemsDom[currentIndex]; // Aktif slaytı al
    currentSlide.classList.add("active"); // Aktif slaytı göster

    // Opaklığı yavaşça artır
    setTimeout(() => {
      currentSlide.style.opacity = 1; // Aktif slaytın opaklığını artır
    }, 50); // Kısa bir gecikme ile opaklığı artır
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

paginationLinks.forEach((link) => link.addEventListener("click", activeLink));

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("basvurModal");
  const basvurBtn = document.getElementById("basvurButton");
  const floatingButton = document.getElementById("floatingButton");
  const iconBtn = document.getElementById("iconButton");
  const closeModalButton = document.getElementsByClassName("close")[0];

  function openModal() {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.style.opacity = "0";
    setTimeout(() => {
      modal.style.display = "none";
      modal.style.opacity = "1";
      document.body.style.overflow = "auto";
    }, 300);
  }

  if (iconBtn) {
    iconBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("İkon butonuna tıklandı");
      openModal();
    });
  } else {
    console.log("İkon butonu bulunamadı");
  }

  if (basvurBtn) {
    basvurBtn.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  }

  if (floatingButton) {
    floatingButton.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  }

  if (closeModalButton) {
    closeModalButton.addEventListener("click", closeModal);
  }

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});

$(document).ready(function () {
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

document.addEventListener("DOMContentLoaded", async function () {
  const apiUrl = "https://dash.eterna.net.tr/api/public/personals";
  const teamContainer = document.getElementById("team");

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    let carouselItemHTML = "";
    const totalCards = data.data.length; // Gerçek kart sayısı
    const cardsPerRow = 4; // Her satırda gösterilecek kart sayısı
    const totalRows = Math.ceil(totalCards / cardsPerRow); // Toplam satır sayısı

    const referenceCard = totalCards >= 15 ? data.data[14] : null;

    for (let row = 0; row < totalRows; row++) {
      carouselItemHTML += `<div class="carousel-item ${
        row === 0 ? "active" : ""
      }"><div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">`;

      for (let col = 0; col < cardsPerRow; col++) {
        const index = row * cardsPerRow + col;

        if (index < totalCards) {
          const person = data.data[index];
          const cardHTML = `
            <div class="col">
              <div class="card-team h-100 border-0">
                <img src="${
                  person.avatar_300
                }" class="card-img-top img-fluid" alt="${person.full_name}">
                <div class="card-body">
                  <ul class="social-links professional-hideLink">
                    <li><a href="${
                      person.facebook || "#"
                    }" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="${
                      person.instagram || "#"
                    }" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="${
                      person.linkedin || "#"
                    }" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                  <button class="share-btn border-0 share-button">
                    <i class="bi bi-plus"></i>
                  </button>
                  <div class="info mt-1 px-2 py-3">
                    <a href="team-details.html">
                      <h5 class="card-title tow text-white m-0">${
                        person.full_name
                      }</h5>
                    </a>
                    <p class="card-text text-white">${person.title}</p>
                  </div>
                </div>
              </div>
            </div>
          `;
          carouselItemHTML += cardHTML; // Gerçek kartı ekle
        } else {
          // Boş alan için 20. veriyi ekle
          if (referenceCard) {
            const placeholderHTML = `
              <div class="col">
                <div class="card-team h-100 border-0">
                  <img src="${
                    referenceCard.avatar_300
                  }" class="card-img-top img-fluid" alt="${
              referenceCard.full_name
            }">
                  <div class="card-body">
                    <ul class="social-links professional-hideLink">
                      <li><a href="${
                        referenceCard.facebook || "#"
                      }" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="${
                        referenceCard.instagram || "#"
                      }" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a></li>
                      <li><a href="${
                        referenceCard.linkedin || "#"
                      }" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                    <button class="share-btn border-0 share-button">
                      <i class="bi bi-plus"></i>
                    </button>
                    <div class="info mt-1 px-2 py-3">
                      <a href="team-details.html">
                        <h5 class="card-title tow text-white m-0">${
                          referenceCard.full_name
                        }</h5>
                      </a>
                      <p class="card-text text-white">${referenceCard.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            `;
            carouselItemHTML += placeholderHTML; // 20. veriyi ekle
          }
        }
      }

      carouselItemHTML += `</div></div>`; // Satırı kapat
    }

    teamContainer.innerHTML = carouselItemHTML; // Kartları göster

    const shareButtons = document.querySelectorAll(".share-button");
    shareButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const socialLinks = this.parentElement.querySelector(".social-links");
        socialLinks.classList.toggle("visible");
      });
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
});

const carousel = new bootstrap.Carousel(document.getElementById("teamSlider"), {
  wrap: true,
});

carousel.to(0);

let calcScrollValueTwo = () => {
  const floatingButton = document.getElementById("floatingButton");
  const pos = document.documentElement.scrollTop;

  if (pos > 100) {
    floatingButton.style.display = "flex";
  } else {
    floatingButton.style.display = "none";
  }
};

const applyButton = document.getElementById("applyButton");
applyButton.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", calcScrollValueTwo);
window.addEventListener("load", calcScrollValueTwo);
