/* eslint-disable eqeqeq */
import { useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import DreamersLogo from '../assets/logo.png'

import {
  Container,
  Div,
  Navbar,
  MobileButton,
  ButtonDownload,
  IconMobile
} from '../styles/pages/Home'
const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>()
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const handleMenuOpen = (): void => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <Div ref={headerRef} isMenuOpen={menuOpen}>
        <Container as="header" isMenuOpen={menuOpen}>
          <div className="logo">
            <Link href="/" aria-label="Link para a página inicial">
              <img
                src={DreamersLogo}
                aria-hidden="true"
                placeholder="Dreamers Client"
              />
            </Link>
          </div>

          <Navbar isMenuOpen={menuOpen}>
            <Link href="/">
              <a
                className={router.pathname == '/' ? 'active' : ''}
                aria-current="page"
              >
                Início
              </a>
            </Link>
            <Link href="/about">
              <a
                className={router.pathname == '/about' ? 'active' : ''}
                aria-current="page"
              >
                Sobre
              </a>
            </Link>
            <Link href="/update">
              <a
                className={router.pathname == '/update' ? 'active' : ''}
                aria-current="page"
              >
                Atualizações
              </a>
            </Link>
            <Link href="/support">
              <a
                className={router.pathname == '/support' ? 'active' : ''}
                aria-current="page"
              >
                Suporte
              </a>
            </Link>
            <Link href="/download">
              <ButtonDownload isMenuOpen={menuOpen}>Download</ButtonDownload>
            </Link>
          </Navbar>

          <MobileButton
            onClick={handleMenuOpen}
            aria-label="Abrir menu do site"
          >
            {menuOpen ? (
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="16.9399"
                  y="15.5309"
                  width="22"
                  height="2"
                  fill="#17a2b8"
                  transform="rotate(45 16.9399 15.5309)"
                ></rect>
                <rect
                  x="15.5257"
                  y="31.0872"
                  width="22"
                  height="2"
                  fill="#17a2b8"
                  transform="rotate(-45 15.5257 31.0872)"
                ></rect>
              </svg>
            ) : (
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="12" y="20" width="24" height="2" fill="#17a2b8"></rect>
                <rect x="20" y="26" width="16" height="2" fill="#17a2b8"></rect>
              </svg>
            )}
          </MobileButton>
        </Container>
      </Div>
    </>
  )
}

export default Header
