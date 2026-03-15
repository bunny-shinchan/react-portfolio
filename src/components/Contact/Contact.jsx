import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Contact.css';
import emailjs from '@emailjs/browser';

const stepVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const Contact = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const inputRef = useRef(null);
  const textareaRef = useRef(null); 
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    if (step === 3 && textareaRef.current) {
      textareaRef.current.focus({ preventScroll: true });
      return;
    }

    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  }, [step]);

  const nextStep = () => {
    if (step === 1 && name.trim()) {
      setStep(2);
    } else if (step === 2 && email.trim()) {
      setStep(3);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && step !== 3) {
      event.preventDefault();
      nextStep();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) return;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    )
    .then(() => {
      setStep(4);
    })
    .catch((error) => {
      console.error("Email failed:", error);
    });
};

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-header">
            <p className="contact-eyebrow">Contact</p>
            <h2 className="contact-title">Let&apos;s start a conversation</h2>
            <div className="contact-progress" aria-label={`Step ${step} of 3`}>
              <span className={`contact-dot ${step >= 1 ? 'is-active' : ''}`} />
              <span className={`contact-dot ${step >= 2 ? 'is-active' : ''}`} />
              <span className={`contact-dot ${step >= 3 ? 'is-active' : ''}`} />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step-1"
                className="contact-step"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <p className="contact-question">What should I call you?</p>

                <div className="contact-line">
                  <span className="contact-prefix">I&apos;m</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    onKeyDown={handleKeyDown}
                    className="contact-input"
                    placeholder="Your name"
                  />
                </div>

                <button
                  type="button"
                  className="contact-button"
                  onClick={nextStep}
                  disabled={!name.trim()}
                >
                  Continue
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                className="contact-step"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <p className="contact-greeting">Nice to meet you, {name}</p>
                <p className="contact-question">Where can I reach you?</p>

                <div className="contact-line">
                  <span className="contact-prefix">Email me at</span>
                  <input
                    ref={inputRef}
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    onKeyDown={handleKeyDown}
                    className="contact-input"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="contact-actions">
                  <button
                    type="button"
                    className="contact-button contact-button--secondary"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="contact-button"
                    onClick={nextStep}
                    disabled={!email.trim()}
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.form
                key="step-3"
                className="contact-step"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
              >
                <p className="contact-question">What would you like to discuss?</p>

                <div className="contact-line contact-line--stacked">
                  <span className="contact-prefix">I would like to...</span>
                  <textarea
                    ref={textareaRef}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="contact-textarea"
                    placeholder="Please share a few details about your project, role, or inquiry."
                    rows="5"
                  />
                </div>

                <div className="contact-actions">
                  <button
                    type="button"
                    className="contact-button contact-button--secondary"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="contact-button"
                    disabled={!message.trim()}
                  >
                    Send Message
                  </button>
                </div>
              </motion.form>
            )}

            {step === 4 && (
              <motion.div
                key="step-4"
                className="contact-step contact-success"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <p className="contact-success-title">Message Sent ✓</p>
                <p className="contact-success-text">
                  Thanks {name},
                  <br />
                  I&apos;ll get back to you soon.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Contact;