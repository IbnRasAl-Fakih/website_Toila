const nextBtn = document.getElementById("nextImg");
const prevBtn = document.getElementById("prevImg");
const slider = document.getElementsByClassName("slider_inner")[0];
const firstImg = slider.getElementsByTagName("img")[0];
const secondImg = slider.getElementsByTagName("img")[1];
const thirdImg = slider.getElementsByTagName("img")[2];
const sliderItems = [firstImg, secondImg, thirdImg];

function nextImg() {
    let activeImg = slider.querySelector(`[data-active]`);
    let activeImgIndex = +activeImg.dataset.index;

    activeImg.removeAttribute("data-active");
    activeImg.setAttribute("hidden", "");

    let nextImgIndex = sliderItems.length == activeImgIndex + 1 ? 0 : activeImgIndex + 1;
    let nextImg = slider.querySelector(`[data-index="${nextImgIndex}"]`);

    nextImg.removeAttribute("hidden");
    nextImg.setAttribute("data-active", "");
}

function prevImg() {
    let activeImg = slider.querySelector(`[data-active]`);
    let activeImgIndex = +activeImg.dataset.index;

    activeImg.removeAttribute("data-active");
    activeImg.setAttribute("hidden", "");

    let nextImgIndex = 0 == activeImgIndex ? sliderItems.length - 1 : activeImgIndex - 1;
    let nextImg = slider.querySelector(`[data-index="${nextImgIndex}"]`);

    nextImg.removeAttribute("hidden");
    nextImg.setAttribute("data-active", "");
}


window.addEventListener("resize", function() {
    if (this.window.innerWidth >= 900) {
        firstImg.setAttribute("src", "images/second slider.jpg");
        secondImg.setAttribute("src", "images/first slider.jpg");
        thirdImg.setAttribute("src", "images/first slider.jpg");
    } else if (this.window.innerWidth >= 500) {
        firstImg.setAttribute("src", "images/square_slider_first.jpg");
        secondImg.setAttribute("src", "images/square_slider_second.jpg");
        thirdImg.setAttribute("src", "images/square_slider_third.jpg");
    } else {
        firstImg.setAttribute("src", "images/mobile_slider_first.jpg");
        secondImg.setAttribute("src", "images/mobile_slider_second.jpg");
        thirdImg.setAttribute("src", "images/mobile_slider_third.jpg");
    }
});







































































