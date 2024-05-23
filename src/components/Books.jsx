import "../styles/Books.css";
import { books } from "../data/books.js";

function Books() {
	return (
		<ul>
			{books.map((book) => (
				<li key={book.id}>
					<h1>{book.title}</h1>
					<h2>By {book.author}</h2>
					<p>Rating: {book.rating}</p>
				</li>
			))}
		</ul>
	);
}

export default Books;
