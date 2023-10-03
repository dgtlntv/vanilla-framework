import Example from "../components/Example";

export default function Card() {
    return (
        <Example title="Card">
            <div>
                <div class="p-card">
                    <h3>We'd love to have you join us as a partner.</h3>
                    <p class="p-card__content">
                        If you are an independent software vendor or bundle
                        author, it's easy to apply. You can find out more below.
                    </p>
                </div>
            </div>

            <div>
                <div class="p-card--highlighted">
                    <h3>We'd love to have you join us as a partner.</h3>
                    <p class="p-card__content">
                        If you are an independent software vendor or bundle
                        author, it's easy to apply. You can find out more below.
                    </p>
                </div>
            </div>
        </Example>
    );
}
