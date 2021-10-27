const form = document.getElementById("register")
const errorMessage = document.getElementById("errorMessage")

function handleSubmit(e){
    const formData = new FormData(form)
    const name = formData.get('nameTxt')
    const email = formData.get('emailTxt')
    const gender = formData.get('genderTxt')
    const address = formData.get('addressTxt')
    const city = formData.get('cityTxt')
    const agree = formData.get('agree')
    let error = []
    //validation
    if(!name){
        error.push("Please enter your name")
    }
    if(name.length <5 || name.length > 30){
        error.push("Name must be between 5 and 30")
    }
    if(!email){
        error.push("Please enter your email")
    }
    if(!city){
        error.push("Please enter your city")
    }
    if(!address){
        error.push("Please enter your address")
    }
    if(error.length > 0){
        alert(error.join("\n"))
        e.preventDefault()
    }
    else{
        if(!confirm("Are you sure?")){
            e.preventDefault
        }
    }
}
form.addEventListener('submit', handleSubmit)