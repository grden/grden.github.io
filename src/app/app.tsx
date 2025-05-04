import { AppRoutes } from './router'
import RootLayout from '@/app/layout'

export default function App() {
  return (
    <RootLayout>
      <AppRoutes />
    </RootLayout>
  )
}
