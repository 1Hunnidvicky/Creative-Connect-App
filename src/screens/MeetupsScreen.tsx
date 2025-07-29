import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export const MeetupsScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'virtual', label: 'Virtual' },
    { key: 'inPerson', label: 'In Person' },
    { key: 'today', label: 'Today' },
    { key: 'thisWeek', label: 'This Week' },
  ];

  const mockMeetups = [
    {
      id: '1',
      title: 'Creative Photography Workshop',
      date: 'March 15, 2024',
      time: '2:00 PM',
      location: 'Downtown Art Center',
      isVirtual: false,
      attendees: 12,
      maxAttendees: 20,
      creativeFields: ['Photography', 'Visual Arts'],
    },
    {
      id: '2',
      title: 'Virtual Music Collaboration Session',
      date: 'March 16, 2024',
      time: '7:00 PM',
      location: 'Online',
      isVirtual: true,
      attendees: 8,
      maxAttendees: 15,
      creativeFields: ['Music', 'Audio Production'],
    },
    {
      id: '3',
      title: 'UI/UX Design Networking',
      date: 'March 18, 2024',
      time: '6:00 PM',
      location: 'Tech Hub Cafe',
      isVirtual: false,
      attendees: 15,
      maxAttendees: 25,
      creativeFields: ['Design', 'Digital Art'],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Creative Meetups</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search meetups..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView horizontal style={styles.filterContainer} showsHorizontalScrollIndicator={false}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter.key}
            style={[
              styles.filterButton,
              selectedFilter === filter.key && styles.activeFilter,
            ]}
            onPress={() => setSelectedFilter(filter.key)}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === filter.key && styles.activeFilterText,
              ]}
            >
              {filter.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.meetupsList}>
        {mockMeetups.map((meetup) => (
          <TouchableOpacity key={meetup.id} style={styles.meetupCard}>
            <View style={styles.meetupHeader}>
              <Text style={styles.meetupTitle}>{meetup.title}</Text>
              <View style={[styles.statusBadge, meetup.isVirtual ? styles.virtualBadge : styles.inPersonBadge]}>
                <Text style={styles.statusText}>
                  {meetup.isVirtual ? 'Virtual' : 'In Person'}
                </Text>
              </View>
            </View>
            
            <Text style={styles.meetupDate}>{meetup.date} at {meetup.time}</Text>
            <Text style={styles.meetupLocation}>{meetup.location}</Text>
            
            <View style={styles.fieldsContainer}>
              {meetup.creativeFields.map((field, index) => (
                <View key={index} style={styles.fieldTag}>
                  <Text style={styles.fieldText}>{field}</Text>
                </View>
              ))}
            </View>
            
            <View style={styles.meetupFooter}>
              <Text style={styles.attendeesText}>
                {meetup.attendees}/{meetup.maxAttendees} attendees
              </Text>
              <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Join</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>+ Create Meetup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  filterContainer: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  activeFilter: {
    backgroundColor: '#007AFF',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
  },
  activeFilterText: {
    color: 'white',
  },
  meetupsList: {
    flex: 1,
    padding: 20,
  },
  meetupCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  meetupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  meetupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  virtualBadge: {
    backgroundColor: '#e3f2fd',
  },
  inPersonBadge: {
    backgroundColor: '#e8f5e8',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  meetupDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  meetupLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  fieldsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  fieldTag: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 5,
  },
  fieldText: {
    fontSize: 12,
    color: '#666',
  },
  meetupFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  attendeesText: {
    fontSize: 14,
    color: '#666',
  },
  joinButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  joinButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  createButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  createButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});