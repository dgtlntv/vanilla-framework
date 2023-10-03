import Example from "../components/Example"

export default function Switch() {
    return (
        <Example title="Switch">
            <label class="p-switch">
                <input type="checkbox" class="p-switch__input" checked role="switch" />
                <span class="p-switch__slider"></span>
                <span class="p-switch__label">On</span>
            </label>
            <label class="p-switch">
                <input type="checkbox" class="p-switch__input" role="switch" />
                <span class="p-switch__slider"></span>
                <span class="p-switch__label">Off</span>
            </label>
            <label class="p-switch">
                <input type="checkbox" class="p-switch__input" checked role="switch" disabled />
                <span class="p-switch__slider"></span>
                <span class="p-switch__label">On disabled</span>
            </label>
            <label class="p-switch">
                <input type="checkbox" class="p-switch__input" role="switch" disabled />
                <span class="p-switch__slider"></span>
                <span class="p-switch__label">Off disabled</span>
            </label>
        </Example>
    )
}
