//header
const burger = document.querySelector(".hamburger");
const navList = document.querySelector(".header_list");
burger.addEventListener("click", openNav);
function openNav() {
  burger.classList.toggle("active");
  navList.classList.toggle("active");
}
//backgound span
let list = document.querySelector(".header_list");
Array.from(list.children).forEach((element) => {
  element.addEventListener("click", function (event) {
    headerListEventHandler(event);
  });
});
let span = document.querySelector(".header_span");
function headerListEventHandler(context) {
  let contextItem = context.target;
  let items = document.querySelectorAll(".header_list .header_item a");
  if (!items) return;

  for (let i = 0; i < items.length; i++) {
    if (contextItem == items[i]) {
      items[i].classList.add("active");
      let spanElem = contextItem.previousSibling.previousSibling;
      console.log(spanElem);
      if (spanElem) spanElem.classList.add("active");
      continue;
    }
    items[i].classList.remove("active");

    let spanElem = items[i].previousSibling.previousSibling;
    if (spanElem) spanElem.classList.remove("active");
  }
}

//top-splide
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide("#top-splide", {
    direction: "ttb",
    drag: false,
    cover: true,
    heightRatio: 0.6,
    paginationDirection: "ttb",
    arrows: false,
    autoplay: true,
    interval: 4000,
    speed: 2000,
    classes: {
      arrows: "splide__arrows hero-class-arrows",
      pagination: "splide__pagination header-class-pagination",
      page: "splide__pagination__page header-class-page",
    },
  });
  //news
  let splideNews = new Splide("#splide", {
    type: "loop",
    fixedWidth: "370px",
    autoplay: true,
    interval: 3000,
    perPage: 3,
    perMove: 1,
    classes: {
      pagination: "splide__pagination news-class-pagination",
      page: "splide__pagination__page header-class-page",
    },
  });

  splide.mount();
  splideNews.mount();
});
//gallery
let ul = document.querySelector(".gallery_list");
let largeImg = document.querySelector(".gallery_image__large");
ul.addEventListener("click", showImg);
function showImg(event) {
  if (event.target.closest("a")) {
    event.preventDefault();
    largeImg.src = event.target.closest("a").href;
  }
}
let a = document.querySelector(".gallery_image__link");
let galleryImage = document.querySelector(".gallery_image");
let galleryFoto = document.querySelector(".gallery_foto");
a.addEventListener("click", () => {
  //a.classList.toggle('a');
  a.preventDefault();
  galleryFoto.style.position = "relative";
  galleryImage.style.background = "blue";
  galleryImage.style.position = "absolute";
});
//bigPhoto
let bigPhoto = document.querySelector('.gallery_image__big');
let bigBlock = document.querySelector('.gallery_image');
let gallery = document.querySelector('.gallery_list');
let sectionGallery = document.querySelector('#gallery')
bigPhoto.addEventListener('click', bigImage);
function bigImage(event){
  bigPhoto.classList.toggle('click');
  let clickOn = document.querySelector('.click');
  if(clickOn){
    bigBlock.style.width = '100%';
    bigBlock.style.margin = '0 auto';
    gallery.style.display = 'none';
    sectionGallery.style.background = "linear-gradient(243.43deg, #7e5aff 16.9%, #55b7ff 83.27%)";
  }else{
    bigBlock.style.width = '100%';
    gallery.style.display = "flex";
    gallery.style.flexWrap = 'wrap';
    sectionGallery.style.background = 'white';
  }
}
//form
let submit = document.querySelector(".modal_form > .modal_btn__submit");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  formHandler();
});
function formHandler() {
  let form = document.querySelector(".modal_form");
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("progress", updateProgress, false);
  oReq.addEventListener("load", transferComplete, false);
  oReq.addEventListener("error", transferFailed, false);
  oReq.addEventListener("abort", transferCanceled, false);

  oReq.open("post", "https://mocki.io/v1/156e1f69-83ef-4a0c-a6a0-e598cef8858e");
  let formData = new FormData(form);
  console.log(formData.keys);
  oReq.send(formData);
  
  function updateProgress(oEvent) {
    if (oEvent.lengthComputable) {
      var percentComplete = oEvent.loaded / oEvent.total;
    } else {
    }
  }

  function transferComplete(evt) {
    let inp = document.querySelectorAll(".modal_form__input");
    for (let i = 0; i < inp.length; i++) {
      if (!inp[i].value) {
        console.log(inp[i].value);
        return false;
      } else {
        alert("Ми відправили ваші данні.");
      }
    }
  }

  function transferFailed(evt) {
    alert("При відправці виникла помилка.");
  }

  function transferCanceled(evt) {
    alert("Користувач відмінив відправку.");
  }
}
