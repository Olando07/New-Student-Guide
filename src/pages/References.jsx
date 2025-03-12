import "../css/References.css";
import Footer from "../components/Footer";

function Bibliography() {
    return (
        <>
            <div className="page-header">
                <h3>Reference</h3>
            </div>
            <div className="intro">
                <p>Our research is focused on five services and information that we believe the new student guide should contain. Below are the sources that were considered in the creation of this project.</p>
            </div>
            <div className="info">
                <div className="source-1">
                    <p>The first source that we decided on using is:</p>
                </div>
                <div className="source-2">
                    <p>The second source that we decided on using is:</p>
                </div>
                <div className="source-3">
                    <p>The third source that we decided on using is:</p>
                </div>
                <div className="source-4">
                    <p>The fourth source that we decided on using is:</p>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
}

export default Bibliography;
