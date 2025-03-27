document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("sideNav");
    hamburger.classList.add("hamburger");
    hamburger.innerHTML = "&#9776;";
    document.body.appendChild(hamburger);


    // 드롭다운 메뉴 클릭 시 하위 메뉴 보이기
    document.querySelectorAll(".dropdown > a").forEach(function (item) {
        item.addEventListener("click", function (e) {
            if (window.innerWidth <= 767) {
                e.preventDefault();
                const submenu = this.nextElementSibling;
                if (submenu) {
                    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // 📌 [1] header.html 불러오기
    fetch("../header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            initMenu(); // 메뉴 기능 활성화
        });

    // 📌 [2] 비디오 재생 후 자동 스크롤
    const video = document.getElementById("myVideo");
    if (video) {
        video.onended = function () {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        };
    }
});

    // 📌 [3] 햄버거 메뉴 기능 (header.html 로드 후 실행)
    function initMenu() {
        const menuToggle = document.querySelector(".menu-toggle");
        const sideNav = document.querySelector(".side-nav");
        const closeBtn = document.querySelector(".close-btn");

        if (menuToggle && sideNav && closeBtn) {
            menuToggle.addEventListener("click", function () {
                sideNav.classList.toggle("active");
            });

            closeBtn.addEventListener("click", function () {
                sideNav.classList.remove("active");
            });
        }
    }


document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.image-slider');

    // 마우스 휠로 좌우 스크롤 가능하게 설정
    slider.addEventListener("wheel", (event) => {
        event.preventDefault();
        slider.scrollLeft += event.deltaY; // 세로 휠을 가로 이동으로 변경
    });
});

