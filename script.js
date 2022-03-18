var levels = new Array (25)
levels.fill(true);
var poäng = 0;


function NyRuta(Göm, Visa)
{
    document.getElementById(Göm).style.display="none";
    document.getElementById(Visa).style.display="block";
}


 function RättSvar(alternativ, level)
{
    if(levels[level-1]) {
        console.log(alternativ)
        if(alternativ[0] == "R") {
            document.getElementById("Svar" + alternativ).style.backgroundColor="#90EE90"; //Grön -- Rätt Svar.
            poäng++;
        } else {
            document.getElementById("Svar" + alternativ).style.backgroundColor="#F44D59" //Röd -- Fel Svar.
        }
        levels[level-1] = false;
    }
    updatePoints()
}

function updatePoints()  {
    document.getElementById("pointsShower").innerText = (poäng + "/25");
}

function LaddaOm() {
    window.location.reload(true);
}


