import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
import store from '@/Redux/store/store'
import AppLayout from '@/components/Layouts/AppLayout'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </SessionProvider>
    </Provider>
  )
}
