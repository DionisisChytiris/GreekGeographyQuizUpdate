import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  PanResponder,
  Alert,
} from "react-native";

const { width, height } = Dimensions.get("window");

// Define the cities and their correct positions
const cities = [
  { name: "New York", correctPosition: { x: width * 0.3, y: height * 0.1 } },
  {
    name: "San Francisco",
    correctPosition: { x: width * 0.7, y: height * 0.5 },
  },
];

const DragAndDropQuiz = () => {
  const [positions, setPositions] = useState(
    cities.map((city, index) => ({
      name: city.name,
      x: (index + 1) * (width / (cities.length + 1)) - 50, // Spaced horizontally at bottom
      y: height - 150, // Bottom of the screen
      isDropped: false,
    }))
  );

  const [mapLayout, setMapLayout] = useState(null);
  const panResponders = useRef({}).current;

  cities.forEach((city, index) => {
    panResponders[city.name] = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        // Update both x and y positions dynamically
        setPositions((prevPositions) =>
          prevPositions.map((p, i) =>
            i === index
              ? {
                  ...p,
                  x: gesture.moveX - 50, // Center the drag
                  y: gesture.moveY - 25, // Center the drag
                }
              : p
          )
        );
        // if (mapLayout) {
        //   setPositions((prevPositions) =>
        //     prevPositions.map((p, i) =>
        //       i === index
        //         ? {
        //             ...p,
        //             x: gesture.moveX - mapLayout.x - 50,
        //             y: gesture.moveY - mapLayout.y - 25,
        //           }
        //         : p
        //     )
        //   );
        // }
      },
      onPanResponderRelease: (_, gesture) => {
        const correctPos = city.correctPosition;
        const dropDistance = 200; // Allowable distance to consider as correct drop

        console.log(
          `${city.name} dropped at x: ${gesture.moveX}, y: ${gesture.moveY}`
        );

        if (
          Math.abs(gesture.moveX - correctPos.x) <= dropDistance &&
          Math.abs(gesture.moveY - correctPos.y) <= dropDistance
        ) {
          setPositions((prevPositions) =>
            prevPositions.map((p, i) =>
              i === index
                ? { ...p, x: correctPos.x, y: correctPos.y, isDropped: true }
                : p
            )
          );
          Alert.alert("Correct!", `You placed ${city.name} correctly.`);
        } else {
          Alert.alert("Wrong!", `You placed ${city.name} in the wrong spot.`);
        }
      },
    });
  });

  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        const { x, y, width, height } = event.nativeEvent.layout;
        setMapLayout({ x, y, width, height });
      }}
    >
      {/* Full-Screen Map Background */}
      <View style={styles.map}>
        {/* Drop Zones */}
        {cities.map((city, index) => (
          <View
            key={city.name}
            style={[
              styles.dropZone,
              {
                left: city.correctPosition.x - 25,
                top: city.correctPosition.y - 25,
              },
            ]}
          ><Text>{city.name}</Text></View>
        ))}

        {/* Draggable Items */}
        {positions.map((pos, index) => (
          <View
            key={pos.name}
            style={[
              styles.draggable,
              {
                left: pos.x -15,
                top: pos.y-20,
              },
            ]}
            {...panResponders[pos.name].panHandlers}
          >
            <Text style={styles.draggableText}>{pos.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DragAndDropQuiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    flex: 1,
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#d3f9d8", // Placeholder for map background
  },
  dropZone: {
    position: "absolute",
    width: 100,
    height: 50,
    borderRadius: 25,
    backgroundColor: "lightgreen",
    borderWidth: 2,
    borderColor: "green",
    paddingLeft: 10,
    justifyContent: 'center'
  },
  draggable: {
    position: "absolute", // Ensure absolute positioning
    width: 100,
    height: 50,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    elevation: 5, // For Android shadow
  },
  draggableText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
