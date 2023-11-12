import { Button, ButtonGroup, CheckBox, Input, Layout, StyleService, Text, } from "@ui-kitten/components";
import { PropsWithChildren } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { BUTTON, TEXT } from "../constants/kitten";
import InputComponent from "../components/InputComponent";
import { FacebookIcon, TwitterIcon } from "../constants/ICONS";
import React from 'react'
import { KStyles } from "../constants/GLOBAL";
import CompanyLogo from "../components/CompanyLogo";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackScreenProps } from "@react-navigation/stack";

type SectionProps = PropsWithChildren<{
  title?: string;
}>;

type NavProps = StackScreenProps<RootStackParamList, 'SignUp'>
const SignUp = (props: NavProps) => {
  const [agreement, setAgreement] = React.useState(false)
  return (
    <>
      <Layout style={{ flex: 1, padding: '10%' }}>
        <ScrollView>
          <CompanyLogo />
          <Layout style={styles.gap}>
            <Text category="h4">Sign Up</Text>
            <Text category="label" appearance="hint">Hi there! Nice to see you again.</Text>
            <InputComponent caption={"Emailaaa"} placeholder="example@gmail.com" autoCapitalize="sentences" />
            <InputComponent caption={"Password"} placeholder="*******" secureTextEntry={true} />
            <Layout style={{ paddingHorizontal: 'auto' }}>
              <CheckBox
                // style={styles.checkbox}
                checked={agreement}
                onChange={(v) => setAgreement(v)}
              >
                I agree to the Terms of Services and Privacy Policy
              </CheckBox>
              <Text></Text>
            </Layout>
            <Layout style={styles.gap}>
              <Button
                style={styles.signup}
                status='primary'
              >
                Continue
              </Button>
              <Text style={styles.selfCenter} textBreakStrategy="highQuality" appearance="hint">or use one of your social profiles</Text>
              <Layout style={styles.ending}>
                <Text category="s1">Already have an account?</Text>
                <Button appearance={BUTTON.appearance.ghost}
                  onPress={() => {
                    props.navigation.replace("SignIn")
                  }}>Sign In</Button>
              </Layout>
            </Layout>
          </Layout>
        </ScrollView>
      </Layout>
    </>
  )
}

export default React.memo(SignUp);

const styles = StyleSheet.create({
  signup: {
    width: 'auto'
  },
  selfCenter: {
    alignSelf: 'center'
  },
  gap: {
    gap: 15
  },
  btnGroup: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'auto'
  },
  ending: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  }
})