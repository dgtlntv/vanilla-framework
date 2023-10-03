import Example from "../components/Example"

export default function Headings() {
    return (
        <Example title="Headings">
            <h1 className="p-heading--display">Display heading</h1>
            <h1>h1 heading</h1>
            <h2>h2 heading</h2>
            <h3>h3 heading</h3>
            <h4>h4 heading</h4>
            <h5>h5 heading</h5>
            <h6>h6 heading</h6>
            <h4 className="is-accent">acc. heading</h4>
            <h4 className="p-muted-heading">muted heading</h4>
        </Example>
    )
}
