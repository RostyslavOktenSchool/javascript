const users = (userArray) => {
  const blocks = userArray.map(user => {
    return `<div>
      <p>ID: ${user.id}</p>
      <p>Name: ${user.name}</p>
      <p>Age: ${user.age}</p>
    </div>`;
  }).join('');
  
  return blocks;
};

console.log(users([
  { id: 1, name: "Ростік", age: 25 },
  { id: 2, name: "Олена", age: 30 },
  { id: 3, name: "Юкімі", age: 10}
]));
