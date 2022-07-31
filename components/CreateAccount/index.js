import Image from 'next/image';
import Link from 'next/link';
import ImageSpotify from '/public/vectors/spotify-logo.svg';

import * as S from './styled';

const CreateAccount = () => {
  return (
    <S.CreateAccount className='createAccountSection'>
      <S.CreateAccountContainer>
      <S.CreateAccountContainerTitle>
        <h3>Hey, você ainda <strong>não possui uma conta Spotify?</strong> <strong>Crie uma agora mesmo.</strong></h3>
      </S.CreateAccountContainerTitle>
      <S.CreateAccountContainerDescription>
        <p>Crie sua conta e em menos de 5 minutos tenha acesso à músicas e podcasts de alta qualidade que te acompanharão aonde você estiver. Crie suas playlists e ouça em casa, na rua ou no trabalho, compartilhe seu bom-gosto musical com seus amigos.</p>
      </S.CreateAccountContainerDescription>
      <S.CreateAccountContainerButton>
        <Link href='https://www.spotify.com/br/signup' passHref>
          <span>
            <Image
              src={ImageSpotify}
              width={22}
              height={22}
              alt='Spotify'
            />
            Crie sua conta Spotify
          </span>
        </Link>
      </S.CreateAccountContainerButton>
      </S.CreateAccountContainer>
    </S.CreateAccount>
  );
};

export default CreateAccount;
