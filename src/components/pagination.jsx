import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
    const { itemCount, pageSize, onPageChange, currentPage } = props;
    const pageCount = Math.ceil(itemCount / pageSize); //19/8
    //вычичляем кол-во страниц, к-е необходимо отобразить
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        key={page}
                        className={
                            "page-item" +
                            (currentPage === page ? " active" : "")
                        }
                    >
                        <button
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};
export default Pagination;
