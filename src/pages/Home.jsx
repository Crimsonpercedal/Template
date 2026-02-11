import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";

function Home() {
    return (
        <>
            <Navbar />

            <main className="hero">
                <div className="hero-overlay"></div>

                <div className="hero-card">
                    <h1>Clean Energy Solutions For a Sustainable Future</h1>
                    <p>
                        Rosla Technologies provides solar installations, EV charging
                        solutions, and smart energy systems for homes and businesses.
                    </p>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default Home;
