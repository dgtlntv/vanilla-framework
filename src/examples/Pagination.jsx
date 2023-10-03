import Example from "../components/Example"

export default function Pagination() {
    return (
        <Example title="Pagination">
            <div>
                <nav className="p-pagination" aria-label="Pagination">
                    <ol className="p-pagination__items">
                        <li className="p-pagination__item">
                            <span className="p-pagination__link--previous is-disabled" aria-disabled="true">
                                <i className="p-icon--chevron-down">Previous page</i>
                            </span>
                        </li>
                        <li className="p-pagination__item">
                            <a
                                className="p-pagination__link is-active"
                                aria-current="page"
                                aria-label="Page 1"
                                href="#1"
                            >
                                1
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link" href="#2" aria-label="Page 2">
                                2
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link" href="#3" aria-label="Page 3">
                                3
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link" href="#4" aria-label="Page 4">
                                4
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link" href="#5" aria-label="Page 5">
                                5
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link--next" href="#next" title="Next page">
                                <i className="p-icon--chevron-down">Next page</i>
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>

            <div>
                <nav className="p-pagination" aria-label="Pagination">
                    <ol className="p-pagination__items">
                        <li className="p-pagination__item">
                            <a className="p-pagination__link--previous" href="#previous" title="Previous page">
                                <i className="p-icon--chevron-down">Previous page</i>
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link" href="#1" aria-label="Page 1">
                                1
                            </a>
                        </li>
                        <li className="p-pagination__item p-pagination__item--truncation">&hellip;</li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link" href="#33" aria-label="Page 33">
                                33
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a
                                className="p-pagination__link is-active"
                                href="#34"
                                aria-current="page"
                                aria-label="Page 34"
                            >
                                34
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link" href="#35" aria-label="Page 35">
                                35
                            </a>
                        </li>
                        <li className="p-pagination__item p-pagination__item--truncation">&hellip;</li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link" href="#7">
                                100
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link--next" href="#next" title="Next page">
                                <i className="p-icon--chevron-down">Next page</i>
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>

            <div>
                <nav className="p-pagination" aria-label="Pagination">
                    <ol className="p-pagination__items">
                        <li className="p-pagination__item">
                            <a className="p-pagination__link--previous" href="#previous" title="Previous page">
                                <i className="p-icon--chevron-down"></i>
                                <span>Previous page</span>
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link--next" href="#next" title="Next page">
                                <span>Next page</span>
                                <i className="p-icon--chevron-down"></i>
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>

            <div>
                <nav className="p-pagination" aria-label="Pagination">
                    <ol className="p-pagination__items">
                        <li className="p-pagination__item">
                            <a className="p-pagination__link--previous" href="#previous" title="Previous page">
                                <i className="p-icon--chevron-down">Previous page</i>
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link" href="#1" aria-label="Page 1">
                                1
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link" href="#2" aria-label="Page 2">
                                2
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a
                                className="p-pagination__link is-active"
                                aria-current="page"
                                href="#3"
                                aria-label="Page 3"
                            >
                                3
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link" href="#4" aria-label="Page 4">
                                4
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link" href="#5" aria-label="Page 5">
                                5
                            </a>
                        </li>
                        <li className="p-pagination__item">
                            <a className="p-pagination__link--next" href="#next" title="Next page">
                                <i className="p-icon--chevron-down">Next page</i>
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>
        </Example>
    )
}
