import Example from "../components/Example"

export default function UnorderedList() {
    return (
        <Example title="Unordered list">
            <ul>
                <li>What is Ubuntu Pro and how to use it</li>
                <li>How to attach an Ubuntu Pro</li>
                <li>How to check for and apply security updates</li>
                <li>
                    Design and build
                    <ul>
                        <li>Hardware specification</li>
                        <li>1870 packages are from Ubuntu Main</li>
                        <li>Integration requirements</li>
                    </ul>
                </li>
                <li>1870 packages are from Ubuntu Main</li>
                <li>281 packages are from Ubuntu Universe</li>
            </ul>
        </Example>
    )
}
