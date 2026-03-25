import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, ScrollView, Platform } from 'react-native';
import { Colors, layout } from '../../constants/theme';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MOCK_JOBS = [
  {
    id: '1',
    title: 'Senior Frontend Developer for FinTech Dashboard',
    agency: 'FinTech Integrations LLC',
    type: 'Contract (6 months)',
    budget: '$80 - $110 / hr',
    posted: '2 hours ago',
    skills: ['React', 'TypeScript', 'Redux'],
    description: 'We are looking for an experienced frontend developer to lead the architecture and development of our new enterprise financial dashboard.',
    bids: 12
  },
  {
    id: '2',
    title: 'Cloud Infrastructure Architect',
    agency: 'CloudScale Enterprises',
    type: 'Full-time',
    budget: '$140k - $180k / yr',
    posted: '5 hours ago',
    skills: ['AWS', 'Terraform', 'Kubernetes'],
    description: 'Seeking a seasoned cloud architect to securely migrate our legacy monolithic systems to a scalable microservices architecture on AWS.',
    bids: 8
  }
];

export default function JobBoardScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const filteredJobs = MOCK_JOBS.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredJobs}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Discover{'\n'}<Text style={{color: Colors.accentSecondary}}>Premium IT Jobs</Text></Text>
            
            <View style={styles.searchContainer}>
              <MaterialCommunityIcons name="magnify" size={24} color={Colors.textSecondary} style={styles.searchIcon} />
              <TextInput 
                style={styles.searchInput}
                placeholder="Search jobs by title or skill..."
                placeholderTextColor={Colors.textSecondary}
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
            </View>
          </View>
        )}
        renderItem={({ item }) => (
          <Card style={[styles.jobCard, selectedJob === item.id && styles.activeCard]}>
            <View style={styles.jobCardHeader}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.agencyRow}>
                <MaterialCommunityIcons name="office-building" size={16} color={Colors.accentPrimary} />
                <Text style={styles.agency}>{item.agency}</Text>
              </View>
            </View>
            
            <View style={styles.metaContainer}>
              <View style={styles.metaTag}>
                <MaterialCommunityIcons name="currency-usd" size={14} color={Colors.accentSecondary} />
                <Text style={styles.metaTagText}>{item.budget}</Text>
              </View>
              <View style={styles.metaTag}>
                <MaterialCommunityIcons name="briefcase-outline" size={14} color={Colors.accentSecondary} />
                <Text style={styles.metaTagText}>{item.type}</Text>
              </View>
              <View style={styles.metaTag}>
                <MaterialCommunityIcons name="clock-outline" size={14} color={Colors.accentSecondary} />
                <Text style={styles.metaTagText}>{item.posted}</Text>
              </View>
            </View>

            <Text style={styles.description}>{item.description}</Text>
            
            <View style={styles.skillsContainer}>
              {item.skills.map(skill => (
                <View key={skill} style={styles.skillTag}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>

            <View style={styles.footer}>
              <Text style={styles.bidsText}>
                <Text style={{color: Colors.accentPrimary, fontWeight: 'bold'}}>{item.bids}</Text> freelancers bidding
              </Text>
              <Button 
                variant={selectedJob === item.id ? "secondary" : "primary"} 
                style={styles.bidBtn}
                onPress={() => setSelectedJob(item.id === selectedJob ? null : item.id)}
              >
                {selectedJob === item.id ? "Bidding..." : "Place Bid"}
              </Button>
            </View>

            {selectedJob === item.id && (
              <View style={styles.bidPanel}>
                <Text style={styles.panelTitle}>Submit Proposal</Text>
                <TextInput 
                  style={styles.input} 
                  placeholder="Your Proposed Rate (e.g. $85 / hr)" 
                  placeholderTextColor={Colors.textSecondary} 
                />
                <TextInput 
                  style={[styles.input, styles.textArea]} 
                  placeholder="Cover Letter / Pitch" 
                  placeholderTextColor={Colors.textSecondary} 
                  multiline
                  numberOfLines={4}
                />
                <Button fullWidth onPress={() => alert('Bid submitted!')} style={{marginTop: 8}}>
                  Submit Bid
                </Button>
              </View>
            )}
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
  jobCard: {
    marginBottom: 20,
    padding: 24,
  },
  activeCard: {
    borderColor: 'rgba(109, 40, 217, 0.5)',
    borderWidth: 1,
  },
  jobCardHeader: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  agencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agency: {
    color: Colors.textSecondary,
    fontSize: 14,
    marginLeft: 6,
  },
  metaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  metaTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  metaTagText: {
    color: Colors.textPrimary,
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 6,
  },
  description: {
    color: Colors.textSecondary,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
  skillTag: {
    backgroundColor: 'rgba(109, 40, 217, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(109, 40, 217, 0.3)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  skillText: {
    color: '#e2e8f0',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
  },
  bidsText: {
    color: Colors.textSecondary,
    fontSize: 13,
  },
  bidBtn: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  bidPanel: {
    marginTop: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: 'rgba(109, 40, 217, 0.3)',
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 16,
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: Colors.textPrimary,
    fontSize: 15,
    marginBottom: 16,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  }
});
