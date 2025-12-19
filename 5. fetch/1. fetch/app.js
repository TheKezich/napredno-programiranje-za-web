function getUserById() {
    const inputEl = document.getElementById('user-id')
    const inputValue = inputEl.value
    console.log('1')
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (response.ok === false){
                throw new Error('Error fetching users')
            }
            return response.json()
        }).then(data => {
            console.log('Object data', data)
        }).catch(error => {
            console.log('Error fetching data', error)
        })  
        console.log('2')
}

function addTwoNumber() {
    const sum = 2 + 2
    console.log(sum)
}