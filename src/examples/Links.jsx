import Example from "../components/Example"

export default function Links() {
    return (
        <Example title="Links">
            <a className="link-hardcoded" href="#">
                Normal link
            </a>

            <br />

            <a className="link-visited-hardcoded" href="#">
                Visited link
            </a>

            <br />

            <a href="#" className="p-link--soft">
                Soft link
            </a>

            <div style={{ background: "#111", color: "#FFF" }}>
                <a href="#" className="p-link--inverted">
                    inverted link
                </a>
            </div>

            <div className="p-top">
                <a href="#" className="p-top__link">
                    Back to top
                </a>
            </div>
        </Example>
    )
}
