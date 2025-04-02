// Intro animation handler
document.addEventListener("DOMContentLoaded", function () {
  // Initialize particles.js with elegant twinkling effect
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 1500,
          },
        },
        color: {
          value: ["#d4af37", "#e6e6e6", "#ffffff"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.2,
          random: true,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 200,
            size: 4,
            duration: 2,
            opacity: 0.5,
            speed: 3,
          },
        },
      },
      retina_detect: true,
    });
  }

  // Create more elegant wedding elements
  const createWeddingElements = () => {
    const container = document.getElementById("wedding-elements");
    if (!container) return;

    // Create elegant decoration elements
    const confettiCount = 35;
    const confettiColors = ["gold", "silver", "accent"];
    const confettiShapes = ["circle", "square", "rect", "diamond"];

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");

      // Random confetti styles
      const colorIndex = Math.floor(Math.random() * confettiColors.length);
      const shapeIndex = Math.floor(Math.random() * confettiShapes.length);
      confetti.className = `confetti confetti-${confettiColors[colorIndex]} ${confettiShapes[shapeIndex]}`;

      // Random position, delay, and duration
      const leftPos = Math.random() * 100; // random horizontal position
      const delay = Math.random() * 15; // random delay
      const duration = 10 + Math.random() * 15; // random duration between 10-25s

      confetti.style.left = `${leftPos}%`;
      confetti.style.animationDelay = `${delay}s`;
      confetti.style.animationDuration = `${duration}s`;

      container.appendChild(confetti);
    }

    // Create subtle floating hearts
    const heartCount = 18;

    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement("i");
      heart.className = "fas fa-heart floating-heart";

      // Random heart size - more elegant, less prominent
      const size = 8 + Math.random() * 15; // between 8px and 23px
      heart.style.fontSize = `${size}px`;

      // Random opacity - more subtle
      const opacity = 0.4 + Math.random() * 0.4; // between 0.4 and 0.8
      heart.style.opacity = opacity;

      // Random position, delay, and duration
      const leftPos = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = 12 + Math.random() * 18;

      heart.style.left = `${leftPos}%`;
      heart.style.animationDelay = `${delay}s`;
      heart.style.animationDuration = `${duration}s, 2.5s`;

      container.appendChild(heart);
    }
  };

  createWeddingElements();

  // Elegant exit animation
  setTimeout(function () {
    const introAnimation = document.getElementById("intro-animation");
    const mainContent = document.querySelector("main");

    if (!introAnimation || !mainContent) return;

    // Add a small delay before starting the transition
    setTimeout(() => {
      // Add fade-out class to intro animation
      introAnimation.classList.add("fade-out");

      // Show main content with a slight delay for better transition
      setTimeout(() => {
        mainContent.classList.add("visible");
      }, 800);

      // Remove intro from DOM after animation completes
      setTimeout(function () {
        if (introAnimation && introAnimation.parentNode) {
          introAnimation.parentNode.removeChild(introAnimation);
        }
      }, 2000); // Match to the CSS transition duration
    }, 300);
  }, 6500); // Set timing for intro display

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

  // Setup account number copy functionality
  const setupCopyButtons = () => {
    const copyButtons = document.querySelectorAll(".copy-btn");

    copyButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const accountNumber = this.getAttribute("data-account");

        // Create temporary textarea to copy from
        const textarea = document.createElement("textarea");
        textarea.value = accountNumber;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);

        // Select and copy text
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        // Visual feedback
        this.classList.add("copied");
        this.textContent = "복사됨!";

        // Reset button after 2 seconds
        setTimeout(() => {
          this.classList.remove("copied");
          this.textContent = "복사하기";
        }, 2000);
      });
    });
  };

  // Setup KakaoPay buttons
  const setupKakaoPayButtons = () => {
    const kakaoPayButtons = document.querySelectorAll(".kakao-pay-btn");

    kakaoPayButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const person = this.getAttribute("data-person");

        // In a real implementation, this would integrate with KakaoPay SDK
        // For now, we'll just demonstrate with an alert
        alert(
          `${
            person === "groom" ? "신랑" : "신부"
          }측에 카카오페이로 마음을 전합니다.`
        );

        // Normally, you would use KakaoPay SDK to open the payment dialog
        // window.open('https://mockup.kakao.pay.url/' + person, '_blank');
      });
    });
  };

  // Initialize gift section functionality
  const initGiftSection = () => {
    setupCopyButtons();
    setupKakaoPayButtons();
  };

  // 페이지 로드 및 스크롤 시 애니메이션 적용
  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // 초기 로드 시 실행

  setupGallery();
  initGiftSection(); // Add this line to initialize gift section functionality
});
