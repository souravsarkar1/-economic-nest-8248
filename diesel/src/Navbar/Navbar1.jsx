import { Heading } from '@chakra-ui/react';
import React from 'react'


const colors = [
   'TRACK YOUR ORDER AND RETURN HERE',
   'ADDITIONAL 10% OFF ON ORDERS ABOVE ₹18000. USE CODE: EXTRA10'
];
const delay = 1500;

function Navbar1() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow" style={{ color: 'red', width: '100%' }}>
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((text, index) => (
                    <div
                        className="slide"
                        key={index}
                    >
                        <Heading as='h3' size='lg'>{text}</Heading>
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
export default Navbar1
