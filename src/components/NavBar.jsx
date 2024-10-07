import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from 'react-icons/fa';

export const NavBar = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const toggleSearchOverlay = () => {
    setShowSearchOverlay(!showSearchOverlay);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Investments", href: "/investment" },
    { name: "News", href: "/news" },
    { name: "10x Growth", href: "/growth" },
    { name: "Podcast", href: "/podcast" },
    { name: "Team", href: "/team" },
  ];

  // Inline styles for the fixed container
  const fixedContainerStyles = {
    width: windowWidth <= 768 ? '100%' : '87%',
    margin: "0 auto",
    borderBottom: "1px solid black",
    backgroundColor: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  };

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Container fluid style={fixedContainerStyles}>
        <Navbar style={{ backgroundColor: "transparent" }} className='py-4' expand="md">
          <Container>
            <Navbar.Brand href="/" className="fw-bold fs-4 text-white d-flex align-items-center">
              <img
                alt="Logo"
                src="/img/logo.png"
                width="auto"
                height="40"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className='bg-transparent border-0'
              style={{ color: 'white' }}
            >
              <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="ms-auto text-secondary">
                {navLinks.map((link, index) => (
                  <Nav.Link
                    key={link.name}
                    href={link.href}
                    className='mx-3 position-relative'
                    style={{
                      color: "#000000",
                      transition: "color 0.2s ease-in-out",
                      overflow: "visible",
                      position: 'relative',
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.name}
                    {hoverIndex === index && (
                      <svg
                        className="squiggle"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 500"
                        style={{
                          position: 'absolute',
                          top: '20%',
                          left: '10%',
                          transform: 'translate(-70%, -70%)',
                          fill: 'none',
                          stroke: 'black',
                          strokeWidth: '4',
                          animation: 'squiggle-animation 1s infinite',
                        }}
                      >
                        <ellipse cx="100" cy="50" rx="100" ry="50" />
                      </svg>
                    )}
                  </Nav.Link>
                ))}
                <Nav.Link className='mx-3' onClick={toggleSearchOverlay}>
                  <FaSearch style={{ color: '#000000', cursor: 'pointer' }} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      {showSearchOverlay && (
        <div style={overlayStyles}>
          <div style={searchContainerStyles}>
            <input
              type="text"
              placeholder="Search Array VC"
              style={searchInputStyles}
            />
            <span onClick={toggleSearchOverlay} style={closeButtonStyles}>
              CLOSE
            </span>
          </div>
        </div>
      )}
    </>
  );
};

// Inline styles for overlay and search input
const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const searchContainerStyles = {
  position: 'relative',
  width: '80%',
  maxWidth: '800px',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #000',
};

const searchInputStyles = {
  width: '100%',
  border: 'none',
  outline: 'none',
  fontSize: '2rem',
  backgroundColor: 'transparent',
};

const closeButtonStyles = {
  position: 'absolute',
  right: '0',
  top: '-40px',
  fontSize: '1rem',
  cursor: 'pointer',
  color: '#000',
};

// Animation keyframes for the squiggle
const styles = `
@keyframes squiggle-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
    stroke: #9954a1;
  }
  100% {
    transform: scale(1);
    stroke: #000000;
  }
}`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
