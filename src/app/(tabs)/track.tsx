import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ThemeColors, Typography, moderateScale } from '@/theme';

export default function TrackTabRoute() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Track Orders</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.backgroundScreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: Typography.greetingTitle.fontFamily,
    fontSize: moderateScale(Typography.greetingTitle.fontSize),
    color: ThemeColors.textTitle,
  },
});
