import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <Container>
            <p> I am the Home Component </p>
            <button onClick={() => console.log('pressed')}>Click Me</button>
        </Container>
    )
}

const Container = styled.div`
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid grey;
`;

export default {
    component: Home
}