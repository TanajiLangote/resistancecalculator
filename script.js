function calculateResistance() {    var band1 = parseInt(document.getElementById("Band1").value);
    var band2 = parseInt(document.getElementById("Band2").value);    var band3 = parseInt(document.getElementById("Band3").value);
    var band4 = parseInt(document.getElementById("Band4").value);    var band5 = parseFloat(document.getElementById("Band5").value);
    var resistance = (band1 * 100 + band2 * 10 + band3) * Math.pow(10, band4);    var resistanceText = resistance.toString();
    if (resistance >= 1000 && resistance < 1000000) {        resistanceText = (resistance / 1000) + "kΩ";
    } else if (resistance >= 1000000) {        resistanceText = (resistance / 1000000) + "MΩ";
    } else {        resistanceText += "Ω";
    }    document.getElementById ("result").innerHTML = "Resistance: " + resistanceText + " with tolerance ±" + band5 + "%";
}
// Add event listeners to all select elements

// Initial calculationcalculateResistance();
