import React, { useEffect, useState } from "react"
import {
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TumblrShareButton,
  TumblrIcon
} from "react-share"
import { XIcon, DocumentDuplicateIcon, CheckIcon } from "@heroicons/react/outline"

import * as S from "./styled"

const SharePage = ({ isOpenSharePage, setIsOpenSharePage }) => {
  const [shareUrl, setShareUrl] = useState("")
  const [isCopied, setIsCopied] = useState(false)
  const title = "Spotify"

  useEffect(() => {
    setShareUrl(window.location.href)
  }, [setShareUrl])

  useEffect(() => {
    const handleCloseSharePageOnEscape = (event) => {
      event.keyCode === 27 && setIsOpenSharePage(false)
    }

    window.addEventListener("keydown", handleCloseSharePageOnEscape)
    
    return () => {
      window.removeEventListener("keydown", handleCloseSharePageOnEscape)
    }
  }, [])

  const handleCloseSharePage = () => {
    setIsOpenSharePage(false)
    setIsCopied(false)
  }

  

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(shareUrl)
    setIsCopied(true)
  }
  
  return (
    <>
      {isOpenSharePage && (
        <S.SharePage>
          <S.Overlay onClick={handleCloseSharePage} />
          <S.SharePageContainer>
            <S.SharePageWrapper>
              <S.SharePageClose>
                <S.SharePageCloseButton onClick={handleCloseSharePage}>
                  <XIcon />
                </S.SharePageCloseButton>
              </S.SharePageClose>
              <S.SharePageTitleContainer>
                <S.SharePageTitle>
                  Copie este link e compartilhe esta página para que seus amigos ouçam milhares de músicas e podcasts com alta qualidade e de qualquer lugar do mundo.
                </S.SharePageTitle>
              </S.SharePageTitleContainer>
              <S.SharePageCopyContainer>
                <S.SharePageAddress>{shareUrl}</S.SharePageAddress>
                <S.SharePageCopyButton onClick={handleCopyUrl}>
                  { isCopied ? <CheckIcon /> : <DocumentDuplicateIcon /> }
                </S.SharePageCopyButton>
              </S.SharePageCopyContainer>
              <S.SharePageAlternativeOptions>
                <S.SharePageAlternativeOptionsTitleContainer>
                  <S.SharePageAlternativeOptionsTitle>
                    Compartilhe diretamente nas suas mídias sociais
                  </S.SharePageAlternativeOptionsTitle>
                </S.SharePageAlternativeOptionsTitleContainer>
                <S.SharePageAlternativeOptionsWrapper>
                  <EmailShareButton url={shareUrl} quote={title} title="E-mail">
                    <EmailIcon size={35} round />
                  </EmailShareButton>
                  <WhatsappShareButton url={shareUrl} quote={title} title="WhatsApp">
                    <WhatsappIcon size={35} round />
                  </WhatsappShareButton>
                  <FacebookShareButton url={shareUrl} quote={title} title="Facebook">
                    <FacebookIcon size={35} round />
                  </FacebookShareButton>
                  <FacebookMessengerShareButton url={shareUrl} quote={title} title="Messenger">
                    <FacebookMessengerIcon size={35} round />
                  </FacebookMessengerShareButton>
                  <TwitterShareButton url={shareUrl} quote={title} title="Twitter">
                    <TwitterIcon size={35} round />
                  </TwitterShareButton>
                  <TelegramShareButton url={shareUrl} quote={title} title="Telegram">
                    <TelegramIcon size={35} round />
                  </TelegramShareButton>
                  <LinkedinShareButton url={shareUrl} quote={title} title="LinkedIn">
                    <LinkedinIcon size={35} round />
                  </LinkedinShareButton>
                  <PinterestShareButton url={shareUrl} quote={title} title="Pinterest">
                    <PinterestIcon size={35} round />
                  </PinterestShareButton>
                  <RedditShareButton url={shareUrl} quote={title} title="Reddit">
                    <RedditIcon size={35} round />
                  </RedditShareButton>
                  <TumblrShareButton url={shareUrl} quote={title} title="Tumblr">
                    <TumblrIcon size={35} round />
                  </TumblrShareButton>
                </S.SharePageAlternativeOptionsWrapper>
              </S.SharePageAlternativeOptions>
            </S.SharePageWrapper>
          </S.SharePageContainer>
        </S.SharePage>
      )}
    </>
  )
}

export default SharePage
