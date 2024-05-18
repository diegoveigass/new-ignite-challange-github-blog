import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     children: [
//       {
//         path: '*',
//         element: <Blog />,
//       },
//       {
//         path: '/{id}',
//         element: <div>dasdasd</div>,
//       },
//     ],
//   },
// ])

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
