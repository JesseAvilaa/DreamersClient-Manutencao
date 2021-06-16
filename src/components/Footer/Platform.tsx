import Link from 'next/link'
import { css } from 'styled-components';

import {
  Container,
  ArrowDekstopStyled,
  ArrowMobileStyled,
  Platform as StyledPlatform,
} from './styles'

const ArrowDekstop: React.FC<{}> = () => (
  <ArrowDekstopStyled>
  <svg
    aria-hidden="true"
    width="314"
    height="74"
    viewBox="0 0 314 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
      d="M311 74L308.113 69L313.887 69L311 74ZM291 1.00005L291 1.50005L291 1.00005ZM311 21L310.5 21L311 21ZM0.499997 0.500044L291 0.500047L291 1.50005L0.499997 1.50004L0.499997 0.500044ZM311.5 21L311.5 69.5L310.5 69.5L310.5 21L311.5 21ZM291 0.500047C302.322 0.500046 311.5 9.67821 311.5 21L310.5 21C310.5 10.2305 301.77 1.50005 291 1.50005L291 0.500047Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="320"
        y1="46.1237"
        x2="5.00008"
        y2="46.1237"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3C3C42" />
        <stop offset="1" stopColor="#202024" />
      </linearGradient>
    </defs>
  </svg>
  </ArrowDekstopStyled>
);

const ArrowMobile: React.FC<{}> = () => (
  <svg
    width="6"
    height="262"
    viewBox="0 0 6 262"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    css={css`
      display: none;
      @media (max-width: 480px) {
        display: block;
        position: absolute;
        top: 40px;
        right: 40px;
        height: 262px;
      }
      @media (max-width: 359px) {
        right: 24px;
      }
    `}
  >
    <path
      d="M3.00001 262L5.88676 257L0.11326 257L3.00001 262ZM2.49999 2.18557e-08L2.50001 257.5L3.50001 257.5L3.49999 -2.18557e-08L2.49999 2.18557e-08Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1="3"
        y1="262"
        x2="2.99999"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3C3C42" />
        <stop offset="1" stopColor="#202024" />
      </linearGradient>
    </defs>
  </svg>
);

const Platform: React.FC = () => {
  return (
    <>
      <Container as={StyledPlatform}>
        <div className="information">
          <h2>
            Mais de <b>200 mil devs</b> <br /> já se conectaram.
          </h2>
        </div>

        <Flex>
          <p>
            Embarque nesse foguete e comece a avançar agora mesmo na direção dos
            seus objetivos.
          </p>
          <Link
            href="http://app.rocketseat.com.br/signup"
            isExternalLink
            asButton
            <ArrowDekstop />
            Criar minha conta
          </Link>
          <ArrowMobile />
        </Flex>
      </Container>
    </>
  )
}

export default Platform
