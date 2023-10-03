import Example from "../components/Example"

export default function Breadcrumbs() {
    return (
        <Example title="Breadcrumbs">
            <nav class="p-breadcrumbs" aria-label="Breadcrumbs">
                <ol class="p-breadcrumbs__items">
                    <li class="p-breadcrumbs__item">
                        <a href="#">Overview</a>
                    </li>
                    <li class="p-breadcrumbs__item">
                        <a href="#">Features</a>
                    </li>
                    <li class="p-breadcrumbs__item">
                        <a href="#">Managed</a>
                    </li>
                    <li class="p-breadcrumbs__item">
                        <a href="#">Install</a>
                    </li>
                    <li class="p-breadcrumbs__item">
                        <a href="#">Partners</a>
                    </li>
                    <li class="p-breadcrumbs__item">Docs</li>
                </ol>
            </nav>
        </Example>
    )
}
