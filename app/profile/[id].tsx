import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Platform } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Colors, layout } from '../../constants/theme';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MOCK_PROFILE = {
  id: '1',
  name: 'Sarah Jenkins',
  role: 'Senior React Developer & UI Architect',
  rate: '$85/hr',
  location: 'San Francisco, CA (Remote)',
  bio: 'Passionate and detail-oriented frontend developer with over 8 years of experience building scalable, accessible, and highly performant web and mobile applications.',
  avatar: 'https://i.pravatar.cc/250?u=sarah',
  stats: {
    jobsCompleted: 42,
    rating: 4.9,
    hoursWorked: 3200,
    onTime: '98%'
  },
  skills: ['React Native', 'TypeScript', 'Expo', 'Redux', 'TailwindCSS']
};

export default function FreelancerProfileScreen() {
  const { id } = useLocalSearchParams();
  const profile = MOCK_PROFILE;

  return (
    <>
      <Stack.Screen options={{ title: profile.name, headerStyle: { backgroundColor: Colors.bgSecondary }, headerTintColor: Colors.textPrimary }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        
        {/* Cover */}
        <View style={styles.coverImage}></View>

        <View style={styles.profileHeader}>
          <Image source={{ uri: profile.avatar }} style={styles.avatar} />
          <View style={styles.onlineBadge} />
        </View>

        <Card style={styles.mainCard}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.role}>{profile.role}</Text>
          
          <View style={styles.metaContainer}>
            <View style={styles.metaRow}>
              <MaterialCommunityIcons name="map-marker" size={16} color={Colors.textSecondary} />
              <Text style={styles.metaText}>{profile.location}</Text>
            </View>
            <View style={styles.metaRow}>
              <MaterialCommunityIcons name="web" size={16} color={Colors.textSecondary} />
              <Text style={[styles.metaText, { color: Colors.accentSecondary }]}>sarahjenkins.dev</Text>
            </View>
          </View>
          
          <View style={styles.actionButtons}>
            <Button fullWidth style={{ flex: 1, marginRight: 12 }}>
              Hire {profile.name.split(' ')[0]}
            </Button>
            <Button variant="outline" style={{ paddingHorizontal: 16 }}>
              <MaterialCommunityIcons name="email-outline" size={20} color={Colors.textPrimary} />
            </Button>
          </View>
        </Card>

        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{profile.stats.jobsCompleted}</Text>
            <Text style={styles.statLabel}>Jobs</Text>
          </View>
          <View style={styles.statBox}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <MaterialCommunityIcons name="star" size={16} color="#ffbd2e" style={{marginRight: 4}} />
              <Text style={styles.statValue}>{profile.stats.rating}</Text>
            </View>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{profile.stats.hoursWorked}</Text>
            <Text style={styles.statLabel}>Hours</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{profile.stats.onTime}</Text>
            <Text style={styles.statLabel}>On-Time</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>About Freelancer</Text>
            <View style={styles.rateBadge}>
              <Text style={styles.rateText}>{profile.rate}</Text>
            </View>
          </View>
          <Text style={styles.bio}>{profile.bio}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Skills</Text>
          <View style={styles.skillsContainer}>
            {profile.skills.map(skill => (
              <View key={skill} style={styles.skillTag}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
  },
  content: {
    paddingBottom: 40,
    ...Platform.select({
       web: layout.container
    })
  },
  coverImage: {
    height: 160,
    backgroundColor: 'rgba(109, 40, 217, 0.2)',
    width: '100%',
  },
  profileHeader: {
    marginTop: -50,
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
    alignSelf: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: Colors.bgPrimary,
    backgroundColor: Colors.bgSecondary,
  },
  onlineBadge: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#27c93f',
    borderWidth: 3,
    borderColor: Colors.bgPrimary,
  },
  mainCard: {
    marginHorizontal: 16,
    marginTop: 0,
    alignItems: 'center',
    padding: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  role: {
    fontSize: 15,
    color: Colors.accentPrimary,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  metaContainer: {
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    paddingBottom: 24,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  actionButtons: {
    flexDirection: 'row',
    width: '100%',
  },
  statsGrid: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    gap: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: Colors.bgCard,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  section: {
    marginHorizontal: 16,
    marginTop: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  rateBadge: {
    backgroundColor: 'rgba(109, 40, 217, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(109, 40, 217, 0.3)',
  },
  rateText: {
    color: Colors.accentPrimary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  bio: {
    color: Colors.textPrimary,
    fontSize: 15,
    lineHeight: 24,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  skillTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: Colors.borderColor,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  skillText: {
    color: Colors.textPrimary,
    fontSize: 14,
  }
});
