import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';

const MailingListForm = () => {
  const sectionRef = useRef(null);
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [visibleLines, setVisibleLines] = useState([false, false]);
  const [isValidEmail, setIsValidEmail] = useState(true);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleLines([true, true]);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setIsValidEmail(false);
      return;
    }

    console.log(`Email submitted: ${email}`);
    setIsSubmitted(true);
    setEmail(''); // Clear email input after submission
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
    setIsValidEmail(true); // Reset email validation state
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  return (
    <Container style={styles.container} ref={sectionRef}>
      <h3 style={styles.header}>JOIN OUR MAILING LIST</h3>
      <p style={styles.description}>
        Get the best stories from the Array VC community.
      </p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          aria-invalid={!isValidEmail} // Indicate invalid email
        />
        {!isValidEmail && <span style={styles.error}>Please enter a valid email.</span>}
        <button
          type="submit"
          style={{
            ...styles.button,
            backgroundColor: isHovered ? '#9954a1' : '#000',
            transform: isClicked ? 'scale(0.95)' : 'scale(1)',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          Submit
        </button>
      </form>

      {/* Alert message */}
      {isSubmitted && (
        <div
          className='mx-auto'
          role="alert" // Accessibility
          aria-live="assertive" // Announce alert message
          style={{
            ...styles.alert,
            opacity: isSubmitted ? 1 : 0,
            transform: isSubmitted ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'opacity 1s ease, transform 1s ease',
            width: '30%',
          }}
        >
          Email Submitted!
        </div>
      )}
    </Container>
  );
};

const lineStyle = {
  content: '',
  position: 'absolute',
  backgroundColor: '#333',
  transition: 'transform 1s ease-in-out',
};

const styles = {
  container: {
    padding: '50px 20px',
    margin: '30px auto',
    maxWidth: '1330px',
    border: '1px solid #000000',
    backgroundColor: '#ffffff',
  },
  header: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    letterSpacing: '2px',
    fontWeight: 'lighter',
    textTransform: 'uppercase',
    color: '#3c3c3c',
    textAlign: 'center',
  },
  description: {
    fontFamily: 'Georgia, serif',
    fontSize: '20px',
    color: '#333',
    margin: '20px 0',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '30px',
    border: '1px solid #ddd',
    marginBottom: '10px',
    width: '100%',
    maxWidth: '300px',
    fontFamily: 'Arial, sans-serif',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 20px',
    fontSize: '20px',
    borderRadius: '30px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
  },
  alert: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#9954a1',
    color: '#fff',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
    opacity: 0,
    transform: 'translateY(-20px)',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
    textAlign: 'center',
  },
};

export default MailingListForm;
