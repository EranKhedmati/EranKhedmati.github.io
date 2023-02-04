// panel toggle
const content = document.querySelector(".content"),
    panel = document.querySelector(".panel"),
    toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
    if (panel.classList == "panel active") {
        hidePanel()
    } else {
        showPanel()
    }
});

function hidePanel() {
    panel.style.right = "-150px";
    if (window.innerWidth >= 600) {
        content.style.paddingRight = "50px";
    }
    panel.classList.remove("active")
}

function showPanel() {
    panel.style.right = "0px";
    if (window.innerWidth >= 600) {
        content.style.paddingRight = "200px";
    }
    panel.classList.add("active");
}

// Active panel Button
const panelTag = document.querySelectorAll(".panel-btn");

function removeActivePanel() {
    for (const button of panelTag) {
        button.classList.remove("active")
    }
}

for (const button of panelTag) {
    button.addEventListener("click", (e) => {
        removeActivePanel()
        button.classList.add("active");
    })
}

// Info alert
function infoAlert(el) {
    let infoAlert = document.createElement("div");
    infoAlert.classList.add("info-alert");
    infoAlert.innerHTML = "لطفا تمام مقادیر را وارد کنید";
    el.append(infoAlert);

    function removeChild() {
        el.removeChild(infoAlert)
    }

    setTimeout(removeChild, 3000)
}

// Kepler ------------------------------------------------------------
const keplerTime = document.getElementById("kepler-time"),
    keplerDistance = document.getElementById("kepler-distance"),
    keplerForm = document.getElementById("kepler-form");

keplerForm.addEventListener("keyup", (e) => {
    if (e.target.id == "kepler-time") {
        let keplerOne = keplerTime.value * keplerTime.value;
        let keplertwo = Math.cbrt(keplerOne) * 150000000;
        let keplerTimeResult = (Math.cbrt(keplerTime.value * keplerTime.value)) * 150000000
        keplerDistance.value = keplerTimeResult;
    } else {
        let keplerDistanceResult = Math.sqrt((keplerDistance.value / 150000000) * (keplerDistance.value / 150000000) * (keplerDistance.value / 150000000))
        keplerTime.value = keplerDistanceResult;
    }
});

// Age --------------------------------------------------------------
const ageTimes = document.getElementById("age-times"),
ageLeft = document.getElementById("age-left"),
ageBtn = document.getElementById("age-btn"),
ageBox = document.getElementById("age-box"),
ageResultBox = document.getElementById("age-result");

let left;

ageBtn.addEventListener("click", (e) => {
    // if (ageLeft.value == "" || ageTimes.value == "") {
    //     infoAlert(ageBox)
    // } else {
    //     const one = 1;
    //    console.log(one);
    // }
    left = Number(ageLeft.value);
    // for (let i = 0; i < 3; i++) {
    //     left = left / 2 
    //     console.log(left);
    // }

    let one = 1;
    let count = 0;

    while(one < left) {
        one = one * 2;
        count ++;
    }

    let ageResult = count * ageTimes.value;
    ageResultBox.innerHTML = ageResult;

})
console.log(ageResultBox);

// Takahlkhol--------------------------------------------------------
const takhalEmpty = document.getElementById("takhal-empty"),
    takhalAll = document.getElementById("takhal-all"),
    takhalBtn = document.getElementById("takhal-btn"),
    takhalBox = document.getElementById("takhal-box"),
    takhalResultBox = document.getElementById("takhal-result");

takhalBtn.addEventListener("click", (e) => {
    if (takhalAll.value == "" || takhalEmpty.value == "") {
        infoAlert(takhalBox)
    } else {
        let takhalResult = (takhalEmpty.value / takhalAll.value) * 100;
        takhalResultBox.innerHTML = "درصد تخلخل : " + takhalResult;
    }
})


// Dabi ------------------------------------------------------------
const dabiArea = document.getElementById("dabi-area"),
    dabiSpeed = document.getElementById("dabi-speed"),
    dabiBtn = document.getElementById("dabi-btn"),
    dabiResultBox = document.getElementById("dabi-result"),
    dabiBox = document.getElementById("dabi-box");

dabiBtn.addEventListener("click", (e) => {
    if (dabiArea.value == "" || dabiSpeed.value == "") {
        infoAlert(dabiBox)
    } else {
        let dabiResult = dabiArea.value * dabiSpeed.value;
        dabiResultBox.innerHTML = "دبی : " + dabiResult;
    }
})