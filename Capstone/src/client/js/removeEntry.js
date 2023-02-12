const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  if (entry.type === "reload") {
    console.log(`${entry.name} was reloaded!`);
    fetch('/removeEntries')

  }
});
// function checks if page is reloaded to remove previous trips
  export { entries }