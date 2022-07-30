const keydownHandler = function(event) {
    const before = document.querySelector('td.selected')
    const tdList = document.querySelectorAll('td')
    const tdArray = Array.from(tdList)
    let index = tdArray.indexOf(before)
    console.log(index)

    before.classList.remove('selected')
    console.log(before)
    switch(event.key) {
        case 'ArrowUp':
            index -= 5;     break
        case 'ArrowDown':
            index += 5;     break
        case 'ArrowLeft':
            index -= 1;     break
        case 'ArrowRight':
            index += 1;     break
        }
        if(index < 0)                index = 0
        if(index >= tdArray.length)  index = tdArray.length - 1
        tdArray[index].classList.add('selected')
}

const clickHandler = (event) => {  // 모든 td에 대해서 클릭하면 함수를 실행
    document.querySelectorAll('td').forEach(td => { 
        td.classList.remove('selected')     // 문서의 모든 td의 selected를 삭제
    })
    event.target.classList.add('selected')  // 클릭된 td에 대해서만 색을 적용
}

const makeTable = function() {
    const table = document.getElementById('table')
    for(let i = 0; i < 5; i++) {
        const tr =document.createElement('tr')
        for(let j = 0; j < 5; j++) {
            const td = document.createElement('td')
            // td.innerText = (i * 5) + j + 1
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

    const tdList = document.querySelectorAll('td')
    console.log(tdList)

    // 첫번째 td의 class 지정
    const firstTd = document.querySelector('td')
    firstTd.classList.add('selected')
    tdList.forEach(td => td.onclick = clickHandler)
}