const pages = document.querySelectorAll(".page");
let translate = 0;

const slide = (direction) => {
    direction === "next" ? translate =-100 : translate = 0;
    
    pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
    )

}


export { slide }