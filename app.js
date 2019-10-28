const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_req, res) => res.send('Welcome to Data Representation & Querying!'));

app.get('/', (_req, res) => res.send('Hello World'));

app.get('/hello/:name', (req, res) => {
	console.log(req.params.name);
	res.send('Hello ' + req.params.name);
});

app.get('/test', (req, res) => {res.sendFile(path.join(__dirname +'/index.html'));});

app.get('/api/movies', (req, res, next) => {
	const movies = [
		{
			Title: 'Avengers: Infinity War',
			Year: '2018',
			Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'
		},
		{
			Title: 'Captain America: Civil War',
			Year: '2016',
			Poster: 'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg'
		}
	];
	res.status(200).json({ message: 'Posts fetched succesfully!', movies: movies });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
