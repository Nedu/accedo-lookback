import React from 'react';
import { useNavigate } from 'react-router-dom';

function UploadPage() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        // Programmatically navigate to the "/other" route when the container is clicked
        navigate('/showsPage');
    };
    return (
        <div className="wrapper">
            <div className="content">
                <div className="header">
                    <h1 className="title">Upload your Netflix package</h1>
                    <p className="description">
                        We need your data package in order to generate your wrapped.
                    </p>
                </div>
                <div className="form-container">
                    <form>
                        <input type={"file"} accept={".csv"} />
                        <button className="custom-button" onClick={handleNavigate}>IMPORT CSV</button>
                    </form>
                </div>
                <p className="note">
                    Didn't have your data package yet? Check out the link on Netflix <a href="https://help.netflix.com/en/node/101917#:~:text=To%20download%20a%20list%20into,to%20see%20your%20viewing%20history." aria-label="Check out the demo">How to see viewing history and device activity</a>.
                </p>
            </div>
        </div>
    );
}

export default UploadPage;
