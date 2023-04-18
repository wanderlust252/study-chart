import React, { useEffect } from 'react'
import { Alert, Platform, Text, TouchableOpacity } from 'react-native'
import { Container, HeaderTitle } from './HomeHeader.styled'
import Crashes from 'appcenter-crashes'
import Analytics from 'appcenter-analytics'
export const HomeHeader = () => {
  useEffect(() => {
    const checkCrash = async () => {
      const didCrash = await Crashes.hasCrashedInLastSession()
      if (didCrash) {
        Alert.alert('Report', 'The application had been crashed. We are working to fix it!')
        // blah blah
      }
    }
    checkCrash()
  }, [])
  return (
    <Container>
      <HeaderTitle>Charts Library</HeaderTitle>
      <TouchableOpacity
        onPress={() => {
          // Crashes.generateTestCrash()
          Analytics.trackEvent('Tracking', {
            platform: Platform.OS,
            version: Platform.Version + '',
          })
          // Analytics.trackEvent('ABC')
        }}>
        <Text>ABC</Text>
      </TouchableOpacity>
    </Container>
  )
}
