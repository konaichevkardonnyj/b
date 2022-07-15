/**new tag*/
const tabContent = document.querySelector('.content');
const div = document.createElement('div');
const btn = document.querySelector('.btn');
const start= document.querySelector('.button-primary');
const output = document.querySelector('.output');
const input = document.querySelector('#arrOne');
let tempArray;
let array;
let copyArray;
input.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/^ |[^0-9^ ]/gi, '');
    event.target.value = event.target.value.replace(/\s+/g,' ');
    });
btn.addEventListener('click',() => {
    if(input.value === '') {
        alert('Заполните поле "Ведите числа через пробел"');
        } else {
        tempArray = input.value.split(' ');
        tempArray = tempArray.map(parseFloat);
        array = tempArray.filter(Boolean)
        copyArray =[... array]
        output.append("Введенный массив = [" + array + "]");
        div.classList.add('block');
        let innerHtml = '';
        let position = 0;
        array.forEach((item, i) => {
            innerHtml = innerHtml + `<div class="active" style="top: ${position}px" id="${i}">${item}</div>`
            position += 70;
            });
        div.innerHTML = innerHtml;
        tabContent.append(div);
        function animation() {
            function sortBubble(arr){
                let i = 0;
                while (i <= arr.length) {
                    let iElem = document.getElementById(i);
                    let iElemNext = document.getElementById(i + 1);
                    if (arr[i] > arr[i + 1]) {
                        let iElemPosition = Number(iElem.style.top.replace('px', ''));
                        const iElemNextPosition = Number(iElemNext.style.top.replace('px', ''));
                        const temp = arr[i];
                        arr[i] = arr[i + 1];
                        arr[i + 1] = temp;
                        iElem.setAttribute("id", i + 1);
                        iElemNext.setAttribute("id", i);
                        iElem.style.cssText = ` top: ${iElemPosition + 70 + 'px'}; -webkit-transition-duration: 3s;`
                        iElemNext.style.cssText = `top: ${iElemNextPosition - 70 + 'px'}; -webkit-transition-duration: 3s;`
                        return sortBubble(copyArray);
                        } else {
                            i++;
                            }
                    }
                return arr;
                }
            sortBubble(copyArray);
            tabContent.prepend(" Новый Массив = [" + copyArray + "]");
            }
        start.addEventListener('click',animation);			// СОБЫТИЯ С ЗАПУСКОМ ФУНКЦИИ*/
        }
    });
/**clear*/
const clear = document.querySelector('.clear');
clear.addEventListener('click',()=>{
    //div.classList.remove('block')
    //output.textContent = ""
    //output.remove()
    output.innerHTML = ''
    div.innerHTML = ''
    input.value = "";
})