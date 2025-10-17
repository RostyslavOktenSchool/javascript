let users = [

    {name: "vasya", age: 31, status: false},

    {name: "petya", age: 30, status: true},

    {name: "kolya", age: 29, status: true},

    {name: "olya", age: 28, status: false},

    {name: "max", age: 30, status: true},

    {name: "anya", age: 31, status: false},

    {name: "oleg", age: 28, status: false},

    {name: "andrey", age: 29, status: true},

    {name: "masha", age: 30, status: true},

    {name: "olya", age: 31, status: false},

    {name: "max", age: 31, status: true}

];

for (const element of users) {
    if (element.status === true)
        document.write(`Ім'я ${element.name} років ${element.age} статус ${element.status}<br>`);
}
for (const element of users){
    if (element.status === false)
          document.write(`Ім'я ${element.name} років ${element.age} статус ${element.status}<br>`);

}
for (const element of users){
    if (element.age > 30)
          document.write(`Ім'я ${element.name} років ${element.age} статус ${element.status}<br>`);

}