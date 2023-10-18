/* eslint-disable react/prop-types */
import './Button.scss';

export const Button = ({ currentPage, handleCurrentPage }) => {
  const loadMore = () => {
    handleCurrentPage(currentPage + 1);
  }

  return (
    <button className="load-more" onClick={loadMore}>Load More</button>
  )
}