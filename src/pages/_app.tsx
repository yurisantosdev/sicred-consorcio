import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '@/pages/globals.css'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'rsuite/dist/rsuite-no-reset.min.css'
import { CustomProvider } from 'rsuite'
import ptBR from 'rsuite/locales/pt_BR'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimeReactProvider>
      <CustomProvider locale={ptBR} theme="light">
        <Component {...pageProps} />
        <ToastContainer stacked />
      </CustomProvider>
    </PrimeReactProvider>
  )
}
