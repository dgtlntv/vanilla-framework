import Example from "../components/Example";

export default function CodeSnippet() {
    return (
        <Example title="CodeSnippet">
            <div>
                <div class="p-code-snippet">
                    <div class="p-code-snippet__header">
                        <h5 class="p-code-snippet__title">
                            Check you have snap installed
                        </h5>
                    </div>

                    <pre class="p-code-snippet__block">
                        <code>snap --version</code>
                    </pre>

                    <div class="p-code-snippet__header">
                        <h5 class="p-code-snippet__title">Output</h5>
                    </div>

                    <pre class="p-code-snippet__block">
                        <code>
                            snap 2.39.3 snapd 2.39.3 series 16 ubuntu 18.04
                            kernel 5.0.0-36-generic
                        </code>
                    </pre>
                </div>
            </div>

            <div>
                <div class="p-code-snippet">
                    <div class="p-code-snippet__header">
                        <h5 class="p-code-snippet__title">
                            Installing Thunderbird as a snap
                        </h5>

                        <div class="p-code-snippet__dropdowns">
                            <select
                                class="p-code-snippet__dropdown"
                                name="menu1-select"
                                id="menu1-select"
                            >
                                <option value="">amd64</option>
                                <option value="">i386</option>
                            </select>

                            <select
                                class="p-code-snippet__dropdown"
                                name="menu2-select"
                                id="menu2-select"
                            >
                                <option value="stable-panel">stable</option>
                                <option value="beta-panel">beta</option>
                                <option value="edge-panel">edge</option>
                            </select>
                        </div>
                    </div>

                    <pre id="stable-panel" class="p-code-snippet__block--icon">
                        <code>sudo snap install thunderbird</code>
                    </pre>

                    <pre
                        id="beta-panel"
                        class="p-code-snippet__block--icon u-hide"
                        aria-hidden="true"
                    >
                        <code>sudo snap install thunderbird --beta</code>
                    </pre>

                    <pre
                        id="edge-panel"
                        class="p-code-snippet__block--icon u-hide"
                        aria-hidden="true"
                    >
                        <code>sudo snap install thunderbird --edge</code>
                    </pre>
                </div>

                <div class="p-code-snippet">
                    <div class="p-code-snippet__header">
                        <div class="p-code-snippet__dropdowns">
                            <select
                                class="p-code-snippet__dropdown"
                                name="menu1-select"
                                id="menu1-select"
                            >
                                <option value="">amd64</option>
                                <option value="">i386</option>
                            </select>

                            <select
                                class="p-code-snippet__dropdown"
                                name="menu2-select"
                                id="menu2-select"
                            >
                                <option value="headerless-stable-panel">
                                    stable
                                </option>
                                <option value="headerless-beta-panel">
                                    beta
                                </option>
                                <option value="headerless-edge-panel">
                                    edge
                                </option>
                            </select>
                        </div>
                    </div>

                    <pre
                        id="headerless-stable-panel"
                        class="p-code-snippet__block--icon"
                    >
                        <code>sudo snap install thunderbird</code>
                    </pre>

                    <pre
                        id="headerless-beta-panel"
                        class="p-code-snippet__block--icon u-hide"
                        aria-hidden="true"
                    >
                        <code>sudo snap install thunderbird --beta</code>
                    </pre>

                    <pre
                        id="headerless-edge-panel"
                        class="p-code-snippet__block--icon u-hide"
                        aria-hidden="true"
                    >
                        <code>sudo snap install thunderbird --edge</code>
                    </pre>
                </div>

                <div class="p-code-snippet">
                    <div class="p-code-snippet__header is-stacked">
                        <h5 class="p-code-snippet__title">
                            Installing Thunderbird as a snap on different
                            architectures via the command line
                        </h5>

                        <div class="p-code-snippet__dropdowns">
                            <select
                                class="p-code-snippet__dropdown"
                                name="menu3-select"
                                id="menu3-select"
                            >
                                <option value="">amd64</option>
                                <option value="">i386</option>
                            </select>

                            <select
                                class="p-code-snippet__dropdown"
                                name="menu4-select"
                                id="menu4-select"
                            >
                                <option value="stacked-stable-panel">
                                    stable
                                </option>
                                <option value="stacked-beta-panel">beta</option>
                                <option value="stacked-edge-panel">edge</option>
                            </select>
                        </div>
                    </div>

                    <pre
                        id="stacked-stable-panel"
                        class="p-code-snippet__block--icon"
                    >
                        <code>sudo snap install thunderbird</code>
                    </pre>

                    <pre
                        id="stacked-beta-panel"
                        class="p-code-snippet__block--icon u-hide"
                        aria-hidden="true"
                    >
                        <code>sudo snap install thunderbird --beta</code>
                    </pre>

                    <pre
                        id="stacked-edge-panel"
                        class="p-code-snippet__block--icon u-hide"
                        aria-hidden="true"
                    >
                        <code>sudo snap install thunderbird --edge</code>
                    </pre>
                </div>
            </div>

            <div>
                <div class="p-code-snippet">
                    <pre class="p-code-snippet__block--icon">
                        <code>snap --version</code>
                    </pre>
                </div>

                <div class="p-code-snippet">
                    <pre class="p-code-snippet__block--icon is-windows-prompt">
                        <code>snap --version</code>
                    </pre>
                </div>

                <div class="p-code-snippet">
                    <pre class="p-code-snippet__block--icon is-url">
                        https://www.ubuntu.com
                    </pre>
                </div>
            </div>

            <div>
                <div class="p-code-snippet">
                    <pre class="p-code-snippet__block--numbered">
                        <code>
                            <span class="p-code-snippet__line">
                                #!/bin/bash
                            </span>
                            <span class="p-code-snippet__line">set -eu</span>
                            <span class="p-code-snippet__line">
                                . $CONJURE_UP_SPELLSDIR/sdk/common.sh
                            </span>
                            <span class="p-code-snippet__line"></span>
                            <span class="p-code-snippet__line">
                                if [[ "$JUJU_PROVIDERTYPE" == "lxd" ]]; then
                            </span>
                            <span class="p-code-snippet__line">
                                {" "}
                                debug "Running pre-deploy for $CONJURE_UP_SPELL"
                            </span>
                            <span class="p-code-snippet__line">
                                {" "}
                                sed "s/##MODEL##/$JUJU_MODEL/"
                                $(scriptPath)/lxd-profile.yaml | lxc profile
                                edit "juju-$JUJU_MODEL" || exposeResult "Failed
                                to set profile" $? "false"
                            </span>
                            <span class="p-code-snippet__line">fi</span>
                            <span class="p-code-snippet__line"></span>
                            <span class="p-code-snippet__line">
                                exposeResult "Successful pre-deploy." 0 "true"
                            </span>
                        </code>
                    </pre>
                </div>
            </div>

            <div>
                <div class="p-code-snippet">
                    <div class="p-code-snippet__header">
                        <h5 class="p-code-snippet__title">Python</h5>
                    </div>
                    <pre class="p-code-snippet__block language-python">
                        <code>{`class DiscourseAPI:
  """
  Retrieve information from a Discourse installation
  through its API
  """

  def __init__(self, base_url, session, api_key=None, api_username=None):
      """
      @param base_url: The Discourse URL (e.g. https://discourse.example.com)
      """

      self.base_url = base_url.rstrip("/")
      self.session = session

      if api_key and api_username:
          self.session.headers = {
              "Api-Key": api_key,
              "Api-Username": api_username,
          }`}</code>
                    </pre>
                </div>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-core.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/keep-markup/prism-keep-markup.min.js"></script>
            </div>
        </Example>
    );
}
