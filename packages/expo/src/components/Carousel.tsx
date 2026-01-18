import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
} from "react-native";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import carouselSpec from "@crossui/core/components/carousel.json";
import colors from "@crossui/core/tokens/colors.json";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export interface CarouselProps {
  children: React.ReactNode[];
  orientation?: "horizontal" | "vertical";
  showButtons?: boolean;
  style?: ViewStyle;
}

export function Carousel({
  children,
  orientation = "horizontal",
  showButtons = true,
  style,
}: CarouselProps) {
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / slideSize);
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (index >= 0 && index < children.length) {
      flatListRef.current?.scrollToIndex({ index, animated: true });
    }
  };

  return (
    <View style={[styles.container, style]}>
      <FlatList
        ref={flatListRef}
        data={children}
        keyExtractor={(_, index) => index.toString()}
        horizontal={orientation === "horizontal"}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        renderItem={({ item }) => <View style={styles.slide}>{item}</View>}
      />

      {showButtons && (
        <>
          <TouchableOpacity
            style={[styles.button, styles.prevButton]}
            onPress={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
          >
            <ChevronLeft
              size={24}
              color={
                activeIndex === 0 ? colors.mutedForeground : colors.foreground
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.nextButton]}
            onPress={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === children.length - 1}
          >
            <ChevronRight
              size={24}
              color={
                activeIndex === children.length - 1
                  ? colors.mutedForeground
                  : colors.foreground
              }
            />
          </TouchableOpacity>
        </>
      )}

      <View style={styles.pagination}>
        {children.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
  },
  slide: {
    width: SCREEN_WIDTH - 32, // Accommodate padding
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    top: "50%",
    marginTop: -20,
    width: 40,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  prevButton: {
    left: 8,
  },
  nextButton: {
    right: 8,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.muted,
  },
  activeDot: {
    backgroundColor: colors.primary,
    width: 20,
  },
});
