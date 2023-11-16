import InfoWithImage from './components/infoWithImage'
import Nav from './components/nav'

export default function Home() {
  return (
    <main className=''>
      <Nav />
      <section>
        <div>
          <h2>{`Hello! I'm`}</h2>
          <h1>Jacky</h1>
        </div>
        <img></img>
        <div>
          <h3>
            <span className='altColor'>Full Stack Engineer</span> with over 3
            years of experience, based in Sydney
          </h3>
        </div>
        <div>
          <p>{`When I'm not working, I enjoy going to the gym, playing video games and snowboarding around the world!`}</p>
        </div>
      </section>
      <section>
        <div>
          <h4>WORK</h4>
          <h1>Company One</h1>
          <p>Full Stack Engineer</p>
        </div>
        <div>
          <InfoWithImage
            title='Pre Checkout'
            subtitle='Next.js - TypeScript - Kotlin'
            paragraph={`Building out new features around user authentication, account creation, identity verification and more, whilst handling user data safely and preventing harvesting of consumer details`}
            imagePath='/mock'
            imageLocation='after'
          />
          <InfoWithImage
            title='Merchant Success'
            subtitle='React - TypeScript - Kotlin - Java'
            paragraph={`Creating a brand new merchant experience from the ground up - providing a centralised online portal where merchants are able to self-serve and mange their account, view orders and reconciliation data, sales analytics and much more`}
            imagePath='/mock'
          />
        </div>
      </section>
    </main>
  )
}
