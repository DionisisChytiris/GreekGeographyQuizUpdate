import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  PanResponder,
  Animated,
  Alert,
} from "react-native";

const cities = [
  { name: "City1", dropX: 50, dropY: 250 }, 
  { name: "City2", dropX: 250, dropY: 300 },
];

const DragDrop: React.FC = () => {
  const [pan, setPan] = useState(cities.map(() => new Animated.ValueXY()));
  const [mapLayout, setMapLayout] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  const checkDropZone = (cityIndex: number) => {
    if (!mapLayout) {
      Alert.alert("Error", "Map layout not ready.");
      return;
    }

    const { dropX, dropY } = cities[cityIndex];
    const xValue = pan[cityIndex].x.__getValue() + mapLayout.x;
    const yValue = pan[cityIndex].y.__getValue() + mapLayout.y;

    const tolerance = 50;
    const isCorrect =
      Math.abs(xValue - dropX) < tolerance &&
      Math.abs(yValue - dropY) < tolerance;

    if (isCorrect) {
      Alert.alert("Success", `You correctly placed ${cities[cityIndex].name}!`);
    } else {
      Alert.alert("Fail", `Incorrect placement for ${cities[cityIndex].name}`);
    }

    Animated.spring(pan[cityIndex], {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const renderCity = (city: { name: string }, index: number) => {
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan[index].x, dy: pan[index].y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => checkDropZone(index),
    });
  
    return (
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.draggable,
          pan[index].getLayout(),
        //   { left: city.dropX - 0 } 
        ]}
        key={city.name}
      >
        <Text style={styles.draggableText}>{city.name}</Text>
      </Animated.View>
    );
  };
  


  return (
    <View style={styles.container}>
      <View
        style={styles.mapContainer}
        onLayout={(event) => {
          const { x, y, width, height } = event.nativeEvent.layout;
          setMapLayout({ x, y, width, height });
        }}
      >
        <Image
          source={require("../../assets/maps/city.jpg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
        {/* Add green draggable locations */}
        {cities.map((city, index) => (
          <View
            key={city.name}
            style={[
              styles.draggableGreenSpot,
              { left: city.dropX, top: city.dropY },
            ]}
          />
        ))}
      </View>
      <View style={styles.citiesContainer}>{cities.map(renderCity)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  draggable: {
    padding: 10,
    backgroundColor: "rgba(46, 160, 52, 0.8)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#3108fe",
    position: "absolute",
  },
  draggableText: {
    fontWeight: "bold",
    color: "#5419f6",
  },
  draggableGreenSpot: {
    position: "absolute",
    width: 20,
    height: 20,
    backgroundColor: "green",
    borderRadius: 10,
    opacity: 0.8,
  },
  citiesContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    paddingVertical: 20,
  },
});

export default DragDrop;
