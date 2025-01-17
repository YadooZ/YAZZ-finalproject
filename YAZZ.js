function getInfos() {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

   

       
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || (!email)&&(email.indexOf('@')!=-1) || !message) {
            formMessage.style.color = "red";
            formMessage.textContent = "Please fill in all the fields.";
            formMessage.style.display = "block";
            return;
        }

       
        formMessage.style.color = "green";
        formMessage.textContent = "Thank you for reaching out! We'll get back to you soon.";
        formMessage.style.display = "block";

        contactForm.reset();
    }
function getTnfos2(){
    const nbradults=document.getElementById('ads').value;
    const nbrchildren=document.getElementById('chs').value;
    const ladate=document.getElementById('ind').value;
    const city=document.getElementById('city').value;
}
