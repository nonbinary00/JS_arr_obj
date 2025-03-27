const numberOfFilms = +prompt('How many movies have you watched already?', '');
// prompt() показывает диалоговое окно с вопросом.
// перед prompt преобразует ответ в число (например, строка "5" станет числом 5)
// Результат сохраняется в переменной numberOfFilms

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// const a = prompt('One of the last movies you watched?', ''),
//   b = prompt('How do you rate the film?', ''),
//   c = prompt('One of the last movies you watched?', ''),
//   d = prompt('How do you rate the film?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// Создаются свойства в объекте movies:
// Название первого фильма (a) становится ключом, а его оценка (b) - значением
// Название второго фильма (c) становится ключом, а его оценка (d) - значением

for (let i = 0; i < 2; i++) {
  (a = prompt('One of the last movies you watched?', '')),
    (b = prompt('How do you rate the film?', ''));
  personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
  console.log('Few films watched');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('You are a movie lover!');
} else if (personalMovieDB.count >= 30) {
  console.log('You love movie!');
} else {
  console.log('Error');
}

console.log(personalMovieDB);
