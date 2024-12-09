import React from "react";
import Link from "next/link";
import BreadcrumbTwo from "../common/BreadcrumbTwo/BreadcrumbTwo";

const TermsConditionMain = () => {
  return (
    <>
      <BreadcrumbTwo
        titleTwo="Terms & Conditions"
        subTitleTwo="Terms & Conditions"
      />
      <section className="terms_conditions_section section_space_lg pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ul
                className="nav tabs_nav_boxed unordered_list_block mb-60"
                role="tablist"
              >
                <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#tab_privacy_policy"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="fas fa-circle"></i>
                    <span>Policy & Privacy</span>
                  </button>
                </li>
                <li role="presentation">
                  <button
                    className="active"
                    data-bs-toggle="tab"
                    data-bs-target="#tab_terms_conditions"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    <i className="fas fa-circle"></i>
                    <span>Terms & Conditions</span>
                  </button>
                </li>
                <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#tab_terms_cancellation"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="fas fa-circle"></i>
                    <span>Cancellation Policy</span>
                  </button>
                </li>
                <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#tab_disclaimer"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="fas fa-circle"></i>
                    <span>Disclaimer</span>
                  </button>
                </li>
              </ul>
            </div>


            {/* Privacy policy section */}



            <div className="col-lg-9">
              <div className="tab-content mb-60">
                <div
                  className="tab-pane fade"
                  id="tab_privacy_policy"
                  role="tabpanel"
                >
                  {/* <div className="terms_conditions_content grey-bg">
                    <h3 className="warpper_title">Privacy Policy Agreement</h3>
                    <p>
                      Your privacy is of utmost important to us. Accordingly, we have developed this Policy in order to help you understand how we collect, use, communicate and utilize the personal information of the clients.
                    </p>
                    <p>
                      The Privacy Policy (hereafter referred to as the Policy) provides information on how “brtutors.com" collects, processes, stores, shares, deletes and protects the Client's personal data, thus ensuring that the Client's personal data is processed lawfully, in good faith and transparency. The Policy discusses the personal data of the Client, the processing of the data of any individual and the service provided to the Client by “brtutors.com”.
                      In order to provide the Customer with better and more suitable products and services, as well as to provide, maintain, protect and improve existing products and services, brtutors.com processes the data collected during the provision of services.
                    </p>


                    <h4 className="info_title">
                      Personal Informations
                    </h4>

                    <p>The categories of personal information processed by brtutors.com depend on the products and services used by the Client. "brtutors.com " has the right to process the following categories of personal data for the purposes specified in cause 4 of this Policy:<br />
                      <ul className="icon_list unordered_list_block">
                        <li>
                          <span className="">
                          </span>
                        </li>
                        <li>
                          <span className="">
                            1. Customer’s name, surname, postal address, mobile number and e-mail address.
                          </span>
                        </li>
                        <li>
                          <span className="">
                            2. Communication data : e-mail, letter or other information that is related to the communication of the client and "brtutors.com ".
                          </span>
                        </li>
                        <li>
                          <span className="">
                            3.  Data provided by the Client to " brtutors.com ".
                          </span>
                        </li>
                      </ul>
                      Br Tutor processes the following data on the use of products and services for the purposes specified in clause 4 of this Policy:<br />

                      <ul className="icon_list unordered_list_block">
                        <li>
                          <span className="">
                          </span>
                        </li>
                        <li>
                          <span className="">
                            1. Information of the Client's IP address.
                          </span>
                        </li>
                        <li>
                          <span className="">
                            2. Cookie (data on browsing the site) : Data on visits to the site "www.brtutors.com".
                          </span>
                        </li>
                        <li>
                          <span className="">
                            3.  The date and time, volume of the Internet viewed, location of the customer at the time of viewing.
                          </span>
                        </li>
                        <li>
                          <span className="">
                            4.  And other personal information of the customer, depending on the type of service provided to the customer, informing him or her in advance.
                          </span>
                        </li>
                      </ul>


                    </p>

                    <h4 className="info_title">
                      Personal information Processing
                    </h4>

                    <p>3.1 : Client's Consent : The Client, as a subject of personal data, himself consents to the collection and processing of personal data for specific purposes. The Customer's consent for direct marketing purposes to make new and customized offers will apply to the activities of "brtutors.com ". The Client's consent is his free will and independent decision, which can be given at any time, thus allowing "brtutors.com " to process personal data for certain purposes. The client has the right to revoke his previously given consent at any time using the specified communication channels with "brtutors.com ".</p>
                    <p>3.2 : Conclusion and execution of the contract: In order to provide high-quality services to the client and to conclude and execute an agreement with the Client, certain personal data is collected and processed. It is collected before the conclusion of an agreement with "brtutors.com " or already during the time of the concluded contract</p>
                    <p>3.3 : Legitimate interests of "brtutors.com ": Observing the interests of "brtutors.com ", which are based on the provision of quality services and timely support to the Client, "brtutors.com" has the right to process the personal data of the Client to the extent that it is objectively necessary and sufficient for purposes specified in clauses 4.1 - 4.3 of this Policy. The legitimate interests of "brtutors.com" are considered to be the processing of personal data in direct marketing, as a result, the Client is offered new and / or individual products and services of "brtutors.com”.</p>
                    <p>3.4 : Fulfillment of legal obligations: "brtutors.com " has the right to process personal data in order to comply with the requirements of regulatory enactments, as well as to provide answers to the legal questions of the state and local authorities.</p>


                    <p>4.1 : Br Tutors processes personal data of the customer in order to provide them with high-quality, time bound and convenient service of contractual relations with " brtutors.com " during their operation:<br />
                      - to manage (including remotely) the relations with the customers, ensuring the conclusion and execution of the Agreement, as well as the implementation of the related process;<br />
                      - to deal with customer complaints at the earliest and provide support (including technical support) in connection with the services provided;<br />
                      - to inform the Client about other products and services of the company.</p>
                    <p>4.2 : Br Tutors processes personal data of the customers in order to promote the development of the industry and offer new services to Clients, including:<br /> - to create new products and their offers for the betterment of the customers; <br />- to conduct market analysis and develop a business model, the statistical data of brtutors.com Clients is processed.<br /> - to popularize the image of " brtutors.com" on the market, sending pleasant wishes to the Client, providing offers, organizing surveys to improve existing products and services as well as to create new products.</p>
                    <p>4.3 : Br Tutors processes personal data in order to create and maintain the internal processes of br tutors, to ensure the circulation of documents and other internal processes in necessary and sufficient volume.</p>


                    <p>5.1 : Profiling of personal data of Clients as data processing: -The processing of personal data in order to evaluate specific personal aspects related to an individual, namely, to analyze or predict aspects in connection with personal desires, interests, reliability, behavior, location or movement of the specified person. The client at any time has the right to inform “brtutors.com” and object to the adoption of an automated decision and not be the subject of such a decision.</p>
                    <p>5.2 : Direct marketing and the basis for sending commercial notices to the Client: "brtutors.com " carries out direct marketing by sending commercial notices to the Client so that the Client is always informed about new, modern and / or just for the Client products, services, as well as special conditions of the contract in accordance with the basis for the processing of personal data. The client has the right at any time to refuse to receive such commercial notifications.</p>
                    <p>5.3 : The client has the right at any time to object to the profiling of his personal data (clause 5.1) or refuse to receive commercial notices (clause 5.2), informing brtutors.com of this matter electronically. The changes will not affect the processing of personal data of the customer until the objections or refusal of the customer.</p> */}



                    {/* <h4 className="info_title">
                      Personal Data Processing
                    </h4>

                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>1. Responsive Design</strong>: Ensures a
                          seamless experience across various devices.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>2. User-Friendly Interface</strong>: Easy
                          navigation for educators and students.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>3. Course Management</strong>: Efficient
                          creation and organization of course content.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>4. Interactive Learning</strong>: Engaging
                          features like forums, quizzes, and assignments.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>5. Modern Technologies</strong>: Benefits of
                          React, Next.js, and TypeScript..
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          {`Let's`} take a look at each of these reasons in more
                          depth.
                        </span>
                      </li>
                    </ul>



                    <h4 className="info_title">What we collect</h4>
                    <p>
                      As a provider of the
                      {` "Educal - Education And Online
                      Courses Template,"`}{" "}
                      you may collect and{" "}
                      <Link className="link" href="/faq">
                        Google require website
                      </Link>{" "}
                      certain information from users who interact with your
                      platform. The specific types of information you collect
                      can vary based on the features and functionalities of your
                      template. However, here are some common types of
                      information that might be collected:
                    </p>
                    <p>
                      Some of the most popular third party services require
                      website and app owners to post Privacy Policy agreements
                      on their websites. Some of these services include:
                    </p>

                    <h4 className="info_title">
                      Questions, comments, or report of incidents
                    </h4>
                    <p className="mb-1">
                      You may direct questions, comments or reports to:
                    </p>
                    <p>
                      <Link
                        className="author_mail"
                        href="mailto:howdy@paradox.com"
                      >
                        howdy@educal.com
                      </Link>
                    </p>
                    <h4 className="info_title">
                      Revisions to this privacy policy without notice
                    </h4>
                    <p className="mb-0">
                      This Privacy Policy is dynamic. It will continually
                      change. You may not assume that it remains the same and
                      you agree to check the policy each time you visit the site
                      for changes. Unless, in the sole opinion of the website,
                      this policy changes so drastically as to suggest a posted
                      notification on the site or via email, you will receive no
                      notification of changes to this Privacy Policy nor, under
                      any circumstances, does this site promise notification.
                      Your continued use of this site always evidences your
                      acceptance of the terms this Privacy Policy or any
                      modifications.
                    </p> */}
                  {/* </div> */}
                  <div className="terms_conditions_content">
    <h3 className="warpper_title mb-4">Privacy Policy</h3>
    <p>At BR Tutors, we value your privacy and are committed to safeguarding the personal information you share with us. This Privacy Policy outlines how we collect, use, and protect your data when you engage with our services through the website.</p>

    <h4 className="mt-4"><strong>Information We Collect</strong></h4>
    <p>We collect personal information that you provide to us directly, such as your name, contact details, and payment information when you register for our services or subscribe to our updates. Additionally, we may collect non-personal information through cookies or similar technologies to improve your browsing experience.</p>

    <h4 className="mt-4"><strong>How We Use Your Information</strong></h4>
    <p>Your information is used to:</p>
    <ul>
        <li>Provide and personalize our tutoring services.</li>
        <li>Communicate with you regarding updates, services, and support.</li>
        <li>Process payments securely.</li>
        <li>Analyze usage trends to enhance the website’s functionality.</li>
    </ul>
    <p>We do not sell or share your personal information with third parties for marketing purposes without your explicit consent.</p>

    <h4 className="mt-4"><strong>Data Protection</strong></h4>
    <p>BR Tutors takes stringent measures to protect your data against unauthorized access, loss, or disclosure. All personal data is stored in secure environments, and transactions are protected using encryption technologies.</p>

    <h4 className="mt-4"><strong>Your Rights</strong></h4>
    <p>You have the right to:</p>
    <ul>
        <li>Access, update, or delete your personal information.</li>
        <li>Opt out of marketing communications at any time.</li>
        <li>Request data portability or restrict processing, subject to applicable laws.</li>
    </ul>

    <h4 className="mt-4"><strong>Third-Party Links</strong></h4>
    <p>Our website may contain links to third-party websites. BR Tutors is not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>

    <h4 className="mt-4"><strong>Changes to This Policy</strong></h4>
    <p>We may update this Privacy Policy occasionally to reflect changes in our practices or for legal reasons. Any updates will be posted on this page, and we encourage you to review it periodically.</p>

    <h4 className="mt-4"><strong>Contact Us</strong></h4>
    <p>If you have any questions or concerns regarding this Privacy Policy, please reach out to us at support@brtutors.com.</p>
</div>
                </div>


                {/* Terms and Conditions section */}

                <div
                  className="tab-pane fade show active"
                  id="tab_terms_conditions"
                  role="tabpanel"
                >
                  <div className="terms_conditions_content">
    <h3 className="warpper_title mb-4">Terms and Conditions</h3>
    <p>Welcome to BR Tutors! By using our website and services, you agree to the following Terms and Conditions. Please read them carefully before accessing or using any part of our platform. These terms outline the legal agreement between you (the user) and BR Tutors (the service provider).</p>

    <h4 className="mt-4">1. Acceptance of Terms</h4>
    <p>By accessing this website and engaging with our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.</p>

    <h4 className="mt-4">2. Services</h4>
    <p>BR Tutors offers tutoring services designed to enhance the learning experience of students. Our tutors are independent professionals with expertise in various subjects, and we aim to provide high-quality, customized learning support.</p>

    <h4 className="mt-4">3. User Responsibilities</h4>
    <p>As a user of BR Tutors, you agree to:</p>
    <ul>
        <li>Provide accurate, current, and complete information when registering for our services.</li>
        <li>Comply with all applicable laws and regulations when using our website.</li>
        <li>Respect the intellectual property rights of BR Tutors and refrain from copying, distributing, or reproducing any content found on our site without permission.</li>
        <li>Ensure that all communication with tutors and BR Tutors staff is professional and respectful.</li>
    </ul>

    <h4 className="mt-4">4. Account Security</h4>
    <p>You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately if there is any unauthorized use of your account or any other security breach. BR Tutors will not be liable for any loss or damage arising from your failure to protect your account credentials.</p>

    <h4 className="mt-4">5. Payment and Fees</h4>
    <p>All fees for tutoring services must be paid in advance through the payment methods available on our website. Prices for services may vary based on the tutor’s expertise, subject, and session length. BR Tutors reserves the right to modify the fees for services at any time, with prior notice to users.</p>

    <h4 className="mt-4">6. Cancellation and Refund Policy</h4>
    <p>Our cancellation and refund policies are governed by our separate Cancellation and Refund policies, available <a href="#" className="text-primary">here</a>. Please review these policies for more details on your rights regarding session cancellations and refunds.</p>

    <h4 className="mt-4">7. Intellectual Property</h4>
    <p>All content provided on the BR Tutors website, including text, images, graphics, logos, and software, is the property of BR Tutors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content from this website without our express written consent.</p>

    <h4 className="mt-4">8. Tutor and Student Conduct</h4>
    <p>Tutors and students are expected to maintain professionalism during all interactions. Any inappropriate behavior, including but not limited to harassment, discrimination, or abusive language, will not be tolerated. BR Tutors reserves the right to terminate services for any user who violates this code of conduct.</p>

    <h4 className="mt-4">9. Disclaimer of Warranties</h4>
    <p>While we strive to provide accurate and reliable educational services, BR Tutors makes no warranties or representations about the results students may achieve. The effectiveness of tutoring depends on various factors, including the student’s effort and consistency. All services are provided on an "as-is" basis, and we disclaim all warranties, express or implied.</p>

    <h4 className="mt-4">10. Limitation of Liability</h4>
    <p>In no event shall BR Tutors be liable for any indirect, incidental, or consequential damages arising from the use of our services, including but not limited to loss of data, financial losses, or personal injury. Our total liability, if any, shall be limited to the amount paid for the services rendered.</p>

    <h4 className="mt-4">11. Termination of Services</h4>
    <p>BR Tutors reserves the right to terminate or suspend your access to the platform at any time, without prior notice, for behavior that violates these Terms and Conditions, or for any other reason deemed appropriate by the company.</p>

    <h4 className="mt-4">12. Modifications to Terms</h4>
    <p>BR Tutors may update or modify these Terms and Conditions at any time. Users will be notified of any significant changes via email or website announcements. Continued use of our services after changes to the terms constitutes your acceptance of the revised terms.</p>

    <h4 className="mt-4">13. Governing Law</h4>
    <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of [insert jurisdiction]. Any disputes arising from these terms or your use of the website will be subject to the exclusive jurisdiction of the courts located in [insert jurisdiction].</p>

    <h4 className="mt-4">14. Contact Information</h4>
    <p>If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:beranker2193@gmail.com" className="text-primary">beranker2193@gmail.com</a>.</p>
</div>
                  {/* <div className="terms_conditions_content">
                    <h3 className="warpper_title">
                      Terms and Conditions Agreement
                    </h3>
                    <p>
                      This Terms & Conditions BR Tutors ensure that you have access to sufficient and complete information about collection and processing of your personal data while ordering a service from BR Tutors. This includes the information of which we have the obligation to inform you respecting the provisions of the national regulations regarding the protection of your personal data.
                    </p>
                    <p>
                      Alfa Karts respects the confidentiality of your data and any information that we collect which identifies or may contribute to the identification of an individual is protected by our privacy policy. The purposes and legal basis on which the personal information of the customer is collected, processed and shared is based on the terms and conditions specified in the about us page of our website. This collection is made to ensure the quality of services which is related to the order processing.
                    </p>
                    <p>
                      In order to provide quality services and hassle-free shopping experience the requisite personal data is provided to the company by the customer. This includes Name, E-mail Address, and contact number of the customer. We are collecting only those details which are absolutely mandatory for the fulfillment of the service placed by the customer on our website.
                    </p>
                    <p>
                      The personal data given with your consent will be collected and used by us exclusively for transmitting to you commercial advertisements and material information used for marketing purposes. It is with the absolute consent and for the betterment of the customer that their personal data is processed and promotional materials are sent to their contact details.
                    </p>
                    <p>
                      If we are facing any issue with users account. We reserve the right to suspend your account any time without prior notice. Contact on  <Link className="link" href="beranker2193@gmail.com">beranker2193@gmail.com</Link>{" "}
                    </p> */}
                    {/* <h4 className="info_title">
                      Here are some of the main reasons:
                    </h4>
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>Abusive users</strong>: Terms and Conditions
                          agreements allow you to establish what constitutes
                          appropriate activity on your site or app, empowering
                          you to remove abusive users and content
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>Intellectual property theft</strong>:
                          Asserting your claim to the creative assets of your
                          site in your terms and conditions will prevent
                          ownership disputes and copyright infringement.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>Potential litigation:</strong> If a user
                          lodges a legal complaint against your business,
                          showing that they were presented with clear terms and
                          conditions before they used your site will help you
                          immensely in court.
                        </span>
                      </li>
                    </ul>
                    <h4 className="info_title">To Set Liabilities Limits</h4>
                    <p>
                      Almost every terms and conditions agreement has a warranty
                      or limitations of liability disclaimer. We’ll cover it in
                      more detail in our section about{" "}
                      <Link className="link" href="/policy-privacy">
                        what clauses to include in your terms and conditions
                      </Link>
                      , but this clause essentially limits what customers can
                      hold you liable for.
                    </p>

                    <h4 className="info_title">
                      Most companies restrict liability for:
                    </h4>
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="list_item_text">
                          1. Inaccuracies and errors
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          2. Lack of enjoyment
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          3. Product or website downtime
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          4. Viruses, spyware, and product damage
                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title">
                      To Outline Policies and Avoid Abusive Behavior
                    </h4>
                    <p className="mb-1">
                      You may direct questions, comments or reports to:
                    </p>
                    <p>
                      <Link
                        className="author_mail"
                        href="mailto:howdy@paradox.com"
                      >
                        howdy@educal.com
                      </Link>
                    </p>
                    <h4 className="info_title">
                      Revisions to this Teams & Condition without Notice
                    </h4>
                    <p className="mb-0">
                      This Privacy Policy is dynamic. It will continually
                      change. You may not assume that it remains the same and
                      you agree to check the policy each time you visit the site
                      for changes. Unless, in the sole opinion of the website,
                      this policy changes so drastically as to suggest a posted
                      notification on the site or via email, you will receive no
                      notification of changes to this Privacy Policy nor, under
                      any circumstances, does this site promise notification.
                      Your continued use of this site always evidences your
                      acceptance of the terms this Privacy Policy or any
                      modifications.
                    </p> */}
                  {/* </div> */}
                </div>

                {/* cancellation section */}

                <div
                  className="tab-pane fade"
                  id="tab_terms_cancellation"
                  role="tabpanel"
                >
                  <div className="terms_conditions_content">
                    <h3 className="warpper_title">
                      Cancellation Policy
                    </h3>
                    <p>
                    At BR Tutors, we understand that plans may change. Our cancellation policy ensures a smooth process for both students and tutors.
                    </p>
                    <ul>
                      <li><strong>Cancellation by Students:</strong></li>
                      <ul>
                        <li>If you need to cancel a tutoring session, we require at least 24 hours' notice prior to the scheduled session time. Cancellations made within this period can be rescheduled without any additional charges.</li>
                        <li>Cancellations made less than 24 hours before the session will be charged in full, except in cases of emergencies or unavoidable circumstances, which will be assessed on a case-by-case basis.</li>
                        {/* <li>No-shows without prior notice will be charged the full session fee.</li> */}
                      </ul>
                      <li className="mt-4"><strong>Cancellation by Tutors:</strong></li>
                      <ul>
                        <li>In the unlikely event that a tutor needs to cancel a session, you will be notified as soon as possible. The session will either be rescheduled at a mutually convenient time or you will receive a full refund for the session.</li>
                        {/* <li>If a session is cancelled by the tutor within 24 hours of the scheduled time, the student will receive a complimentary session as compensation.</li> */}
                      </ul>
                      <li className="mt-4"><strong>Rescheduling:</strong></li>
                      <ul>
                        <li>We allow one free rescheduling of a session if a cancellation is made with proper notice. Further reschedules may incur an administrative fee.</li>
                      </ul>
                    </ul>
                    <p>
                    For any cancellations or rescheduling requests, please contact us at support@brtutors.com.
                    </p>
                  </div>
                </div>

                {/* Disclaimer section */}

                <div
                  className="tab-pane fade"
                  id="tab_disclaimer"
                  role="tabpanel"
                >
                  <div className="terms_conditions_content">
                    <h3 className="warpper_title">
                      Disclaimer
                    </h3>
                    <p>
                    The information provided on brtutors.com is for general informational purposes only. BR Tutors strives to ensure that the information on this site is accurate and up-to-date, but we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of any information, products, services, or related graphics contained on the website.
                    </p>
                    <ul>

                    <li><strong>Educational Services:</strong></li>
                      <ul>
                        <li>BR Tutors provides tutoring services aimed at improving educational outcomes for students. However, we do not guarantee specific results, such as improved grades or exam scores, as individual performance can vary based on a range of factors beyond our control.</li>                        
                      </ul>
                      <li className="mt-4"><strong>External Links:</strong></li>
                      <ul>
                        <li>This website may contain links to third-party websites for reference or additional resources. We are not responsible for the content or practices of these external sites and encourage you to review their policies before engaging with them.</li>                        
                      </ul>
                      <li className="mt-4"><strong>Limitations of Liability:</strong></li>
                      <ul>
                        <li>In no event shall BR Tutors be liable for any loss or damage, including indirect or consequential loss or damage, arising out of or in connection with the use of this website or our services. This includes, but is not limited to, any errors or omissions in the content or any failure of performance related to the services provided.</li>                        
                      </ul>
                      <p>By using our website, you acknowledge that you have read and agree to these terms.</p>
                    </ul>
                    {/* <p>
                      Website (www.brtutors.com)is provided on an "as is" basis without warranties of any kind, either express or implied, including, but not limited to, warranties of title or fitness for a particular purpose, other than those warranties which are implied by and incapable of exclusion, restriction or modification under the laws applicable to this agreement.
                    </p>
                    <p>
                      This disclaimer of liability applies to any damages or injury caused by any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction or unauthorized access to, alteration of, or use of record, whether for breach of contract, tortuous behavior, negligence, or under any other cause of action. website (www.brtutors.com)does not warrant that defects would be corrected or make any representations regarding the use or the results of the use of the materials in this site in terms of their correctness, accuracy, reliability, or otherwise. You (and not website (www.brtutors.com)) assume the entire cost of all necessary servicing, repair or correction. Applicable law may not allow the exclusion of implied warranties, so the above exclusion may not apply to you. User specifically acknowledges that website (www.brtutors.com)is not liable for the defamatory, offensive or illegal conduct of other users or third parties and that the risk of injury from the foregoing rests entirely with user.
                    </p>
                    <p>
                      In no event will website (www.brtutors.com), or any person or entity involved in creating, producing or distributing website (www.brtutors.com), be liable for any damages, including, without limitation, direct, indirect, incidental, special, consequential or punitive damages arising out of the use of or inability to use website (www.brtutors.com). User hereby acknowledges that the provisions of this section shall apply to all content on website (www.brtutors.com)
                    </p>
                    <p>
                      In addition to the terms set forth above, neither website (www.brtutors.com), nor its affiliates, information providers or content partners shall be liable regardless of the cause or duration, for any errors, inaccuracies, omissions, or other defects in, or untimeliness or unauthenticated of, the information contained within website (www.brtutors.com), or for any delay or interruption in the transmission thereof to the user, or for any claims or losses arising there from or occasioned thereby. None of the foregoing parties shall be liable for any third-party claims or losses of any nature, including, but not limited to, lost profits, punitive or consequential damages neither website (www.brtutors.com)nor its affiliates, information providers or content providers warrant or guarantee the timeliness, sequence, accuracy or completeness of this information. Additionally, there are no warranties as to the results obtained from the use of the information.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditionMain;
