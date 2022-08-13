/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/

const content = ['első', 'második', 'harmadik'];

const generateList = (content) => {
   let list = "<ul>";
   for(let i=0; i<content.length; i+=1)
    list += "<li>" + content [i] + "</li>";
    list += "</ul>";
    return list;
}

console.log(generateList(content));



