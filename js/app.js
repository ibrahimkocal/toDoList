const taskInput = document.querySelector("#task");
const list = document.querySelector("#list");
const liveToastBtn = document.querySelector("#liveToastBtn");
const liveToastSuccess = document.querySelector("#liveToastSuccess");
const liveToastError = document.querySelector("#liveToastError");

// Ekle butonuna ait newElement() onclick ile tuşa tıkladıktan sonra listeye ekleme
function newElement() {
    // Trim metodu ile input değerinin başındaki ve sonundaki boşlukları temizleyin
    let taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        list.innerHTML += `<li>${taskValue}</li>`;
        taskInput.value = "";
        showToast(liveToastSuccess);
    } else {
        showToast(liveToastError);     
    }
}

// Input içerisinde yazma işlemini yaptıktan sonra enter tuşuna basarak direkt listeye ekleme
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      newElement();
    }
}) 

// Show to toast
function showToast(toastElement) {
    $(toastElement).toast('show');
}