import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './Header'
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import { Outlet } from 'react-router-dom'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212',
      },
    },
  })

  const handleModeToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position='bottom-right'
        hideProgressBar
        theme='colored'
      />
      <CssBaseline />
      <Header handleModeToggle={handleModeToggle} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  )
}

export default App
