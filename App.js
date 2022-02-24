import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import IndexNavigation from './src/navigation'

const App = () => {
  return (
    <NavigationContainer>
      <IndexNavigation />
    </NavigationContainer>
  )
}

export default App