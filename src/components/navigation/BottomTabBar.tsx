import type { Tabs } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { ThemeColors, scale } from '@/theme';

type TabBarFn = NonNullable<React.ComponentProps<typeof Tabs>['tabBar']>;
export type BottomTabBarProps = Parameters<TabBarFn>[0];

interface TabIconProps {
  color: string;
}

function HomeTabIcon({ color }: TabIconProps) {
  return (
    <Svg width={scale(24)} height={scale(24)} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z"
        fill={color}
      />
    </Svg>
  );
}

function BookmarksTabIcon({ color }: TabIconProps) {
  return (
    <Svg width={scale(24)} height={scale(24)} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.6648 18.6316L5.73346 21.8811C5.25989 22.1272 4.67646 21.953 4.41538 21.4875V21.4875C4.33985 21.3433 4.2991 21.1834 4.29639 21.0206V6.62247C4.29639 3.87647 6.17282 2.77808 8.87305 2.77808H15.2163C17.8341 2.77808 19.793 3.80325 19.793 6.4394V21.0206C19.793 21.2804 19.6898 21.5295 19.5061 21.7132C19.3224 21.8969 19.0733 22 18.8135 22C18.6479 21.9974 18.485 21.9567 18.3376 21.8811L12.3696 18.6316C12.1497 18.5128 11.8847 18.5128 11.6648 18.6316Z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
      <Path
        d="M8.36963 9.32272H15.6648"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
    </Svg>
  );
}

function TrackTabIcon({ color }: TabIconProps) {
  return (
    <Svg width={scale(24)} height={scale(24)} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.8554 8.12111L10.1916 13.8227L3.56064 9.74147C2.69176 9.20657 2.86787 7.88697 3.8467 7.60287L19.5022 3.04743C20.3925 2.78978 21.2156 3.62446 20.949 4.51889L16.304 20.1582C16.013 21.1369 14.7082 21.3064 14.1809 20.4325L10.1916 13.8227"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
    </Svg>
  );
}

function SettingsTabIcon({ color }: TabIconProps) {
  return (
    <Svg width={scale(24)} height={scale(24)} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.8067 7.62361L20.1842 6.54352C19.6577 5.6296 18.4907 5.31432 17.5755 5.83872V5.83872C17.1399 6.09534 16.6201 6.16815 16.1307 6.04109C15.6413 5.91402 15.2226 5.59752 14.9668 5.16137C14.8023 4.88415 14.7139 4.56839 14.7105 4.24604V4.24604C14.7254 3.72922 14.5304 3.2284 14.17 2.85767C13.8096 2.48694 13.3145 2.27786 12.7975 2.27808H11.5435C11.037 2.27807 10.5513 2.47991 10.194 2.83895C9.83669 3.19798 9.63717 3.68459 9.63961 4.19112V4.19112C9.6246 5.23693 8.77248 6.07681 7.72657 6.0767C7.40421 6.07336 7.08846 5.98494 6.81123 5.82041V5.82041C5.89606 5.29601 4.72911 5.61129 4.20254 6.52522L3.53435 7.62361C3.00841 8.53639 3.3194 9.70261 4.23 10.2323V10.2323C4.8219 10.574 5.18653 11.2056 5.18653 11.8891C5.18653 12.5725 4.8219 13.2041 4.23 13.5458V13.5458C3.32056 14.0719 3.00923 15.2353 3.53435 16.1454V16.1454L4.16593 17.2346C4.41265 17.6798 4.8266 18.0083 5.31619 18.1474C5.80578 18.2866 6.33064 18.2249 6.77462 17.976V17.976C7.21108 17.7213 7.73119 17.6516 8.21934 17.7822C8.70749 17.9128 9.12324 18.233 9.37416 18.6717C9.5387 18.9489 9.62711 19.2646 9.63046 19.587V19.587C9.63046 20.6435 10.487 21.5 11.5435 21.5H12.7975C13.8505 21.5001 14.7055 20.6491 14.7105 19.5962V19.5962C14.7081 19.088 14.9089 18.6 15.2682 18.2407C15.6275 17.8814 16.1155 17.6807 16.6236 17.6831C16.9452 17.6917 17.2596 17.7798 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1544 20.1476 17.2438V17.2438L20.8067 16.1454C21.0618 15.7075 21.1318 15.186 21.0012 14.6964C20.8706 14.2067 20.5502 13.7894 20.111 13.5367V13.5367C19.6718 13.284 19.3514 12.8666 19.2208 12.3769C19.0902 11.8873 19.1603 11.3658 19.4154 10.928C19.5812 10.6383 19.8214 10.3982 20.111 10.2323V10.2323C21.0161 9.70289 21.3264 8.54349 20.8067 7.63277V7.63277V7.62361Z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
      <Circle
        cx={12.1751}
        cy={11.8891}
        r={2.63616}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
    </Svg>
  );
}

const TAB_ICONS: Record<string, React.ComponentType<TabIconProps>> = {
  home: HomeTabIcon,
  bookmarks: BookmarksTabIcon,
  track: TrackTabIcon,
  settings: SettingsTabIcon,
};

/**
 * Custom bottom navigation bar matching the Figma #F1F6FB bar with 4 verbatim SVG icons
 * and safe-area bottom inset handling.
 */
export function BottomTabBar({
  state,
  descriptors,
  emitter,
  navigateToTab,
  insets,
}: BottomTabBarProps) {
  const paddingBottom = Math.max(insets.bottom, scale(32));

  return (
    <View style={[styles.container, { paddingBottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const color = isFocused ? ThemeColors.tabIconActive : ThemeColors.tabIconInactive;
        const IconComponent = TAB_ICONS[route.name] ?? HomeTabIcon;

        const onPress = () => {
          const event = emitter.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigateToTab(route.key);
          }
        };

        const onLongPress = () => {
          emitter.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel ?? options.title ?? route.name}
            hitSlop={12}
            onPress={onPress}
            onLongPress={onLongPress}
            style={({ pressed }) => [styles.tabItem, pressed && styles.tabItemPressed]}>
            <IconComponent color={color} />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: ThemeColors.surfaceTabBar,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: scale(24),
    paddingHorizontal: scale(40),
  },
  tabItem: {
    width: scale(24),
    height: scale(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemPressed: {
    opacity: 0.7,
  },
});
