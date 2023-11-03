import React, { useState, useRef } from "react"
import Image from "next/image"
import ImageFiftyCent from "/public/images/album-artist01.jpg"
import imageBillieEilish from "/public/images/album-artist02.jpg"
import ImageEminem from "/public/images/album-artist03.jpg"
import * as S from "./styled"

const SingersGallery = () => {
  const audioPlayerFirst = useRef(null)
  const audioPlayerSecond = useRef(null)
  const audioPlayerThird = useRef(null)
  const [isPlayingFirstAudio, setIsPlayingFirstAudio] = useState(false)
  const [isPlayingSecondAudio, setIsPlayingSecondAudio] = useState(false)
  const [isPlayingThirdAudio, setIsPlayingThirdAudio] = useState(false)

  const playFirstAudio = () => {
    audioPlayerFirst?.current?.play()
    setIsPlayingFirstAudio(true)
  }

  const pauseFirstAudio = () => {
    audioPlayerFirst.current.pause()
    setIsPlayingFirstAudio(false)
  }
  
  const playSecondAudio = () => {
    audioPlayerSecond.current.play()
    setIsPlayingSecondAudio(true)
  }

  const pauseSecondAudio = () => {
    audioPlayerSecond.current.pause()
    setIsPlayingSecondAudio(false)
  }

  const playThirdAudio = () => {
    audioPlayerThird.current.play()
    setIsPlayingThirdAudio(true)
  }

  const pauseThirdAudio = () => {
    audioPlayerThird.current.pause()
    setIsPlayingThirdAudio(false)
  }

  return (
    <S.SingersGallery className="singersSection">
      <S.SingersGalleryContainer>
        <S.SingersGalleryContainerItem>
          <S.SingersGalleryContainerButton
            onClick={
              isPlayingFirstAudio === false
                ? playFirstAudio
                : pauseFirstAudio
            }
          >
            <S.SingersGalleryContainerItemImage>
              <Image
                src={ImageFiftyCent}
                width={0}
                height={600}
                alt="50cent"
              />
            </S.SingersGalleryContainerItemImage>
          </S.SingersGalleryContainerButton>
        </S.SingersGalleryContainerItem>
        <S.SingersGalleryContainerItem>
          <S.SingersGalleryContainerButton
            onClick={
              isPlayingSecondAudio === false
                ? playSecondAudio
                : pauseSecondAudio
            }
          >
            <S.SingersGalleryContainerItemImage>
              <Image
                src={imageBillieEilish}
                width={0}
                height={600}
                alt="Billie Eilish"
              />
            </S.SingersGalleryContainerItemImage>
          </S.SingersGalleryContainerButton>
        </S.SingersGalleryContainerItem>
        <S.SingersGalleryContainerItem>
          <S.SingersGalleryContainerButton
            onClick={
              isPlayingThirdAudio === false
              ? playThirdAudio
              : pauseThirdAudio
            }
          >
          <S.SingersGalleryContainerItemImage>
            <Image
              src={ImageEminem}
              width={0}
              height={0}
              alt="Eminem"
            />
          </S.SingersGalleryContainerItemImage>
        </S.SingersGalleryContainerButton>
        </S.SingersGalleryContainerItem>
        <S.SingersGalleryAudios>
          <audio
            src={require("../../public/audio/artistmusic01.mp3")}
            ref={audioPlayerFirst}
          />
          <audio
            src={require("../../public/audio/artistmusic02.mp3")}
            ref={audioPlayerSecond}
          />
          <audio
            src={require("../../public/audio/artistmusic03.mp3")}
            ref={audioPlayerThird}
          />
        </S.SingersGalleryAudios>
      </S.SingersGalleryContainer>
    </S.SingersGallery>
  )
}

export default SingersGallery
