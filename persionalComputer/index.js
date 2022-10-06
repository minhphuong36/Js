
function Cong(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let tong = a + b;
    let Ketqua;
    document.getElementById("Result").innerHTML="Kết quả:" + tong;
}

function Tru(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let tru = a - b;
    document.getElementById("Result").innerHTML="Kết quả:" + tru;
}
function Nhan(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let nhan = a * b;
    document.getElementById("Result").innerHTML="Kết quả:" + nhan;
}
function Chia(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let chia = a / b;
    document.getElementById("Result").innerHTML="Kết quả:" + chia;
}