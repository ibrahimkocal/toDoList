const taskInput = document.querySelector("#task");
const list = document.querySelector("#list");
const liveToastBtn = document.querySelector("#liveToastBtn");
const liveToastSuccess = document.querySelector("#liveToastSuccess");
const liveToastError = document.querySelector("#liveToastError");
const logo = document.querySelector("#svg");

// Ekle butonuna ait newElement() onclick ile tuşa tıkladıktan sonra listeye ekleme
function newElement() {
    // Trim metodu ile input değerinin başındaki ve sonundaki boşlukları temizleyin
    let taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        list.innerHTML += `<li class="alert alert-dismissible fade show"><button type="button" class="close" data-dismiss="alert">&times;</button>${taskValue}</li>`;
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


// Liste elemanlarına tıklayıp belirtmek için sınıf ekleme-çıkarma mevzusu vs.
list.addEventListener('click', (event) => {
    const item = event.target.closest('li');
    if (item) {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
            
            item.style.backgroundColor = "";
            item.style.color = "";
        } 
        else {
            item.classList.add("active");
            logo.classList.add("d-inline-block");
            item.style.backgroundColor = "#30302f";
            item.style.color = "white";
        }
    }
});

// Show to toast
function showToast(toastElement) {
    $(toastElement).toast('show');
}