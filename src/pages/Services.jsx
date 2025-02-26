import "../css/services.css";
// import dropdown from "../components/dropdown";

function Service() {
    return (
        <div className="container">
            <div className="header">
                <h3>Services</h3>
            </div>
            <div className="services">
                <div className="international">
                    <div>
                        <h4>International Services</h4>
                    </div>
                    <div className="buttons">
                        <button>View More</button>
                    </div>
                </div>

                <div className="academic">
                    <div>
                        <h4>Academic Success</h4>
                    </div>
                    <div className="buttons">
                        <button>View More</button>
                    </div>
                </div>

                <div className="employment">
                    <div>
                        <h4>Student Employment</h4>
                    </div>
                    <div className="buttons">
                        <button>View More</button>
                    </div>
                </div>

                <div className="counseling">
                    <div>
                        <h4>Counseling Services</h4>
                    </div>
                    <div className="buttons">
                        <button>View More</button>
                    </div>
                </div>

                <div className="diversity">
                    <div>
                        <h4>Diversity on Campus</h4>
                    </div>
                    <div className="buttons">
                        <button>View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
