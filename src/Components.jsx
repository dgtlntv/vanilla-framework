import Accordion from "./examples/Accordion";
import Badge from "./examples/Badge";
import Breadcrumbs from "./examples/Breadcrumbs";
import Buttons from "./examples/Buttons";
import Chip from "./examples/Chip";
import CodeBlock from "./examples/CodeBlock";
import CodeInline from "./examples/CodeInline";
import Datalist from "./examples/Datalist";
import DefinitionList from "./examples/DefinitionList";
import Details from "./examples/Details";
import FontWeights from "./examples/FontWeights";
import Headings from "./examples/Headings";
import Hr from "./examples/Hr";
import Input from "./examples/Input";
import Links from "./examples/Links";
import Labels from "./examples/Labels";
import MultiSelect from "./examples/MultiSelect";
import Notification from "./examples/Notification";
import OrderedList from "./examples/OrderedList";
import Pagination from "./examples/Pagination";
import Pre from "./examples/Pre";
import Range from "./examples/Range";
import Search from "./examples/Search";
import Select from "./examples/Select";
import Small from "./examples/Small";
import Strong from "./examples/Strong";
import Sub from "./examples/Sub";
import Sup from "./examples/Sup";
import Table from "./examples/Table";
import Tabs from "./examples/Tabs";
import Textarea from "./examples/Textarea";
import Tooltip from "./examples/Tooltip";
import UnorderedList from "./examples/UnorderedList";
import VariableFont from "./examples/VariableFont";
import Abbr from "./examples/abbr";
import Blockquote from "./examples/blockquote";
import Switch from "./examples/Switch";
import Card from "./examples/Card";
import CodeSnippet from "./examples/CodeSnippet";

export default function Components() {
    return (
        <div className="parent">
            <h1>Wasabi</h1>
            <p>This is where the controls go ;)</p>
            <h2>Examples</h2>
            <div className="grid-parent">
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Abbr />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 1" }}>
                    <Blockquote />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 3" }}>
                    <Buttons />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <CodeBlock />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <CodeInline />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Details />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 2" }}>
                    <FontWeights />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 2" }}>
                    <Headings />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 1" }}>
                    <Hr />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Links />
                </div>
                <div style={{ gridColumn: "span 4", gridRow: "span 1" }}>
                    <Pre />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Small />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Strong />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Sub />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Sup />
                </div>
                <div style={{ gridColumn: "span 3", gridRow: "span 3" }}>
                    <Table />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 2" }}>
                    <VariableFont />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Datalist />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Input />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Range />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Select />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <MultiSelect />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Textarea />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <DefinitionList />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 1" }}>
                    <OrderedList />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 1" }}>
                    <UnorderedList />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 3" }}>
                    <Accordion />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 3" }}>
                    <Badge />
                </div>

                <div style={{ gridColumn: "span 3", gridRow: "span 2" }}>
                    <Chip />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 1" }}>
                    <Tooltip />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Search />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 1" }}>
                    <Pagination />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 1" }}>
                    <Notification />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 1" }}>
                    <Tabs />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 1" }}>
                    <Breadcrumbs />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Labels />
                </div>
                <div style={{ gridColumn: "span 1", gridRow: "span 1" }}>
                    <Switch />
                </div>
                <div style={{ gridColumn: "span 2", gridRow: "span 1" }}>
                    <Card />
                </div>
                <div style={{ gridColumn: "span 3", gridRow: "span 2" }}>
                    <CodeSnippet />
                </div>
            </div>
        </div>
    );
}
