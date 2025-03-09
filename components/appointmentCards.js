import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Card, Text, IconButton } from "react-native-paper";

const AppointmentCard = ({ title, coach, phone, time, date, status, image }) => {
  return (
    <Card style={styles.card}>
      <Card.Title
        title={title}
        subtitle={`By ${coach}`}
        left={(props) => <Avatar.Image {...props} source={{ uri: image }} />}
        right={(props) => <IconButton {...props} icon="dots-vertical" />}
      />
      <Card.Content>
        <Text style={styles.phone}>{phone}</Text>
        <Text style={styles.contact}>Contact</Text>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.date}>{date}</Text>
      </Card.Content>
      <Card.Actions>
        <Text style={styles.status}>{status}</Text>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
  phone: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contact: {
    color: "blue",
  },
  time: {
    fontSize: 14,
    color: "#666",
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
  status: {
    color: "orange",
    fontWeight: "bold",
    marginLeft: "auto",
  },
});

export default AppointmentCard;
