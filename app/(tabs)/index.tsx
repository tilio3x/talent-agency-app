import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, layout } from '../../constants/theme';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LandingScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.heroSection}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>🚀 The Future of IT Talent</Text>
        </View>
        <Text style={styles.title}>
          Connect with{'\n'}
          <Text style={styles.gradientText}>Premium</Text>{'\n'}
          IT Professionals
        </Text>
        <Text style={styles.subtitle}>
          AuraTalent unites top-tier freelancers with industry-leading agencies. Find your next project or hire today.
        </Text>
        
        <View style={styles.actions}>
          <Button fullWidth onPress={() => router.push('/talent')} style={{ marginBottom: 16 }}>
            Search Talent
          </Button>
          <Button fullWidth variant="secondary" onPress={() => router.push('/jobs')}>
            Find Work
          </Button>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>10k+</Text>
            <Text style={styles.statLabel}>Pros</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>500+</Text>
            <Text style={styles.statLabel}>Agencies</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>$2M+</Text>
            <Text style={styles.statLabel}>Paid Fast</Text>
          </View>
        </View>
      </View>

      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Why Choose AuraTalent?</Text>
        
        <Card style={styles.featureCard}>
          <View style={styles.iconWrapper}>
            <MaterialCommunityIcons name="shield-check" size={32} color={Colors.accentPrimary} />
          </View>
          <Text style={styles.featureTitle}>Curated Talent Pool</Text>
          <Text style={styles.featureText}>Every professional passes a rigorous technical assessment and interview.</Text>
        </Card>

        <Card style={styles.featureCard}>
          <View style={styles.iconWrapper}>
            <MaterialCommunityIcons name="briefcase-account" size={32} color={Colors.accentPrimary} />
          </View>
          <Text style={styles.featureTitle}>Premium Opportunities</Text>
          <Text style={styles.featureText}>Access exclusive IT contracts from leading tech companies directly.</Text>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
  },
  content: {
    padding: 24,
    ...layout.container,
  },
  heroSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  badge: {
    backgroundColor: 'rgba(59, 130, 246, 0.15)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.3)',
  },
  badgeText: {
    color: Colors.accentSecondary,
    fontWeight: '600',
    fontSize: 14,
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 48,
  },
  gradientText: {
    color: Colors.accentPrimary,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  actions: {
    width: '100%',
    marginBottom: 48,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 32,
    borderTopWidth: 1,
    borderTopColor: Colors.borderColor,
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  statLabel: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 6,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  featuresSection: {
    paddingTop: 48,
    paddingBottom: 60,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: 32,
  },
  featureCard: {
    marginBottom: 20,
    alignItems: 'center',
  },
  iconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: 'rgba(109, 40, 217, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(109, 40, 217, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 12,
    textAlign: 'center',
  },
  featureText: {
    fontSize: 15,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  }
});
