import styled from 'styled-components';

export const SharePage = styled.div`
    width: 100%;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.88);
    z-index: 99;
`;

export const SharePageContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 52%;
    height: 50%;
    background: #ddd;
    box-sizing: border-box;
    z-index: 99;

    @media screen and (max-width: 680px) {
        width: 95%;
        height: auto;
    }
`;

export const SharePageWrapper = styled.div`
    padding: 40px 50px;

    @media screen and (max-width: 680px) {
        padding: 20px 30px;
    }
`;

export const SharePageClose = styled.div`
    display: flex;
    justify-content: end;
`;

export const SharePageCloseButton = styled.div`
    background: none;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;

    svg {
        height: 40px;
    }
`;

export const SharePageTitleContainer = styled.div`
    margin: 0 auto;
    width: 52%;

    @media screen and (max-width: 680px) {
        width: 90%;
    }
`;

export const SharePageTitle = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    color: #000;

    @media screen and (max-width: 680px) {
        font-size: 13px;
    }
`;

export const SharePageCopyContainer = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const SharePageAddress = styled.div`
    padding: 12px 80px;
    border-radius: 25px;
    background: #ccc;
    
    @media screen and (max-width: 680px) {
        padding: 12px 25px;
    }
`;

export const SharePageCopyButton = styled.button`
    display: flex;
    align-items: center;
    padding: 12px 26px;
    border-radius: 25px;
    background: #000;
    border: none;
    outline: none;
    cursor: pointer;
    
    @media screen and (max-width: 680px) {
        padding: 12px 18px;
    }

    svg {
        height: 22px;
        filter: invert(1);
    }
`;

export const SharePageAlternativeOptions = styled.div`
    width: 100%;
`;

export const SharePageAlternativeOptionsTitleContainer = styled.div`
    margin: 90px 0 10px;
    
    @media screen and (max-width: 680px) {
        margin: 60px 0 10px;
    }
`;

export const SharePageAlternativeOptionsTitle = styled.h4`
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: #000;
`;

export const SharePageAlternativeOptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 680px) {
        flex-flow: row wrap;
        justify-content: center;
    }
`;
