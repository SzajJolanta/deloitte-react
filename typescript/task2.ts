enum ObjectType {
    PEN = 'pen',
    PAPER = 'paper'
}

enum Size {
    A3 = 'A3',
    A4 = 'A4'
}

interface Item<T> {
    type: ObjectType;
    manufactured: number;
    data: T
}

interface Pen {
    color: string;
}

interface Paper extends Pen {
    size: string;
}

function prepareObject<P>(data: P, type: ObjectType): Item<P> {
    return {
        type,
        manufactured: 2022,
        data,
    }
}

const prepareColoredPen = (color: string) => prepareObject<Pen>({ color }, ObjectType.PEN);
const preparePaper = (color: string, size: Size) => prepareObject<Paper>({ color, size }, ObjectType.PAPER);

prepareColoredPen('red');
preparePaper('white', Size.A4);
