document.addEventListener("DOMContentLoaded", function() {
  const slides = ["slide1", "slide2", "slide3", "slide4", "slide5"];
  let currentSlide = 0;

  function showSlide(index){
      for(const slide of slides){
          document.querySelector("#headerSlide").classList.remove(slide);
      }
      document.querySelector("#headerSlide").classList.add(slides[index]);
  }

  function nextSlide(){
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 7000);

  function menuBurger() {
      let burger = document.querySelector(".burger");
      if(window.innerWidth <= 700) {
          burger.classList.remove("hidden");
      } else {
          burger.classList.add("hidden");
      }
  }

  window.onload = menuBurger ;
  window.onresize = menuBurger;

  const burger = document.querySelector(".burger");
  burger.onclick = function () {
      const buttons = document.querySelectorAll(".button");
      for (const button of buttons) {
          button.classList.toggle("active");
      }
  }

  document.querySelector("#headerSlide").addEventListener("click", nextSlide);

  const PHOTO_LIST = [
      "mhw2-img/maglietta1.jpeg",
      "mhw2-img/maglietta2.jpeg",
      "mhw2-img/maglietta3.jpeg"
  ];

  function createImage(src) {
      const image = document.createElement("img");
      image.src = src;
      return image;
  }

  const albumView = document.querySelector("#album-view");
  for(const photoSrc of PHOTO_LIST) {
      const image = createImage(photoSrc);
      image.addEventListener("click", onThumbnailClick);
      albumView.appendChild(image);
  }

  function onThumbnailClick (event){
      const image = createImage(event.currentTarget.src);
      document.body.classList.add("no-scroll");
      modalView.style.top = window.pageYOffset + "px";
      modalView.appendChild(image);
      modalView.classList.remove("hidden-modal");
  }

  function onModalClick () {
      document.body.classList.remove("no-scroll");
      modalView.classList.add("hidden-modal");
      modalView.innerHTML = "";   
  }

  const modalView = document.querySelector("#modal-view");
  modalView.addEventListener("click", onModalClick);

  const footer = document.getElementById('footer-data');
  const vediAltroButton = document.getElementById('vedi-altro');

  vediAltroButton.addEventListener('click', function() {
      const isHidden = footer.dataset.hidden === "true";
      if (isHidden) {
          footer.dataset.hidden = "false";
          footer.style.display = 'block';
          vediAltroButton.textContent = 'Nascondi';
      } else {
          footer.dataset.hidden = "true";
          footer.style.display = 'none';
          vediAltroButton.textContent = 'Vedi altro';
      }
  });
});