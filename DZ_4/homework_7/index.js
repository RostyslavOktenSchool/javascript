function createList (text, count) {
    let list = "<ul>";
    for (let i = 0; i < count; i++) {
        list += "<li>" + text + "</li>";
        
    }
    list += "</ul>"
    document.write(list);
}
createList("Привіт, Ростислав!", 10);
