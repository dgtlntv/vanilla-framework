import Example from "../components/Example"

export default function CodeBlock() {
    return (
        <Example title="Code block">
            <pre>
                <code>{`function() {
    alert("Hello world");
}`}</code>
            </pre>
        </Example>
    )
}
