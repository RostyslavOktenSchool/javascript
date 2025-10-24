let users = [
  { id: 1, name: "Ростислав", age: 25 },
  { id: 2, name: "Оля", age: 30 },
  { id: 3, name: "Максим", age: 22 }
];
function showUsers(array) {
  for (let i = 0; i < array.length; i++) {
    let user = array[i];

    let block = "<div>";
    block += "<p>ID: " + user.id + "</p>";
    block += "<p>Name: " + user.name + "</p>";
    block += "<p>Age: " + user.age + "</p>";
    block += "</div>";

    document.write(block);
  }
}
showUsers(users);
