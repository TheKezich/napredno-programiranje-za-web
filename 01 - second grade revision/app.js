function changeText() {
    const p1 = document.getElementById("text-desc1")
    p1.innerText = 'Changed Text!'
    const p2 = document.getElementById("text-desc2")
    p2.innerText = 'Changed Text!'
    const p3 = document.getElementById("text-desc3")
    p3.innerText = 'Changed Text!'

    for (let index = 0; index < 10; index++) {
        console.log(p2)
    }
}

