import styled from 'styled-components';

export const BePremium = styled.section`
    width: 100%;
    background: #000;
`;

export const BePremiumContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
`;

export const BePremiumContainerOffers = styled.div`
    display: flex;
    width: 95%;
    height: 55vh;
    background: rgb(153,0,255);
    background: linear-gradient(90deg, rgba(153,0,255,1) 27%, rgba(67,205,128,1) 100%, rgba(67,205,128,1) 100%);

    @media screen and (max-width: 1080px) {
        width: 100%;
        background: rgb(153,0,255);
        background: linear-gradient(124deg, rgba(153,0,255,1) 27%, rgba(67,205,128,1) 100%, rgba(67,205,128,1) 100%);
    }
`;

export const BePremiumContainerNumber = styled.h3`
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-size: 98px;
    font-weight: 900;
    color: #000;

    &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        width: 5px;
        height: 270px;
        background: #000;
    }
`;
