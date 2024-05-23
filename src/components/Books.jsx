import "../styles/Books.css";
import PropTypes from "prop-types";
import { books } from "../data/books.js";

function Books({ title, author, rating }) {
	<div>
		<h1>{title}</h1>
		<h2>{author}</h2>
		<p>{rating}</p>
	</div>;
}

Books.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
};

export default Books;
