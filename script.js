function openSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}


const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".slider-container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;
    
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    
    }

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    
      
    
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });
  
  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });


  const handleSlideButtons = () =>{
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  }

  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
   }

  imageList.addEventListener("scroll", () => {
    handleSlideButtons();
    updateScrollThumbPosition();
  });
}

window.addEventListener("load", initSlider);



locationImg = document.querySelector('.location');

locationImg.addEventListener("click", ()=>{
  window.location.href='https://maps.app.goo.gl/jRjsRQtPJr1iSqqA7';
});

function scrollToElement(elementSelector, instance = 0) {
  // Select all elements that match the given selector
  const elements = document.querySelectorAll(elementSelector);
  // Check if there are elements matching the selector and if the requested instance exists
  if (elements.length > instance) {
      // Scroll to the specified instance of the element
      elements[instance].scrollIntoView({ behavior: 'smooth' });
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");

link1.addEventListener('click', () => {
  scrollToElement('.about-container');
});

link2.addEventListener('click', () => {
  // Scroll to the second element with "header" class
  scrollToElement('.benefits');
});

link3.addEventListener('click', () => {
  scrollToElement('.slider-container');
});

link4.addEventListener('click', () => {
  scrollToElement('.team');
});

link5.addEventListener('click', () => {
  scrollToElement('.contacts');
});

const link6 = document.getElementById("link6");
const link7 = document.getElementById("link7");
const link8 = document.getElementById("link8");
const link9 = document.getElementById("link9");
const link10 = document.getElementById("link10");
const link11 = document.getElementById("link11");
const link12 = document.getElementById("link12");

link6.addEventListener('click', () => {
  scrollToElement('.about-container');
});

link7.addEventListener('click', () => {
  // Scroll to the second element with "header" class
  scrollToElement('.benefits');
});

link8.addEventListener('click', () => {
  scrollToElement('.slider-container');
});

link9.addEventListener('click', () => {
  scrollToElement('.team');
});

link10.addEventListener('click', () => {
  scrollToElement('.contacts');
});

link11.addEventListener('click', () => {
  scrollToElement('.slider-container');
});

link12.addEventListener('click', () => {
  scrollToElement('.slider-container');
});




const link13 = document.getElementById("link13");
const link14 = document.getElementById("link14");
const link15 = document.getElementById("link15");
const link16 = document.getElementById("link16");
const link17 = document.getElementById("link17");
const link18 = document.getElementById("link18");
const link19 = document.getElementById("link19");

link13.addEventListener('click', () => {
  scrollToElement('.about-container');
});

link14.addEventListener('click', () => {
  // Scroll to the second element with "header" class
  scrollToElement('.benefits');
});

link15.addEventListener('click', () => {
  scrollToElement('.slider-container');
});

link16.addEventListener('click', () => {
  scrollToElement('.team');
});

link17.addEventListener('click', () => {
  scrollToElement('.contacts');
});

