<<<<<<< HEAD
=======

>>>>>>> 8f93e5a94e17e26c32403583aa03c893b1cfc9f3
const generateMovies = (qty) => {
    return new Array(qty).fill(null).map((_, index) => ({
        id: index,
        title: `Movie ${index}`,
<<<<<<< HEAD
        rating: Math.ceil(Math.random(index) * 5),
        poster: `movie${index + 1}.jpg`,
        comments: [
            {
                title: 'Comment 1',
                comment: 'Lorem ipsum',
            }
        ]
    }))
}

export const MOVIES = generateMovies(18)
=======
        rating: Math.ceil(Math.random(index)*5),
        poster: `movie ${index}.jpg`,
        comments: [
            {
                title: 'Comment 1',
                comment: 'Lorem ipsum'
            }

        ]
        

    }))
}

export const MOVIES = generateMovies(18)
>>>>>>> 8f93e5a94e17e26c32403583aa03c893b1cfc9f3
