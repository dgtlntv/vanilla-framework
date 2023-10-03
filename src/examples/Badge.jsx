import Example from "../components/Example"

export default function Badge() {
    return (
        <Example title="Badge">
            <div>
                <button className="p-chip">
                    <span className="p-chip__value">Users</span>
                    <span className="p-badge" aria-label="9 users exist">
                        9
                    </span>
                </button>

                <button className="p-chip">
                    <span className="p-chip__value">Users</span>
                    <span className="p-badge" aria-label="more than 999 users exist">
                        999+
                    </span>
                </button>

                <button className="p-chip">
                    <span className="p-chip__value">Users</span>
                    <span className="p-badge" aria-label="approximately 1 million users exist">
                        1M
                    </span>
                </button>

                <button className="p-chip">
                    <span className="p-chip__value">Users</span>
                    <span className="p-badge" aria-label="approximately 2.5 billion users exist">
                        2.5B
                    </span>
                </button>

                <button className="p-chip">
                    <span className="p-chip__value">Users</span>
                    <span className="p-badge" aria-label="approximately 25 thousand users exist">
                        25k
                    </span>
                </button>
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
                <span className="p-badge" aria-label="9 items exist">
                    9
                </span>
                <span className="p-badge" aria-label="more than 999 items exist">
                    999+
                </span>
                <span className="p-badge" aria-label="approximately 1 million items exist">
                    1M
                </span>
                <span className="p-badge" aria-label="approximately 2.5 billion items exist">
                    2.5B
                </span>
                <span className="p-badge" aria-label="approximately 25 thousand items exist">
                    25k
                </span>

                <span className="p-badge--negative" aria-label="9 items exist">
                    9
                </span>
                <span className="p-badge--negative" aria-label="more than 999 items exist">
                    999+
                </span>
                <span className="p-badge--negative" aria-label="approximately 1 million items exist">
                    1M
                </span>
                <span className="p-badge--negative" aria-label="approximately 2.5 billion items exist">
                    2.5B
                </span>
                <span className="p-badge--negative" aria-label="approximately 25 thousand items exist">
                    25k
                </span>
            </div>

            <div>
                <nav className="p-tabs" aria-label="Tabs example">
                    <ul className="p-tabs__list">
                        <li className="p-tabs__item">
                            <a href="#" className="p-tabs__link" aria-selected="true">
                                Docs
                                <span className="p-badge" aria-label="more than 999 items exist">
                                    999+
                                </span>
                            </a>
                        </li>
                        <li className="p-tabs__item">
                            <a href="/docs/examples" className="p-tabs__link">
                                Examples
                                <span className="p-badge" aria-label="9 examples exist">
                                    9
                                </span>
                            </a>
                        </li>
                        <li className="p-tabs__item">
                            <a href="/contribute" className="p-tabs__link">
                                Contribute
                                <span className="p-badge" aria-label="approximately 1.2 million items exist">
                                    1.2M
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div>
                <nav className="p-side-navigation">
                    <ul className="p-side-navigation__list">
                        <li className="p-side-navigation__item">
                            <a className="p-side-navigation__link" aria-current="page" href="#">
                                <span className="u-vertically-center">Users</span>
                                <span className="p-side-navigation__status u-vertically-center">
                                    <span className="p-badge" aria-label="2 items exist">
                                        2
                                    </span>
                                </span>
                            </a>
                            <ul className="p-side-navigation__list">
                                <li className="p-side-navigation__item">
                                    <a className="p-side-navigation__link" href="#">
                                        Anna von Example
                                    </a>
                                </li>
                                <li className="p-side-navigation__item">
                                    <a className="p-side-navigation__link" href="#">
                                        Bob Anonymous
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="p-side-navigation__item">
                            <a className="p-side-navigation__link" href="#">
                                <span className="u-vertically-center">Get help</span>
                                <span className="p-side-navigation__status u-vertically-center">
                                    <span className="p-badge" aria-label="more than 999 items exist">
                                        999+
                                    </span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Example>
    )
}
