import Example from "../components/Example"
import { useState } from "react"

export default function Tabs() {
    const contentArray = [
        `A system to help you move from configuration management to application management across your hybrid cloud estate - through sharable, reusable, tiny applications called Charmed Operators.`,
        `A set of tools to help you write Charmed Operators and to package them as Charms.`,
        `A repository for charms - from Observability to Data to Identity and more.`,
    ]

    const [content, setContent] = useState(contentArray[0])
    const [ariaSelectedState, setAriaSelectedState] = useState([true, false, false])
    return (
        <Example title="Tabs">
            <div>
                <div class="p-tabs">
                    <div class="p-tabs__list" role="tablist" aria-label="Juju technology">
                        <div class="p-tabs__item">
                            <button
                                class="p-tabs__link"
                                role="tab"
                                aria-selected={ariaSelectedState[0]}
                                onClick={() => {
                                    setContent(contentArray[0])
                                    setAriaSelectedState([true, false, false])
                                }}
                            >
                                Charmed Operator Lifecycle Manager
                            </button>
                        </div>
                        <div class="p-tabs__item">
                            <button
                                class="p-tabs__link"
                                role="tab"
                                aria-selected={ariaSelectedState[1]}
                                onClick={() => {
                                    setContent(contentArray[1])
                                    setAriaSelectedState([false, true, false])
                                }}
                            >
                                Charmed Operator SDK
                            </button>
                        </div>
                        <div class="p-tabs__item">
                            <button
                                class="p-tabs__link"
                                role="tab"
                                aria-selected={ariaSelectedState[2]}
                                onClick={() => {
                                    setContent(contentArray[2])
                                    setAriaSelectedState([false, false, true])
                                }}
                            >
                                Charmhub
                            </button>
                        </div>
                    </div>

                    <div>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </Example>
    )
}
