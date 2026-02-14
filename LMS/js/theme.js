document.addEventListener("DOMContentLoaded", () =>{
    const toggleBtn = document.getElementById("themeToggle");

    // Restore them
    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark");
    }
    toggleBtn.addEventListener("click",() =>{
        document.body.classList.toggle("dark");

        const theme = document.body.classList.container("dark")
        ? "dark"
        : "light";
        localStorage.setItem("theme",theme);
    });
});