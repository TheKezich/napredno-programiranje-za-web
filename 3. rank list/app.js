const footballClubs = []

function addClubToArray() {
    const clubNameInput = document.getElementById('club-name')
    const clubNameValue = clubNameInput.value
    const clubPointsInput = document.getElementById('club-points')
    const clubPointsValue = clubPointsInput.value
    const club = { name: clubNameValue, points: clubPointsValue }
    footballClubs.push(club)
    footballClubs.sort((firstfirstObject, secondObject))
    displayClubsInTable()

}

function displayClubsInTable(){
    const table = document.getElementById('clubs-table')
    const tableHeader = `
    <tr>
        <th> Club Name:</th>
        <th> Points:</th>
    </tr>
    `
    let tableContent = tableHeader
    for (let index = 0; index < footballClubs.length; index++) {
        const club = footballClubs[index];
        tableContent += `<tr>
        <td>${club.name}</td>
        <td>${club.points}</td>
        </tr>`
    }

    table.innerHTML = tableContent
    
    }

    function sortValueAscending(firstNumber, secondNumber) {
        return firstNumber - secondNumber
    }

    
    function sortSamples() {
        const stringsArray = ['Mario' , 'Pero', 'Joža']
        console.log('Strings array before sort: ',  stringsArray)
        stringsArray.sort()
        console.log('Strings array before sort: ',  stringsArray)
   

        const numbersArray = [1,4,2,3,64,12]
        console.log('Strings array before sort: ',  numbersArray)

        numbersArray.sort(sortValueAscending)
        console.log('Strings array after sort: ',  numbersArray)

        numbersArray.sort(sortValueAscending)
        console.log('Strings array after sort: ',  numbersArray)
        
         }