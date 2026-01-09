import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`padding: 1rem; background: gray;`;
const Title = styled.h1`font-size: 1.5rem; color: white;`;
function StyledApp() {
    return (
        <Wrapper>
            <Title>Hello Styled Components!</Title>
        </Wrapper>
    );
}
export default StyledApp;