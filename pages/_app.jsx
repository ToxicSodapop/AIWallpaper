import '../styles/globals.scss'
import dynamic from 'next/dynamic'
import Footer from '../components/Footer'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={0}
        color='255, 255, 255'
        innerStyle={{
          outline: '0.5px solid #000'
        }}
        outerAlpha={0}
        innerScale={2}
      />
      <Component {...pageProps} />
      <Footer/>
      <script async src="https://zink.tips/zwc.js?rid=630bc5b9a7adfec34ded9ccf&c=gold"></script>
    </>
  )
  
}

export default MyApp
