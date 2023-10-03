import Example from "../components/Example"

export default function Tooltip() {
    return (
        <Example title="Tooltip">
            <button className="p-tooltip" aria-describedby="default-tooltip">
                Bottom left
                <span className="p-tooltip__message" role="tooltip" id="default-tooltip">
                    Product name to be displayed on the storefront.
                </span>
            </button>
            <button className="p-tooltip--btm-center" aria-describedby="btm-cntr">
                Bottom center
                <span className="p-tooltip__message" role="tooltip" id="btm-cntr">
                    Product name to be displayed on the storefront.
                </span>
            </button>
            <button className="p-tooltip--btm-right" aria-describedby="btm-rgt">
                Bottom right
                <span className="p-tooltip__message" role="tooltip" id="btm-rgt">
                    Product name to be displayed on the storefront.
                </span>
            </button>
            <button className="p-tooltip--left" aria-describedby="left">
                Left
                <span className="p-tooltip__message" role="tooltip" id="left">
                    Product name to be displayed on the storefront.
                </span>
            </button>
            <br />
            <br />
            <button className="p-tooltip--right" aria-describedby="rght">
                Right
                <span className="p-tooltip__message" role="tooltip" id="rght">
                    Product name to be displayed on the storefront.
                </span>
            </button>
            <button className="p-tooltip--top-left" aria-describedby="tp-lft">
                Top left
                <span className="p-tooltip__message" role="tooltip" id="tp-lft">
                    Product name to be displayed on the storefront.
                </span>
            </button>
            <button className="p-tooltip--top-center" aria-describedby="tp-cntr">
                Top center
                <span className="p-tooltip__message" role="tooltip" id="tp-cntr">
                    Product name to be displayed on the storefront.
                </span>
            </button>
            <button className="p-tooltip--top-right" aria-describedby="tp-rght">
                Top right
                <span className="p-tooltip__message" role="tooltip" id="tp-rght">
                    Product name to be displayed on the storefront.
                </span>
            </button>
        </Example>
    )
}
