import { useState } from "react";

function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault(); // Evita o recarregamento da página
        console.log("Email cadastrado:", email);
        setEmail(""); // Limpa o campo após o envio
    };

    return (
        <>
            <section className="section-7">
            <div className="container-7">
                <article className="newsletter">
                    <h2>STAY UPDATED ABOUT OUR LATEST OFFERS</h2>
                    <form className="newsletter-form" id="newsletterForm" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            id="emailInput"
                            className="news-email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="news-btn">
                            Subscribe to Newsletter
                        </button>
                    </form>
                </article>
            </div>
            </section>
        </>
    );
}

export default Newsletter;
