async function getValues() {

    let d20 = 0;
    let atk = 0;

    d20 = parseInt(document.getElementById("d20roll").value);
    if (isNaN(d20)) {
        d20 = 0;
    }

    atk = parseInt(document.getElementById("atk").value);
    if (isNaN(atk)) {
        atk = 0;
    }
    
    let output = document.getElementById("attacker-output");
    let roll = d20 + atk;
    
    output.innerHTML = roll;

    // Check for success
    checkAtk();
}

async function getAC() {
    let targetAC = parseInt(document.getElementById("target-ac").value);
    let bonus = parseInt(document.getElementById("target-bonus").value);
    let output = document.getElementById("defender-output");

    if (isNaN(targetAC)) {
        targetAC = 0;
    }

    if (isNaN(bonus)) {
        bonus = 0;
    }

    output.innerHTML = targetAC + bonus;
    checkAtk();
}

async function checkAtk() {
    let atk = document.getElementById("attacker-output");
    let def = document.getElementById("defender-output");

    let atk_val = parseInt(atk.innerHTML);
    let def_val = parseInt(def.innerHTML);

    if (Number.isInteger(atk_val) && Number.isInteger(def_val)) {
        if (atk_val > def_val) {
            atk.style.backgroundColor = "green";
            def.style.backgroundColor = "#151515";
        } else {
            def.style.backgroundColor = "green";
            atk.style.backgroundColor = "#151515";

        }
    }
}

function addNewInitiativeCharacter() {

    let name = document.getElementById("character-name");
    let ul = document.getElementById("character-list");
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(name.value));
    ul.appendChild(li);

    name.value = "";
}


function clearChecks(){
    document.getElementById("d20roll").value = "";
    document.getElementById("atk").value = "";
    document.getElementById("target-ac").value = "";
    document.getElementById("target-bonus").value = "";


    document.getElementById("attacker-output").innerHTML = "0";
    document.getElementById("defender-output").innerHTML = "0";
}


function clearCharacters() {
    document.getElementById("character-list").innerHTML = "";
}


function main() {
    console.log("Hello there");

    // Get the D20 field
    let d20 = document.getElementById("d20roll");
    d20.addEventListener("keyup", getValues);

    let atk = document.getElementById("atk");
    atk.addEventListener("keyup", getValues);

    let target = document.getElementById("target-ac");
    target.addEventListener("keyup", getAC);

    let bonus = document.getElementById("target-bonus");
    bonus.addEventListener("keyup", getAC);

    let addCharacterBtn = document.getElementById("add-character-btn");
    addCharacterBtn.addEventListener("click", addNewInitiativeCharacter);

    let clearChecksBtn = document.getElementById("clear-checks-btn");
    clearChecksBtn.addEventListener("click", clearChecks);

    let clearCharactersBtn = document.getElementById("clear-characters-btn");
    clearCharactersBtn.addEventListener("click", clearCharacters);
}

window.addEventListener("load", main);