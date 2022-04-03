# Zadania do wykonania

**Czas:** 30 minut


## Zadanie 1

- doinstaluj pakiet `https://www.npmjs.com/package/live-server` 
- w package.json dopisz skrypt, który będzie uruchamiał `live-server`, z którego będzie hostowany plik `index.html` znajdujący się w katalogu zadania


## Zadanie 2

- w pliku `index.html` znajduje się lista członków zespołu - w pliku JS pobierz ją, przekształć z obiektu tablicopodobnego na tablicę
- napisz funkcję, która przekształci (zmapuje) tablicę elementów DOM w tablicę obiektów JS wg schematu:

```js
[
    {
        name: 'Adam',
        age: 20,
    }
]
```

- z otrzymanej tablicy odfiltruj osoby, które skończyły 35 lat oraz młodsze niż 25 lat
- napisz funkcję, która zwróci najstarszą osobę w zespole
- napisz funkcję, która zwróci sumą lat wszystkich członków zespołu

## Zadanie 3

- w pliku `index.js` znajduje się funkcja `createTeamMemberDetails`
- popraw tę funkcję, wykorzystując:
    - destrukturyzację argumentów
    - arrow function
    - template string
    