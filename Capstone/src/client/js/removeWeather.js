function removeWeatherfn () {
    const weatherGrid = document.getElementById('weatherGrid');
    while(weatherGrid.firstChild){
        weatherGrid.removeChild(weatherGrid.lastChild)
    }
}

export { removeWeatherfn }