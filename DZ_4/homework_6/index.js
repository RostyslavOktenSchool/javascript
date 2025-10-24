function createList (text) {
    let list = "<ul>";
    list += "<li>" + text + "</li>";
    list += "<li>" + text + "</li>";
    list += "<li>" + text + "</li>";
    list += "</ul>";
    document.write(list);
  }

  createList("Привіт, Ростислав!");
