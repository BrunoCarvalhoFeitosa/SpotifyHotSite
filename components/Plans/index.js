import { CheckIcon } from "@heroicons/react/solid"
import * as S from "./styled"

const Plans = () => {
  return (
    <S.Plans className="plansSection">
      <S.PlansContainer>
        <S.PlansContainerTitle>
          Experimente o Spotify Premium por <strong>1 mês gratuitamente.</strong>
        </S.PlansContainerTitle>
        <S.PlansContainerSubTitle>
          Já pensou em ter o controle das suas músicas e poder escutá-las sem ser interrompido? Com o Premium você 
          escuta suas músicas sem propaganda e até sem internet, escute offline e sem limites. Tenha acesso a mais de 
          82 milhões de faixas, 3.6 milhões de títulos de podcasts e compartilhe o que você ouve com os seus amigos. 
        </S.PlansContainerSubTitle>
        <S.PlansContainerTablePrices>
        <S.PlansContainerTablePricesItem>
          <S.PlansContainerTablePricesItemAdvantages>
            <S.PlansContainerTablePricesItemPlan>Gratuito</S.PlansContainerTablePricesItemPlan>
            <S.PlansContainerTablePricesItemAdvantagesContent>
              <S.PlansContainerTablePricesItemAdvantagesContentItem>
                <CheckIcon />
                <strong>Pausa de anúncios a cada 30 minutos.</strong>
              </S.PlansContainerTablePricesItemAdvantagesContentItem>
              <S.PlansContainerTablePricesItemAdvantagesContentItem>
                <CheckIcon />
                <strong>Limite para criação de playlists.</strong>
              </S.PlansContainerTablePricesItemAdvantagesContentItem>
              <S.PlansContainerTablePricesItemAdvantagesContentItem>
                <CheckIcon />
                <strong>Necessidade de internet para ouvir faixas.</strong>
              </S.PlansContainerTablePricesItemAdvantagesContentItem>
            </S.PlansContainerTablePricesItemAdvantagesContent>
          </S.PlansContainerTablePricesItemAdvantages>
          <S.PlansContainerTablePricesItemConditions>
            <S.PlansContainerTablePricesItemConditionsName>
              <h4>Plano Gratuito</h4>
              <p>Plano gratuíto e individual que te dá acesso a todo o catálogo de músicas.</p>
            </S.PlansContainerTablePricesItemConditionsName>
            <S.PlansContainerTablePricesItemConditionsPrice>
              <h4>0.00 <span>/ vitalício</span></h4>
            </S.PlansContainerTablePricesItemConditionsPrice>
          </S.PlansContainerTablePricesItemConditions>
        </S.PlansContainerTablePricesItem>
        <S.PlansContainerTablePricesItem>
          <S.PlansContainerTablePricesItemAdvantages>
            <S.PlansContainerTablePricesItemPlan>Estudante</S.PlansContainerTablePricesItemPlan>
            <S.PlansContainerTablePricesItemAdvantagesContent>
              <S.PlansContainerTablePricesItemAdvantagesContentItem>
                <CheckIcon />
                <strong>Ouça músicas offline.</strong>
              </S.PlansContainerTablePricesItemAdvantagesContentItem>
              <S.PlansContainerTablePricesItemAdvantagesContentItem>
                <CheckIcon />
                <strong>Sem anúncios ou interrupções.</strong>
              </S.PlansContainerTablePricesItemAdvantagesContentItem>
              <S.PlansContainerTablePricesItemAdvantagesContentItem>
                <CheckIcon />
                <strong>O Spotify paga metade da sua mensalidade.</strong>
              </S.PlansContainerTablePricesItemAdvantagesContentItem>
            </S.PlansContainerTablePricesItemAdvantagesContent>
          </S.PlansContainerTablePricesItemAdvantages>
          <S.PlansContainerTablePricesItemConditions>
            <S.PlansContainerTablePricesItemConditionsName>
              <h4>Plano Estudante</h4>
              <p>Plano com 50% de desconto que te dá acesso a todo o catálogo de músicas.</p>
            </S.PlansContainerTablePricesItemConditionsName>
            <S.PlansContainerTablePricesItemConditionsPrice>
              <h4>4.99 <span>/ mensal</span></h4>
            </S.PlansContainerTablePricesItemConditionsPrice>
          </S.PlansContainerTablePricesItemConditions>
        </S.PlansContainerTablePricesItem>
        <S.PlansContainerTablePricesItem>
          <S.PlansContainerTablePricesItemAdvantages>
            <S.PlansContainerTablePricesItemPlan>Individual</S.PlansContainerTablePricesItemPlan>
            <S.PlansContainerTablePricesItemAdvantagesContent>
              <S.PlansContainerTablePricesItemAdvantagesContentItem>
                <CheckIcon />
                <strong>Ouça músicas offline.</strong>
              </S.PlansContainerTablePricesItemAdvantagesContentItem>
              <S.PlansContainerTablePricesItemAdvantagesContentItem>
                <CheckIcon />
                <strong>Sem anúncios ou interrupções.</strong>
              </S.PlansContainerTablePricesItemAdvantagesContentItem>
              <S.PlansContainerTablePricesItemAdvantagesContentItem>
                <CheckIcon />
                <strong>Acesso à todo o catálogo.</strong>
              </S.PlansContainerTablePricesItemAdvantagesContentItem>
            </S.PlansContainerTablePricesItemAdvantagesContent>
          </S.PlansContainerTablePricesItemAdvantages>
          <S.PlansContainerTablePricesItemConditions>
            <S.PlansContainerTablePricesItemConditionsName>
              <h4>Plano Individual</h4>
              <p>Plano premium para uma pessoas que te dá acesso a todo o catálogo de músicas.</p>
            </S.PlansContainerTablePricesItemConditionsName>
            <S.PlansContainerTablePricesItemConditionsPrice>
              <h4>9.99 <span>/ mensal</span></h4>
            </S.PlansContainerTablePricesItemConditionsPrice>
          </S.PlansContainerTablePricesItemConditions>
        </S.PlansContainerTablePricesItem>
        <S.PlansContainerTablePricesItem>
          <S.PlansContainerTablePricesItemAdvantages>
            <S.PlansContainerTablePricesItemPlan>Duo</S.PlansContainerTablePricesItemPlan>
            <S.PlansContainerTablePricesItemAdvantagesContent>
              <S.PlansContainerTablePricesItemAdvantagesContentItem>
                <CheckIcon />
                <strong>Ouça músicas offline.</strong>
              </S.PlansContainerTablePricesItemAdvantagesContentItem>
              <S.PlansContainerTablePricesItemAdvantagesContentItem>
                <CheckIcon />
                <strong>Sem anúncios ou interrupções.</strong>
              </S.PlansContainerTablePricesItemAdvantagesContentItem>
              <S.PlansContainerTablePricesItemAdvantagesContentItem>
                <CheckIcon />
                <strong>2 contas Premium para você e sua namorada(o).</strong>
              </S.PlansContainerTablePricesItemAdvantagesContentItem>
            </S.PlansContainerTablePricesItemAdvantagesContent>
          </S.PlansContainerTablePricesItemAdvantages>
          <S.PlansContainerTablePricesItemConditions>
            <S.PlansContainerTablePricesItemConditionsName>
              <h4>Plano Duo</h4>
              <p>Plano premium para duas pessoas que te dá acesso a todo o catálogo de músicas.</p>
            </S.PlansContainerTablePricesItemConditionsName>
            <S.PlansContainerTablePricesItemConditionsPrice>
              <h4>29.90 <span>/ mensal</span></h4>
            </S.PlansContainerTablePricesItemConditionsPrice>
          </S.PlansContainerTablePricesItemConditions>
        </S.PlansContainerTablePricesItem>
        <S.PlansContainerTablePricesItem>
          <S.PlansContainerTablePricesItemAdvantages>
            <S.PlansContainerTablePricesItemPlan>Família</S.PlansContainerTablePricesItemPlan>
            <S.PlansContainerTablePricesItemAdvantagesContent>
              <S.PlansContainerTablePricesItemAdvantagesContentItem>
                <CheckIcon />
                <strong>Ouça músicas offline.</strong>
              </S.PlansContainerTablePricesItemAdvantagesContentItem>
              <S.PlansContainerTablePricesItemAdvantagesContentItem>
                <CheckIcon />
                <strong>Sem anúncios ou interrupções.</strong>
              </S.PlansContainerTablePricesItemAdvantagesContentItem>
              <S.PlansContainerTablePricesItemAdvantagesContentItem>
                <CheckIcon />
                <strong>6 contas Premium para você e sua família.</strong>
              </S.PlansContainerTablePricesItemAdvantagesContentItem>
            </S.PlansContainerTablePricesItemAdvantagesContent>
          </S.PlansContainerTablePricesItemAdvantages>
          <S.PlansContainerTablePricesItemConditions>
            <S.PlansContainerTablePricesItemConditionsName>
              <h4>Plano Família</h4>
              <p>Plano família com acesso para até 6 pessoas e bloqueio de conteúdo explícito.</p>
            </S.PlansContainerTablePricesItemConditionsName>
            <S.PlansContainerTablePricesItemConditionsPrice>
              <h4>49.90 <span>/ mensal</span></h4>
            </S.PlansContainerTablePricesItemConditionsPrice>
          </S.PlansContainerTablePricesItemConditions>
        </S.PlansContainerTablePricesItem>
        </S.PlansContainerTablePrices>
      </S.PlansContainer>
    </S.Plans>
  )
}

export default Plans
