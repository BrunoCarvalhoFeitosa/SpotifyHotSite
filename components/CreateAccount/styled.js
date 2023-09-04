import styled from 'styled-components';

export const CreateAccount = styled.section`
    width: 100%;
    background: #000;
`;

export const CreateAccountContainer = styled.div`
    padding: 10px 0 180px;

    @media screen and (max-width: 680px) {
        padding: 10px 0 80px;
    }
`;

export const CreateAccountContainerTitle = styled.div`
    margin: 0 auto;
    width: 50%;

    @media screen and (max-width: 1024px) {
        width: 90%;
    }

    h3 {
        font-family: 'Roboto', sans-serif;
        font-size: 60px;
        font-weight: 800;
        text-align: center;
        color: #FFF;

        strong {
            &:first-of-type {
                color: #222;
            }

            &:last-of-type {
                color: #43CD80;
            }
        }

        @media screen and (max-width: 680px) {
            font-size: 45px;
            line-height: 45px;
        }
    }
`;

export const CreateAccountContainerDescription = styled.div`
    margin: 0 auto;
    width: 40%;

    @media screen and (max-width: 1024px) {
        width: 90%;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        color: #FFF;
    }
`;

export const CreateAccountContainerButton = styled.button`
    margin: 32px auto 0;
    display: flex;
    justify-content: center;
    border-radius: 40px;
    border: none;
    width: 400px;
    padding: 24px 0;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    font-weight: 900;
    cursor: pointer;

    @media screen and (max-width: 680px) {
        width: 85%;
    }

    span {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            filter: brightness(0.1);
        }
    }
`;
