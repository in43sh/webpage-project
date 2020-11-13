document.getElementById("linkIntro").addEventListener("click", displayIntro);
document.getElementById("linkHistory").addEventListener("click", displayHistory);
document.getElementById("linkImpact").addEventListener("click", displayImpact);
document.getElementById("linkJobs").addEventListener("click", displayJobs);
document.getElementById("linkEthics").addEventListener("click", displayEthics);

let displayHistory = () => {
    let current = document.getElementById("intro");
    current.style.display = "none";
    let toDisplay = document.getElementById("history");
    toDisplay.style.display = "block";
}