import Link from 'next/link'

import { PageTitle, CallToAction, HeadlineImage } from '../styles/pages/Home'

const Headline: React.FC = () => {
  return (
    <>
      <PageTitle>
        Bem-vindo <br /> ao <br /> Dreamers Client<b>.</b>
      </PageTitle>
      <CallToAction>
        <p>
          Junte-se a milhares de úsuarios, utilizando o cliente com novas
          fuções.
        </p>
        <Link href="https://app.rocketseat.com.br/signup">
          <a className="joined">Clique aqui para baixar</a>
        </Link>
      </CallToAction>

      <HeadlineImage>
        <HeadlineImage />
      </HeadlineImage>
    </>
  )
}

export default Headline
