import { useEffect, useState } from 'react';
import type { AppContext, AppProps } from 'next/app'
import '../styles/globals.css'

import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme, customTheme } from '../themes';
import Cookies from 'js-cookie';

interface Props extends AppProps {
  theme: string;
}

// We need to extend the AppProps above in order to add the theme here
function MyApp({ Component, pageProps, theme = 'dark' }: Props ) {

  //console.log({theme})

  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  // The server isn't going to execute the code that is in the useEffect
  // This is going to be executed from the client side
  useEffect(() => {
    
    // When the server generate the page, when I am from the server side 
    // I don't have that cookie so it is going to use light by default
    const cookieTheme = Cookies.get('theme') || 'light';
    const selectedTheme = cookieTheme === 'light'
        ? lightTheme
        : (cookieTheme === 'dark')
          ? darkTheme
          : customTheme;
    
    setCurrentTheme( selectedTheme );
  }, [])
  


  return (
    <ThemeProvider theme={ currentTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}


// //https://nextjs.org/docs/api-reference/data-fetching/get-initial-props
// MyApp.getInitialProps = async( appContext: AppContext ) => {

//   // Here I am destruturing cookies
//   const { theme } = appContext.ctx.req ? ( appContext.ctx.req as any).cookies : { theme: 'light' }
  
//   const validThemes = ['light','dark','custom'];
//   // console.log('getInitialProps: ', cookies);

//   return {
//     theme: validThemes.includes( theme ) ? theme : 'dark',
//   }

// }




export default MyApp
