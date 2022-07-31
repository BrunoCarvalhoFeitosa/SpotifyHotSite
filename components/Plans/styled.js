import styled from 'styled-components';

export const Plans = styled.section`
    width: 100%;
    padding: 90px 0;
    background: #000;

    @media screen and (max-width: 1080px) {
        padding: 50px 0;
    }
`;

export const PlansContainer = styled.div`
    width: 100%;
`;

export const PlansContainerTitle = styled.h3`
    margin: 0;
    position: relative;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #FFF;

    @media screen and (max-width: 1080px) {
        margin: 0 auto;
        width: 90%;
        font-size: 45px;
        line-height: 45px;
    }
    
    @media screen and (min-width: 1081px) {
        margin: 0 auto;
        width: 50%;
        font-size: 60px;
        line-height: 60px;
    }

    strong {
        &:nth-of-type(1) {
            color: #43CD80;
        }
    }

    strong {
        &:nth-of-type(2) {
            color: #222;
        }
    }
`;

export const PlansContainerSubTitle = styled.h4`
    margin: 30px auto 0;
    width: 57%;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    line-height: 30px;
    font-weight: 300;
    text-align: center;
    color: #FFF;

    @media screen and (max-width: 1080px) {
        width: 90%;
    }
`;

export const PlansContainerTablePrices = styled.div`
    margin: 120px auto 0;
    width: 70%;
    
    @media screen and (max-width: 1080px) {
        margin: 55px auto 0;
        width: 90%;
    }
`;

export const PlansContainerTablePricesItem = styled.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 1080px) {
        flex-direction: column;
    }
    
    &:not(:last-of-type) {
        margin-bottom: 120px;

        @media screen and (max-width: 1080px) {
            margin-bottom: 85px;
        }
    }
`;

export const PlansContainerTablePricesItemAdvantages = styled.div`
    width: 40%;

    @media screen and (max-width: 1080px) {
        width: 100%;
    }
`;

export const PlansContainerTablePricesItemAdvantagesContent = styled.div`
    padding-top: 30px;
`;

export const PlansContainerTablePricesItemPlan = styled.button`
    padding: 6px 30px;
    background: #43CD80;
    border: none;
    outline: none;
    border-radius: 30px;
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    animation: pulse 1s infinite;
    cursor: pointer;
`;

export const PlansContainerTablePricesItemAdvantagesContentItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 20px;

    strong {
        font-weight: 300;
        color: #FFF;
    }

    svg {
        height: 20px;
        fill: #43CD80;
    }
`;

export const PlansContainerTablePricesItemConditions = styled.div`
    display: flex;
    align-items: center;
    gap: 70px;
    padding: 5px 40px;
    background: #111;
    border-radius: 10px;
    width: 60%;

    @media screen and (max-width: 1080px) {
        width: 100%;
        flex-direction: column;
        gap: 10px;
        padding: 5px 20px;
    }
`;

export const PlansContainerTablePricesItemConditionsName = styled.div`
    width: 70%;

    @media screen and (max-width: 1080px) {
        width: 100%;
    }

    h4 {
        margin: 0 0 20px;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #FFF;

        @media screen and (max-width: 1080px) {
            margin: 20px 0;
            text-align: center;
        }
    }

    span {
        padding: 5px 25px;
        border-radius: 30px;
        background: rgba(255, 255, 255, 0.2);
        color: #FFF;
    }

     p {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 22px;
        color: #FFF;

        @media screen and (max-width: 1080px) {
            text-align: center;
        }
     }
`;

export const PlansContainerTablePricesItemConditionsPrice = styled.div`
    h4 {
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        font-weight: 600;
        color: #FFF;

        @media screen and (max-width: 1080px) {
            margin: 0 0 20px;
        }

        span {
            font-size: 14px;
            font-weight: 300;
        }
    }
`;
