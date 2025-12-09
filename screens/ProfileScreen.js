import { View, Text, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  const [theme, setTheme] = useState('light');
  const currentTheme = COLORS[theme];

  // Ekran genişliğini alıyoruz
  const { width } = useWindowDimensions();
  // Genişlik 500'den büyükse "Büyük Ekran" kabul ediyoruz
  const isLargeScreen = width > 500;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.bg }]}>
      <Pressable onPress={toggleTheme} style={styles.themeToggle}>
        <Ionicons
          name={theme === 'light' ? 'moon' : 'sunny'}
          size={28}
          color={currentTheme.text}
        />
      </Pressable>

      <View style={[
        styles.card,
        {
          backgroundColor: currentTheme.card,
          // Ekran büyükse daha fazla padding ve daha dar genişlik (%60), küçükse tam tersi
          width: isLargeScreen ? '60%' : '85%',
          padding: isLargeScreen ? SPACING.xl : SPACING.lg,
        }
      ]}>
        <Ionicons
          name="person-circle-outline"
          // İkon boyutu büyük ekranda daha büyük (100), küçükte (80)
          size={isLargeScreen ? 100 : 80}
          color={currentTheme.text}
        />
        <Text style={[styles.name, { color: currentTheme.text }]}>
          Ahmet Yılmaz
        </Text>
        <Text style={[styles.role, { color: currentTheme.text }]}>
          Mobil Geliştirici
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.likeButton,
            { backgroundColor: pressed ? '#e63946' : '#ff6b6b' }
          ]}
          onPress={() => console.log('Profil Beğenildi!')}
        >
          <Ionicons name="heart" size={24} color="#fff" />
          <Text style={styles.likeText}>Beğen</Text>
        </Pressable>
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
  themeToggle: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: SPACING.sm,
  },
  card: {
    // Sabit width ve padding buradan kaldırıldı, yukarıda dinamik veriliyor
    borderRadius: RADII.md,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
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
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 50,
    marginTop: SPACING.md,
  },
  likeText: {
    color: '#fff',
    fontFamily: FONTS.bold,
    fontSize: 16,
    marginLeft: SPACING.sm,
  },
});