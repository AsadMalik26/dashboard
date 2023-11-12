import { Button, ButtonGroup, Input, Layout, StyleService, Text, } from "@ui-kitten/components";
import { PropsWithChildren } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { BUTTON, TEXT } from "../constants/kitten";
import InputComponent from "../components/InputComponent";
import { FacebookIcon, TwitterIcon } from "../constants/ICONS";
import React from 'react'
import { KStyles } from "../constants/GLOBAL";
import CompanyLogo from "../components/CompanyLogo";
import { ScreenStackProps } from "react-native-screens";
import { StackScreenProps } from "@react-navigation/stack"
import { ParamListBase, NavigationProp, StackActionHelpers } from "@react-navigation/native"
import { RootStackParamList } from "../../App";
type SectionProps = PropsWithChildren<{
  title?: string;
}>;

type props = StackScreenProps<{
  name: undefined,
  component: undefined,
}>
type NavProps = StackScreenProps<RootStackParamList, "SignIn">
const SignIn = (props: NavProps) => {
  return (
    <>
      <Layout style={{ flex: 1, padding: '10%' }}>
        <ScrollView>
          <CompanyLogo />
          <Layout style={styles.gap}>
            <Text category="h4">Sign In</Text>
            <Text category="label" appearance="hint">Hi there! Nice to see you again.</Text>
            <InputComponent caption={"Emailaaa"} placeholder="example@gmail.com" autoCapitalize="sentences" />
            <InputComponent caption={"Password"} placeholder="*******" secureTextEntry={true} />

            <Layout style={styles.gap}>
              <Button
                style={styles.signup}
                status='primary'
              >
                Sign In
              </Button>
              <Text style={styles.selfCenter} textBreakStrategy="highQuality" appearance="hint">or use one of your social profiles</Text>
              <ButtonGroup style={[styles.btnGroup, styles.gap]} >
                <Button
                  style={styles.signup}
                  status='success'
                  accessoryLeft={TwitterIcon}
                >
                  Twitter
                </Button>
                <Button
                  style={[styles.signup, KStyles.fb]}
                  status='primary'
                  accessoryLeft={FacebookIcon}
                  onPress={() => {
                    console.log("Ali Hassan")
                  }}
                >
                  FaceBook
                </Button>
              </ButtonGroup>
              <Layout style={styles.ending}>
                <Text category="s1">Forgot Password?</Text>
                <Button appearance={BUTTON.appearance.ghost}
                  onPress={() => {
                    props.navigation.replace("SignUp")
                  }}>
                  Sign Up
                </Button>
              </Layout>
            </Layout>
          </Layout>
        </ScrollView>
      </Layout>
    </>
  )
}

export default React.memo(SignIn);

const styles = StyleSheet.create({
  signup: {
    width: 'auto'
  },
  selfCenter: {
    alignSelf: 'center'
  },
  gap: {
    gap: 10
  },
  btnGroup: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'auto'
  },
  ending: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  }
})