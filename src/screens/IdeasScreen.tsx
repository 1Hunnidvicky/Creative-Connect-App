import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export const IdeasScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'art', label: 'Art' },
    { key: 'music', label: 'Music' },
    { key: 'design', label: 'Design' },
    { key: 'writing', label: 'Writing' },
    { key: 'film', label: 'Film' },
  ];

  const mockIdeas = [
    {
      id: '1',
      title: 'Collaborative Digital Art Gallery',
      description: 'Create a virtual gallery where artists from different mediums can showcase their work together in themed exhibitions.',
      author: 'Sarah Chen',
      category: 'art',
      upvotes: 24,
      downvotes: 2,
      comments: 8,
      tags: ['digital art', 'collaboration', 'virtual gallery'],
      timeAgo: '2 hours ago',
    },
    {
      id: '2',
      title: 'Music & Poetry Fusion Project',
      description: 'Pair musicians with poets to create original compositions that blend spoken word with instrumental music.',
      author: 'Marcus Johnson',
      category: 'music',
      upvotes: 18,
      downvotes: 1,
      comments: 12,
      tags: ['music', 'poetry', 'collaboration'],
      timeAgo: '5 hours ago',
    },
    {
      id: '3',
      title: 'Sustainable Design Challenge',
      description: 'Monthly design challenges focused on creating eco-friendly product concepts and solutions.',
      author: 'Emma Rodriguez',
      category: 'design',
      upvotes: 31,
      downvotes: 0,
      comments: 15,
      tags: ['sustainability', 'product design', 'environment'],
      timeAgo: '1 day ago',
    },
  ];

  const handleVote = (ideaId: string, voteType: 'up' | 'down') => {
    // TODO: Implement voting logic
    console.log(`Voted ${voteType} on idea ${ideaId}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Idea Hub</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search ideas..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView horizontal style={styles.categoryContainer} showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.key}
            style={[
              styles.categoryButton,
              selectedCategory === category.key && styles.activeCategory,
            ]}
            onPress={() => setSelectedCategory(category.key)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.key && styles.activeCategoryText,
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.ideasList}>
        {mockIdeas.map((idea) => (
          <TouchableOpacity key={idea.id} style={styles.ideaCard}>
            <View style={styles.ideaHeader}>
              <Text style={styles.ideaTitle}>{idea.title}</Text>
              <Text style={styles.timeAgo}>{idea.timeAgo}</Text>
            </View>
            
            <Text style={styles.ideaDescription}>{idea.description}</Text>
            <Text style={styles.author}>by {idea.author}</Text>
            
            <View style={styles.tagsContainer}>
              {idea.tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>#{tag}</Text>
                </View>
              ))}
            </View>
            
            <View style={styles.ideaFooter}>
              <View style={styles.votingContainer}>
                <TouchableOpacity 
                  style={styles.voteButton}
                  onPress={() => handleVote(idea.id, 'up')}
                >
                  <Text style={styles.voteText}>↑ {idea.upvotes}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.voteButton}
                  onPress={() => handleVote(idea.id, 'down')}
                >
                  <Text style={styles.voteText}>↓ {idea.downvotes}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.commentsButton}>
                <Text style={styles.commentsText}>💬 {idea.comments} comments</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>+ Share Idea</Text>
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
  categoryContainer: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  activeCategory: {
    backgroundColor: '#007AFF',
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
  },
  activeCategoryText: {
    color: 'white',
  },
  ideasList: {
    flex: 1,
    padding: 20,
  },
  ideaCard: {
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
  ideaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  ideaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  timeAgo: {
    fontSize: 12,
    color: '#999',
  },
  ideaDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  author: {
    fontSize: 12,
    color: '#007AFF',
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 5,
  },
  tagText: {
    fontSize: 12,
    color: '#666',
  },
  ideaFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  votingContainer: {
    flexDirection: 'row',
  },
  voteButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  voteText: {
    fontSize: 14,
    color: '#666',
    fontWeight: 'bold',
  },
  commentsButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  commentsText: {
    fontSize: 14,
    color: '#666',
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