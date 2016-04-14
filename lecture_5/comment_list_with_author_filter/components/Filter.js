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
    <select className='comment-filter' value={selectedAuthor} onChange={onChange}>
      {options}
    </select>
  )
};

Filter.propTypes = {
  authors: React.PropTypes.arrayOf(
    React.PropTypes.string.isRequired
  ).isRequired,
  onSelectAuthor: React.PropTypes.func.isRequired
};

export default Filter;
