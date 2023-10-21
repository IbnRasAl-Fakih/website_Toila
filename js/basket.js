let res = JSON.parse(localStorage.getItem("res"));

document.getElementById("res_title").innerHTML = res.res_title;
document.getElementById("res_city").innerHTML = res.res_city;
document.getElementById("res_number").innerHTML = res.res_number;
document.getElementById("res_price").innerHTML = res.res_price;
document.getElementById("res_date").innerHTML = res.res_date;
document.getElementById("res_img").setAttribute("src", res.res_img);