"use strict"
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// Задание 1

const adv = document.querySelectorAll(".promo__adv img") // выбрали селектор img картинок(псевдомассив)

adv.forEach(item =>{
    item.remove();
});                   // - перебрали псевдомассив с картинками и удалили картинки

// Вариант 2 

//adv.forEach(function(item){
   // item.remove();
//})

// Задание 2 

const poster = document.querySelector(".promo__bg") // - выделили селектор с постером(надо менять бекгдраунд)
const genre = poster.querySelector(".promo__genre") // - выделили элемент с жанром (поменять жанр)

genre.textContent = "Драма"; // - поменяли жанр на драму

// Задание 3 

poster.style.backgroundImage = "url('img/bg.jpg')"; // - поменяли фон элементу (poster)



// Задание 4

const movieList = document.querySelector(".promo__interactive-list") // - создали переменную и выделили нужный селектор

movieList.innerHTML = ""; - // очистили список фильмов

movieDB.movies.forEach((film,i) =>{                       // - перебрали миссив обьекта movieDB -  список фильмов 
    movieList.innerHTML+= `
    <li class="promo__interactive-item">${i+1} ${film}   
       <div class="delete"></div>
    </li>
`;
})  //  тем самым сделали список фильмов денамическим (берет данные из обьекта)
    //  также добавили нумерацию фильмам массива из обьекта

movieDB.movies.sort(); // - отсортировали по алфавиту массив 