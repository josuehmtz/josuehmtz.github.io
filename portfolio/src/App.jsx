import { useState } from 'react'
import './App.css'
import { AppRouter } from './router/AppRouter'
import {AuthProvider} from './context'

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
