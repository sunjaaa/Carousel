import React, { useRef } from "react";
import { Animated } from "react-native";

const Carousel = ({
  data,
  renderItem,
  offset,
  pageWidth,
  gap,
  onChangeIndex,
  scrollX,
  ...props
}) => {
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: true }
  );

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (onChangeIndex) {
      onChangeIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
    waitForInteraction: true,
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig,
      onViewableItemsChanged,
    },
  ]).current;

  return (
    <Animated.FlatList
      contentContainerStyle={{
        paddingHorizontal: (offset + gap) / 2,
      }}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      onScroll={onScroll}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs}
      scrollEventThrottle={16}
      snapToInterval={pageWidth + gap}
      snapToAlignment="center"
      decelerationRate="fast"
      horizontal
      {...props}
      disableIntervalMomentum={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
    />
  );
};

export default Carousel;
