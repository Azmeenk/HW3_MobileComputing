import React, { useState, useEffect } from "react";
import { AppState, StyleSheet, Text, View } from "react-native";

const Home = () => {
  const [showcolor, setAppState] = useState("active");

  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      setAppState(nextAppState);
    };

    // Add event listener for app state changes
    AppState.addEventListener("change", handleAppStateChange);

    return () => {
      // Clean up event listener
      AppState.removeEventListener("change", handleAppStateChange);
    };
    r;
  }, []);

  // Function to get background color based on app state
  const getBackgroundColor = () => {
    switch (showcolor) {
      case "active":
        return "#3a5a40";
      case "background":
        return "#bc6c25";
      case "inactive":
        return "#fb6f92";
      case "paused":
        return "#c1121f";
      case "stopped":
        return "#ffc300";
      default:
        return "#d4a373";
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <Text style={styles.text}>Current App State: {showcolor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default Home;
