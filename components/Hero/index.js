import Image from "next/image"
import { scroller } from "react-scroll"
import ImageHero from "/public/images/background.jpg"
import * as S from "./styled"

const Hero = () => {
  const scrollToIntroductionSection = () => {
    scroller.scrollTo("introductionSection", {
      duration: 1200,
      delay: 0,
      smooth: "smooth",
    })
  }

  return (
    <S.Hero>
      <S.HeroContainer>
        <Image
          src={ImageHero}
          width={0}
          height={0}
          alt="Spotify"
          layout="responsive"
          objectFit="cover"
        />
      </S.HeroContainer>
      <S.HeroEffect />
      <S.HeroBgBlack onClick={scrollToIntroductionSection} />
    </S.Hero>
  )
}

export default Hero
