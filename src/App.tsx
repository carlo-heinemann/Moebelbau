import { Box } from '@mui/material'
import './App.css'
import Header from './components/Header.tsx'
import Start from './pages/start/Start.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { COLORS } from './constants/colors.ts'
import Footer from './components/footer/Footer.tsx'
import Projects from './pages/projects/Projects.tsx'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { STRINGS } from './constants/strings.ts'

function App() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{STRINGS.HEAD_TITLE}</title>
          <link rel="icon" href="/Logo.png" />
        </Helmet>

        <BrowserRouter>
          <Header />
          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              p: 2,
              backgroundColor: COLORS.background,
            }}
          >
            <Box
              sx={{
                width: {
                  xs: '100%',
                  sm: '70%',
                },
              }}
            >
              <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </Box>
          </Box>
          <Footer />
        </BrowserRouter>
      </>
    </HelmetProvider>
  )
}

export default App
