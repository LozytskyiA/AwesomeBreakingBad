export const IMAGES = {
  opacityInfoBg: require('../assets/images/user_info_opacity.png'),
  season1: require('../assets/images/season_1.jpeg'),
  season2: require('../assets/images/season_2.png'),
  season3: require('../assets/images/season_3.jpeg'),
  season4: require('../assets/images/season_4.jpeg'),
  season5: require('../assets/images/season_5.png'),
} as const;

export type TImages = keyof typeof IMAGES;
