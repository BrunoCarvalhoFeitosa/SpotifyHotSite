import styled from 'styled-components';

export const SingersGallery = styled.section`
    width: 100%;
`;

export const SingersGalleryContainer = styled.div`
    display: flex;

    @media screen and (max-width: 1080px) {
        flex-direction: column;
    }
`;

export const SingersGalleryContainerItem = styled.div`
    position: relative;
    width: calc(100% / 2 - 20px);
    filter: brightness(0.25);
    overflow: hidden;
    
    &:hover {
        filter: brightness(.47);
    }

    @media screen and (max-width: 1080px) {
        width: 100%;
    }
`;

export const SingersGalleryContainerButton = styled.button`
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
`;

export const SingersGalleryContainerItemImage = styled.div`
    img {
        width: 100%;
        height: 600px !important;
        object-fit: cover;
        animation: animateFocusGallery 5s linear infinite;
    }
`;

export const SingersGalleryAudios = styled.div`
    display: none;
`;
