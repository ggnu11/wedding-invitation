document.addEventListener("DOMContentLoaded", function () {
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
