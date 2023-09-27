import Buttons from "./examples/Buttons"
import CodeBlock from "./examples/CodeBlock"
import CodeInline from "./examples/CodeInline"
import Details from "./examples/Details"
import FontWeights from "./examples/FontWeights"
import Headings from "./examples/Headings"
import Hr from "./examples/Hr"
import Links from "./examples/Links"
import { Abbr } from "./examples/abbr"
import { Blockquote } from "./examples/blockquote"

function App() {
    return (
        <div className="parent">
            <h1>Wasabi</h1>
            <p>This is where the controls go ;)</p>
            <h2>Examples</h2>
            <div className="grid-parent">
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Abbr />
                </div>

                <div style={{ gridColumn: "span 2", gridRow: "span 1" }}>
                    <Blockquote />
                </div>

                <div style={{ gridColumn: "span 2", gridRow: "span 3" }}>
                    <Buttons />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <CodeBlock />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <CodeInline />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Details />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 2" }}>
                    <FontWeights />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 2" }}>
                    <Headings />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 1" }}>
                    <Hr />
                </div>
                <div>
                    <Links />
                </div>
            </div>
        </div>
    )
}

export default App
