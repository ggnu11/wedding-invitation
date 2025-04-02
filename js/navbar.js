document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar-container");

  // 네비게이션 바 생성
  const createNavbar = () => {
    const navbar = document.createElement("nav");
    navbar.className = "navbar";

    const navbarContent = `
            <div class="navbar-logo">
                <a href="#home">우리의 결혼식</a>
            </div>
            <div class="navbar-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul class="navbar-menu">
                <li><a href="#home">홈</a></li>
                <li><a href="#couple">신랑 & 신부</a></li>
                <li><a href="#gallery">갤러리</a></li>
                <li><a href="#location">오시는 길</a></li>
                <li><a href="#rsvp">참석 여부</a></li>
            </ul>
        `;

    navbar.innerHTML = navbarContent;
    navbarContainer.appendChild(navbar);

    // 토글 버튼 기능 추가
    const toggleButton = navbar.querySelector(".navbar-toggle");
    const navbarMenu = navbar.querySelector(".navbar-menu");

    toggleButton.addEventListener("click", () => {
      navbarMenu.classList.toggle("active");
      toggleButton.classList.toggle("active");
    });

    // 메뉴 항목 클릭 시 메뉴 닫기 (모바일)
    const navLinks = navbar.querySelectorAll(".navbar-menu li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbarMenu.classList.remove("active");
        toggleButton.classList.remove("active");
      });
    });
  };

  // 스크롤 이벤트 처리
  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  createNavbar();
  window.addEventListener("scroll", handleScroll);

  const navLinks = document.querySelectorAll('#navbar-container a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        history.pushState(null, null, targetId);
      }
    });
  });
});
