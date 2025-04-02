// Intro animation handler
document.addEventListener("DOMContentLoaded", function () {
  // Create enhanced cherry blossoms
  const createCherryBlossoms = () => {
    const container = document.getElementById("cherry-blossoms");
    const petalCount = 80; // Increased number of petals

    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement("div");

      // Randomly select petal type from 4 different types
      const petalType = Math.floor(Math.random() * 4) + 1;
      petal.className = `petal petal-${petalType}`;

      // Random position, delay, and duration for each petal
      const leftPos = Math.random() * 100; // random horizontal position
      const delay = Math.random() * 8; // random delay
      const duration = 6 + Math.random() * 10; // random duration between 6-16s
      const swayDuration = 3 + Math.random() * 5; // random sway duration

      petal.style.left = `${leftPos}%`;
      petal.style.animationDelay = `${delay}s`;
      petal.style.animationDuration = `${duration}s, ${swayDuration}s`;

      // Add slight rotation variation
      const rotation = Math.random() * 360;
      petal.style.transform = `rotate(${rotation}deg)`;

      container.appendChild(petal);
    }
  };

  createCherryBlossoms();

  // Elegant exit animation for intro
  setTimeout(function () {
    const introAnimation = document.getElementById("intro-animation");
    const mainContent = document.querySelector("main");

    // Add a small delay before starting the transition
    setTimeout(() => {
      // Add fade-out class to intro animation
      introAnimation.classList.add("fade-out");

      // Show main content with a slight delay for better transition
      setTimeout(() => {
        mainContent.classList.add("visible");
      }, 300);

      // Remove intro from DOM after animation completes
      setTimeout(function () {
        if (introAnimation && introAnimation.parentNode) {
          introAnimation.parentNode.removeChild(introAnimation);
        }
      }, 1500); // Longer time to match the CSS transition duration
    }, 200);
  }, 5500); // Extended time to enjoy the enhanced intro

  // 스크롤 애니메이션
  const animateOnScroll = () => {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add("fade-in");
      }
    });
  };

  // RSVP 폼 제출 처리
  const rsvpForm = document.querySelector(".rsvp-form");
  if (rsvpForm) {
    rsvpForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // 여기에 폼 데이터 처리 로직 추가
      const formData = new FormData(rsvpForm);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });

      // 이 부분은 실제 서버로 데이터를 보내는 코드로 대체될 수 있습니다
      console.log("RSVP 데이터:", formObject);
      alert("참석 여부가 성공적으로 제출되었습니다. 감사합니다!");
      rsvpForm.reset();
    });
  }

  // 갤러리 이미지 클릭 시 모달 표시
  const setupGallery = () => {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach((item) => {
      item.addEventListener("click", function () {
        // 이 부분은 이미지 모달을 표시하는 코드로 확장 가능
        console.log("갤러리 아이템 클릭됨");
      });
    });
  };

  // 페이지 로드 및 스크롤 시 애니메이션 적용
  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // 초기 로드 시 실행

  setupGallery();
});
