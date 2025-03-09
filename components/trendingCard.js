import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Card, Text, Badge } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomCard = ({ title, location, address, date, time, image }) => {
  if (!title) return null; // Avoid rendering empty cards

  return (
    <Card style={styles.card}>
      <ImageBackground source={{ uri: image }} style={styles.backgroundImage} imageStyle={{ borderRadius: 12 }}>
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.infoContainer}>
            {/* Date Badge */}
            <View style={styles.dateContainer}>
              <Badge style={styles.badge}>{date.day}</Badge>
              <Text style={styles.badgeText}>{date.month}</Text>
            </View>

            {/* Location Info */}
            <View style={styles.textContainer}>
              <Text style={styles.location}>{location}</Text>
              <Text style={styles.address}>{address}</Text>
            </View>

            {/* Time */}
            <View style={styles.timeContainer}>
              <MaterialCommunityIcons name="clock-outline" size={16} color="#fff" />
              <Text style={styles.time}>{time}</Text>
              <Text style={styles.timezone}>GTM</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: "hidden",
    margin: 10,
    backgroundColor: "#222",
  },
  backgroundImage: {
    width: "100%",
    height: 180,
    justifyContent: "flex-end",
    padding: 15,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay for contrast
    borderRadius: 12,
  },
  content: {
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateContainer: {
    alignItems: "center",
    backgroundColor: "#FF8800",
    padding: 8,
    borderRadius: 8,
  },
  badge: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "transparent",
  },
  badgeText: {
    fontSize: 10,
    color: "#fff",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  location: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  address: {
    fontSize: 12,
    color: "#ccc",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 5,
  },
  timezone: {
    fontSize: 12,
    color: "#ccc",
    marginLeft: 5,
  },
});

export default CustomCard;
