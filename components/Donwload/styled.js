import styled from 'styled-components';

export const Download = styled.section`
    width: 100%;
    background: #000;
`;

export const DownloadContainer = styled.section`
    width: 95%;
    padding: 30px 0 180px;
    background: #000;
`;

export const DownloadContainerTitle = styled.h4`
    margin: 0 auto;
    width: 70%;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    color: #FFF;

    @media screen and (max-width: 680px) {
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

export const DownloadContainerDescription = styled.p`
    margin: 30px auto 0;
    width: 60%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;
    text-align: center;
    color: #FFF;

    @media screen and (max-width: 1080px) {
        width: 90%;
    }
`;

export const DownloadContainerDevices = styled.div`
    margin: 40px auto 0;
    display: flex;
    justify-content: center;
`;

export const DownloadContainerDevicesList = styled.ul`
    margin: 40px 0 0 0;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 25px;
    list-style: none;

    @media screen and (max-width: 1080px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const DownloadContainerDevicesListItem = styled.li`
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #FFF;

    @media screen and (max-width: 1080px) {
        text-align: center;
    }

    &::before {
        content: '';
        display: block;
        margin-right: 5px;
        width: 10px;
        height: 10px;
        background: #43CD80;
        border-radius: 50%;
    }
`;
