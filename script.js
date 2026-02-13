// ENTER BUTTON
function enterSite() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");

    const music = document.getElementById("bgMusic");
    music.play();
}


// MOVE NO BUTTON
function moveNo(button) {
    button.style.position = "absolute";
    button.style.left = Math.random() * (window.innerWidth - 120) + "px";
    button.style.top = Math.random() * (window.innerHeight - 120) + "px";
}

// SHOW OVERLAY FUNCTION
function showOverlay(imagePath, nextSectionId) {

    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlayImg");

    overlayImg.src = imagePath;
    overlay.classList.remove("hidden");

    setTimeout(function () {
        overlay.classList.add("show");
    }, 50);

    setTimeout(function () {
        overlay.classList.remove("show");

        setTimeout(function () {
            overlay.classList.add("hidden");

            if (nextSectionId) {
                document.getElementById(nextSectionId).classList.remove("hidden");
            }

        }, 800);

    }, 2500);
}

// FIRST QUESTION
function showSecond() {
    showOverlay("images/img4.jpeg", "second");
}

// SECOND QUESTION
function showFinal() {
    showOverlay("images/img5.jpeg", "final");
}

// FINAL QUESTION ONLY → POPUP
function finalYes() {

    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlayImg");

    overlayImg.src = "images/img6.jpeg";
    overlay.classList.remove("hidden");

    setTimeout(function () {
        overlay.classList.add("show");
    }, 50);

    setTimeout(function () {
        overlay.classList.remove("show");

        setTimeout(function () {
            overlay.classList.add("hidden");

            // 👇 POPUP ONLY HERE (LAST STEP)
            document.getElementById("finalPopup").classList.remove("hidden");

        }, 800);

    }, 2500);
}

// CLOSE POPUP
function closePopup() {
    document.getElementById("finalPopup").classList.add("hidden");
}
