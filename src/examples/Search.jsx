import Example from "../components/Example"

export default function Search() {
    return (
        <Example title="Search">
            <form className="p-search-box">
                <label className="u-off-screen" htmlFor="search">
                    Search
                </label>
                <input
                    type="search"
                    id="search"
                    className="p-search-box__input"
                    name="search"
                    placeholder="Search"
                    required
                    autoComplete="on"
                />
                <button type="reset" className="p-search-box__reset">
                    <i className="p-icon--close">Close</i>
                </button>
                <button type="submit" className="p-search-box__button">
                    <i className="p-icon--search">Search</i>
                </button>
            </form>
            <form className="p-search-box">
                <label className="u-off-screen" htmlFor="search-disabled">
                    Search
                </label>
                <input
                    type="search"
                    id="search-disabled"
                    className="p-search-box__input"
                    name="search"
                    placeholder="Search"
                    required
                    autoComplete="on"
                    disabled
                />
                <button type="reset" className="p-search-box__reset" disabled>
                    <i className="p-icon--close">Close</i>
                </button>
                <button type="submit" className="p-search-box__button" disabled>
                    <i className="p-icon--search">Search</i>
                </button>
            </form>
        </Example>
    )
}
