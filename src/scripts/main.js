const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

window.onload = function(){
    const form = document.querySelector("form");
    const name = document.querySelector("#nameInput");
    const email = document.querySelector("#emailInput");
    const textarea = document.querySelector("textarea#message");
    const inputs = document.querySelectorAll(".input");
    const inputChecker = document.querySelector(".inputChecker");

    inputs.forEach(i => {
        i.addEventListener("blur",() => {
            if (i.value == "")
            {
                i.classList.add("border-error");
            }
            else if (i.id == "emailInput")
            {
                if (regex.test(i.value) == false)
                {
                    i.classList.add("border-error");
                    i.classList.add("mb-2");
                    inputChecker.classList.add("invalid");
                }
                else
                {
                    i.classList.remove("border-error");
                    i.classList.remove("mb-2");
                    inputChecker.classList.remove("invalid");
                }
                
            }
            else
            {
                i.classList.remove("border-error");
            }
        });
    });
    
    form.addEventListener("submit",(e) => {
        
        if (name.value == "" || email.value == "" || textarea.value == "")
        {
            alert("Please fill all the fields!");
        }
        e.preventDefault();
    });
}