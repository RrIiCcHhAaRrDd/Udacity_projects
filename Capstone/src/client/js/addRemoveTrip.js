function backButtonfn() {

    let tripResults = document.getElementById("destinationImage")   
    tripResults.setAttribute('src', "")
   
    fetch('/removeEntry') // pressing back button removes last entry

}

export { backButtonfn }