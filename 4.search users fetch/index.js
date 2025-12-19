function getContent() {
      const inputElement = document.getElementById("myInput")
      const inputValue = inputElement.value
      fetch(`https://dummyjson.com/users/search?q=${inputValue}`)
      .then(Response => {
        if(Response.ok === false) {
            throw new Error('Error fetching user :(')
        }
        return Response.json()
      }).then (data => {
        console.log('data from server', data)
        if (data.users.length === 0) {
          const statusP = document.getElementById('search-result-p')
          statusP.innerHTML = 'No users found:('
        }
      }).catch(error => {
        console.log(error)
    })

  }
