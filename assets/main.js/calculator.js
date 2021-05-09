document.getElementById("irradience").addEventListener("change", computeSavings);
document.getElementById("roof_space").addEventListener("change", computeSavings);
document.getElementById("unit_cost").addEventListener("change", computeSavings);
document.getElementById("orientation").addEventListener("change", computeSavings);



function computeSavings() {
    var irradience = document.getElementById("irradience").value;
    var roof_space = document.getElementById("roof_space").value;
    var unit_cost = document.getElementById("unit_cost").value;
    var orientation = document.getElementById("orientation").value;
    var efficiency = (irradience * .19);
    if (orientation === "west") {
        efficiency = (irradience * .17);
    } else if (orientation === "east") {
        efficiency = (irradience * .15);
    }
    var generation = (efficiency * roof_space);
    var savings = (generation * (unit_cost * .01)).toFixed(2);
    savings = savings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
    if (irradience === "default") {
        document.getElementById("savings").innerHTML = "Please Choose County!";
    } else {
        document.getElementById("savings").innerHTML = "Your Annual Savings = €" + savings;
    }
}