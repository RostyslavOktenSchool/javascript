const list = (element) =>{
    const item =element.map(element =>`<li>${element}</li>`).join('');
    return `<ul>${item}</ul>`;
};
console.log(list([22, "текст", true]));