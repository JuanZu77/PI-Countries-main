import React from "react";
import style from "../Pagination/Pagination.module.css";

export default function Pagination({ allCountry, countriesPerPage, paying, page, setPage,}) {
  
	const numberpage = [];

  // Dividir la cantidad total por el nro de paises por pagina
  for (var i = 1; i <= Math.ceil(allCountry / countriesPerPage); i++) {
    numberpage.push(i);
  }

  // Previus Page
  const onPreviusPage = () => {
    setPage(page - 1);
  };

  // Next Page
  const onNextPage = () => {
    setPage(page + 1);
  };

  const visiblePages = 4;
  const startIndex = Math.max(0, page - Math.floor(visiblePages / 2));
  const endIndex = Math.min( numberpage.length - 1, startIndex + visiblePages - 1 );
  const visibleNumberPage = numberpage.slice(startIndex, endIndex + 1);

  return (
    <div>
		
      <div className={style.containPreviusNext}>
        <button
          className={page === 1 ? style.invalid : style.previusNext}
          onClick={onPreviusPage}
        >
          Previus
        </button>
        <button
          className={
            page >= numberpage.length ? style.invalid : style.previusNext
		 }
          onClick={onNextPage}
        >
          Next
        </button>
      </div>

      <nav className={style.paginado}>
        <ul className={style.paginado}>
          {visibleNumberPage &&
            visibleNumberPage.map((number) => (
              <li
                key={number}
                className={number === page ? style.activeLI : style.inactiveLI}
              >
                <button
                  className={
                    number === page ? style.buttonActual : style.buttonPag
                  }
                  onClick={() => paying(number)}
                >
                  {number}
                </button>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
