enum Tags {
    REACT = 'React',
    JAVASCRIPT = 'Javascript',
    NEWS = 'News'
};

interface Book {
    title: string;
    author: string;
    tags: Tags[];
    published: number;
    bestseller?: boolean;
    related?: Book[];
}

const books: Book[] = [
    {
        title: 'React w praktyce',
        author: 'Jan Kowalski',
        tags: [Tags.REACT, Tags.JAVASCRIPT],
        published: 2022,
        bestseller: true,
        related: [
            {
                title: 'React 18 - przyszło nowe',
                author: 'Danny California',
                tags: [Tags.REACT, Tags.NEWS],
                published: 2022,
            }
        ]
    },
    {
        title: 'Angular vs React',
        author: 'Will Smoliński',
        tags: [],
        published: 2017,
        bestseller: false,
    },
    {
        title: 'Javascript w domu i w pracy',
        author: 'Janusz Nowak',
        tags: [Tags.JAVASCRIPT],
        published: 1999,
        bestseller: true,
    }
];
