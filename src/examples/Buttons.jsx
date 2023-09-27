export default function Buttons() {
    return (
        <>
            <h3>Buttons</h3>
            <hr />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "8px" }}>
                <div>
                    <button className="p-button">Default</button>
                </div>

                <div>
                    <button className="p-button" disabled>
                        Default disabled
                    </button>
                </div>

                <div>
                    <button className="p-button--base">Base</button>
                </div>
                <div>
                    <button className="p-button--base" disabled>
                        Base disabled
                    </button>
                </div>
                <div>
                    <button className="p-button--positive">Positive button</button>
                </div>

                <div>
                    <button className="p-button--positive" disabled>
                        Positive button disabled
                    </button>
                </div>
                <div>
                    <button className="p-button--negative">Negative button</button>
                </div>
                <div>
                    <button className="p-button--negative" disabled>
                        Negative button disabled
                    </button>
                </div>

                <div>
                    <button className="p-button--brand">Brand button</button>
                </div>

                <div>
                    <button className="p-button--brand" disabled>
                        Brand button disabled
                    </button>
                </div>

                <div>
                    <button className="p-button has-icon">
                        <i className="p-icon--plus"></i>
                        <span>Icon before text</span>
                    </button>
                </div>

                <div>
                    <button className="p-button is-small is-dense">This is a small, dense button</button>
                </div>
            </div>
        </>
    )
}
