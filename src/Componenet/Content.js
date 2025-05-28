import React from 'react';
import first from './first.png';
import Genesis from './Genesis.png';
import seamless from './seamless.png';
import end from './end.png';
import intelligent from './intelligent.png';
import medical from './medical.png';
import improved from './improved.png';
import delivering from './delivering.png';
import doctor from './doctor.png';
import automated from './automated.png';
import patient from './patient.png';
import litora from './litora.png';
import health from './health.png';

const Content = () => {
    return (
        <div className="background-container" style={{ position: 'relative', width:'100%', overflow:'hidden'}}>
            {/* Background Image on Right */}
            <img src={first} alt="first.png" style={{ objectfit: 'cover', visibility: 'visible', width: '100%', height: 'auto', marginTop: '45px', display:'block' }} />
            <div className="headline-text" >
                <h2 >Cutting-Edge AI-Powered RCM Solutions:</h2>
                <h2 >Maximizing Revenue for Healthcare Providers</h2>
            </div>

            <div className='card-wrapper'>
                <div className="card" style={{ width: '17rem' }}>
                    <img src={Genesis} alt="Genesis.png" className="card-icon"/>
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: 'center' }}>The Genesis of</h5>
                        <p className="card-text" style={{ fontSize: '15px' }}>Pioneering Experts in Healthcare IT and Revenue Cycle Automation: Revolutionizing the Industry with Innovative Solutions</p>
                        <button type="button" >Discover Our Transformative Services</button>
                    </div>
                </div>
                <div className="card" style={{ width: '17rem' }}>
                    <img src={seamless} alt="seamless.png" className="card-icon"/>
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: 'center' }}>Seamless Patient</h5>
                        <p className="card-text" style={{ fontSize: '15px' }}>Comprehensive Insurance Verification and Prior Authorization Management</p>
                        <button type="button" >Explore Our Tailored Solutions</button>
                    </div>
                </div>
                <div className="card" style={{ width: '17rem' }}>
                    <img src={end} alt="end.png" className="card-icon"/>
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: 'center' }}>Streamlining Front-End </h5>
                        <p className="card-text" style={{ fontSize: '15px' }}>Elevating Back-End RCM Efficiency with Cutting-Edge Technologies</p>
                        <button type="button" >Unlock the Potential of Your Practice</button>
                    </div>
                </div>
            </div>

            <div className="next-section">
                <p className="highlight">Empowering Healthcare Providers to Thrive</p>
                <h2 className="main-heading">Optimizing Revenue Cycle Management</h2>
                <p className="subtext">
                    Unlock the Full Potential of Your Healthcare Practice with Our Comprehensive Suite of AI-Powered RCM
                    Solutions, Designed to Maximize Reimbursements and Streamline Operations
                </p>

                <div className="feature-cards">
                    <div className="feature-card">
                        <img src={intelligent} alt="intelligent.png" />
                        <h4>Intelligent Patient</h4>
                        <p>Seamless Insurance Verification and Prior Authorization Management</p>
                    </div>
                    <div className="feature-card">
                        <img src={medical} alt="medical.png" />
                        <h4>Advanced Medical Billing</h4>
                        <p>Optimized Revenue Cycle Processes for Increased Cash Flow and Financial Stability</p>
                    </div>
                    <div className="feature-card">
                        <img src={improved} alt="improved.png" />
                        <h4>Improved Patient</h4>
                        <p>Comprehensive Back-End RCM Services for Streamlined Billing and Reporting</p>
                    </div>
                </div>
            </div>
            <div className="blue-section">
                <h3 className="blue-heading">Revolutionizing Healthcare IT</h3>
                <p className="blue-text">
                    MedsGenesis: Pioneering the Future of Revenue Cycle Management with Cutting-Edge AI-Powered Solutions that<br />
                    Maximize Reimbursements and Elevate Practice Efficiency
                </p>
                <button className="blue-btn" style={{ color: ' #7e7e95' }}>Explore Our Transformative Services</button>
            </div>


            <div className="delivery-section">
                <h2 className="delivery-heading">Delivering <span>Exceptional</span></h2>
                <p className="delivery-text">
                    Empowering Healthcare Providers to Thrive: Our Team of Revenue Cycle Management Specialists Leverages the Latest
                    Technologies to Optimize Reimbursements and Streamline Operations
                </p>
                <img src={delivering} alt="delivering.png" style={{ width: '100%' }} />
            </div>

            <div className="dual-section">
                <div className="left-box">
                    <h2>Maximize Your Revenue</h2>
                    <p>Innovative AI-Powered RCM Solutions</p>
                    <p>Streamline Your Healthcare Practice with Our Comprehensive Suite of Revenue Cycle Management Services</p>
                    <button className="btn" style={{ color: ' #7e7e95' }}>Discover How We Can Transform Your Practice</button>
                </div>
                <div className="right-box">
                    <h3>Personalized</h3>
                    <ul>
                        <li>Dedicated Account Management<br />Customized Reporting</li>
                        <li>Seamless Integration with<br /> Your Existing Systems</li>
                        <li>Continuous Process Optimization</li>
                    </ul>
                </div>
            </div>

            <div className="revenue-section">
                <p className="sub-title">Empowering Healthcare Providers</p>
                <h2>Maximizing Revenue Potential</h2>
                <p className="description">
                    Elevate Your Practice's Financial Performance with Our Innovative AI-Powered Revenue Cycle Management Solutions, Designed to Streamline Operations and Optimize Reimbursements
                </p>

                <div className="revenue-content">
                    <div className="strategy-card">
                        <h4>Tailored Billing Strategies</h4>
                        <p>Comprehensive Reporting and Analytics</p>
                        <p>Increased Cash Flow and Financial Stability</p>
                        <button>Explore Our Solutions</button>
                    </div>
                    <img src={doctor} alt="doctor.png" style={{ width: '40%', marginLeft: '212px' }} />
                </div>
            </div>

            <div className="healthcare-section">
                <div className="healthcare-card">
                    <img src={automated} alt="automated.png" style={{ width: '65px' }} />
                    <h3>Automated Claims</h3>
                    <p>Efficient Denial Management</p>
                    <p>Optimized Reimbursement Rates</p>
                    <button>Discover the Difference</button>
                </div>

                <div className="healthcare-card">
                    <img src={patient} alt="patient.png" style={{ width: '65px' }} />
                    <h3>Improved Patient Satisfaction</h3>
                    <p>Enhanced Revenue Visibility</p>
                    <p>Streamlined Workflow Optimization</p>
                    <button>Learn More</button>
                </div>

                <div className="healthcare-card">
                    <img src={litora} alt="litora.png" style={{ width: '65px' }} />
                    <h3>Litora di.</h3>
                    <p>Quisque lobortis interdum aliquet semper himenaeos elementum.</p>
                    <p>Tristique vitae phasellus nec primis porta a et arcu sociosqu aptent ve.</p>
                    <button>Purus arc.</button>
                </div>
            </div>

            <div className="financial-health-section">
                <div className="section-left" >
                    <p className="highlights">Empowering Healthcare Professionals</p>
                    <h2 style={{ textAlign: 'center' }}>Optimizing Your Practice's Financial Health</h2>
                    <p className="subheading">
                        Unlock the Full Potential of Your Healthcare Practice with Our AI-Powered RCM Solutions
                    </p>

                    <div className="card light-card">
                        <h3 style={{ marginTop: '45px' }}>Personalized Strategies</h3>
                        <p style={{ marginTop: '17px', color: ' #847c7c', fontsize: '17px' }}>
                            Leverage the Power of AI to Streamline Your Revenue Cycle, Optimize Reimbursements, and Improve Financial Performance for Your Healthcare Practice
                        </p>
                        <span className="span" style={{ marginTop: '3px' }}>Explore Our Solutions</span>
                    </div>

                    <div className="card dark-card">
                        <h4 style={{ marginTop: '40px' }}>Dedicated Support</h4>
                        <h5 style={{ marginTop: '7px' }}>Customized Reporting</h5>
                        <p style={{ marginTop: '17px', color: 'rgb(170, 159, 159)', fontsize: '15px' }}>
                            Elevate Your Practice’s Financial Health with Our AI-Powered Revenue Cycle Management Solutions.
                        </p>
                    </div>
                </div>

                <div className="section-right" >
                    <img src={health} alt="health.png" style={{ width: '30%', marginLeft: '45%', marginTop: '165px' }} />
                    <div className="card result-card">
                        <h4 style={{ marginTop: '28px' }}>Exceptional</h4>
                        <div className="result">
                            <span>Tailored Workflows </span>
                            <span1 style={{ color: 'gray' }}>Increased </span1>
                            <span2>Continuous Process </span2>
                        </div>
                        <div className="result">
                            <span>Enhanced Revenue</span>
                            <span1 style={{ color: '#534848' }}>Improved</span1>
                            <span2>Streamlined Denials</span2>
                        </div>
                        <p>Trans</p>
                    </div>
                </div>
            </div>


        </div>


    );
};

export default Content;
