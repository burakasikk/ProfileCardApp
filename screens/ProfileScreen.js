import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  const [theme, setTheme] = useState('light');
  const currentTheme = COLORS[theme];

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.bg }]}>
      <View style={[styles.card, { backgroundColor: currentTheme.card }]}>
        {/* Profil İkonu */}
        <Ionicons
          name="person-circle-outline"
          size={80}
          color={currentTheme.text}
        />
        
        {/* İsim */}
        <Text style={[styles.name, { color: currentTheme.text }]}>
          Burak Tuğrul Aşık
        </Text>
        
        {/* Rol */}
        <Text style={[styles.role, { color: currentTheme.text }]}>
          Mobil Geliştirici
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    borderRadius: RADII.md,
    alignItems: 'center',
    padding: SPACING.lg,
    // iOS için gölge ayarları
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // Android için gölge ayarı
    elevation: 6,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    marginTop: SPACING.md,
  },
  role: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    marginTop: SPACING.sm,
    opacity: 0.7,
  },
});