import "./App.css";
import { books } from "./data/books.js";
import Books from "./components/Books.jsx";

function App() {
	return (
		<div>
			{books.map((book) => (
				<Books key={book.title} {...book} />
			))}
		</div>
	);
}

export default App;
