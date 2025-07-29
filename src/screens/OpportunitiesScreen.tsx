import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export const OpportunitiesScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const types = [
    { key: 'all', label: 'All' },
    { key: 'gig', label: 'Gigs' },
    { key: 'contest', label: 'Contests' },
    { key: 'mentorship', label: 'Mentorship' },
    { key: 'collaboration', label: 'Collaboration' },
    { key: 'job', label: 'Jobs' },
  ];

  const mockOpportunities = [
    {
      id: '1',
      title: 'Logo Design for Tech Startup',
      type: 'gig',
      description: 'Looking for a creative designer to create a modern logo for our AI-powered education platform.',
      poster: 'TechEdu Inc.',
      location: 'Remote',
      isRemote: true,
      budget: { min: 500, max: 1000, currency: 'USD' },
      deadline: 'March 25, 2024',
      requiredSkills: ['Logo Design', 'Brand Identity', 'Adobe Illustrator'],
      applicants: 8,
      timeAgo: '1 hour ago',
    },
    {
      id: '2',
      title: 'International Photography Contest',
      type: 'contest',
      description: 'Submit your best nature photography for a chance to win $5000 and get featured in National Geographic.',
      poster: 'Nature Photo Society',
      location: 'Global',
      isRemote: true,
      deadline: 'April 15, 2024',
      requiredSkills: ['Photography', 'Nature Photography', 'Photo Editing'],
      applicants: 156,
      timeAgo: '3 hours ago',
    },
    {
      id: '3',
      title: 'Seeking Music Mentor',
      type: 'mentorship',
      description: 'Aspiring music producer looking for an experienced mentor to guide career development and skill improvement.',
      poster: 'Alex Thompson',
      location: 'Los Angeles, CA',
      isRemote: false,
      requiredSkills: ['Music Production', 'Audio Engineering', 'Career Guidance'],
      applicants: 3,
      timeAgo: '1 day ago',
    },
    {
      id: '4',
      title: 'Freelance Content Writer',
      type: 'job',
      description: 'Full-time remote position for creative content writer specializing in technology and lifestyle topics.',
      poster: 'Digital Creative Agency',
      location: 'Remote',
      isRemote: true,
      budget: { min: 50000, max: 70000, currency: 'USD' },
      requiredSkills: ['Content Writing', 'SEO', 'Creative Writing'],
      applicants: 24,
      timeAgo: '2 days ago',
    },
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      gig: '#007AFF',
      contest: '#FF6B35',
      mentorship: '#28A745',
      collaboration: '#8E44AD',
      job: '#FD7E14',
    };
    return colors[type as keyof typeof colors] || '#666';
  };

  const formatBudget = (budget: { min: number; max: number; currency: string }) => {
    if (budget.min === budget.max) {
      return `${budget.currency} ${budget.min.toLocaleString()}`;
    }
    return `${budget.currency} ${budget.min.toLocaleString()} - ${budget.max.toLocaleString()}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Opportunities</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search opportunities..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView horizontal style={styles.typeContainer} showsHorizontalScrollIndicator={false}>
        {types.map((type) => (
          <TouchableOpacity
            key={type.key}
            style={[
              styles.typeButton,
              selectedType === type.key && styles.activeType,
            ]}
            onPress={() => setSelectedType(type.key)}
          >
            <Text
              style={[
                styles.typeText,
                selectedType === type.key && styles.activeTypeText,
              ]}
            >
              {type.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.opportunitiesList}>
        {mockOpportunities.map((opportunity) => (
          <TouchableOpacity key={opportunity.id} style={styles.opportunityCard}>
            <View style={styles.opportunityHeader}>
              <Text style={styles.opportunityTitle}>{opportunity.title}</Text>
              <View style={[styles.typeBadge, { backgroundColor: getTypeColor(opportunity.type) }]}>
                <Text style={styles.typeBadgeText}>{opportunity.type.toUpperCase()}</Text>
              </View>
            </View>
            
            <Text style={styles.opportunityDescription}>{opportunity.description}</Text>
            <Text style={styles.poster}>Posted by {opportunity.poster}</Text>
            
            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Location:</Text>
                <Text style={styles.detailValue}>
                  {opportunity.location} {opportunity.isRemote && '(Remote)'}
                </Text>
              </View>
              
              {opportunity.budget && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Budget:</Text>
                  <Text style={styles.detailValue}>{formatBudget(opportunity.budget)}</Text>
                </View>
              )}
              
              {opportunity.deadline && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Deadline:</Text>
                  <Text style={styles.detailValue}>{opportunity.deadline}</Text>
                </View>
              )}
            </View>
            
            <View style={styles.skillsContainer}>
              <Text style={styles.skillsLabel}>Required Skills:</Text>
              <View style={styles.skillsList}>
                {opportunity.requiredSkills.map((skill, index) => (
                  <View key={index} style={styles.skillTag}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
            
            <View style={styles.opportunityFooter}>
              <Text style={styles.applicantsText}>
                {opportunity.applicants} applicant{opportunity.applicants !== 1 ? 's' : ''}
              </Text>
              <View style={styles.footerRight}>
                <Text style={styles.timeAgo}>{opportunity.timeAgo}</Text>
                <TouchableOpacity style={styles.applyButton}>
                  <Text style={styles.applyButtonText}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>+ Post Opportunity</Text>
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
  typeContainer: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  typeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  activeType: {
    backgroundColor: '#007AFF',
  },
  typeText: {
    fontSize: 14,
    color: '#666',
  },
  activeTypeText: {
    color: 'white',
  },
  opportunitiesList: {
    flex: 1,
    padding: 20,
  },
  opportunityCard: {
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
  opportunityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  opportunityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  typeBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  typeBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  opportunityDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  poster: {
    fontSize: 12,
    color: '#007AFF',
    marginBottom: 12,
  },
  detailsContainer: {
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  detailLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: 'bold',
    minWidth: 70,
  },
  detailValue: {
    fontSize: 12,
    color: '#666',
    flex: 1,
  },
  skillsContainer: {
    marginBottom: 15,
  },
  skillsLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillTag: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 5,
  },
  skillText: {
    fontSize: 12,
    color: '#666',
  },
  opportunityFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  applicantsText: {
    fontSize: 12,
    color: '#666',
  },
  footerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeAgo: {
    fontSize: 12,
    color: '#999',
    marginRight: 15,
  },
  applyButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  applyButtonText: {
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