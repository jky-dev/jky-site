import InfoWithImage from './components/infoWithImage'
import Nav from './components/nav'
import styles from './styles.module.css'

export default function Home() {
  return (
    <>
      <div className={`${styles.heroGradient} bg-blue-800`}>
        <div className='max-w-screen-xl m-auto pt-8'>
          <Nav />
          <section id='hero-section-1' className='py-40 flex justify-between'>
            <div>
              <h2>{`Hello! I'm`}</h2>
              <h1>Jacky</h1>
            </div>
            <img></img>
            <div className='w-96'>
              <div className='mb-24'>
                <h3 className='leading-tight'>
                  <span className='altColor'>Full Stack Engineer</span> with
                  over 3 years of experience, based in Sydney
                </h3>
              </div>
              <div>
                <p className='leading-tight'>{`When I'm not working, I enjoy going to the gym, playing video games and snowboarding around the world!`}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className='max-w-screen-xl m-auto py-20'>
        <h4 className='text-center mb-7'>WORK</h4>
        <span className='flex justify-center mb-32'>
          <span>
            <h1>Company One</h1>
            <p className='altColor'>Full Stack Engineer</p>
          </span>
        </span>
        <div className='grid gap-32'>
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
    </>
  )
}
