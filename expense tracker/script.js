let total = 0;

function addExpense() {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;

    if (name === "" || amount === "" || category === "") {
        alert("Please fill all fields");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = name + " (" + category + ") - ₹" + amount;

    let del = document.createElement("button");
    del.innerText = "X";
    del.onclick = function () {
        total -= Number(amount);
        document.getElementById("total").innerText = total;
        li.remove();
    };

    li.appendChild(del);
    document.getElementById("list").appendChild(li);

    total += Number(amount);
    document.getElementById("total").innerText = total;

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
}
