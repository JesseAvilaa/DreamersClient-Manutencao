/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'

import background from '../../assets/background.png'

interface MenuProps {
  isMenuOpen: boolean
}

export const Wapper = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    padding-top: 300px;
    text-align: center;
  }
`

export const Container = styled.div<MenuProps>`
  display: grid;
  margin: 0 auto;
  max-width: 1120px;
  grid-template-columns: 180px 72px 1fr;
  grid-auto-rows: repeat(2, 1fr);
  justify-items: flex-end;
  align-items: center;
  grid-auto-flow: row;
  grid-column-gap: 40px;
  height: 100%;
  align-items: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  .logo {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    img {
      padding-top: 20px;
      height: 150px;
    }
    @media (max-width: 720px) {
      grid-area: 1 / 1;
      grid-column: 1 / -1;
    }
    @media (max-width: 480px) {
      img {
        max-width: 140px;
      }
    }
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr 1px;
    grid-column-gap: 0;
    grid-row-gap: 0;
    grid-auto-rows: 0;
    grid-template-rows: 0fr;
    transition: all 0.2s ease;
    ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
        grid-row-gap: 40px;
        grid-auto-rows: 1fr;
      `}
  }
  @media (max-width: 1168px) {
    padding: 0 24px;
  }
  @media (max-width: 359px) {
    grid-template-columns: 1fr 180px;
  }
`

export const Div = styled.div<MenuProps>`
  padding-top: 32px;
  @media (max-width: 720px) {
    background: none;
    transition: all 0.2s linear;
    ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
        padding-bottom: 24px;
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
      `}
  }
  @media (max-width: 480px) {
    padding-top: 24px;
  }
`

export const Navbar = styled.div<MenuProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  grid-area: 1 / 3;
  a {
    padding: 32px 0;
    margin-right: 24px;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    text-transform: uppercase;
  }
  a:hover {
    padding-left: 0;
    border-left: unset;
    background: unset;
    color: ${props => props.theme.colors.primaryhover};
  }

  .active {
    padding-left: 0;
    border-left: unset;
    background: unset;
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }

  @media (max-width: 720px) {
    display: table-row;
    grid-area: 2 / 1;
    justify-self: flex-start;
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease;
    margin-top: 16px;
    a {
      margin-left: 0;
      margin-top: 8px;
      height: 56px;
      border-radius: 5px;
      background: linear-gradient(90deg, #202024, rgba(32, 32, 36, 0));
      width: 100%;
      display: flex;
      align-items: center;
      padding-left: 24px;
    }
    a.active {
      padding-left: 24px;
      border-bottom: 0;
      border-left: 2px solid ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.menu_mobile_active};
    }
    ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
        visibility: visible;
        opacity: 1;
      `}
  }
`

export const ButtonDownload = styled.div<MenuProps>`
  max-width: 118px;
  border: none;
  outline: none;
  color: #fff;
  background: ${props => props.theme.colors.primary};
  width: 100%;
  border-radius: 5px;
  padding: 12px 32px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  [disabled],
  [aria-disabled='true'] {
    cursor: auto;
    opacity: 0.5;
  }
  :not([disabled]),
  :not([aria-disabled='true']) {
    :hover,
    :focus {
      background-color: ${props => props.theme.colors.primaryhover};
    }
    :active,
    [data-active='true'] {
      background-color: ${props => props.theme.colors.primaryhover};
    }
  }

  @media (max-width: 720px) {
    margin-top: 25px;
    grid-area: 2 / 2 / auto / auto;
    max-width: 100%;
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease;
    ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
        visibility: visible;
        opacity: 1;
      `}
  }
`

export const MobileButton = styled.div`
  background: none;
  border: none;
  outline: none;
  width: 50px;
  height: 50px;
  display: none;
  justify-content: center;
  align-items: center;
  grid-area: 1 / 2;
  @media (max-width: 720px) {
    display: flex;
  }
`
export const PageTitle = styled.h1`
  font-size: 64px;
  line-height: 1;
  text-align: center;
  color: ${props => props.theme.colors.text};
  font-weight: 700;
  width: 100%;
  max-width: 615px;
  margin: 0 auto;
  b {
    color: ${props => props.theme.colors.primaryhover};
  }
  br {
    display: none;
  }
  @media (max-width: 720px) {
    font-size: 48px;
  }
  @media (max-width: 480px) {
    font-size: 35px;
    line-height: 40px;
    max-width: 275px;
    br {
      display: block;
    }
  }
`

export const CallToAction = styled.div`
  padding: 48px 0 120px 0;
  width: 100%;
  max-width: 665px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: ${props => props.theme.colors.text};
    text-align: right;
    width: 100%;
    max-width: 320px;
    font-size: 18px;
    line-height: 156%;
  }

  .joined {
    font-size: 16px;
    line-height: 26px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    width: 100%;
    height: 64px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    color: white;
    background: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    transition: all 0.3s ease;
  }

  a {
    width: 100%;
    max-width: 298px;
    height: 64px;
  }
  @media (max-width: 720px) {
    flex-direction: column;
    padding: 16px 0 48px 0;
    p {
      text-align: center;
      margin-bottom: 40px;
      max-width: 100%;
    }
  }
  @media (max-width: 480px) {
    a {
      max-width: 280px;
      font-size: 15px;
      height: 56px;
    }
    p {
      font-size: 15px;
      max-width: 260px;
    }
  }
`

export const HeadlineImage = styled.image`
  width: 100%;
  height: 100%;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(-25%);
    width: 100%;
    height: 100%;
    z-index: -1;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #8257e6 0%,
      rgba(18, 18, 20, 0) 100%
    );
    opacity: 0.4;
  }
`
