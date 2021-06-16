import Link from 'next/link'

import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare
} from 'react-icons/fa'

import { MdKeyboardArrowUp } from 'react-icons/md'

import {
  PagesFooter,
  Container,
  Flex,
  Footer,
  Logo,
  FooterGrid,
  SocialMedias,
  Links,
  ScrollToTopBtn
} from './Footer/styles'

const PageFooter: React.FC = () => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <PagesFooter>
      <Platform />

      <Footer>
        <Container as={FooterGrid}>
          <Logo />

          <Links>
            <li>
              <Link href="/copyright">Direitos autorais</Link>
            </li>
            <li>
              <Link href="/terms">Termos de uso</Link>
            </li>
            <li>
              <Link href="/privacy">Políticas de privacidade</Link>
            </li>
          </Links>
          <SocialMedias>
            <li>
              <a
                href="http://fb.com/rocketseat"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Link do Facebook da Rocketseat"
              >
                <FaFacebookSquare aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com/rocketseat_oficial"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Link do Instagram da Rocketseat"
              >
                <FaInstagram aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="http://twitter.com/rocketseat"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Link do Twitter da Rocketseat"
              >
                <FaTwitter aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="http://youtube.com/rocketseat"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Link do YouTube da Rocketseat"
              >
                <FaYoutube aria-hidden="true" />
              </a>
            </li>
          </SocialMedias>
          <div className="mail">
            <a href="mailto:oi@rocketseat.com.br">oi@rocketseat.com.br</a>
          </div>
          <div className="boost">
            <Flex>
              <p>Boost yourself</p>
              <ScrollToTopBtn type="button" onClick={scrollToTop}>
                <MdKeyboardArrowUp />
              </ScrollToTopBtn>
            </Flex>
          </div>
        </Container>
      </Footer>
    </PagesFooter>
  )
}

export default PageFooter
