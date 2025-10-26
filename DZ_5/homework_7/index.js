const list = (text, count) => {
  let items = '';
  for (let i = 0; i < count; i++) {
    items += `<li>${text} ${i + 1}</li>`;
  }
  return `<ul>\n${items}</ul>`;
};

console.log(list("Текст", 4));
