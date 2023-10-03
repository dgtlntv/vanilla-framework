import Example from "../components/Example"

export default function Textarea() {
    return (
        <Example title="Textarea">
            <form>
                <label htmlFor="textarea">Tell us about your project or interest</label>
                <textarea style={{ resize: "vertical" }} id="textarea" name="textarea" rows="3" defaultValue="Ubuntu" />
            </form>
        </Example>
    )
}
