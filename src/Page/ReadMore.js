import React, { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import health from './health.png'; // Use a different image if needed
import './Service.css';

const ReadMore = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component load
      }, []);

    const { id } = useParams(); // get the card ID from URL
    const navigate = useNavigate();

    const handleReadLess = () => {
        navigate('/service');
    };

    const cardData = {
        1: {
            title: "Patient Scheduling and Appointment Management",
            image: health,
            content: (
                <>
                    <p>
                        Efficient scheduling and appointment management are critical components of delivering high-quality healthcare.
                        It is important to capture eligibility and prior authorization requirements accurately, avoid long hold times
                        and streamline processes to ensure patient satisfaction and referrals from physicians are not negatively impacted.
                    </p>

                    <h4>Patient Scheduling</h4>
                    <p>
                        We understand the importance of efficient scheduling and appointment management in delivering high-quality healthcare services. We aim to streamline
                        the scheduling process, reduce no-shows, and improve patient engagement to ensure the best possible outcomes for providers and patients.
                    </p>

                    <p style={{ fontSize: '20px' }}>
                        Our Patient Scheduling and Appointment Management services are designed to help healthcare providers manage their schedules more effectively while improving patient satisfaction. Our services include:
                    </p>
                    <ul>
                        <li>Scheduling appointments through the provider's online portal: We offer a user-friendly online portal that allows patients to schedule appointments at their convenience without waiting on hold or navigating complicated phone systems.</li>
                        <li>Collecting patient demographics for eligibility and prior authorization requirements: Our team collects all the necessary patient information to ensure eligibility and prior authorization requirements are met before scheduling appointments.
                        </li>
                        <li>Scheduling based on provider availability: Our scheduling team is designed to match patients with available providers, considering their preferences, availability, and location.</li>
                        <li>Direct communication with physicians and patients through the messaging system: Our messaging system allows for direct communication between physicians and patients, making it easy to ask questions, share important information, and stay in touch.
                        </li>
                        <li>Appointment reminders and confirmation: Our system automatically sends appointment reminders to patients and seeks confirmation to minimize no-shows and maximize appointment attendance.
                        </li>
                        <li>Sending automated reminders to patients and providers: Our system sends automated reminders to patients and providers, reducing the risk of missed appointments.</li>
                    </ul>

                    <h4>Benefits:</h4>
                    <ul>
                        <li>Reduce no-shows: By sending automated reminders and seeking confirmation, we help reduce the number of no-shows and missed appointments, improving revenue cycle performance.
                        </li>
                        <li>Improve patient engagementt: By providing direct communication with patients and convenient scheduling options, we help improve patient engagement and satisfaction.</li>
                        <li>Optimize physician calendarss:  We match patients with available providers, optimizing physician calendars and minimizing wait times.
                        </li>
                        <li>Real-time dashboard to physicians showing appointments: We can configure the system to allow physicians to view and manage their schedules easily, ensuring they can provide the best possible care.</li>
                        <li>Automated reminders and follow-ups: We configure the system to automatically send reminders and follow-ups to patients and providers, ensuring appointments are attended and payments are made on time.
                        </li>
                        <li>Track payment history and outstanding payments: We track the patient payment history and outstanding payments, making it easy to manage billing and collections.
                        </li>
                    </ul>

                    <p>
                        At Access Healthcare, we understand that scheduling and appointment management are critical components of delivering high-quality healthcare services. Our Patient Scheduling and Appointment Management services are designed to help healthcare providers streamline their operations, reduce no-shows, and improve patient engagement.
                    </p>
                    <h4>Contact us: </h4>
                    <p> today to learn how your organization can benefit from our services.</p>

                </>
            )
        },
        2: {
            title: "Eligibility and Benefits Verification",
            image: health,
            content: (
                <>
                    <p>
                        At Access Healthcare, we understand that comprehensive eligibility and benefits verification processes are critical for providers to provide prompt, accurate, and thorough information about a patient's insurance coverage. Our Eligibility and Benefits Verification Services assist healthcare providers in making informed decisions about the nature of care given, medications prescribed, and further diagnostics, particularly in elective and non-emergency procedures, based on the patient's eligibility.
                    </p>

                    <p>
                        We believe the absence of proper checks and balances in this process can lead to significant revenue leakages through denials and delayed payments. To avoid this, we provide our clients with insights into the patient's eligibility upfront before the actual encounter. This information helps healthcare providers suggest a course of treatment aligned with the scope of coverage, classification of out-of-network benefits, and resultant payment obligations.
                    </p>

                    <p>
                        Our skilled team of experts handles the patient's eligibility verification process. They have the expertise in confirming
                        the patient's coverage and benefits from individual payer websites and making phone calls. We assure our clients of a
                        standardized eligibility verification and admission process and guarantee quick turnaround.
                    </p>

                    <h4>Eligibility and Benefits Verification Services</h4>
                    <ul>
                        <li>Flexible channel for receiving workflows through various patient scheduling systems - EDI, Fax, emails, and FTP files.</li>
                        <li>Fast and accurate verification of primary and secondary coverage details, including member ID, group ID, coverage period, co-pay, deductible, co-insurance, and benefits information.</li>
                        <li>Efficient connection with the payer using the best possible channels.</li>
                        <li>Prompt identification and resolution of missing or invalid data.</li>
                        <li>Robotic Process Automation for improved speed and accuracy.</li>
                        <li>Verify patient demographic and policy information, including benefits, deductibles, plan inclusions, and exclusions.</li>
                        <li>Obtain a pre-certification number and get approval for benefits verification.</li>
                        <li>Verify patients' coverage, co-pays, co-insurance, deductibles, and claims mailing addresses on all primary and secondary payers and update the revenue cycle management system.</li>
                    </ul>

                    <h4>MedsGenesis Value Proposition for Eligibility Verification Services</h4>
                    <ul>
                        <li>Optimal revenue and cash flow.</li>
                        <li>Reduced patient information-related denials.</li>
                        <li>Cost savings from global delivery.</li>
                        <li>Assurance of accurate and complete data.</li>
                        <li>Fewer rejections for information issues.</li>
                        <li>Upfront clarification of the patient's responsibility.</li>
                        <li>Improved patient satisfaction.</li>
                        <li>Improved quality.</li>
                    </ul>

                    <h4>Contact us:</h4>
                    <p>to learn how your organization can leverage Access Healthcare’s Eligibility and Benefits Verification Services.</p>
                </>
            )
        },
        3: {
            title: "Prior Authorization",
            image: health,
            content: (
                <>
                    <p>
                        Prior authorization plays a vital role in the healthcare revenue cycle, providing significant protection for both healthcare providers and their patients. It is essential for healthcare providers to adhere to the payer's guidelines on the facility where the service is rendered, the cost of treatment, the selection of medication, and the coverage status of complex or costly procedures, except in emergency or critical situations. Failure to obtain prior authorization can result in substantial financial liabilities for the patient and revenue loss for the provider.
                    </p>

                    <p>
                        Healthcare providers are committed to providing the best care possible to every patient who visits their office. One of their primary responsibilities is to select a treatment plan that aligns with the guidelines established by the appropriate payer and educate patients about the optimal options for achieving their desired outcomes.
                    </p>

                    <p>
                        Providers are also obligated to obtain prior authorization from the payer for any anticipated diagnostics, medication, or procedures to ensure that the patient has coverage and access to these services. Physicians may suggest or choose alternative treatment options that fall within the scope of the patient's coverage to achieve satisfactory outcomes. By providing clarity around these matters, healthcare providers can enhance patient satisfaction and ensure financial protection in line with the payer's policies.
                    </p>
                    <p>At Medsgenesis, we specialize in Prior Authorization services to help healthcare providers streamline their revenue cycles and optimize collections. We collaborate with leading solution providers to minimize human effort, enhance quality, and accelerate turnaround times.</p>

                    <h4>Prior Authorization</h4>
                    <ul>
                        <li>Comprehensive analysis of policy/payer details for assessment of coverage</li>
                        <li>Rapid determination of prior authorization requirements of each patient</li>
                        <li>Accurate paperwork preparation and timely submissions to the payer</li>
                        <li>Persistent follow-ups on submitted prior authorization requests</li>
                        <li>Immediate notification to providers of authorization issues or ambiguities</li>
                    </ul>
                </>
            )
        },

        4: {
            title: "Patient Registration / Patient Demographics",
            image: health,
            content: (
                <>
                    <p>
                        Getting complete and accurate information from patients at the point-of-service, and accurately capturing the information in your revenue cycle system is not only essential to the success of your revenue cycle but also enables multivariate population health analytics.
                    </p>

                    <p>
                        Inaccurate capture of patient demographic information causes claim denials, and consequently, and delayed payments. Research shows that healthcare organizations lose as much as 7% of their annual revenue due to errors in demographic data capture.
                    </p>

                    <p>
                        Establishing a clear and standardized process for collecting patient demographic information helps safeguard against critical mistakes being made at an early juncture. Accurate demographic collection increases the rate of clean claim submissions while reducing payment delays and denials.

                    </p>
                    <p>Utilize Access Healthcare’s Patient Registration Services to improve accuracy, and optimize your revenue cycle.</p>

                    <h4>Demographic entry and verification</h4>
                    <h5>We validate and update the following patient information on the practice management system:</h5>

                    <ul>
                        <li>Legal name, gender, address, phone numbers (work/home/mobile)</li>
                        <li>Social security numbers for identification</li>
                        <li>Health insurance information and policy details</li>
                        <li>Medicaid or Medicare policy</li>
                        <li>Contact information for the person who is responsible for payments</li>
                        <li>Special requirements (interpreter, stretcher access, etc.)</li>
                    </ul>

                    <h4>Patient Demographic Entry</h4>
                    <p>What to expect with MedsGenesis Healthcare’s Patient Registration Services
                        Rest easy, knowing you have a partner who knows the intricacies of revenue cycle management and business processes and an entire team of process experts on your side. Our team is committed to deeply understanding your organization’s functions from high-level to low-level nuances, and helping you achieve total efficiency.
                    </p>
                    <h5>Our associates are equipped with expertise in all major revenue cycle systems, ensuring:</h5>
                    <ul>
                        <li>Improved productivity and accuracy of patient demographic information capture</li>
                        <li>Increased clean claim submission</li>
                        <li>Reduced demographic related denials</li>
                        <li>Real-time collaboration and reporting through our client portals</li>
                        <li>Detailed status updates and reporting on a weekly basis</li>
                        <li>Contact us to learn how your organization can leverage Access Healthcare’s patient registration and demographics</li>
                    </ul>
                </>
            )
        }

    };

    const selectedCard = cardData[id];

    if (!selectedCard) {
        return <div style={{ padding: '100px', fontSize: '18px' }}>No service found for this ID.</div>;
    }

    return (
        <div className="readmore-section" style={{ display: 'flex', padding: '85px', backgroundColor: '#f5f5f5' }}>
            {/* Left Image */}
            <div className="doctor-image" style={{ flex: '1', textAlign: 'center' }}>
                <img src={selectedCard.image} alt="Service" style={{ width: '90%', borderRadius: '10px' }} />
            </div>

            {/* Right Card */}
            <div className="details-card" style={{
                flex: '2',
                background: 'white',
                padding: '30px',
                marginRight: '40px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                lineHeight: '1.7',
                fontSize: '16px'
            }}>
                <h2>{selectedCard.title}</h2>
                {selectedCard.content}

                <button onClick={handleReadLess}
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer'
                    }}>
                    Read Less
                </button>
            </div>
        </div>
    );
};

export default ReadMore;
