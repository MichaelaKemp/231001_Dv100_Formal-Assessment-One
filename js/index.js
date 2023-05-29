addStudent = () => 
{
    let names = document.getElementById("names").value
    let email = document.getElementById("email").value
    let contact = document.getElementById("contact").value
    let subject = document.getElementById("subject").value
    let password = document.getElementById("password").value

    console.log(names, email,contact, subject, password)

    let reg = document.getElementById("reg").checked
    if
    (
        reg
    )
    {
        alert("Welcome:  " + names + "! Thank you for your interest in " + subject + "! We will contact you via the email provided:  " + email + ", or alternatively on the phone number: " + contact)
    } else
    {
        alert("Well, well, well... why don't you want to sign up for the newsletter... you don't seem to be that interested " + names + "! If you want to sign up, you better CHECK that newsletter box!")
    }
}