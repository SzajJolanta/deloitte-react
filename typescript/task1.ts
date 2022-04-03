const tags = {
    react: 'React',
    javascript: 'Javascript',
    news: 'News',
}

const books = [
    {
        title: 'React w praktyce',
        author: 'Jan Kowalski',
        tags: [tags.react, tags.javascript],
        published: 2022,
        bestseller: true,
        related: [
            {
                title: 'React 18 - przyszło nowe',
                author: 'Danny California',
                tags: [tags.react, tags.news],
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
        tags: [tags.javascript],
        published: 1999,
        bestseller: true,
    }
];
