import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MyLayout from "../components/MyLayout";
/* This example requires Tailwind CSS v2.0+ */

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
         <MyLayout>
             <Component {...pageProps}  />
         </MyLayout>
      </>
      )

}
