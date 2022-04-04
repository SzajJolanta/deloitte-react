const MAX_POWER = 123;

enum Rooms {
    SALOON = 'salon',
    BEDROOM = 'bedroom',
}

interface Thing {
    name: string;
    origin: string;
}

interface Plant<T> extends Thing {
    placeInHome: Rooms;
    popular?: boolean;
    height: number;
    ground: T;
    related?: Plant<T>[];
}

type Machine = {
    name: string;
}

type Car = {
    isExpensive: boolean;
}

const car: Machine & Car = { name: 'VW', isExpensive: true };

const plantB: Plant<boolean> = {
    name: 'Kaktus',
    origin: 'Gobi',
    placeInHome: Rooms.SALOON,
    popular: false,
    height: 100,
    ground: false,
    // ground: 'false' as unknown as boolean,
}

const plantC: Pick<Plant<string>, 'name' | 'ground'> = {
    name: 'Kaktus 2',
    ground: 'as'
}

// inne typy pomocnicze: Omit, Partial, Record, Readonly, Pick, Required

const plant: Plant<string> = {
    name: 'Kaktus',
    origin: 'Gobi',
    placeInHome: Rooms.SALOON,
    popular: false,
    height: 100,
    ground: 'dry',
    related: [
        {
            name: 'Fikus',
            origin: 'Sahara',
            placeInHome: Rooms.BEDROOM,
            height: 220,
            ground: 'dry'
        }
    ]
}