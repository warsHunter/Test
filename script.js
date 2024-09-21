const increments = Array.from(document.getElementsByClassName('increments'));
const decrements = Array.from(document.getElementsByClassName('decrements'));
const quantities = Array.from(document.getElementsByClassName('quantity'));
const values = Array.from(document.getElementsByClassName('value'));
const minMemory = Array.from(document.getElementsByClassName('minMemory'));
const maxMemory = Array.from(document.getElementsByClassName('maxMemory'));
const mem1 = Array.from(document.getElementsByClassName('mem1'));
const mem2 = Array.from(document.getElementsByClassName('mem2'));
const mem3 = Array.from(document.getElementsByClassName('mem3'));
const mem4 = Array.from(document.getElementsByClassName('mem4'));
let price = 1500;

increments.forEach(element => {
    element.addEventListener('click', () => {
        let index = increments.indexOf(element);
        quantities[index].textContent = parseInt(quantities[index].textContent) + 1; //Добавлем 1 к значению и записываем новое значение
        values[index].textContent = price * quantities[index].textContent; //Заменяем цену
    });
});    

decrements.forEach(element => {
    element.addEventListener('click', () => {
        let index = decrements.indexOf(element);
        if (quantities[index].textContent > 1){
            quantities[index].textContent = parseInt(quantities[index].textContent) - 1; //Добавлем 1 к значению и записываем новое значение
            values[index].textContent = price * quantities[index].textContent; //Заменяем цену
        }       
    });
});


mem1.forEach(element => {
    element.addEventListener('click', () => {
        let index = mem1.indexOf(element);        
            //console.log(element.classList.contains('active')) //Проверяем наличие класса у блока
    
        if (!element.classList.contains('active1')) {
            document.querySelector('.active1').classList.remove('active1'); //Находим элемент с классом active
            element.classList.add('active1'); //задаем класс active для нажатого элемента
        } 
    });
});

        
mem2.forEach(element => {
    element.addEventListener('click', () => {
        let index = mem2.indexOf(element);        
            //console.log(element.classList.contains('active')) //Проверяем наличие класса у блока
    
        if (!element.classList.contains('active2')) {
            document.querySelector('.active2').classList.remove('active2'); //Находим элемент с классом active
            element.classList.add('active2'); //задаем класс active для нажатого элемента
        } 
    });
});

mem3.forEach(element => {
    element.addEventListener('click', () => {
        let index = mem3.indexOf(element);        
            //console.log(element.classList.contains('active')) //Проверяем наличие класса у блока
    
        if (!element.classList.contains('active3')) {
            document.querySelector('.active3').classList.remove('active3'); //Находим элемент с классом active
            element.classList.add('active3'); //задаем класс active для нажатого элемента
        } 
    });
});

mem4.forEach(element => {
    element.addEventListener('click', () => {
        let index = mem4.indexOf(element);        
            //console.log(element.classList.contains('active')) //Проверяем наличие класса у блока
    
        if (!element.classList.contains('active4')) {
            document.querySelector('.active4').classList.remove('active4'); //Находим элемент с классом active
            element.classList.add('active4'); //задаем класс active для нажатого элемента
        } 
    });
});

