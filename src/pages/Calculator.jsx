import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/calculator.css";

function Calculator() {
    return (
        <>
            <Navbar />

            {/* ================= HERO IMAGE ================= */}
            <section className="calculator-hero">
                <div className="hero-overlay">
                    <h1>
                        Reduce Your<br />
                        Carbon Footprint
                    </h1>
                </div>
            </section>

            {/* ================= MAIN CONTENT ================= */}
            <main className="calculator-wrapper">
                <h2>Carbon Footprint Calculator</h2>

                <form className="calculator-form">
                    {/* Household Energy */}
                    <div className="form-section">
                        <h3>Household Energy</h3>

                        <label>
                            Monthly electricity usage (kWh)
                            <input
                                type="number"
                                placeholder="e.g. 225"
                            />
                        </label>

                        <div className="radio-group">
                            <label>
                                <input type="radio" name="energy" value="grid" />
                                Grid electricity
                            </label>

                            <label>
                                <input type="radio" name="energy" value="renewable" />
                                Renewable / solar
                            </label>
                        </div>
                    </div>

                    {/* Transport */}
                    <div className="form-section">
                        <h3>Transport</h3>

                        <div className="radio-group">
                            <label>
                                <input type="radio" name="vehicle" value="petrol" />
                                Petrol
                            </label>

                            <label>
                                <input type="radio" name="vehicle" value="diesel" />
                                Diesel
                            </label>

                            <label>
                                <input type="radio" name="vehicle" value="ev" />
                                Electric (EV)
                            </label>
                        </div>

                        <label>
                            Average distance per month (km)
                            <input
                                type="number"
                                placeholder="e.g. 500"
                            />
                        </label>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </main>

            <Footer />
        </>
    );
}

export default Calculator;
