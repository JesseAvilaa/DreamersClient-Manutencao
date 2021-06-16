import styled from 'styled-components'

export const ArrowDekstopStyled = styled.div`
  @media (max-width: 1160px) {
    display: none;
  }
`
export const ArrowMobileStyled = styled.div`
  @media (max-width: 1160px) {
    display: none;
  }
`
export const Container = styled.div`
  width: 100%;
  max-width: '1120px;
  margin: 0 auto;
  @media (max-width: 1168px) {
    padding: 0 24px;
  }

  .mail {
    color: var(--color-primary-hover);
    font-weight: normal;
    font-size: 16px;
    line-height: 1;
    text-decoration: none;
    align-self: center;
    grid-area: 2 / 2;
    :hover,
    :focus {
    text-decoration: underline;
    }
    @media (max-width: 870px) {
      grid-area: 1 / 1;
      font-size: 14px;
      justify-self: flex-start;
      align-self: flex-end;
      }
    @media (max-width: 359px) {
      padding-top: 64px;
   }
  }

  .boost {
    width: 100%;
    max-width: 170px;
    grid-area: 2 / 3;
    p {
      font-size: 14px;
      line-height: 24px;
      color: var(--color-green);
    }
    @media (max-width: 870px) {
      grid-area: 2 / 2;
    }
    @media (max-width: 720px) {
      grid-area: 3 / 1;
      grid-column: 1 / -1;
      max-width: 100%;
      padding-top: 40px;
      border-top: 1px solid var(--color-shape);
    }
    @media (max-width: 359px) {
      grid-area: 4 / 1;
    }
  }

  .information {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding-bottom: 24px;
    @media (max-width: 860px) {
      flex-direction: column;
    }
  }
`

export const PagesFooter = styled.div`
  position: relative;
  margin-top: 415px;
  @media (max-width: 870px) {
    margin-top: 500px;
  }
`

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Platform = styled.section`
  background: var(--color-shape);
  width: 100%;
  border-radius: 5px;
  padding: 80px !important;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  transform: translateY(-50%);
  h2 {
    font-weight: bold;
    font-size: 54px;
    line-height: 56px;
    width: 100%;
    color: var(--color-secondary);
    b {
      color: var(--color-green);
    }
  }
  > div {
    p {
      font-size: 18px;
      line-height: 156%;
      color: var(--color-text);
      max-width: 430px;
    }
    a {
      width: 100%;
      height: 64px;
      max-width: 271px;
      position: relative;
      font-size: 16px;
      line-height: 26px;
      font-weight: bold;
      cursor: pointer;
      svg {
        position: absolute;
        top: -97px;
        left: -50%;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }
    }
    @media (max-width: 860px) {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      a {
        max-width: 400px;
        margin-top: 40px;
        font-size: 15px;
        height: 56px;
      }
    }
  }
  @media (max-width: 870px) {
    padding: 40px !important;
    max-width: calc(100% - 48px);
    transform: translateY(-85%);
    > div {
      h2 {
        font-size: 30px;
        line-height: 35px;
      }
      p {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 480px) {
    > div {
      h2,
      p {
        max-width: 183px;
        margin-right: auto;
      }
    }
  }
  @media (max-width: 359px) {
    padding: 40px 24px !important;
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 100%;
  padding: 256px 0 80px 0;
  background: var(--color-black);
  @media (max-width: 870px) {
    padding: 148px 0 40px 0;
  }
`

export const Logo = styled.footer`
  justify-self: flex-start;
  @media (max-width: 870px) {
    align-self: flex-start;
    grid-area: 1 / 1;
  }
`

export const FooterGrid = styled.div`
  padding: 0 !important;
  display: grid;
  grid-template-columns: 184px 160px 1fr;
  justify-items: flex-end;
  grid-row-gap: 32px;
  grid-column-gap: 40px;
  @media (max-width: 1160px) {
    padding: 0 24px !important;
  }
  @media (max-width: 870px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0;
    padding: 0 40px !important;
    align-items: center;
  }
  @media (max-width: 359px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 40px;
  }
`

export const SocialMedias = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 40px);
  grid-auto-flow: column;
  grid-gap: 8px;
  justify-self: flex-start;
  grid-area: 2 /1;
  li {
    background: var(--color-shape);
    width: 40px;
    height: 40px;
    border-radius: 5px;
    transition: all 0.2s ease;
    :hover,
    :focus {
      background: var(--color-shape-hover);
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      svg {
        width: 18px;
        height: 18px;
        color: var(--color-primary);
      }
    }
  }
  @media (max-width: 870px) {
    width: auto;
    grid-template-columns: repeat(2, 40px);
    grid-auto-flow: row;
    grid-area: 1 / 2;
    justify-self: flex-end;
  }
  @media (max-width: 359px) {
    grid-area: 2 / 1;
    justify-self: flex-start;
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  grid-area: 1 / 3;
  li {
    :not(:last-child) {
      margin-right: 24px;
    }
    a {
      font-size: 14px;
      line-height: 16px;
      color: var(--color-text);
      text-decoration: none;
      :hover,
      :focus {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 870px) {
    grid-area: 2 / 1;
    flex-direction: column;
    align-items: flex-start;
    li {
      :not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
  @media (max-width: 359px) {
    grid-area: 3 / 1;
  }
`

export const ScrollToTopBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: var(--color-shape);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--color-primary);
    width: 18px;
    height: 18px;
  }
  :hover,
  :focus {
    background: var(--color-shape-hover);
  }
`
