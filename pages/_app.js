import { ThemeProvider } from '@/contexts/ThemeContext';
import { UsernameContextProvider } from '@/contexts/UsernameContext';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <UsernameContextProvider>
        <Component {...pageProps} />
      </UsernameContextProvider>
    </ThemeProvider>

  )

}
