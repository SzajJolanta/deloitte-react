import styled from 'styled-components';

export const Div = styled.div`
    background: blue;
    width: 50px;
    height: 50px;
    position: relative;

    div {
        width: 20px;
        height: 20px;
        background: red;
    }

    &::before {
        content: '';
        width: 20px;
        height: 20px;
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        background: green;
    }
`;


export const RoundDiv = styled(Div)`
    border-radius: 50%;

    > *,
    &::before {
        border-radius: 50%;
    }
`;

export const HeaderWrapper = styled.div`
    background: #efefef;
    padding: 2rem;
    display: flex;
    justify-content: ${({ justify }) => justify ? justify : 'flex-start' };

    ${RoundDiv} {
        border: 1px solid red;
    }
`;