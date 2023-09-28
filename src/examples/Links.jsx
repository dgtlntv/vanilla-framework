import Example from "../components/Example"

export default function Links() {
    return (
        <Example title="Links">
            <a className="link-hardcoded" href="#">
                Normal Link
            </a>
            <br />
            <a className="link-visited-hardcoded" href="#">
                Visited
            </a>
        </Example>
    )
}
