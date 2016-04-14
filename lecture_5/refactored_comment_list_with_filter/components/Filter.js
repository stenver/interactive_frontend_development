import React from "react";
import ReactDOM from "react-dom";

const Filter = ({authors, selectedAuthor, onSelectAuthor}) => {
  const optionFromAuthor = (author, index) => {
    return <option value={author} key={index}>{author}</option>
  };

  const defaultOption = <option key={-1} value={""}>All</option>

  const options = [defaultOption].concat(authors.map(optionFromAuthor))

  const onChange = (event) => onSelectAuthor(event.target.value)

  return (
    <div className='comment-filter'>
      <h3>Filter by author: </h3>
      <select value={selectedAuthor} onChange={onChange}>
        {options}
      </select>
    </div>
  )
};

Filter.propTypes = {
  authors: React.PropTypes.arrayOf(
    React.PropTypes.string.isRequired
  ).isRequired,
  selectedAuthor: React.PropTypes.string.isRequired,
  onSelectAuthor: React.PropTypes.func.isRequired
};

export default Filter;
