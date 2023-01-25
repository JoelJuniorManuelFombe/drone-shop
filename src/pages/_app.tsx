import '@/styles/globals.css'
import "swiper/css/bundle";
import "../styles/styles.css";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
