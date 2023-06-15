import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import Button from '../Button';
import styles from './authLayout.style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StepOneStepper } from '../../screens/Groups/components/CreateGroup/StepOneStepper';
import { StepTwoStepper } from '../../screens/Groups/components/CreateGroup/StepTwoStepper';
import { StepThreeStepper } from '../../screens/Groups/components/CreateGroup/StepThreeStepper';
import { StepFourStepper } from '../../screens/Groups/components/CreateGroup/StepFourStepper';
import CustomHeader from '../CustomHeader';

type AuthLayoutProps = {
  children: string | JSX.Element | JSX.Element[];
  title?: string;
  subTitle?: string;
  subTitleSmall?: string;
  btnTitle: string;
  onBtnPress: () => void;
  btnLoading?: boolean;
  isBottomGradient?: boolean;
  isSkipButtonRequired?: boolean;
  bottomBtnStyle?: any;
  innerContainerCustom?: any;
  showAlreadyHaveAccount?: Boolean;
  showNotHaveAccount?: Boolean;
  onPressSwitchToLogin?: () => void;
  BtnStyles?: any;
  step?: 1 | 2 | 3 | 4;
  headerTitle?: string;
  isBackBtnReq?: boolean;
};

const AuthLayout = ({
  children,
  title = '',
  subTitle = '',
  btnTitle = '',
  subTitleSmall = '',
  onBtnPress = () => {},
  btnLoading = false,
  isBottomGradient = false,
  isSkipButtonRequired = false,
  bottomBtnStyle,
  innerContainerCustom,
  showAlreadyHaveAccount,
  showNotHaveAccount,
  onPressSwitchToLogin = () => {},
  BtnStyles,
  step,
  headerTitle = '',
  isBackBtnReq = true,
}: AuthLayoutProps) => {
  const navigation: any = useNavigation();
  const checkCondition = () =>
    title !== '' || subTitle !== '' || subTitleSmall !== '';

  return (
    <View style={styles.container}>
      <CustomHeader title={headerTitle} isBackBtnReq={isBackBtnReq} />
      <KeyboardAwareScrollView
        contentContainerStyle={[
          styles.innerMainContainer,
          title === '' ? { paddingTop: 10 } : {},
        ]}
        nestedScrollEnabled
        alwaysBounceVertical={false}>
        {step && (
          <View style={styles.stepper}>
            {step === 1 && <StepOneStepper />}
            {step === 2 && <StepTwoStepper />}
            {step === 3 && <StepThreeStepper />}
            {step === 4 && <StepFourStepper />}
          </View>
        )}

        {checkCondition() && (
          <View style={styles.headingContainer}>
            {title && <Text style={styles.heading}>{title}</Text>}
            {subTitle && <Text style={styles.subHeading}>{subTitle}</Text>}
            {subTitleSmall && (
              <Text style={styles.smallSubHeading}>{subTitleSmall}</Text>
            )}
          </View>
        )}

        {isBottomGradient ? (
          <MaskedView
            style={styles.innerContainer}
            maskElement={
              <LinearGradient
                style={styles.gradiant}
                colors={['transparent', 'white', 'white', 'transparent']}
                locations={[0, 0, 0.9, 1]}
              />
            }>
            <ScrollView alwaysBounceVertical={false} nestedScrollEnabled>
              {children}
            </ScrollView>
          </MaskedView>
        ) : (
          <ScrollView
            style={[styles.innerContainer, innerContainerCustom]}
            alwaysBounceVertical={false}>
            {children}
          </ScrollView>
        )}
        {title === '' && <View style={styles.headingContainer} />}
        <SafeAreaView>
          <View style={[styles.btnContainer, bottomBtnStyle]}>
            {isSkipButtonRequired && (
              <Button
                onPress={() => navigation.navigate('signup/termsAndCondition')}
                title={'Skip'}
                type="secondary"
                customStyle={styles.button}
              />
            )}

            <Button
              onPress={onBtnPress}
              title={btnTitle}
              loading={btnLoading}
              customStyle={
                isSkipButtonRequired
                  ? styles.button
                  : BtnStyles
                  ? BtnStyles
                  : {}
              }
            />
          </View>
          {showAlreadyHaveAccount && (
            <View style={styles.alreadyHaveAccountContainer}>
              <Text style={styles.alreadyHaveAccountText}>
                Already Have an account?
              </Text>
              <TouchableOpacity
                onPress={onPressSwitchToLogin}
                style={styles.alreadyHaveAccountButtonContainer}>
                <Text style={styles.alreadyHaveAccountButton}>Log in</Text>
              </TouchableOpacity>
            </View>
          )}
          {showNotHaveAccount && (
            <View style={styles.alreadyHaveAccountContainer}>
              <Text style={styles.alreadyHaveAccountText}>
                Don’t have an account?
              </Text>
              <TouchableOpacity
                onPress={onPressSwitchToLogin}
                style={styles.alreadyHaveAccountButtonContainer}>
                <Text style={styles.alreadyHaveAccountButton}>Sign up</Text>
              </TouchableOpacity>
            </View>
          )}
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;
