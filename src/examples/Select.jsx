import Example from "../components/Example"

export default function Select() {
    return (
        <Example title="Select">
            <form>
                <label htmlFor="exampleSelect">Ubuntu releases</label>
                <select name="exampleSelect" id="exampleSelect">
                    <option value="selected" disabled="disabled">
                        Select an option
                    </option>
                    <option value="1">Cosmic Cuttlefish</option>
                    <option value="2">Bionic Beaver</option>
                    <option value="3">Xenial Xerus</option>
                </select>
            </form>
        </Example>
    )
}
