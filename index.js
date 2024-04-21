const textContainer1 = document.getElementsByClassName("text-container1")[0];
const textContainer2 = document.getElementsByClassName("text-container2")[0];
const sliderContainer=document.getElementsByClassName("swiper-wrapper")[0];

//CREATE A TEXT CONTAINER
const createTextList = (element) => {
  textData.forEach((data) => {
    const li = document.createElement("li");
    li.classList.add = "li";
    const p = document.createElement("p");
    p.classList.add = "title";
    const img = document.createElement("img");
    const label = document.createElement("span");
    const span = document.createElement("p");
    img.src = data.src;
    label.textContent = data.title;
    span.textContent = data.text;
    p.append(img, label);
    li.append(p, span);
    element.appendChild(li);
  });
};
createTextList( textContainer1);
createTextList(textContainer2);
//create gallery container
const imgSrc = [
  "./assets/gallery/1.png",
  "./assets/gallery/2.png",
  "./assets/gallery/3.png",
  "./assets/gallery/4.png",
  "./assets/gallery/1.png",
  "./assets/gallery/2.png",
  "./assets/gallery/3.png",
  "./assets/gallery/4.png",

];

  imgSrc.forEach((src, i) => {
    const img = document.createElement("img");
    const sliderItem=document.createElement("div")
    sliderItem.classList.add("swiper-slide")
    img.src = src;
    img.classList.add('images')
    img.alt = "Image " + (i + 1);
    sliderItem.appendChild(img);
    sliderContainer.appendChild(sliderItem)
  });

  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      slidesPerGroup: 4, // Adjust the number of slides per view as needed
      spaceBetween: 50, 
      direction: 'horizontal',
      loop:true,
      navigation: {
        nextEl: '.swiper-button-next', // If you need navigation buttons
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000, // Adjust the autoplay delay (in milliseconds) as needed
        disableOnInteraction: false, // Allow autoplay to continue after user interaction
      },
    });
    console.log(swiper)
  });

  // FORM _SECTION !!!!!!





