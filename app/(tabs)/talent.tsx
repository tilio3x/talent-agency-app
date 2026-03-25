import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, Platform } from 'react-native';
import { Colors, layout } from '../../constants/theme';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MOCK_TALENT = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Senior React Developer',
    rate: '$85/hr',
    location: 'Remote (US)',
    rating: 4.9,
    reviews: 124,
    skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
    availability: 'Available Now',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    topRated: true
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Full Stack Engineer',
    rate: '$95/hr',
    location: 'Remote (Global)',
    rating: 4.8,
    reviews: 89,
    skills: ['Vue.js', 'Python', 'Django', 'PostgreSQL'],
    availability: 'In 2 weeks',
    avatar: 'https://i.pravatar.cc/150?u=david',
    topRated: false
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'DevOps Specialist',
    rate: '$110/hr',
    location: 'Remote (EU)',
    rating: 5.0,
    reviews: 210,
    skills: ['Kubernetes', 'Docker', 'CI/CD', 'Terraform'],
    availability: 'Available Now',
    avatar: 'https://i.pravatar.cc/150?u=elena',
    topRated: true
  }
];

export default function TalentDirectoryScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTalent = MOCK_TALENT.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTalent}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Find the Perfect{'\n'}<Text style={{color: Colors.accentPrimary}}>IT Professional</Text></Text>
            
            <View style={styles.searchContainer}>
              <MaterialCommunityIcons name="magnify" size={24} color={Colors.textSecondary} style={styles.searchIcon} />
              <TextInput 
                style={styles.searchInput}
                placeholder="Search by role, skill, or name..."
                placeholderTextColor={Colors.textSecondary}
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
            </View>
            
            <View style={styles.filterRow}>
              <Button variant="outline" style={styles.filterBtn}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialCommunityIcons name="filter-variant" size={16} color={Colors.textPrimary} style={{marginRight: 6}} />
                  <Text style={{color: Colors.textPrimary, fontWeight: '600'}}>Filters</Text>
                </View>
              </Button>
              <Text style={styles.resultsCount}>{filteredTalent.length} professionals</Text>
            </View>
          </View>
        )}
        renderItem={({ item }) => (
          <Card style={styles.talentCard}>
            {item.topRated && (
              <View style={styles.topRatedBadge}>
                <MaterialCommunityIcons name="shield-star" size={12} color="#fff" />
                <Text style={styles.topRatedText}>Top Rated</Text>
              </View>
            )}
            
            <View style={styles.cardHeader}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.talentInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.role}>{item.role}</Text>
                
                <View style={styles.metaRow}>
                  <View style={styles.metaItem}>
                    <MaterialCommunityIcons name="map-marker-outline" size={14} color={Colors.textSecondary} />
                    <Text style={styles.metaText}>{item.location}</Text>
                  </View>
                  <View style={[styles.metaItem, { marginLeft: 12 }]}>
                    <MaterialCommunityIcons name="star" size={14} color="#ffbd2e" />
                    <Text style={styles.metaText}>{item.rating} ({item.reviews})</Text>
                  </View>
                </View>
              </View>
            </View>
            
            <View style={styles.skillsContainer}>
              {item.skills.map(skill => (
                <View key={skill} style={styles.skillTag}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
            
            <View style={styles.cardFooter}>
              <View>
                <Text style={styles.rate}>{item.rate}</Text>
                <Text style={styles.availability}>{item.availability}</Text>
              </View>
              <Button variant="outline" style={styles.viewProfileBtn}>
                View Profile
              </Button>
            </View>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
  },
  listContent: {
    padding: 20,
    paddingTop: 32,
    ...Platform.select({
       web: layout.container
    })
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 24,
    lineHeight: 36,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgCard,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    color: Colors.textPrimary,
    fontSize: 16,
    height: '100%',
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  filterBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  resultsCount: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  talentCard: {
    marginBottom: 20,
    padding: 20,
    paddingTop: 24,
    position: 'relative',
  },
  topRatedBadge: {
    position: 'absolute',
    top: -1,
    right: -1,
    backgroundColor: Colors.accentPrimary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 14,
  },
  topRatedText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    marginLeft: 4,
    textTransform: 'uppercase',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
    borderWidth: 2,
    borderColor: 'rgba(109, 40, 217, 0.5)',
  },
  talentInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  role: {
    color: Colors.accentSecondary,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    color: Colors.textSecondary,
    fontSize: 13,
    marginLeft: 4,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  skillTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  skillText: {
    color: '#e2e8f0',
    fontSize: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
  },
  rate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  availability: {
    fontSize: 12,
    color: Colors.accentPrimary,
    marginTop: 2,
    fontWeight: '500',
  },
  viewProfileBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  }
});
