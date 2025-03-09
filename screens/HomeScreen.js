import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import SectionHeader from '../components/sectionHeader';
import AppointmentCard from '../components/appointmentCards';
import appointments from '../data/appointments';
import { ScrollView } from 'react-native-web';
import TrendingCard from '../components/trendingCard';
import CustomCard from '../components/trendingCard';

export default function HomeScreen() {
  const Trending = [
    {
      id: 1,
      title: "Yoga Master Class",
      location: "BLO Gym",
      address: "Kampala - Masaka Rd, Kyengera, Rotam Plaza, Room 241",
      date: { day: "26", month: "TUE" },
      time: "20:00",
      image: "https://source.unsplash.com/400x300/?yoga,meditation",
    },
  ];


    return (
        <View style={{ padding: 16, }}>
          {/* appointment section */}
          <View>
            <SectionHeader
              heading={"My Appointments"}
            />
            <ScrollView horizontal style={{ flex: 1, flexDirection: "row" }}>
              { appointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  {...appointment}
                />
              ))}
            </ScrollView>
          </View>
          <View>
            <SectionHeader
              heading={"Trending"}
            />
            <ScrollView horizontal style={{ }}>
              {Trending.map((item) => (
                <CustomCard key={item.id} {...item} />
              ))}
            </ScrollView>
          </View>
        </View>
    );
}

const styles = StyleSheet({
  container: {
    flex: 1,

  }
})


