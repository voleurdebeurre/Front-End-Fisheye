function displayContactModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "flex";
}

function closeContactModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

const contactFormSubmitButton = document.querySelector(".contact-form")

contactFormSubmitButton.addEventListener("submit", (e) =>{
    e.preventDefault();
    let getFirstName = document.querySelector("[name='prenom']").value.trim()
    let getLastName = document.querySelector("[name='nom']").value.trim()
    let getEmail = document.querySelector("[name='email']").value.trim()
    let getMessage = document.querySelector("[name='message']").value.trim()
    console.log(getFirstName, getLastName, getEmail, getMessage)
})

