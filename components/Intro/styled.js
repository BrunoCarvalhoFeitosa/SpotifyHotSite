import styled from 'styled-components';

export const Intro = styled.section`
    width: 100%;
    background: #000;

    @media screen and (min-width: 1081px) {
        height: 82vh;
    }
`;

export const IntroContainer = styled.div`
    width: 100%;
`;

export const IntroContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    @media screen and (max-width: 620px) {
        width: 94%;
    }
`;

export const IntroContainerHeaderLogo = styled.div`
    position: relative;
    top: 20px;
    cursor: pointer;

    @media screen and (max-width: 320px) {
        img {
            width: 50px !important;
            height: 50px !important;
        }
    }

    @media screen and (min-width: 321px) and (max-width: 680px) {
        img {
            width: 66px !important;
            height: 66px !important;
        }
    }

    @media screen and (min-width: 1081px) {
        top: 40px;
    }
`;

export const IntroContainerHeaderList = styled.div`
    position: relative;
    top: 20px;

    @media screen and (min-width: 1081px) {
        top: 40px;
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        gap: 20px;

        li {
            display: flex;
            align-items: center;
            gap: 4px;
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            font-weight: 500;
            color: #FFF;
            cursor: pointer;

            @media screen and (max-width: 320px) {
                &:last-of-type {
                    display: none;
                }
            }

            @media screen and (max-width: 680px) {
                font-size: 13px;
            }

            &:nth-of-type(2),
            &:nth-of-type(4) {
                svg {
                    fill: #FFF;
                    height: 25px;
                }
            }

            &:nth-of-type(3) {
                svg {
                    stroke: #FFF;
                    height: 25px;
                }
            }

            button {
                background: none;
                border: none;
                outline: none;
                padding: 0;
                cursor: pointer;
            }
        }
    }
`;

export const IntroArticleContainer = styled.article`
    position: relative;
    display: flex;
    align-items: center;
    width: 95%;
    margin: 140px auto 0;

    @media screen and (max-width: 1080px) {
        flex-direction: column;
        width: 90%;
    }
`;

export const IntroArticlePanel = styled.div`
    position: absolute;
    top: -42px;
    left: -18px;
    opacity: .5;
    
    @media screen and (min-width: 1081px) {
        position: relative;
        bottom: 140px;
        top: initial;
        left: initial;
        opacity: 1;
    }
`;

export const IntroArticlePanelContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const IntroArticlePanelItem = styled.div`
    margin: 20px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #43CD80;
    animation: pulse 1.5s cubic-bezier(0.2, 0, 0.4, 1) infinite;

    @media screen and (max-width: 680px) {
        margin: 14px;
    }

    @media screen and (min-width: 681px) and (max-width: 1080px) {
        margin: 20px;
    }
`;

export const IntroArticleContainerText = styled.div`
    width: 100%;

    @media screen and (min-width: 1081px) {
        width: 45%;
        transform: translateX(-160px);
    }
`;

export const IntroArticleContainerTitle = styled.h2`
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 70px;
    line-height: 70px;
    font-weight: 900;
    color: #FFF;

    @media screen and (max-width: 680px) {
        font-size: 45px;
        line-height: 45px;
    }

    @media screen and (min-width: 681px) and (max-width: 1080px) {
        font-size: 70px;
        line-height: 70px;
    }

    &:nth-of-type(2) {
        strong {
            color: #43CD80;
        }
    }

    &:nth-of-type(3) {
        strong {
            color: #222;
        }
    }
`;

export const IntroArticleContainerDescription = styled.p`
    margin-top: 52px;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    line-height: 30px;
    font-weight: 300;
    color: #FFF;
`;

export const IntroArticleContainerButton = styled.button`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 40px;
    width: 400px;
    border-radius: 40px;
    background: #43CD80;
    border: none;
    cursor: pointer;

    @media screen and (max-width: 320px) {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 92%;
        z-index: 99;
    }

    @media screen and (min-width: 321px) and (max-width: 1080px) {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 85%;
        z-index: 99;
    }

    img {
        filter: brightness(.4);
    }
    
    strong {
        margin-left: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 17px;
        font-weight: 900;
        color: #000;
        opacity: .7;
    }
`;

export const IntroArticleContainerCarousel = styled.div`
    width: 100%;
    padding-bottom: 120px;

    @media screen and (max-width: 1081px) {
        padding-bottom: 50px;
    }

    @media screen and (min-width: 1081px) {
        width: 52%;
        padding-bottom: 0;
    }
`;

export const IntroArticleContainerCarouselItem = styled.div`
    position: relative;
    box-sizing: border-box;
    background: #222;
    cursor: grab;
    
    @media screen and (min-width: 1081px) {
        margin-left: 40px;
        width: 300px !important;
        height: 300px !important;
    }
`;

export const IntroArticleContainerCarouselItemImage = styled.div`
    img {
        object-fit: cover;
    }
`;

export const IntroArticleContainerCarouselItemWrapper = styled.div`
    display: flex;
    justify-content: end;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;

    @media screen and (min-width: 1081px) {
        padding: 0 20px 10px;
    }
`;

export const IntroArticleContainerCarouselItemButton = styled.button`

    background: transparent;
    border: none;
    cursor: pointer;

    svg {
        fill: #43CD80;
        height: 60px;
    }
`;

export const IntroArticleContainerCarouselItemAlbum = styled.div`
    position: absolute;
    top: 0;
    right: -130px;
    background: #333;
    border-radius: 8px;
    overflow: hidden;

    img {
        filter: grayscale(1);
        width: 100%;
    }
`;
