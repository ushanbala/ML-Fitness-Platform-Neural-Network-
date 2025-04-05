import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './ui/login'
import { RegistrationForm } from './ui/register'
import { ThemeProvider } from "@/components/ui/theme-provider";
import Dashboard from './ui/dashboard'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    {/* <LoginForm></LoginForm> */}
    {/* <RegistrationForm></RegistrationForm> */}
      <Dashboard></Dashboard>
    </ThemeProvider>

  )
}

export default App
