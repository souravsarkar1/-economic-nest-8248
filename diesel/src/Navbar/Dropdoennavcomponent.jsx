import { Heading } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdoennavcomponent = ({ mainheading, link1, link2, link3 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  }

  const handleMouseLeave = () => {
    setIsOpen(false);
  }

  return (
    <div
      className="dropdown-navbar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Heading as='h4' size='md'>
        {mainheading}
      </Heading>
      {isOpen && (
        <div
          className="dropdown-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            color: 'black',
          }}
        >
          <Link to="/">{link1}</Link>
          <Link to="/">{link2}</Link>
          <Link to="/">{link3}</Link>
        </div>
      )}
    </div>
  );
}

export default Dropdoennavcomponent;
