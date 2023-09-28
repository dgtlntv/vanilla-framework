import React, { useState } from "react"
import Example from "../components/Example"

export default function VariableFont() {
    const [weight, setWeight] = useState(400)
    const [width, setWidth] = useState(100)

    return (
        <Example title="Variable font">
            <div>
                <p style={{ fontVariationSettings: `'wght' ${weight}, 'wdth' ${width}` }}>
                    This is a paragraph of Ubuntu variable font.
                </p>
                <p style={{ fontVariationSettings: `'wght' ${weight}, 'wdth' ${width}` }}>
                    <em>This is a paragraph of Ubuntu variable font in italic.</em>
                </p>
                <code style={{ fontVariationSettings: `'wght' ${weight}, 'wdth' ${width}` }}>
                    This is a paragraph of Ubuntu Mono variable font.
                </code>
            </div>
            <label>Weight</label>
            <input
                type="range"
                min="100"
                max="800"
                value={weight}
                step="1"
                style={{ appearance: "auto" }}
                onChange={(e) => setWeight(e.target.value)}
            />
            <label>Width</label>
            <input
                type="range"
                min="75"
                max="100"
                value={width}
                step="1"
                style={{ appearance: "auto" }}
                onChange={(e) => setWidth(e.target.value)}
            />
        </Example>
    )
}
