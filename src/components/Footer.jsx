import React, { useState } from 'react'; // Importing React and useState hook for managing state

// Footer functional component
const Footer = () => {
  // State to manage the motion toggle, default is true (motion ON)
  const [motion, setMotion] = useState(true); 

  // Function to toggle the motion state
  const toggleMotion = (value) => {
    setMotion(value); // Update state based on the button clicked
  };

  // JSX structure of the footer
  return (
    <footer style={styles.footer}> {/* Main footer element with styling */}
      <div style={styles.column}> {/* First column for "ABOUT" section */}
        <h4 style={styles.header}>ABOUT</h4> {/* Section header */}
        <ul style={styles.list}> {/* List of links */}
          <li>Our Ethos</li>
          <li>Our History</li>
          <li>FAQ</li>
          <li>Jobs</li>
          <li>Newsletter</li>
          <li>Legal</li>
        </ul>
      </div>
      <div style={styles.column}> {/* Second column for "BUSINESS ENTITIES" section */}
        <h4 style={styles.header}>BUSINESS ENTITIES</h4> {/* Section header */}
        <ul style={styles.list}> {/* List of business entities */}
          <li>Array VC </li>
          <li>Array VC Heritage</li>
          <li>Array VC Global Equities</li>
        </ul>
      </div>
      <div style={styles.column}> {/* Third column for "LOGIN" section */}
        <h4 style={styles.header}>LOGIN</h4> {/* Section header */}
        <ul style={styles.list}> {/* List of login options */}
          <li>LP Login</li>
          <li>Array VC Login</li>
        </ul>
      </div>
      <div style={styles.column}> {/* Fourth column for "MOTION" section */}
        <h4 style={styles.header}>MOTION</h4> {/* Section header */}
        <div style={styles.toggle}> {/* Container for motion toggle buttons */}
          <button
            style={{
              ...styles.button, // Spreading base button styles
              backgroundColor: motion ? '#fff' : 'transparent', // Conditional background color based on motion state
              color: motion ? '#000' : '#fff', // Conditional text color based on motion state
            }}
            onClick={() => toggleMotion(true)} // On click, set motion to true
          >
            ON
          </button>
          <button
            style={{
              ...styles.button, // Spreading base button styles
              backgroundColor: !motion ? '#fff' : 'transparent', // Conditional background color based on motion state
              color: !motion ? '#000' : '#fff', // Conditional text color based on motion state
            }}
            onClick={() => toggleMotion(false)} // On click, set motion to false
          >
            OFF
          </button>
        </div>
        <p style={styles.copyright}>&copy; 2024 Array VC</p> {/* Copyright notice */}
      </div>
    </footer>
  );
};

// Styles object containing styles for the footer and its elements
const styles = {
  footer: {
    display: 'flex', // Using flexbox for layout
    justifyContent: 'space-between', // Space between columns
    backgroundColor: '#9954a1', // Footer background color
    color: '#fff', // Text color
    padding: '40px', // Padding for the footer
    fontFamily: 'Arial, sans-serif', // Font family
    fontSize: '12px', // Reduced text size
  },
  column: {
    display: 'flex', // Column layout for items
    flexDirection: 'column', // Vertical stacking of items
  },
  list: {
    listStyleType: 'none', // Removing default list style
    padding: 0, // No padding
  },
  header: {
    fontSize: '14px', // Font size for section headers
    marginBottom: '10px', // Margin below headers
    fontWeight: 'bold', // Bold text for headers
  },
  toggle: {
    display: 'flex', // Flexbox for toggle buttons
    alignItems: 'center', // Aligning items in the center vertically
    gap: '10px', // Gap between buttons
  },
  button: {
    border: '1px solid #fff', // White border for buttons
    borderRadius: '20px', // Rounded corners
    padding: '10px 20px', // Padding inside buttons
    cursor: 'pointer', // Pointer cursor on hover
    fontWeight: 'bold', // Bold text for buttons
    backgroundColor: 'transparent', // Default background transparent
    transition: 'background-color 0.3s, color 0.3s', // Smooth transition for background and text color changes
  },
  copyright: {
    marginTop: '20px', // Margin above the copyright text
  },
};

export default Footer; // Exporting the Footer component
