import Example from "../components/Example"

export default function MultiSelect() {
    return (
        <Example title="Multi select">
            <form>
                <label htmlFor="exampleSelectMulti">Ubuntu releases</label>
                <select name="exampleSelectMulti" id="exampleSelectMulti" multiple>
                    <option value="" disabled="disabled">
                        Select...
                    </option>
                    <option value="1">Cosmic Cuttlefish</option>
                    <option value="2">Bionic Beaver</option>
                    <option value="3">Xenial Xerus</option>
                </select>
            </form>
        </Example>
    )
}
