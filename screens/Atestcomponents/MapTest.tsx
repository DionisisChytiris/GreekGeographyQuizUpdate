import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import Svg, { Path, Circle, Rect } from 'react-native-svg';

const countries = {
  US: '#FF5733', // Example country colors
  IN: '#33FF57',
  FR: '#3357FF',
};

const MapTest = () => {
  const [countryColors, setCountryColors] = useState(countries);

  const handleCountryPress = (countryCode: string) => {
    // Example: Toggle the color of a country when tapped
    setCountryColors((prev) => ({
      ...prev,
      [countryCode]: prev[countryCode] === '#FF5733' ? '#33FF57' : '#FF5733',
    }));
  };

  return (
    <View style={styles.container}>
       <Svg height="400" width="400" viewBox="0 0 400 400">
        {/* Country 1 */}
        <Path
          d="M50 50 L150 50 L150 150 L50 150 Z"
          fill="lightblue" // Country 1 fill color
          stroke="black" // Country 1 border color
          strokeWidth="2"
        />

        {/* Country 2 */}
        <Path
          d="M160 50 L260 50 L260 150 L160 150 Z"
          fill="lightgreen" // Country 2 fill color
          stroke="black" // Country 2 border color
          strokeWidth="2"
        />

        {/* Country 3 */}
        <Path
          d="M50 160 L150 160 L150 260 L50 260 Z"
          fill="pink" // Country 3 fill color
          stroke="black" // Country 3 border color
          strokeWidth="2"
        />

        {/* Country 4 */}
        <Path
          d="M160 160 L260 160 L260 260 L160 260 Z"
          fill="yellow" // Country 4 fill color
          stroke="black" // Country 4 border color
          strokeWidth="2"
        />
      </Svg>
      <Text>jeu</Text>
      <Path
          d="M50 150 L150 150 L100 50 Z" // Path data for a triangle
          fill="lightblue" // Fill color of the triangle
          stroke="blue" // Border color
          strokeWidth="2" // Border width
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default MapTest;
