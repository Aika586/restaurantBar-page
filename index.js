const textContainer1 = document.getElementsByClassName("text-container1")[0];
const textContainer2 = document.getElementsByClassName("text-container2")[0];
const sliderContainer = document.getElementsByClassName("swiper-wrapper")[0];
const uls = document.querySelectorAll(".phone-list,.email-list");
const socialMediaContainer=document.getElementsByClassName('socialMedia-list')[0]






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
createTextList(textContainer1);
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
  const sliderItem = document.createElement("div");
  sliderItem.classList.add("swiper-slide");
  img.src = src;
  img.classList.add("images");
  img.alt = "Image " + (i + 1);
  sliderItem.appendChild(img);
  sliderContainer.appendChild(sliderItem);
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    slidesPerGroup: 4, // Adjust the number of slides per view as needed
    spaceBetween: 50,
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next", // If you need navigation buttons
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000, // Adjust the autoplay delay (in milliseconds) as needed
      disableOnInteraction: false, // Allow autoplay to continue after user interaction
    },
  });
});

// FORM _SECTION !!!!!!

document
  .getElementById("reservation-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("custumer_name").value;
    const phone = document.getElementById("phone_number").value;

    const phonePattern = /^\+996\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/;
    const namePattern = /^[a-zA-Zа-яА-Я\s]+$/;
    if (!phonePattern.test(phone)) {
      alert("Пожалуйста, введите корректный формат телефона.");
      return;
    }

    if (!namePattern.test(name)) {
      alert("Пожалуйста, введите корректное имя.");
      return;
    }

    alert("Вы успешно отправили заявку!!!");
  });

//FOOTER SECTION!!!!!

const phoneList = [
  "/ Позвоните нам",
  "+996 501 06 55 05",
  "+996 501 06 55 05",
  "+996 501 06 55 05",
];
const emailList = [
  "/ Пищите нам",
  "боно2gmail.com",
  "боно2gmail.com",
  "боно2gmail.com",
];
const socialMedias = [
  { iconSrc: "./assets/icons/Group.png", link: "https://www.instagram.com" },
  { iconSrc: "./assets/icons/Telegram.png", link: "https://www.instagram.com" },
  { iconSrc: "./assets/icons/Facebook.png", link: "https://www.facebook.com" },
  { iconSrc: "./assets/icons/TikTok.png", link: "https://www.TikTok.com" },
  { iconSrc: "./assets/icons/SVG.png", link: "https://www.youtube.com" }
];

const ulListCreator = (textList, element) => {
  textList.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    element.appendChild(li);
  });
};
ulListCreator(phoneList, uls[0]);
ulListCreator(emailList, uls[1]);

socialMedias.forEach(media=>{
  const li=document.createElement("li")
  const a=document.createElement("a")
  const img=document.createElement("img")
  a.appendChild(img);
  li.appendChild(a);
  a.href=media.link;
  a.target="_blank";
  a.rel='noopener noreferrer';
  img.src=media.iconSrc;
  
  socialMediaContainer.append(li)
 
})
