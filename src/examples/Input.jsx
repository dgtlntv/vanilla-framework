import Example from "../components/Example"

export default function Input() {
    return (
        <Example title="Input">
            <form>
                <label htmlFor="exampleTextInput">Default</label>
                <input
                    type="email"
                    id="exampleTextInput"
                    name="exampleTextInput"
                    placeholder="example@canonical.com"
                    autoComplete="email"
                />
                <label htmlFor="disabled-input">Disabled</label>
                <input
                    type="text"
                    id="disabled-input"
                    name="disabled-input"
                    placeholder="example@canonical.com"
                    disabled="disabled"
                />
            </form>
        </Example>
    )
}
