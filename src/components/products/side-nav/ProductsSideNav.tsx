import './ProductsSideNav.scss';
import { Filter } from '../../data/types/filter.ts';

interface ProductsSideNavProps {
  brands: string[];
  category: string;
  setFilter: (productFilter: Filter) => void;
  currentFilter: Filter;
}

const ProductsSideNav = ({ brands, category, setFilter, currentFilter }: ProductsSideNavProps) => {
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            Category
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
          <div className="accordion-body d-flex p-10 align-items-baseline">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
            <p onClick={() => setFilter({ ...currentFilter, category: category })}>{category}</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            Prices
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
          <div className="accordion-body">
            <p>Prices</p>
            <input type="range" className="form-range" id="customRange1" />
          </div>
          {/*<RangeInput min={0} max={100} />*/}
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            Brands
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
          <div className="accordion-body p-10 align-items-baseline">
            {brands.map(brand => (
              <div className="d-flex p-10 align-items-baseline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
                <p onClick={() => setFilter({ ...currentFilter, brand: brand })}>{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSideNav;
