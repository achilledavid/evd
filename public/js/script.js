function showSubmenu() {
    let submenu = document.getElementById("submenu");

    if (submenu.classList.contains("submenu--active")) {
        submenu.className = "submenu submenu--close";
    } else {
        submenu.className = "submenu submenu--active";
    }
}