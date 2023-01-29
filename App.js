import React, { useRef, useState } from "react";
import { Animated, SafeAreaView } from "react-native";

import Carousel from "./src/components/Carousel";
import { base } from "./src/constant";

const data = [
  {
    id: 1,
    imgUri:
      "https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-600w-1725825019.jpg",
  },
  {
    id: 2,
    imgUri:
      "https://www.shutterstock.com/image-photo/canyon-view-summer-colorful-landscape-600w-2148937449.jpg",
  },
  {
    id: 3,
    imgUri:
      "https://www.shutterstock.com/image-vector/golden-scene-light-rays-effect-600w-2104400996.jpg",
  },
  {
    id: 4,
    imgUri:
      "https://www.shutterstock.com/image-photo/polar-lights-norway-tromso-600w-1913154091.jpg",
  },
  {
    id: 5,
    imgUri:
      "https://www.shutterstock.com/image-vector/snow-red-background-christmas-snowy-600w-1708651111.jpg",
  },
  {
    id: 6,
    imgUri:
      "https://www.shutterstock.com/image-photo/cracks-on-surface-blue-ice-600w-655427254.jpg",
  },
];

const width = base.dimensdion.SCREEN_WIDTH;
const imgHeight = base.dimensdion.IMAGE_HEIGHT;

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItemHandler = ({ item, index }) => {
    return (
      <SafeAreaView>
        <Animated.Image
          source={{ uri: item.imgUri }}
          style={{ height: imgHeight, width: width }}
        />
      </SafeAreaView>
    );
  };

  return (
    <Carousel
      data={data}
      renderItem={renderItemHandler}
      onChangeIndex={setCurrentIndex}
      scrollX={scrollX}
      pageWidth={width}
      bounces={false}
      offset={0}
      gap={0}
    />
  );
};

export default App;
