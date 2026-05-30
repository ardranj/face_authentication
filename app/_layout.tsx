import { Stack } from 'expo-router';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}