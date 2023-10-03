import Example from "../components/Example"

export default function OrderedList() {
    return (
        <Example title="Ordered list">
            <ol>
                <li>What Ubuntu Pro is and how to use it</li>
                <li>How to check the source of your installed packages</li>
                <li>How to attach an Ubuntu Pro</li>
                <li>
                    Install Conjure up using the instructions for your OS
                    <ol>
                        <li>Ubuntu</li>
                        <li>Some obscure OS</li>
                        <li>macOS</li>
                    </ol>
                </li>
                <li>How to check for and apply security updates</li>
            </ol>
        </Example>
    )
}
