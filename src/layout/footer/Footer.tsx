import Link from "next/link";
import React from "react";
import FooterLogo from "../../../public/assets/img/logo/logo-2.png";
import Image from "next/image";
import CopyrightArea from "./copyright-area";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__area footer-bg">
          <div className="footer__top pt-190 pb-40">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <div className="footer__logo">
                        <Link href="/">
                          <Image
                            src={FooterLogo}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="footer__widget-body">
                      <p>
                        Great lesson ideas and lesson plans for ESL teachers!
                        Educators can customize lesson plans to best.
                      </p>

                      <div className="footer__social">
                        <ul>
                          <li>
                            <Link href="https://www.facebook.com/BRTutorsWorldwide">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.instagram.com/brtutorsworldwide/" className="tw">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.youtube.com/channel/UC7tAuRHqfNMXnY3ySINJsQg"
                              className="pin"
                            >
                              <i className="fab fa-youtube"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0 col-md-2 offset-md-1 col-sm-5 offset-sm-1">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Company</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__link">
                        <ul>
                          <li>
                            <Link href="/about">About</Link>
                          </li>
                          <li>
                            <Link href="/subjects">Subjects</Link>
                          </li>
                          <li>
                            <Link href="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Services</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__link">
                        <ul>
                          <li>
                            <Link href="/">IB Board Singapore</Link>
                          </li>
                          <li>
                            <Link href="/">IB Board India</Link>
                          </li>
                          <li>
                            <Link href="/">Mathematics Tutor Singapore</Link>
                          </li>
                          <li>
                            <Link href="/">Social Science Tutor Singapore</Link>
                          </li>
                          <li>
                            <Link href="/">Language Tutor Singapore</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 offset-lg-0 col-md-3 offset-md-1 col-sm-6">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Platform</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__link">
                        <ul>
                          {/* <li>
                            <Link href="/instructor">Browse Library</Link>
                          </li>
                          <li>
                            <Link href="/instructor">Library</Link>
                          </li> */}

                          <li>
                            {/* <Link href="#">Partners</Link> */}
                            {/* <Link href="/instructor">Partners</Link> */}
                          </li>
                          {/* <li>
                            <Link href="/about">FAQs</Link>
                          </li> */}
                          <li>
                            <Link href="/policy-privacy">Privacy Policy</Link>
                          </li>

                          <li>
                            <Link href="/terms-conditions">Terms & Conditions</Link>
                          </li>
                          <li>
                            <Link href="/cancellation">Cancellation Policy</Link>
                          </li>
                          {/* <li>
                            <Link href="/disclaimer">Disclaimer</Link>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                  <div className="footer__widget footer__pl-70 mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Subscribe</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__subscribe">
                        <form action="#">
                          <div className="footer__subscribe-input mb-15">
                            <input
                              type="email"
                              placeholder="Your email address"
                            />
                            <button type="submit">
                              <i className="fas fa-arrow-right"></i>
                              <i className="fas fa-arrow-right"></i>
                            </button>
                          </div>
                        </form>
                        <p>
                          Get the latest news and updates right at your inbox.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Link
                href={`tel:+919105415857`}
                target="_blank"
                style={{
                  transform: 'rotate(90deg)',
                  // display: 'inline-block',
                  position: 'fixed',
                  bottom: '25px',
                  left: '20px',
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#046BD2',
                  padding: '12px',
                  borderRadius: '50%',
                  color: 'white',
                  zIndex: 10,
                  fontSize: '25px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // shadow-lg
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', // shadow-slate-700
                  textDecoration: 'none', // Remove underline from link
                  display: 'flex', // Center content if needed
                  alignItems: 'center', // Center content vertically
                  justifyContent: 'center', // Center content horizontally
                }}
              >
                <span style={{ position: 'absolute', clip: 'rect(0, 0, 0, 0)', overflow: 'hidden', height: '1px', width: '1px', margin: '-1px', padding: '0', border: '0' }}>call</span>
                <FaPhone />
              </Link>
            </div>

            <div>
              <Link
                href="https://wa.me/+919105415857"
                target="_blank"
                style={{
                  // display: 'inline-block',
                  position: 'fixed',
                  bottom: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#4DC251',
                  padding: '12px',
                  borderRadius: '50%',
                  color: 'white',
                  zIndex: 10,
                  fontSize: '25px',
                  overflow: 'hidden',
                  textDecoration: 'none', // Remove underline from link
                  display: 'flex', // Center content if needed
                  alignItems: 'center', // Center content vertically
                  justifyContent: 'center', // Center content horizontally
                }}
              >
                <span style={{ position: 'absolute', clip: 'rect(0, 0, 0, 0)', overflow: 'hidden', height: '1px', width: '1px', margin: '-1px', padding: '0', border: '0' }}>what's app</span>
                <FaWhatsapp />
              </Link>
            </div>
          </div>
          <CopyrightArea />
        </div>

      </footer>

    </>
  );
};

export default Footer;
