document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("sideNav");
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    hamburger.innerHTML = "&#9776;";
    document.body.appendChild(hamburger);

    // 햄버거 버튼 클릭 시 네비게이션 토글
    hamburger.addEventListener("click", function () {
        nav.classList.toggle("open");
    });

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
