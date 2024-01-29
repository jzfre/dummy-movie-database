import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box, Flex, Text } from '@chakra-ui/react';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingX={10}
      paddingY={4}
      bg="#E50914"
      color="white"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box mb={{ base: '10px', md: 0 }}>
        <StyledLogo onClick={() => navigate('/')}>
          <div className="first">
            <span>M</span>ovie
          </div>
          <div className="second">
            <span>D</span>atabase
          </div>
        </StyledLogo>
      </Box>
      <Text mt={{ base: '10px', lg: 0 }} color="white" fontSize="1.5rem">
        <Link to="/favorites">&#9734; Favorites</Link>
      </Text>
    </Flex>
  );
};

export default Header;

const StyledLogo = styled.button`
  display: flex;
  flex-direction: row;
  font-family: 'Arial', sans-serif;
  font-size: 2em;
  color: white; // A typical movie red color
  text-shadow: 1px 1px 2px black;
  letter-spacing: 3px;

  div {
    display: flex;
    flex-direction: row;

    &:first-of-type {
      margin-right: 10px;
    }
  }

  span {
    display: block;
    background-color: teal;
    width: 40px;
    text-align: center;
  }
`;
