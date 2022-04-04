const data = [
    'Ala',
    'Michał',
    'Mateusz',
    'Alan',
    'Ola'
];

const mappedData = data.map((name) => ({
    name,
    lengthOfName: name.length
}));

const shortNamePeople = mappedData.filter(({ lengthOfName }) => lengthOfName <= 4)

const totalLetters = mappedData.reduce((prev, { lengthOfName }) => prev + lengthOfName, 0);

const sortedNames = mappedData.sort((a, b) => {
    if (a.lengthOfName < b.lengthOfName) {
        return 1
    }
    return 0
})