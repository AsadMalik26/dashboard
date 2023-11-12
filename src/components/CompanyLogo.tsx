import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { Layout, Text } from '@ui-kitten/components'

const CompanyLogo = () => {
  return (
    <Layout style={styles.head}>
      <Text>Image</Text>
      <Text category="label" appearance="hint">Company Name</Text>
    </Layout>
  )
}

export default CompanyLogo

const styles = StyleSheet.create({
  head: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginVertical: 50
  },
})