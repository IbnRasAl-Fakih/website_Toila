const toggleItem = document.getElementById("res_address");
const rightPart = document.getElementById("rightPart");
document.getElementById("davaToday").valueAsDate = new Date();

function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}



window.addEventListener('scroll',() => {
    let classToggle = offset(toggleItem).top + toggleItem.offsetHeight / 3;
    let scrollTop = window.scrollY;

    if (scrollTop >= classToggle) {
        rightPart.classList.add('fixed_bottom')
    } else {
        rightPart.classList.remove('fixed_bottom')
    }
})

// ---------------------------------

function takeInfo() {
    let restaurant_obj = {
        res_title: document.getElementById("res_title").innerHTML,
        res_city: document.getElementById("res_city").innerHTML,
        res_number: document.getElementById("res_number").innerHTML,
        res_price: document.getElementById("res_price").innerHTML,
        res_date: document.getElementById("davaToday").value,
        res_img: document.getElementById("res_img").getAttribute("src")
    };

    let restaurant = JSON.stringify(restaurant_obj);
    localStorage.setItem("res", restaurant);
}

