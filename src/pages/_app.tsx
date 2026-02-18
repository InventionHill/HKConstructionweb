import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/globals.css'
import '../styles/tailwind.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import type { AppProps } from 'next/app'
import CounterCompanyInfoProvider from '../contexts/company_info/company_info'
import { HydrationProvider, Client } from 'react-hydration-provider'
import MainLayout from '../components/Layout/main'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any
  const queryClient = new QueryClient()
  return (
    <HydrationProvider>
      <Client>
        <QueryClientProvider client={queryClient}>
          <CounterCompanyInfoProvider>
            <MainLayout>
              <ToastContainer position="top-left" autoClose={5000} />
              <AnyComponent {...pageProps} />
            </MainLayout>
          </CounterCompanyInfoProvider>
        </QueryClientProvider>
      </Client>
    </HydrationProvider>
  )
}

export default MyApp
