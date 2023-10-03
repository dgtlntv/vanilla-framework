import Example from "../components/Example"

export default function Chip() {
    return (
        <Example title="Chip">
            <button className="p-chip is-dense">
                <span className="p-chip__value">21.10</span>
            </button>

            <button className="p-chip">
                <span className="p-chip__value">21.10</span>
            </button>

            <span className="p-chip--positive is-dense">
                <span className="p-chip__value">21.10</span>
                <button className="p-chip__dismiss">Dismiss</button>
            </span>

            <span className="p-chip--positive">
                <span className="p-chip__value">21.10</span>
                <button className="p-chip__dismiss">Dismiss</button>
            </span>

            <button className="p-chip--caution is-dense">
                <span className="p-chip__lead">Owner</span>
                <span className="p-chip__value">Bob</span>
            </button>

            <button className="p-chip--caution">
                <span className="p-chip__lead">Owner</span>
                <span className="p-chip__value">Bob</span>
            </button>

            <span className="p-chip--negative is-dense">
                <span className="p-chip__lead">Owner</span>
                <span className="p-chip__value">Bob</span>
                <button className="p-chip__dismiss">Dismiss</button>
            </span>

            <span className="p-chip--negative">
                <span className="p-chip__lead">Owner</span>
                <span className="p-chip__value">Bob</span>
                <button className="p-chip__dismiss">Dismiss</button>
            </span>
        </Example>
    )
}
