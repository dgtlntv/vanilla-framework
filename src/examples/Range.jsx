import Example from "../components/Example"
import React, { useEffect, useRef } from "react"

const isWebkit = /Chrome/i.test(navigator.userAgent) || /Safari/i.test(navigator.userAgent)
const PROGRESS_COLOUR = "#06c"
const EMPTY_COLOUR = "#D9D9D9"

export default function Range() {
    return (
        <Example title="Range">
            <CustomSlider min="0" max="100" />
            <CustomSlider min="0" max="100" disabled />
        </Example>
    )
}

const CustomSlider = (props) => {
    const sliderRef = useRef(null)

    useEffect(() => {
        const renderSlider = (slider) => {
            if (isWebkit) {
                const value = (slider.value - slider.min) / (slider.max - slider.min)
                slider.style.backgroundImage = `-webkit-gradient(linear, left top, right top, color-stop(${value}, ${PROGRESS_COLOUR}), color-stop(${value}, ${EMPTY_COLOUR}))`
            }
        }

        const initSlider = (slider) => {
            renderSlider(slider)
            slider.addEventListener("input", () => renderSlider(slider))
        }

        // If the browser is Webkit, initialize the slider.
        if (isWebkit && sliderRef.current) {
            initSlider(sliderRef.current)
        }
    }, [])

    return <input type="range" ref={sliderRef} {...props} />
}
