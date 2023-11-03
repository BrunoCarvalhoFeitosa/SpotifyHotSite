import Image from "next/image"
import Link from "next/link"
import ImageAllDevices from "/public/vectors/all-devices.svg"
import * as S from "./styled"

const Download = () => {
  return (
    <S.Download className="downloadSection">
      <S.DownloadContainer>
        <S.DownloadContainerTitle>
          Baixe o Spotify, é <strong>de graça</strong> e <strong>sempre será.</strong>
        </S.DownloadContainerTitle>
        <S.DownloadContainerDescription>
          Escute mais de 82.000.000 milhões de faixas de músicas, mais de 3,6.000.000 milhões de títulos de podcasts, ouça suas faixas offline sem necessidade nenhuma de internet e sem a interrupção incômoda de diversos anúncios. Com uma conta você tem acesso a tudo isso através de diversos tipos de dispositivos como, por exemplo:
        </S.DownloadContainerDescription>
        <S.DownloadContainerDevices>
          <Image
            src={ImageAllDevices}
            width={800}
            height={200}
            alt="Dispositivos"
          />
        </S.DownloadContainerDevices>
        <S.DownloadContainerDevicesList>
          <S.DownloadContainerDevicesListItem>
            <Link href="https://spotify.link/T1vKH6Kr9ib?label=sp_cid%3A773fe976-ed48-4ca6-9ada-1ac42a8d65d8" passHref>
              Celular    
            </Link>
            </S.DownloadContainerDevicesListItem>
            <S.DownloadContainerDevicesListItem>
            <Link href="https://spotify.link/T1vKH6Kr9ib?label=sp_cid%3A773fe976-ed48-4ca6-9ada-1ac42a8d65d8" passHref>
              Tablet
            </Link>
            </S.DownloadContainerDevicesListItem>
            <S.DownloadContainerDevicesListItem>
            <Link href="https://www.microsoft.com/store/p/spotify-music/9ncbcszsjrsb?cid=spotifyweb-windows10-store-direct" passHref>
              Computador
            </Link>
            </S.DownloadContainerDevicesListItem>
            <S.DownloadContainerDevicesListItem>
            <Link href="https://spotify-everywhere.com/pages/gaming" passHref>
              PlayStation
            </Link>
            </S.DownloadContainerDevicesListItem>
            <S.DownloadContainerDevicesListItem>
            <Link href="https://spotify-everywhere.com/pages/gaming" passHref>
              XBOX
            </Link>
            </S.DownloadContainerDevicesListItem>
            <S.DownloadContainerDevicesListItem>
            <Link href="https://spotify-everywhere.com/collections/tv" passHref>
              TV
            </Link>
            </S.DownloadContainerDevicesListItem>
            <S.DownloadContainerDevicesListItem>
            <Link href="https://bruno-carvalho-feitosa-spotify-clone.vercel.app">
              Web Player
            </Link>
            </S.DownloadContainerDevicesListItem>
            <S.DownloadContainerDevicesListItem>
            <Link href="https://spotify-everywhere.com/collections/car-audio" passHref>
              Carro
            </Link>
          </S.DownloadContainerDevicesListItem>
        </S.DownloadContainerDevicesList>
      </S.DownloadContainer>
    </S.Download>
  )
}

export default Download