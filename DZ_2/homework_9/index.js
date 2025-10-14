let days = prompt("Введіть номер дня від 1 до 7")
 days = Number(days);

switch(true){
    case (days === 1):
    console.log("Monday")
    console.log("Вивчення JavaScript (об'єкти, масиви)");
    break;

    case (days === 2):
    console.log("Tuesday")
    console.log("Продовження комплексного курсу");
    break;

    case (days === 3):
    console.log("Wednesday")
    console.log("англійська граматика");
    break;

    case (days === 4):
    console.log("Thursday")
    console.log("прибирання");
    break;

    case (days === 5):
    console.log("Friday")
    console.log("Повторення матеріалу, інтерактивна англійська, відпочинок ввечері");
    break;

    case (days === 6):
    console.log("Saturday")
    console.log("Приготування піци + WOW на вечір");
    break;

    case (days === 7):
    console.log("Sunday")
    console.log("Можливо нічого або продовження проходити комплексний курс javascript");
    break;
    
    case(days > 7):
    console.log("ти що хочеш мати більше днів у тижні щоб пахати????")

}