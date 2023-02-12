let i = 0;
let placeholder = "";
let txt = "Where to...?";
const speed = 120;
let input = document.getElementById("searchDestination")
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate')


function type() {
    placeholder += txt.charAt(i);
    input.setAttribute
        ("placeholder", placeholder);
    i++;
    setTimeout(type, speed);
}

addEventListener("load", function () {
    type(placeholder, txt)
})


startDate.addEventListener("click", function () {
    this.setAttribute('type', 'date')
})

endDate.addEventListener("click", function () {
    this.setAttribute('type', 'date')
})
// these functions change to date type upon click

document.addEventListener('keydown', (event) => {
    var name = event.key;

    setTimeout(() => {
        checkState()
    }, 500)

    function checkState() {
        if (name === 'Tab') {
            console.log("tab pressed")
            if (document.activeElement == startDate) {
                startDate.setAttribute('type', 'date')
            }
            else if (document.activeElement == endDate) {
                endDate.setAttribute('type', 'date')
            }
        }
    }
})
// this ensures date type change occurs with tab button in addition to click event

input.addEventListener('click', function () {

    window.scrollTo({
        top: 100,
        left: 0,
        behavior: 'smooth'
    })
})



export { type }