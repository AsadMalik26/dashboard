import { StyleSheet } from 'react-native'
import React from 'react'
import { Input, InputProps, Text } from '@ui-kitten/components'
type input = {
  value?: string,
  label?: string,
  placeholder?: string,
  caption?: string,
  accessoryRight?: any,
  secureTextEntry?:false | boolean,
  onChangeText?: Function,
}
type props = input & InputProps
const InputComponent = ({
  value,
  label,
  placeholder,
  accessoryRight,
  caption,
  secureTextEntry,
  onChangeText,
  ...props
}: props) => {
  return (
    <>
    <Text category='label' status='primary'>{caption}</Text>
    <Input
      value={value}
      label={label}
      placeholder={placeholder}
      caption={""}
      accessoryRight={accessoryRight}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      />
      </>
  )
}

export default InputComponent

const styles = StyleSheet.create({})