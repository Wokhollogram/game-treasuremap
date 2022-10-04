//получить случайное число от 0 до size
var getRandomNumber = function (size) { // взятие случайчного числа
    return Math.floor(Math.random() * size); // size - размер
};

//вычислить расстояние от клика (event) до клада (terget)
var getDistance = function (event, target) { // функция getDistance вычисляет это выражение и возвращает результат
    var diffX = event.offsetX - target.x; // координат клика X 
    var diffY = event.offsetY - target.y; // координат клика Y
    return Math.sqrt((diffX * diffX) + (diffY * diffY)); // формула вычисления расстояния между кликом и кладом.
};

// Получить для расстояния строку подсказки, расстояние между кликом и кладом. Отображает подсказку, которая сообщает игроку.
var getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Обожжешься!";
    } else if (distance < 20) {
        return "Очень горячо";
    } else if (distance < 40) {
        return "Горячо"  + " " + "Кол-во кликов: " + clicks;
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно"  + " " + "Кол-во кликов: " + clicks;
    } else if (distance < 320) {
        return "Очень холодно";
    } else if (distance < 500) {
        return "Очень-очень холодно!";
    } else {
        return "Замерзнешь!"; 
    }
};

// Создаем переменные
var width = 800; // ширина 800
var height = 800; // высота 800
var clicks = 55; // подсчёт кликов

// Случайная позиция клада
var target = {
    x: getRandomNumber(width), // случайное число по оси x
    y: getRandomNumber(height) // случайное число по оси y
};


// Добавляем элементу img обработчик клика
$("#map").click(function (event) {
    clicks--;
    if (clicks === 0) {
        alert("Конец игры");
    }
    // Получаем расстояние от места клика до клада
    var distance = getDistance(event, target);
    // Преобразуем расстояние в подсказку
    var distanceHint = getDistanceHint(distance);
    // Записываем в элемент #distance новую подсказку
    $("#distance").text(distanceHint);
    // Если клик был достаточно близко, то поздравляем с победой
    if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks);
    }
});
