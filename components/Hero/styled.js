import styled from 'styled-components';

export const Hero = styled.section`
    width: 100%;
    background: #000;
    overflow: hidden;
    cursor: pointer;
    
    @media screen and (min-width: 1325px) {
        height: 100vh;
    }
`;

export const HeroContainer = styled.div`
    position: relative;

    > img {
        width: 100%;
        height: 100vh;
        object-fit: cover;

        @media screen and (max-width: 1080px) {
            object-fit: cover;
        }
    }
`;

export const HeroEffect = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 220px;
    background: linear-gradient(to top, #000 50%, transparent 60%);
`;

export const HeroBgBlack = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .5;
`;
