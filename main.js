document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {  // 요소가 존재하는지 확인
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");

            // 메뉴가 열릴 때 스크롤 방지 (모바일 UX 개선)
            if (navMenu.classList.contains("active")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        });
    } else {
        console.error("햄버거 버튼 또는 네비게이션 메뉴를 찾을 수 없습니다.");
    }
});
