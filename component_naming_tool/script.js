function calc(){
let components=parseFloat(document.getElementById('a').value)||0;
let variants=parseFloat(document.getElementById('b').value)||0;
let consistency=parseFloat(document.getElementById('c').value)||0;

let complexity = components * variants;
let score = (consistency - complexity/10);

let level = score > 70 ? "Healthy Design System 🚀" :
            score > 40 ? "Moderate system ⚖️" :
            "Needs improvement ⚠️";

let insights = "";
if(components > 50) insights += "Too many components. Consolidate.<br>";
if(variants > 5) insights += "Too many variants. Simplify patterns.<br>";
if(consistency < 50) insights += "Low consistency. Standardize tokens.<br>";

document.getElementById('result').innerHTML =
"System Score: " + score.toFixed(2) + "<br><br>" +
level + "<br><br>" +
"Complexity: " + complexity + "<br><br>" +
insights;
}
