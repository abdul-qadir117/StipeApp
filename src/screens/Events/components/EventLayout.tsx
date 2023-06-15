import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import { Icons } from '../../../assets/images/svgs';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { LayoutHeader } from './LayoutHeader';
import OutlinedButtonWithIcon from '../../../components/Button/OutlinedButtonWithIcon';
import { resetTicketPayload, setStep } from '../events.slice';
import { EventContext } from '../../../lib/context/EventEditContext';
import { IsEditable } from '../helper';

type LayoutProps = {
  children: string | JSX.Element | JSX.Element[];
  btnTitle: string;
  onBtnPress: () => void;
  btnLoading?: boolean;
  showSkipBtn?: boolean;
  infoBtnReq?: boolean;
  tipTextReq?: boolean;
  showDraftBtn?: boolean;
};

const EventLayout = ({
  children,
  btnTitle = '',
  onBtnPress = () => {},
  btnLoading = false,
  tipTextReq = false,
}: LayoutProps) => {
  const dispatch = useAppDispatch();
  const { id: EventId } = useContext(EventContext);
  const step = useAppSelector(state => state.event.step);
  const ticketPayload = useAppSelector(state => state.event.ticketPayload);

  // const tickets = useAppSelector(state => state.event.tickets);
  const getBtnStyles = () => {
    if (IsEditable(EventId) && ticketPayload?.id === 0) {
      return styles.custom;
    } else {
      if (step === 0) {
        return styles.button;
      } else if (step > 0 && step < 6) {
        return styles.halfBtn;
      } else {
        return styles.custom;
      }
    }
  };

  const ActiveSteps = () => {
    if (step === 1) {
      return (
        <>
          <Icons.StepOneActive />
          <Icons.GreyLine style={styles.greyLine} />
          <Icons.StepTwoInactive />
          <Icons.GreyLine style={styles.greyLine} />
          <Icons.StepThreeInactive />
        </>
      );
    } else if (step === 2) {
      return (
        <>
          <Icons.StepOneComplete />
          <Icons.GreyLine style={styles.greyLine} />
          <Icons.StepTwoActive />
          <Icons.GreyLine style={styles.greyLine} />
          <Icons.StepThreeInactive />
        </>
      );
    } else if (step === 3) {
      return (
        <>
          <Icons.StepOneComplete />
          <Icons.GreyLine style={styles.greyLine} />
          <Icons.StepTwoComplete />
          <Icons.GreyLine style={styles.greyLine} />
          <Icons.StepThreeActive />
        </>
      );
    }
  };

  const SaveAsDraftBtn = ({
    title,
    callBack,
  }: {
    title?: string;
    callBack?: () => void;
  }) => {
    return (
      <OutlinedButtonWithIcon
        title={title ?? 'Save as draft'}
        IconBtnTitleStyles={{ color: 'white' }}
        onPress={() => {
          if (callBack) {
            callBack();
          } else if (step === 4 || step === 5) {
            dispatch(setStep(3));
          }
        }}
        customStyle={styles.halfBtn}
      />
    );
  };

  const NextBtn = ({ title }: { title?: string }) => {
    return (
      <Button
        onPress={onBtnPress}
        title={title ?? btnTitle}
        loading={btnLoading}
        customStyle={getBtnStyles()}
      />
    );
  };

  const bottomBtnRenderer = () => {
    switch (step) {
      case 0:
        return (
          <>
            <TouchableOpacity>
              <Icons.InfoQuestion />
            </TouchableOpacity>
            <NextBtn />
          </>
        );
      case 1:
        return (
          <>
            {!IsEditable(EventId) ? <SaveAsDraftBtn /> : <></>}
            <NextBtn />
          </>
        );
      case 2:
        return (
          <>
            {!IsEditable(EventId) ? <SaveAsDraftBtn /> : <></>}
            <NextBtn />
          </>
        );
      case 3:
        return (
          <>
            {!IsEditable(EventId) ? (
              <>
                <SaveAsDraftBtn />
                <NextBtn title="Review" />
              </>
            ) : (
              <NextBtn title="Save Changes" />
            )}
          </>
        );
      case 4:
        return (
          <>
            <SaveAsDraftBtn title="Cancel" />
            <NextBtn title="Continue" />
          </>
        );
      case 5:
        return (
          <>
            <SaveAsDraftBtn
              title="Cancel"
              callBack={() => {
                dispatch(resetTicketPayload());
              }}
            />
            <NextBtn
              title={IsEditable(EventId) ? 'Save Changes' : 'Add to event'}
            />
          </>
        );
      case 6:
        return (
          <View>
            <View style={styles.reviewBtnContainer}>
              <SaveAsDraftBtn
                title="Edit"
                callBack={() => {
                  dispatch(setStep(0));
                }}
              />
              <SaveAsDraftBtn />
            </View>
            <NextBtn title="Publish" />
          </View>
        );
      default:
        return <NextBtn />;
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[styles.container]}
      nestedScrollEnabled
      alwaysBounceVertical={false}>
      {step !== 0 && step !== 6 && (
        <>
          <LayoutHeader />
          {!IsEditable(EventId) && (
            <View style={styles.stepperContainer}>{ActiveSteps()}</View>
          )}
        </>
      )}

      <ScrollView alwaysBounceVertical={false}>
        <SafeAreaView>{children}</SafeAreaView>
      </ScrollView>

      {tipTextReq && (
        <Text style={styles.tipText}>
          <Text style={styles.tipTextHead}>Tip:</Text> Event visibility will
          match your group’s visibility settings
        </Text>
      )}

      <View style={styles.btnContainer}>{bottomBtnRenderer()}</View>
    </KeyboardAwareScrollView>
  );
};

export default EventLayout;
