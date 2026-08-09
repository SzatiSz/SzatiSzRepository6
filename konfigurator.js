function kolor() {
    var tło = document.getElementById("article");
    var kolor = document.getElementById("btn1").value;
    tło.style.backgroundColor = kolor;
}
function kolor2() {
    var tło = document.getElementById("article");
    var kolor2 = document.getElementById("btn2").value;
    tło.style.backgroundColor = kolor2;
}
function kolor3() {
    var tło = document.getElementById("article");
    var kolor3 = document.getElementById("btn3").value;
    tło.style.backgroundColor = kolor3;
}

function kolorczcionki() {
    var tło = document.getElementById("article");
    var kolorczcionki = document.getElementById("select").value;
    tło.style.color = kolorczcionki;
}

function rozmiar() {
    var tekst = document.getElementById("article");
    var rozmiar = document.getElementById("rozmiar").value;
    tekst.style.fontSize = rozmiar + "%";
}
function ramka() {
    var zaznaczenie = document.getElementById("ramka");
    if (zaznaczenie.checked == true) {
        document.getElementById("obrazek").style.border = "1px solid white";
    }
    else if (zaznaczenie.checked == false) {
        document.getElementById("obrazek").style.border = "none";
    }
}
function radio() {
    var zaznaczenie = document.getElementsByName("radio");
    if (zaznaczenie[0].checked == true) {
        var radio1 = document.getElementById("0").value;
        document.getElementById("ul").style.listStyleType = radio1;
    }
    if (zaznaczenie[1].checked == true) {
        var radio2 = document.getElementById("1").value;
        document.getElementById("ul").style.listStyleType = radio2;
    }
    if (zaznaczenie[2].checked == true) {
        var radio3 = document.getElementById("2").value;
        document.getElementById("ul").style.listStyleType = radio3;
    }
}