import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// Array containing grid item data such as title, subtitle, category, and image.
const gridItems = [
    {
        title: "The Reddit Story",
        subtitle: "with Steve Huffman",
        category: "Podcast",
        image: "/img/1.webp", // Replace with your images
    },
    {
        title: "The Reddit Story",
        subtitle: "with Steve Huffman",
        category: "Podcast",
        image: "/img/2.webp", // Replace with your images
    },
    {
        title: "From Startup Founder to Scaleup CEO",
        subtitle: "by Brian Halligan",
        category: "Perspective",
        image: "/img/3.webp",
    },
    {
        title: "The AI Supply Chain Tug of War",
        subtitle: "",
        category: "Read",
        image: "/img/4.webp",
    },
    {
        title: "AI's $600B Question",
        subtitle: "By David Cahn",
        category: "Perspective",
        image: "/img/5.webp",
    },
    {
        title: "AI's $600B Question",
        subtitle: "By David Cahn",
        category: "Perspective",
        image: "/img/1.webp",
    },
    {
        title: "AI's $600B Question",
        subtitle: "By David Cahn",
        category: "Perspective",
        image: "/img/7.webp",
    },
    {
        title: "From Startup Founder to Scaleup CEO",
        subtitle: "by Brian Halligan",
        category: "Perspective",
        image: "/img/3.webp",
    },
    {
        title: "The AI Supply Chain Tug of War",
        subtitle: "",
        category: "Read",
        image: "/img/4.webp",
    },
];

const GridSection = () => {
    // State to track which grid items are visible
    const [visibleLines, setVisibleLines] = useState(Array(gridItems.length).fill(false));
    // State to manage opacity for fade-in effect
    const [imageOpacity, setImageOpacity] = useState(Array(gridItems.length).fill(0));

    // Function to handle scroll events
    const handleScroll = () => {
        const viewportHeight = window.innerHeight;

        // Iterate over grid items to check if they are within the viewport
        gridItems.forEach((_, index) => {
            const sectionTop = document.querySelector(`#grid-item-${index}`).getBoundingClientRect().top;
            const threshold = 100; // Threshold for visibility trigger

            // If the section is visible, update the corresponding states
            if (sectionTop < viewportHeight - threshold) {
                setVisibleLines(prev => {
                    const newVisibleLines = [...prev];
                    newVisibleLines[index] = true; // Mark line as visible
                    return newVisibleLines;
                });

                // Update opacity for fade-in effect
                setImageOpacity(prev => {
                    const newImageOpacity = [...prev];
                    newImageOpacity[index] = 1; // Set opacity to fully visible
                    return newImageOpacity;
                });
            }
        });
    };

    // Effect to add and remove scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
    }, []);

    // Style objects for various elements
    const containerStyle = {
        position: 'relative',
        margin: '0',
        padding: '0',
        border: 'none',
    };

    const imageContainerStyle = {
        position: 'relative',
        margin: '5px',
        border: 'none',
    };

    // Base style for the lines around each grid item
    const lineStyle = {
        content: '',
        position: 'absolute',
        backgroundColor: '#333',
        transition: 'transform 1s ease-in-out', // Animation for lines
    };

    const topBottomLineStyle = {
        ...lineStyle,
        height: '1px',
        width: '100%',
        left: '0',
    };

    const verticalLineStyle = {
        ...lineStyle,
        width: '1px',
        height: '100%',
        top: '0',
    };

    // Style for the explore link
    const exploreLinkStyle = {
        position: 'absolute',
        top: '10px',
        left: '10px',
        fontSize: '18px',
        color: 'white',
        padding: '8px 15px',
        cursor: 'pointer',
        zIndex: 2,
        transition: 'transform 0.3s ease-in-out',
    };

    // Style for the category label
    const categoryLabelStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        color: 'white',
        padding: '8px 15px',
        fontSize: '18px',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
    };

    // Style for the overlay text
    const overlayTextStyle = {
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        color: 'white',
        padding: '10px',
        fontSize: '20px',
        zIndex: 2,
    };

    // Style for the circle next to category labels
    const circleStyle = {
        display: 'inline-block',
        width: '14px',
        height: '14px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        marginRight: '8px',
        transition: 'transform 0.3s ease-in-out',
    };

    // Hover effects for the circles
    const handleCircleHover = (e) => {
        e.currentTarget.querySelector('.circle').style.transform = 'scale(1.3)'; // Scale up the circle
        e.currentTarget.querySelector('.linkText').style.transform = 'translateX(10px)'; // Move link text right
        e.currentTarget.querySelector('.circle').style.backgroundColor = '#b19cd8'; // Change circle color
        e.currentTarget.querySelector('.overlay').style.opacity = '0.7'; // Show overlay
    };

    // Reset hover effects
    const handleCircleLeave = (e) => {
        e.currentTarget.querySelector('.circle').style.transform = 'scale(1)'; // Reset scale
        e.currentTarget.querySelector('.circle').style.backgroundColor = 'white'; // Reset color
        e.currentTarget.querySelector('.linkText').style.transform = 'translateX(0)'; // Reset text position
        e.currentTarget.querySelector('.overlay').style.opacity = '0'; // Hide overlay
    };

    return (
        <div className="container mt-5 grid-section">
            <Row className="g-4">
                {gridItems.map((item, index) => (
                    <Col md={6} lg={4} key={index}>
                        <div style={containerStyle} id={`grid-item-${index}`}>
                            <Card 
                                className="text-white" 
                                style={{ borderRadius: '0px', border: 'none' }}
                                onMouseEnter={handleCircleHover} // Trigger hover effect
                                onMouseLeave={handleCircleLeave} // Reset hover effect
                            >
                                <div style={imageContainerStyle}>
                                    <Card.Img
                                        src={item.image}
                                        alt={item.title}
                                        style={{ 
                                            borderRadius: '0px', 
                                            display: 'block', 
                                            width: '100%', 
                                            opacity: imageOpacity[index], // Set opacity from state
                                            filter: `blur(${1 - imageOpacity[index]}px)`, // Apply blur effect
                                            transition: 'opacity 0.5s ease-in-out, filter 0.5s ease-in-out', // Transition for opacity and blur
                                        }}
                                    />
                                    <div 
                                        className="overlay" // Overlay for darkening effect
                                        style={{
                                            position: 'absolute',
                                            top: '0',
                                            left: '0',
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black with high transparency
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease-in-out',
                                            zIndex: 1,
                                        }}
                                    ></div>

                                    {/* Explore Link with hover animation and arrow */}
                                    <div style={exploreLinkStyle} className='linkText'>
                                        <span style={{ marginRight: '5px' }}>→</span> Explore
                                    </div>

                                    {/* Category label with animated circle */}
                                    <div style={categoryLabelStyle}>
                                        <div className="circle" style={circleStyle}></div>
                                        {item.category}
                                    </div>

                                    {/* Overlay text at the bottom left */}
                                    <div style={overlayTextStyle}>
                                        <h5>{item.category}</h5>
                                        <p>{item.title}</p>
                                        <small>{item.subtitle}</small>
                                    </div>

                                    {/* Top and Bottom lines */}
                                    <div
                                        style={{
                                            ...topBottomLineStyle,
                                            top: '-20px',
                                            transform: visibleLines[index] ? 'scaleX(1)' : 'scaleX(0)', // Animate line visibility
                                        }}
                                    ></div>
                                    <div
                                        style={{
                                            ...topBottomLineStyle,
                                            bottom: '-20px',
                                            transform: visibleLines[index] ? 'scaleX(1)' : 'scaleX(0)', // Animate line visibility
                                        }}
                                    ></div>

                                    {/* Vertical line on the left side */}
                                    <div
                                        style={{
                                            ...verticalLineStyle,
                                            left: '-20px',
                                            transform: visibleLines[index] ? 'scaleY(1)' : 'scaleY(0)', // Animate line visibility
                                        }}
                                    ></div>
                                    {/* Vertical line on the left side */}
                                    <div
                                        style={{
                                            ...verticalLineStyle,
                                            right: '-20px',
                                            transform: visibleLines[index] ? 'scaleY(1)' : 'scaleY(0)', // Animate line visibility
                                        }}
                                    ></div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default GridSection;
