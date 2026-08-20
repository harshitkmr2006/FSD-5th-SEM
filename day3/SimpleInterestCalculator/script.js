function calculateSI(){

    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);

    let si = (p * r * t) / 100;

    document.getElementById("result").innerHTML =
    "Simple Interest = ₹ " + si;
}