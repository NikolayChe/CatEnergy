const exampleButtonBefore = document.getElementById ("button-before");
const exampleButtonAfter = document.getElementById ("button-after");
const exampleBefore = document.querySelector(".slider__img-before");
const exampleRange = document.getElementById ("example-range");
exampleButtonBefore.addEventListener('click', () => {
    exampleBefore.style.width = "100%";
    exampleRange.value = 0;
    }
);
exampleButtonAfter.addEventListener('click', () => {
    exampleBefore.style.width = "0%"
    exampleRange.value = 100;
    }
);
if (window.innerWidth < 768) {
    exampleRange.step = 100;
    exampleRange.addEventListener('click', changeImg)
        function changeImg() {
            let choice =  exampleRange.value;
            switch (choice) {
                case "0":
                    exampleBefore.style.width = "100%";
                    break;
                case "100":
                    exampleBefore.style.width = "0%";
            }
        } 
} else {
    exampleRange.step = 1;
    exampleBefore.style.width = "50%";
    exampleRange.addEventListener('input', function() {
        exampleBefore.style.width = 100 - exampleRange.value + '%';
    });
}
window.addEventListener("resize", (function() {
    if (window.innerWidth < 768) {
        exampleBefore.style.width = "100%";
        exampleRange.step = 100;
        exampleRange.addEventListener('click', changeImg)
            function changeImg() {
                let choice =  exampleRange.value;
                switch (choice) {
                    case "0":
                        exampleBefore.style.width = "100%";
                        break;
                    case "100":
                        exampleBefore.style.width = "0%";
                }
            } 
    } else {
exampleRange.step = 1;
exampleBefore.style.width = "50%";
exampleRange.addEventListener('input', function() {
    exampleBefore.style.width = 100 - exampleRange.value + '%';
});
    }
}));