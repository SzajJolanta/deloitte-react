import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    background: #efefef;
    padding: 2rem;
    display: flex;
    justify-content: ${({ justify }) => justify ? justify : 'flex-start' };
`;

export const Div = styled.div`
    background: blue;
    width: 200px;
    height: 200px;
`;


export const RoundDiv = styled(Div)`
    border-radius: 50%;
`;
