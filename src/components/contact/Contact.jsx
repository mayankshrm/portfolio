import React, { useRef, useState } from 'react';
import "./contact.css";
import { HiOutlineMail, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiOutlineExclamationCircle } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import Reveal from '../common/Reveal';

const SERVICE_ID  = 'service_w4tnqaq';
const TEMPLATE_ID = 'template_1edg426';
const PUBLIC_KEY  = 'AkNtgB2prtafhLdML';
const FALLBACK_EMAIL = 'mayankshrm101@gmail.com';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error
    const [errorMsg, setErrorMsg] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        if (status === 'sending') return;

        setStatus('sending');
        setErrorMsg('');

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
            form.current.reset();
            setStatus('sent');
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            const raw = err?.text || err?.message || 'Unknown error';
            // Translate common EmailJS / provider errors into something user-friendly
            let friendly = "Couldn't send right now. Email me directly instead.";
            if (/invalid grant|reconnect/i.test(raw)) {
                friendly = "Mail service is being reconnected — please email me directly for now.";
            } else if (/network|fetch|failed to fetch/i.test(raw)) {
                friendly = "Network issue. Check your connection and try again.";
            }
            setErrorMsg(friendly);
            setStatus('error');
        }
    };

    return (
        <section className="contact section" id="contact">
            <Reveal>
                <div className="contact__head container">
                    <span className="contact__kicker">Get in touch</span>
                    <h2 className="contact__title">Let's build something.</h2>
                    <p className="contact__lede">
                        I'm open to <strong>collaborations</strong>,{" "}
                        <strong>technical conversations</strong>, and{" "}
                        <strong>interesting problems</strong>. Reach out — I usually reply within a day.
                    </p>
                </div>
            </Reveal>

            <Reveal delay={0.1}>
                <div className="contact__container container">
                    <aside className="contact__direct">
                        <a href={`mailto:${FALLBACK_EMAIL}`} className="contact__channel">
                            <span className="contact__channel-icon"><HiOutlineMail /></span>
                            <span className="contact__channel-body">
                                <span className="contact__channel-label">Email</span>
                                <span className="contact__channel-value">{FALLBACK_EMAIL}</span>
                            </span>
                            <HiOutlineArrowSmRight className="contact__channel-arrow" />
                        </a>

                        <a href="https://www.linkedin.com/in/mayank-sharma-6b41a2199/" target="_blank" rel="noreferrer" className="contact__channel">
                            <span className="contact__channel-icon"><FiLinkedin /></span>
                            <span className="contact__channel-body">
                                <span className="contact__channel-label">LinkedIn</span>
                                <span className="contact__channel-value">mayank-sharma</span>
                            </span>
                            <HiOutlineArrowSmRight className="contact__channel-arrow" />
                        </a>

                        <a href="https://www.github.com/mayankshrm" target="_blank" rel="noreferrer" className="contact__channel">
                            <span className="contact__channel-icon"><FiGithub /></span>
                            <span className="contact__channel-body">
                                <span className="contact__channel-label">GitHub</span>
                                <span className="contact__channel-value">@mayankshrm</span>
                            </span>
                            <HiOutlineArrowSmRight className="contact__channel-arrow" />
                        </a>
                    </aside>

                    <form ref={form} onSubmit={sendEmail} className="contact__form" aria-label="Contact form">
                        <div className="contact__form-row">
                            <label className="contact__form-field">
                                <span className="contact__form-tag">Name</span>
                                <input type="text" name="name" required placeholder="Your name" />
                            </label>
                            <label className="contact__form-field">
                                <span className="contact__form-tag">Email</span>
                                <input type="email" name="email" required placeholder="you@domain.com" />
                            </label>
                        </div>

                        <label className="contact__form-field">
                            <span className="contact__form-tag">What's the project?</span>
                            <textarea name="project" rows="6" required placeholder="A few lines about what you're building, the timeline, anything I should know…" />
                        </label>

                        <div className="contact__form-foot">
                            <button
                                type="submit"
                                className="button button--flex"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending…' : 'Send message'}
                                {status !== 'sending' && <HiOutlineArrowSmRight className="button__icon" />}
                            </button>

                            {status === 'sent' && (
                                <span className="contact__form-sent">
                                    <HiOutlineCheckCircle /> Sent — talk soon.
                                </span>
                            )}

                            {status === 'error' && (
                                <span className="contact__form-error">
                                    <HiOutlineExclamationCircle />
                                    {errorMsg}{' '}
                                    <a href={`mailto:${FALLBACK_EMAIL}`} className="contact__form-error-link">
                                        Email instead →
                                    </a>
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </Reveal>
        </section>
    );
};

export default Contact;
