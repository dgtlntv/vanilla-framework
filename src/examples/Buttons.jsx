export default function Buttons() {
    return (
        <>
            <h3>Buttons</h3>
            <hr />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "8px" }}>
                <button className="p-button">Base</button>
                <button className="p-button" disabled>
                    Base
                </button>
                <button className="p-button--base">Base</button>
                <button className="p-button--base" disabled>
                    Base
                </button>
                <button className="p-button--positive">Positive button</button>
                <button className="p-button--positive" disabled>
                    Positive button disabled
                </button>
                <button className="p-button--negative">Negative button</button>
                <button className="p-button--negative" disabled>
                    Negative button disabled
                </button>
                <button className="p-button--brand">Brand button</button>
                <button className="p-button--brand" disabled>
                    Brand button disabled
                </button>
                <button className="p-button--link">Button as link</button>
                <span>Everything you need to get started with Vanilla.</span>
                <button className="p-button is-inline">Inline button</button>
                <span>Everything you need to get started with Vanilla.</span>
                <button className="p-button is-dense">Dense button</button>
                <p>
                    <small>
                        This is small text{" "}
                        <button className="p-button is-small is-inline">This is a small button</button>
                        <button className="p-button is-small is-dense">This is a small, dense button</button>
                    </small>
                </p>
                <button className="p-button--positive has-icon">
                    <i className="p-icon--success"></i>
                </button>
                <button className="p-button has-icon">
                    <i className="p-icon--plus"></i>
                    <span>Icon before text</span>
                </button>
                <button className="p-button has-icon">
                    <span>Icon after text</span>
                    <i className="p-icon--chevron-down"></i>
                </button>
                <button disabled="" className="p-button--positive is-processing">
                    <i className="p-icon--spinner u-animation--spin is-light"></i>
                </button>

                <button className="p-button--positive js-processing-button">
                    <i className="p-icon--spinner u-animation--spin is-light u-hide"></i>
                    <span id="button-label">Click me!</span>
                </button>
            </div>
        </>
    )
}
