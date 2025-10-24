function createList (array) {
    let list = "<ul>";

    for (let index = 0; index < array.length; index++) {
        list += "<li>" + array[index] + "</li>";
        
    }
    list += "</ul>";
    document.write(list);
}
let text = [69, "Olla", true, "Skyrim", false];
createList(text);