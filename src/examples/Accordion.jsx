import React, { useEffect, useRef, useState } from "react"
import Example from "../components/Example"

export default function Accordion() {
    const [activeTab, setActiveTab] = useState(null)
    const accordionRef = useRef(null)

    useEffect(() => {
        function closeAllPanels() {
            setActiveTab(null)
        }

        function handleAccordionClick(event) {
            const target = event.target.closest('[className*="p-accordion__tab"]')
            if (target) {
                const isTargetOpen = target.getAttribute("aria-expanded") === "true"
                if (isTargetOpen) {
                    closeAllPanels()
                } else {
                    setActiveTab(target.id)
                }
            }
        }

        const accordionElement = accordionRef.current
        if (accordionElement) {
            accordionElement.addEventListener("click", handleAccordionClick)
        }

        return () => {
            if (accordionElement) {
                accordionElement.removeEventListener("click", handleAccordionClick)
            }
        }
    }, [])

    function getAriaProps(tabId) {
        const isExpanded = tabId === activeTab
        return {
            "aria-expanded": isExpanded,
            "aria-hidden": !isExpanded,
        }
    }

    return (
        <Example title="Accordion">
            <aside className="p-accordion" ref={accordionRef}>
                <ul className="p-accordion__list">
                    <li className="p-accordion__group">
                        <div role="heading" aria-level="0" className="p-accordion__heading">
                            <button
                                type="button"
                                className="p-accordion__tab"
                                id="tab0"
                                aria-controls="tab0-section"
                                {...getAriaProps("tab0")}
                            >
                                What is MAAS?
                            </button>
                        </div>
                        <section
                            className="p-accordion__panel"
                            id="tab0-section"
                            aria-labelledby="tab0"
                            {...getAriaProps("tab0")}
                        >
                            <p>
                                MAAS expands to “Metal As A Service” – it converts bare-metal servers into cloud
                                instances of virtual machines. There is no need to manage individual units. You can
                                quickly provision or destroy machines, as if they were instances hosted in a public
                                cloud like Amazon AWS, Google GCE, or Microsoft Azure.
                            </p>
                        </section>
                    </li>
                    <li className="p-accordion__group">
                        <h2 className="p-accordion__heading">
                            <button
                                type="button"
                                className="p-accordion__tab"
                                id="tab1"
                                aria-controls="tab1-section"
                                {...getAriaProps("tab1")}
                            >
                                What is MAAS?
                            </button>
                        </h2>
                        <section
                            className="p-accordion__panel"
                            id="tab1-section"
                            aria-labelledby="tab1"
                            {...getAriaProps("tab1")}
                        >
                            <p>
                                MAAS expands to “Metal As A Service” – it converts bare-metal servers into cloud
                                instances of virtual machines. There is no need to manage individual units. You can
                                quickly provision or destroy machines, as if they were instances hosted in a public
                                cloud like Amazon AWS, Google GCE, or Microsoft Azure.
                            </p>
                        </section>
                    </li>

                    <li className="p-accordion__group">
                        <h3 className="p-accordion__heading">
                            <button
                                type="button"
                                className="p-accordion__tab"
                                id="tab2"
                                aria-controls="tab2-section"
                                {...getAriaProps("tab2")}
                            >
                                What MAAS offers
                            </button>
                        </h3>
                        <section
                            className="p-accordion__panel"
                            id="tab2-section"
                            aria-labelledby="tab2"
                            {...getAriaProps("tab2")}
                        >
                            <p>
                                MAAS can manage a large number of physical machines by merging them into user-defined
                                resource pools. MAAS automatically provisions participating machines and makes them
                                available for use. You can return unused machines to the assigned pool at any time.
                            </p>
                        </section>
                    </li>

                    <li className="p-accordion__group">
                        <h4 className="p-accordion__heading">
                            <button
                                type="button"
                                className="p-accordion__tab"
                                id="tab3"
                                aria-controls="tab3-section"
                                {...getAriaProps("tab3")}
                            >
                                How MAAS works
                            </button>
                        </h4>
                        <section
                            className="p-accordion__panel"
                            id="tab3-section"
                            aria-labelledby="tab3"
                            {...getAriaProps("tab3")}
                        >
                            <p>
                                When you add a new machine to MAAS, or elect to add a machine that MAAS has enlisted,
                                MAAS commissions it for service and adds it to the pool. At that point, the machine is
                                ready for use. MAAS keeps things simple, marking machines as “New,” “Commissioning,”
                                “Ready,” and so on.
                            </p>
                        </section>
                    </li>

                    <li className="p-accordion__group">
                        <h5 className="p-accordion__heading">
                            <button
                                type="button"
                                className="p-accordion__tab"
                                id="tab4"
                                aria-controls="tab4-section"
                                {...getAriaProps("tab4")}
                            >
                                Colocation of key components
                            </button>
                        </h5>
                        <section
                            className="p-accordion__panel"
                            id="tab4-section"
                            aria-labelledby="tab4"
                            {...getAriaProps("tab4")}
                        >
                            <p>
                                MAAS relies on two key components: the region controller and the rack controller. The
                                region controller handles operator requests; the rack controller provides high-bandwidth
                                services to multiple racks.
                            </p>
                        </section>
                    </li>

                    <li className="p-accordion__group">
                        <div role="heading" aria-level="5" className="p-accordion__heading">
                            <button
                                type="button"
                                className="p-accordion__tab"
                                id="tab5"
                                aria-controls="tab5-section"
                                {...getAriaProps("tab5")}
                            >
                                Checkboxes inside
                            </button>
                        </div>
                        <section
                            className="p-accordion__panel has-tick-elements"
                            id="tab1-section"
                            aria-controls="tab5-section"
                            {...getAriaProps("tab5")}
                        >
                            <label className="p-checkbox">
                                <input
                                    type="checkbox"
                                    className="p-checkbox__input"
                                    name="vendor"
                                    value="working-offline"
                                />
                                <span className="p-checkbox__label">Working offline</span>
                            </label>
                            <label className="p-checkbox">
                                <input
                                    type="checkbox"
                                    className="p-checkbox__input"
                                    name="vendor"
                                    value="fan-container-networking"
                                />
                                <span className="p-checkbox__label">Fan container networking</span>
                            </label>
                            <label className="p-checkbox">
                                <input
                                    type="checkbox"
                                    className="p-checkbox__input"
                                    name="vendor"
                                    value="network-spaces"
                                />
                                <span className="p-checkbox__label">Network spaces</span>
                            </label>
                        </section>
                    </li>

                    <li className="p-accordion__group">
                        <div role="heading" aria-level="6" className="p-accordion__heading">
                            <button
                                type="button"
                                className="p-accordion__tab"
                                id="tab6"
                                aria-controls="tab6-section"
                                {...getAriaProps("tab6")}
                            >
                                Radios inside
                            </button>
                        </div>
                        <section
                            className="p-accordion__panel has-tick-elements"
                            id="tab2-section"
                            aria-labelledby="tab6"
                            {...getAriaProps("tab6")}
                        >
                            <label className="p-radio">
                                <input type="radio" className="p-radio__input" name="vendor" value="juju-gui" />
                                <span className="p-radio__label">Juju GUI</span>
                            </label>
                            <label className="p-radio">
                                <input type="radio" className="p-radio__input" name="vendor" value="centos-support" />
                                <span className="p-radio__label">CentOS support</span>
                            </label>
                            <label className="p-radio">
                                <input type="radio" className="p-radio__input" name="vendor" value="juju-metrics" />
                                <span className="p-radio__label">Collecting Juju metrics</span>
                            </label>
                        </section>
                    </li>
                </ul>
            </aside>
        </Example>
    )
}
