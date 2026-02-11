import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/contact.css";

function Contact() {
    return (
        <>
            <Navbar />

            <main className="contact-container">
                {/* LEFT: FORM */}
                <section className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" />
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" />
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea />
                    </div>

                    <button className="submit-btn">Submit</button>
                </section>

                {/* RIGHT: TEXT */}
                <section className="contact-info">
                    <h1>Contact Us</h1>

                    <p className="info-text">
                        If you have any questions about our services or would like to discuss
                        a potential project, please complete the form and a member of our
                        team will get back to you as soon as possible.
                    </p>

                    <p className="email-text">
                        <strong>Our email:</strong>
                        <br />
                        RoslaTechnologies@gmail.com
                    </p>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Contact;
