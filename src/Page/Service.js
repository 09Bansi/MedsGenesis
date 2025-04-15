import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import health from './health.png'; // save your doctor image as doctor.png in /assets
import doctor from './doctor.png'; // save your doctor image as doctor.png in /assets
import Doctor3 from './Doctor3.png'; // save your doctor image as doctor.png in /assets
import Doctor4 from './Doctor4.png'; // save your doctor image as doctor.png in /assets
import './Service.css';

const Service = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when Services component loads
      }, []);

    const navigate = useNavigate();


    return (
        <div className="revenue-section">
            <div className="revenue-content">
                <div className="strategy-card">
                    <h3>Patient Scheduling and Appointment Management</h3>
                    <p>Efficient scheduling and appointment management are critical components of delivering high-quality healthcare. It is important to capture eligibility and prior authorization requirements accurately...</p>
                    <button onClick={() => navigate("/read-more/1")}>Read More</button>
                </div>
                <img src={health} alt="health.png" style={{ width: '30%', marginLeft: '212px' }} />
            </div>
            <div className="revenue-content">
                <div className="strategy-card ">
                    <h3>Eligibility and Benefits Verification</h3>
                    <p>At Access Healthcare, we understand that comprehensive eligibility and benefits verification processes are critical for providers to provide prompt, accurate, and thorough information about a patient's insurance coverage. ..</p>
                    <button onClick={() => navigate("/read-more/2")}>Read More</button>
                </div>
                <img src={doctor} alt="doctor.png" style={{ width: '30%', marginLeft: '212px' }} />
            </div>
            <div className="revenue-content">
                <div className="strategy-card ">
                    <h3>Prior Authorization</h3>
                    <p>Prior authorization plays a vital role in the healthcare revenue cycle, providing significant protection for both healthcare providers and their patients. It is essential for healthcare providers to adhere to the payer's guidelines on the facility where the service is rendered...</p>
                    <button onClick={() => navigate("/read-more/3")}>Read More</button>
                </div>
                <img src={Doctor3} alt="Doctor3.png" style={{ width: '30%', marginLeft: '212px' }} />
            </div>
            <div className="revenue-content">
                <div className="strategy-card ">
                    <h3>Patient Registration / Patient Demographics</h3>
                    <p>Getting complete and accurate information from patients at the point-of-service, and accurately capturing the information in your revenue cycle system is not only essential to the success of your revenue cycle but also enables multivariate population health analytics...</p>
                    <button onClick={() => navigate("/read-more/4")}>Read More</button>
                </div>
                <img src={Doctor4} alt="Doctor4.png" style={{ width: '30%', marginLeft: '212px' }} />
            </div>
        </div>

        
    );
};

export default Service;
