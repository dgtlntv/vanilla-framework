import chroma from "chroma-js"
import { useEffect, useState } from "react"
import { apcach, crToBg, apcachToCss } from "apcach"

export default function Palette() {
    const [finalShades, setFinalShades] = useState(null)

    const canonicalPalette = {
        red: "#c7162b",
        yellow: "#f99b11",
        green: "#0e8420",
        blue: "#24598f",
        orange: "#e95420",
        gray: "#666666",
        turquoise: "#0f95a1"
    }
    const contrastSteps = { 1000: 105, 900: 100, 800: 90, 700: 77, 600: 65 }
    const lightBg = "#FFF"
    const darkBg = "#111"

    function hexToOklch(hex) {
        if (hex == "#666666") {
            return [51.03, 0, 0]
        }

        return chroma(hex).oklch()
    }

    useEffect(() => {
        const canonicalOklchPalette = {}

        const canonicalShadedPalette = {}

        for (const [name, value] of Object.entries(canonicalPalette)) {
            canonicalOklchPalette[name] = hexToOklch(value)
        }

        for (const [name, [l, c, h]] of Object.entries(canonicalOklchPalette)) {
            const shades = {}
            for (const [name, contrast] of Object.entries(contrastSteps)) {
                const colorLight = apcach(crToBg(lightBg, contrast), c, h)
                const lightName = 1000 - name == 0 ? "00" : 1000 - name
                shades[lightName] = apcachToCss(colorLight, "oklch")

                const colorDark = apcach(crToBg(darkBg, contrast), c, h)
                shades[name] = apcachToCss(colorDark, "oklch")
            }
            shades[500] = `oklch(${l} ${c} ${h})`
            canonicalShadedPalette[name] = shades
        }
        console.log(canonicalShadedPalette)
        setFinalShades(canonicalShadedPalette)
    }, [])

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {finalShades ? (
                <div>
                    {Object.keys(finalShades).map((colorName) => (
                        <div key={colorName}>
                            <h1>{colorName}</h1>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    flexWrap: "wrap"
                                }}
                            >
                                {Object.keys(finalShades[colorName])
                                    .sort((a, b) => (a === "00" ? -1 : a - b))
                                    .map((shade) => (
                                        <div
                                            key={shade}
                                            style={{
                                                width: "100px",
                                                height: "100px",
                                                backgroundColor:
                                                    finalShades[colorName][
                                                        shade
                                                    ],
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                boxSizing: "border-box",
                                                border: "1px solid #000"
                                            }}
                                        >
                                            {shade}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No colors generated</div>
            )}
        </div>
    )
}
