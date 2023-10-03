import chroma from "chroma-js"
import { useEffect, useState } from "react"
import { apcach, crToBg, apcachToCss, maxChroma } from "apcach"

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
    //adjusted L and C to be the same as brand color
    const canonicalOklchPalette = {
        red: [0.6405077375366084, 0.19407761553760028, 23.583148148376438],
        yellow: [0.6405077375366084, 0.19407761553760028, 66.80505094102949],
        green: [0.6405077375366084, 0.19407761553760028, 144.255065390435],
        blue: [0.6405077375366084, 0.19407761553760028, 251.57249685060697],
        orange: [0.6405077375366084, 0.19407761553760028, 37.75620691492935],
        gray: [0.6405077375366084, 0, 0],
        turquoise: [0.6405077375366084, 0.19407761553760028, 205.0987927033523]
    }

    const contrastSteps = { 1000: 105, 900: 100, 800: 90, 700: 77, 600: 54 }
    const lightBg = "#FFF"
    const darkBg = "#111"

    function hexToOklch(hex) {
        if (hex == "#666666") {
            return [0.5103, 0, 0]
        }

        return chroma(hex).oklch()
    }

    useEffect(() => {
        const canonicalShadedPalette = {}

        for (const [name, [l, c, h]] of Object.entries(canonicalOklchPalette)) {
            const shades = {}
            for (const [name, contrast] of Object.entries(contrastSteps)) {
                const colorDark = apcach(
                    crToBg(lightBg, contrast, "apca", "darker"),
                    maxChroma(c),
                    h
                )
                const darkName = 1100 - name
                shades[darkName] = apcachToCss(colorDark, "oklch")

                const colorLight = apcach(
                    crToBg(darkBg, contrast, "apca", "lighter"),
                    maxChroma(c),
                    h
                )
                shades[name] = apcachToCss(colorLight, "oklch")
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
                                    .sort((a, b) => a - b)
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
