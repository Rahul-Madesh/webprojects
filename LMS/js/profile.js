document.addEventListener("DOMContentLoaded", () =>{
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const sidebarItem = document.querySelectorAll(".sidebar-item");

    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        sidebar.classList.toggle("active");
        menuBtn.classList.toggle("menuBtn-active");
    });

    //Click inside sidebar should NOT close it
    sidebar.addEventListener("click", (e) =>{
        e.stopPropagation();
    });

    document.addEventListener("click", () => {
        sidebar.classList.remove("active");
        menuBtn.classList.remove("menuBtn-active");
    });

    sidebarItem.forEach(item => {
        item.addEventListener("click", (e) => {
            sidebarItem.forEach(i => i.classList.remove("sidebar-active"));
            e.target.classList.add("sidebar-active");
            sidebar.classList.remove("active");
        })
    })
});

document.addEventListener("DOMContentLoaded",() =>{
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const editBtn = document.getElementById("editBtn");

    let isEditMode = false;

    editBtn.addEventListener("click",() =>{
        isEditMode = !isEditMode;

        nameInput.disabled = !isEditMode;
        emailInput.disabled = !isEditMode;

        editBtn.textContent = isEditMode ? "Save Profile" : "Edit Profile";

        if(!isEditMode){
            alert("Profile updated successfully");
        }
    });
});