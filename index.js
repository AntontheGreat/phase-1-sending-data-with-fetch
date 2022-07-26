// Add your code here
function submitData(firstName, email) {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${firstName}`,
            email: `${email}`,
        })
    };
    
    return fetch("http://localhost:3000/users", configObj)
    .then(res => res.json())
    .then(obj => document.body.innerHTML = obj.id)
    .catch(error => document.body.innerHTML = error.message)
};