import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { Link } from "react-router-dom";
// import solar from "../assets/images/products/Solar-power-bank.png";
// import thermostat from "../assets/images/products/Thermostat.png";
// import tablet from "../assets/images/products/HM-Tablet.png";
import "../styles/products.css"; // adjust path if needed

function Products() {
    return (
        <>
            <Navbar />

            {/* HERO SECTION */}
            <section className="products-hero">
                <h1>
                    Take a look at our green products
                    <br />
                    currently on the market
                </h1>
            </section>

            {/* NEW ARRIVALS */}
            <section className="new-arrivals page-wrapper">
                <h2>New Arrivals</h2>

                <div className="product-grid">
                    <div className="product-item">
                        <div className="product-card">
                            <img
                                src="/Solar-power-bank.png"
                                alt="Solar Power Bank"
                            />
                        </div>
                        <p className="product-title">Solar Power Bank</p>
                    </div>

                    <div className="product-item">
                        <div className="product-card">
                            <img
                                src="/Thermostat.png"
                                alt="Thermostat"
                            />
                        </div>
                        <p className="product-title">Thermostat</p>
                    </div>

                    <div className="product-item">
                        <div className="product-card">
                            <img
                                src="/HM-Tablet.png"
                                alt="Home Management Tablet"
                            />
                        </div>
                        <p className="product-title">Home Management Tablet</p>
                    </div>
                </div>
            </section>

            {/* SPECIALITY */}
            <section className="speciality">
                <h2>Our Speciality</h2>

                <div className="speciality-item">
                    <img src="/SolarP-products.png" alt="Solar Panels" />
                    <div className="speciality-label">Solar Panels</div>
                </div>

                <div className="speciality-item">
                    <img src="/EV-charging-station.png" alt="EV Charging Stations" />
                    <div className="speciality-label">
                        Electric Charging Stations
                    </div>
                </div>

                <div className="speciality-item">
                    <img src="/HM-products.png" alt="Home Management Systems" />
                    <div className="speciality-label">Home Management</div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Products;
