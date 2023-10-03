import Example from "../components/Example"

export default function Notification() {
    return (
        <Example title="Notification">
            <div>
                <div className="p-notification">
                    <div className="p-notification__content">
                        <h5 className="p-notification__title">Cookie policy</h5>
                        <p className="p-notification__message">
                            We use cookies to improve your experience. By your continued use of this site you accept
                            such use.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div className="p-notification--caution">
                    <div className="p-notification__content">
                        <h5 className="p-notification__title">Blocked</h5>
                        <p className="p-notification__message">
                            Custom storage configuration is only supported on Ubuntu, CentOS and RHEL.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="p-notification" id="notification">
                    <div className="p-notification__content">
                        <h5 className="p-notification__title">Title</h5>
                        <p className="p-notification__message">
                            Body lorem ipsum dolor sit amet consequiteor. Lorem ipsum dolor sit amet consequiteor.
                        </p>
                        <button className="p-notification__close" aria-controls="notification">
                            Close
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div className="p-notification--information">
                    <div className="p-notification__content">
                        <h5 className="p-notification__title">Permissions changed</h5>
                        <p className="p-notification__message">Anyone with access can view your invited users.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="p-notification--negative">
                    <div className="p-notification__content">
                        <h5 className="p-notification__title">Error</h5>
                        <p className="p-notification__message">Node must be connected to a network.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="p-notification--positive">
                    <div className="p-notification__content">
                        <h5 className="p-notification__title">Success</h5>
                        <p className="p-notification__message">Code successfully reformatted.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="p-notification" id="notification">
                    <div className="p-notification__content">
                        <h5 className="p-notification__title">Title</h5>
                        <p className="p-notification__message">
                            Body lorem ipsum dolor sit amet consequiteor. Lorem ipsum dolor sit amet consequiteor.
                        </p>
                        <button className="p-notification__close" aria-controls="notification">
                            Close
                        </button>
                    </div>
                    <div className="p-notification__meta">
                        <span className="p-notification__timestamp">1h ago</span>
                        <div className="p-notification__actions">
                            <a className="p-notification__action">Action 1</a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Column 1</th>
                            <th>Column 2</th>
                            <th>Column 3</th>
                            <th>Column 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cell 1</td>
                            <td>Cell 2</td>
                            <td>Cell 3</td>
                            <td>Cell 4</td>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <div className="p-notification--caution is-borderless u-no-margin--bottom">
                                    <div className="p-notification__content">
                                        <h5 className="p-notification__title">Title</h5>
                                        <p className="p-notification__message">
                                            Body lorem ipsum dolor sit amet consequiteor. Lorem ipsum dolor sit amet
                                            consequiteor.
                                        </p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Cell 1</td>
                            <td>Cell 2</td>
                            <td>Cell 3</td>
                            <td>Cell 4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Example>
    )
}
