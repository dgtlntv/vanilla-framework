import Buttons from "./examples/Buttons"
import { Abbr } from "./examples/abbr"
import { Blockquote } from "./examples/blockquote"

function App() {
    return (
        <div className="parent">
            <h1>Wasabi</h1>
            <p>This is where the controls go ;)</p>
            <h2>Examples</h2>
            <div className="grid-parent">
                <div>
                    <Abbr />
                </div>

                <div>
                    <Blockquote />
                </div>

                <div style={{ gridColumn: "span 2 / span 2" }}>
                    <Buttons />
                </div>
            </div>
        </div>
    )
}

export default App
