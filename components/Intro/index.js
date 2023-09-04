import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { scroller } from 'react-scroll';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LinkIcon, PlayIcon, PauseIcon } from '@heroicons/react/solid';
import SharePage from '../SharePage';
import ImageSpotify from '/public/vectors/spotify-logo.svg';
import ImageFiftyCent from '/public/images/album-artist01.jpg';
import imageBillieEilish from '/public/images/album-artist02.jpg';
import ImageEminem from '/public/images/album-artist03.jpg';

import * as S from './styled';

const Intro = () => {
  const audioPlayerFirst = useRef(null);
  const audioPlayerSecond = useRef(null);
  const audioPlayerThird = useRef(null);
  const [isPlayingFirstAudio, setIsPlayingFirstAudio] = useState(false);
  const [isPlayingSecondAudio, setIsPlayingSecondAudio] = useState(false);
  const [isPlayingThirdAudio, setIsPlayingThirdAudio] = useState(false);
  const [isOpenSharePage, setIsOpenSharePage] = useState(false);

  const playFirstAudio = () => {
    audioPlayerFirst?.current?.play();
    setIsPlayingFirstAudio(true);
  };

  const pauseFirstAudio = () => {
    audioPlayerFirst.current.pause();
    setIsPlayingFirstAudio(false);
  };
  
  const playSecondAudio = () => {
    audioPlayerSecond.current.play();
    setIsPlayingSecondAudio(true);
  };

  const pauseSecondAudio = () => {
    audioPlayerSecond.current.pause();
    setIsPlayingSecondAudio(false);
  };

  const playThirdAudio = () => {
    audioPlayerThird.current.play();
    setIsPlayingThirdAudio(true);
  };

  const pauseThirdAudio = () => {
    audioPlayerThird.current.pause();
    setIsPlayingThirdAudio(false);
  };

  const scrollToPlansSection = () => {
    scroller.scrollTo('plansSection', {
      duration: 1200,
      delay: 0,
      smooth: 'smooth',
    });
  };

  const scrollToDownloadSection = () => {
    scroller.scrollTo('downloadSection', {
      duration: 1200,
      delay: 0,
      smooth: 'smooth',
    });
  };

  const scrollToCreateAccountSection = () => {
    scroller.scrollTo('createAccountSection', {
      duration: 1200,
      delay: 0,
      smooth: 'smooth',
    });
  };

  const handleOpenSharePage = () => {
    setIsOpenSharePage(true);
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <S.Intro>
      <S.IntroContainer className='introductionSection'>
        <S.IntroContainerHeader>
          <S.IntroContainerHeaderLogo>
            <Image
              src={ImageSpotify}
              width={100}
              height={100}
              alt='Spotify'
            />
          </S.IntroContainerHeaderLogo>
          <S.IntroContainerHeaderList>
            <ul>
              <li
                title='Planos'
                onClick={scrollToPlansSection}
              >
                Planos
              </li>
              <li
                title='Cadastre-se no Spotify'
                onClick={scrollToCreateAccountSection}
              >
                Cadastre-se
              </li>
              <li
                title='Faça download do Spotify'
                onClick={scrollToDownloadSection}
              >
                Baixe o Spotify
              </li>
              <li
                title='Compartilhar o Spotify'
              >
                <button onClick={handleOpenSharePage}>
                  <LinkIcon />
                </button>
              </li>
            </ul>
          </S.IntroContainerHeaderList>
        </S.IntroContainerHeader>
        <S.IntroArticleContainer>
          <S.IntroArticlePanel>
            <S.IntroArticlePanelContainer>
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
            </S.IntroArticlePanelContainer>
            <S.IntroArticlePanelContainer>
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
            </S.IntroArticlePanelContainer>
            <S.IntroArticlePanelContainer>
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
            </S.IntroArticlePanelContainer>
            <S.IntroArticlePanelContainer>
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
            </S.IntroArticlePanelContainer>
            <S.IntroArticlePanelContainer>
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
            </S.IntroArticlePanelContainer>
            <S.IntroArticlePanelContainer>
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
              <S.IntroArticlePanelItem />
            </S.IntroArticlePanelContainer>
          </S.IntroArticlePanel>
          <S.IntroArticleContainerText>
            <S.IntroArticleContainerTitle>Descubra novos</S.IntroArticleContainerTitle>
            <S.IntroArticleContainerTitle>artistas e <strong>músicas</strong></S.IntroArticleContainerTitle>
            <S.IntroArticleContainerTitle>quando <strong>quiser.</strong></S.IntroArticleContainerTitle>
            <S.IntroArticleContainerDescription>
              Ouça seus artistas favoritos, conheça e teste novos gêneros musicais, crie sua playlist para ouvir quando e onde quiser,  compartilhe com seus amigos as músicas que você ouve em tempo real ou ouça os mais derivados podcasts.
            </S.IntroArticleContainerDescription>
            <S.IntroArticleContainerButton type='button'>
              <Link href='https://accounts.spotify.com/pt-BR/login' passHref>
                <span>
                  <Image
                    src={ImageSpotify}
                    width={22}
                    height={22}
                    alt='Spotify'
                  />
                  <strong>Conecte-se ao Spotify</strong>
                </span>
              </Link>
            </S.IntroArticleContainerButton>
          </S.IntroArticleContainerText>
          <S.IntroArticleContainerCarousel>
            <Slider {...settings}>
              <S.IntroArticleContainerCarouselItem>
                <S.IntroArticleContainerCarouselItemImage
                  onClick={
                    isPlayingFirstAudio === false
                      ? playFirstAudio
                      : pauseFirstAudio
                  }
                >
                  <Image
                    src={ImageFiftyCent}
                    width='0'
                    height='0'
                    layout='responsive'
                    alt='50cent'
                  />
                </S.IntroArticleContainerCarouselItemImage>
                <S.IntroArticleContainerCarouselItemWrapper>
                  <audio
                    src={require('../../public/audio/artistmusic01.mp3')}
                    ref={audioPlayerFirst}
                  />
                  <S.IntroArticleContainerCarouselItemButton>
                    { isPlayingFirstAudio === false ? <PlayIcon /> : <PauseIcon /> }
                  </S.IntroArticleContainerCarouselItemButton>
                </S.IntroArticleContainerCarouselItemWrapper>
              </S.IntroArticleContainerCarouselItem>

              <S.IntroArticleContainerCarouselItem>
                <S.IntroArticleContainerCarouselItemImage
                  onClick={
                    isPlayingSecondAudio === false
                        ? playSecondAudio
                        : pauseSecondAudio
                  }
                >
                  <Image
                    src={imageBillieEilish}
                    width='0'
                    height='0'
                    layout='responsive'
                    alt='Billie Eilish'
                  />
                </S.IntroArticleContainerCarouselItemImage>
                <S.IntroArticleContainerCarouselItemWrapper>
                  <audio
                    src={require('../../public/audio/artistmusic02.mp3')}
                    ref={audioPlayerSecond}
                  />
                  <S.IntroArticleContainerCarouselItemButton>
                    { isPlayingSecondAudio === false ? <PlayIcon /> : <PauseIcon /> }
                  </S.IntroArticleContainerCarouselItemButton>
                </S.IntroArticleContainerCarouselItemWrapper>
              </S.IntroArticleContainerCarouselItem>
              <S.IntroArticleContainerCarouselItem>
                <S.IntroArticleContainerCarouselItemImage
                  onClick={
                    isPlayingThirdAudio === false
                      ? playThirdAudio
                      : pauseThirdAudio
                  }
                >
                  <Image
                    src={ImageEminem}
                    width='0'
                    height='0'
                    layout='responsive'
                    alt='Eminem'
                  />
                </S.IntroArticleContainerCarouselItemImage>
                <S.IntroArticleContainerCarouselItemWrapper>
                  <audio
                    src={require('../../public/audio/artistmusic03.mp3')}
                    ref={audioPlayerThird}
                  />
                  <S.IntroArticleContainerCarouselItemButton>
                    { isPlayingThirdAudio === false ? <PlayIcon /> : <PauseIcon /> }
                  </S.IntroArticleContainerCarouselItemButton>
                </S.IntroArticleContainerCarouselItemWrapper>
              </S.IntroArticleContainerCarouselItem>
              <S.IntroArticleContainerCarouselItem>
                <S.IntroArticleContainerCarouselItemImage
                  onClick={
                    isPlayingFirstAudio === false
                      ? playFirstAudio
                      : pauseFirstAudio
                  }
                >
                  <Image
                    src={ImageFiftyCent}
                    width='0'
                    height='0'
                    layout='responsive'
                    alt='50cent'
                  />
                </S.IntroArticleContainerCarouselItemImage>
                <S.IntroArticleContainerCarouselItemWrapper>
                  <audio
                    src={require('../../public/audio/artistmusic01.mp3')}
                    ref={audioPlayerFirst}
                  />
                  <S.IntroArticleContainerCarouselItemButton>
                    { isPlayingFirstAudio === false ? <PlayIcon /> : <PauseIcon /> }
                  </S.IntroArticleContainerCarouselItemButton>
                </S.IntroArticleContainerCarouselItemWrapper>
              </S.IntroArticleContainerCarouselItem>

              <S.IntroArticleContainerCarouselItem>
                <S.IntroArticleContainerCarouselItemImage
                  onClick={
                    isPlayingSecondAudio === false
                      ? playSecondAudio
                      : pauseSecondAudio
                  }
                >
                  <Image
                    src={imageBillieEilish}
                    width='0'
                    height='0'
                    layout='responsive'
                    alt='Billie Eilish'
                  />
                </S.IntroArticleContainerCarouselItemImage>
                <S.IntroArticleContainerCarouselItemWrapper>
                  <audio
                    src={require('../../public/audio/artistmusic02.mp3')}
                    ref={audioPlayerSecond}
                  />
                  <S.IntroArticleContainerCarouselItemButton>
                    { isPlayingSecondAudio === false ? <PlayIcon /> : <PauseIcon /> }
                  </S.IntroArticleContainerCarouselItemButton>
                </S.IntroArticleContainerCarouselItemWrapper>
              </S.IntroArticleContainerCarouselItem>
              <S.IntroArticleContainerCarouselItem>
                <S.IntroArticleContainerCarouselItemImage
                  onClick={
                    isPlayingThirdAudio === false
                      ? playThirdAudio
                      : pauseThirdAudio
                  }
                >
                  <Image
                    src={ImageEminem}
                    width='0'
                    height='0'
                    layout='responsive'
                    alt='Eminem'
                  />
                </S.IntroArticleContainerCarouselItemImage>
                <S.IntroArticleContainerCarouselItemWrapper>
                  <audio
                    src={require('../../public/audio/artistmusic03.mp3')}
                    ref={audioPlayerThird}
                  />
                  <S.IntroArticleContainerCarouselItemButton>
                    { isPlayingThirdAudio === false ? <PlayIcon /> : <PauseIcon /> }
                  </S.IntroArticleContainerCarouselItemButton>
                </S.IntroArticleContainerCarouselItemWrapper>
              </S.IntroArticleContainerCarouselItem>
            </Slider>
          </S.IntroArticleContainerCarousel>
        </S.IntroArticleContainer>
      </S.IntroContainer>
      <SharePage
        isOpenSharePage={isOpenSharePage}
        setIsOpenSharePage={setIsOpenSharePage}
      />             
    </S.Intro>
  );
};

export default Intro;
