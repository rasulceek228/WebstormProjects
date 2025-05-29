const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}


/*
const book = getBook(3);
const {title, author, genres, pages, publicationDate,
    hasMovieAdaptation, reviews} = getBook(3);


console.log(title, author);


const [primaryGenre, secondaryGenre, ...otherGenre] = genres;

const updatedGenres = ["Adventure", ...genres];

console.log(updatedGenres);


const updatedBook = {...book, publishedDateOfMovie: "2001-12-19",};

console.log(updatedBook);



// function getYear(publicationDate) {
//     return publicationDate.split("-")[0];
// }

const getYear = (date) => date.split("-")[0];


const summary =
    `${title} is a ${pages} pages book, written by ${author}, and published in ${getYear(publicationDate)}..
    And the has ${hasMovieAdaptation ? "" : "not"} a movie adaptation.`;
summary;


const pagesRange = pages > 500 ? `${title} is a long book` : `${title} is a short book`;

console.log(pagesRange);

console.log(true && "Some String");
console.log(reviews.librarything?.reviewsCount && "Some String");

console.log(true || "Some String");
console.log(reviews.librarything?.reviewsCount || "Some String");

console.log (reviews.librarything?.reviewsCount ?? "no data tho");

function getTotaledReviewCount(book) {
    const goodreads = book.reviews?.goodreads?.reviewsCount;
    const libraryThing = book.reviews?.librarything?.reviewsCount ?? 0;
    return goodreads + libraryThing;
}
console.log(getTotaledReviewCount(book));
*/

const books = getBooks();

const titles = books.map((book) => book.title);

const essData = books.map((book) => ({
    title: book.title,
    author: book.author,
}));

const text = essData.map((data) => data.title + " by " + data.author + ". <br>");

console.log(text);


const longBooks = books
    .filter((book) => book.pages > 500)
    .filter((book) => book.hasMovieAdaptation);

console.log(longBooks);

const adventureBooks = books
    .filter(book => book.genres.includes("adventure"))
    .map(book => book.title) + " are adventure books.";


const sumOfPages = books.reduce((total, book) => total + book.pages, 0);
console.log(sumOfPages);

const {pages} = books;

const sortedBooksByNumOfPages = books.toSorted((a, b) => b.pages - a.pages);
const sortedBooks = sortedBooksByNumOfPages.map(book => book.title + " has " + book.pages + " pages.");

console.log(sortedBooks);