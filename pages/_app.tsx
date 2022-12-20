import type { AppProps } from 'next/app'
import {
  SSRProvider,
  Provider,
  defaultTheme
} from '@adobe/react-spectrum';
import {theme} from '@react-spectrum/theme-light'
import '../styles/globals.css'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
export default function App({ Component, pageProps }: AppProps) {
  return (

    <SSRProvider>
      <Provider theme={theme} colorScheme={'light'}>
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  )
}
