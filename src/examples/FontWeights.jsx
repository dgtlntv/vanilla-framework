import Example from "../components/Example"

export default function FontWeights() {
    return (
        <Example title="Font weights">
            <p style={{ fontWeight: "100" }}>This is text with &#39;thin&#39; weight of 100.</p>
            <p style={{ fontWeight: "300" }}>This is text with &#39;light&#39; weight of 300.</p>
            <p style={{ fontWeight: "400" }}>This is text with &#39;regular&#39; weight of 400.</p>
            <p style={{ fontWeight: "500" }}>This is text with &#39;medium&#39; weight of 500.</p>
            <p style={{ fontWeight: "700" }}>This is text with &#39;bold&#39; weight of 700.</p>
            <p style={{ fontWeight: "800" }}>This is text with &#39;extra bold&#39; weight of 800.</p>
        </Example>
    )
}
