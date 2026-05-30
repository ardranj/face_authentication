import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors } from '../constants/colors';

export default function FaceScan() {
  const [status] = useState('Ready to Scan');
  const [model] = useState('EdgeFace v3.2');
  const [accuracy] = useState('85%');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scanCard}>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>
            {status}
          </Text>
        </View>

        <View style={styles.scanFrame}>
          <View style={styles.cornerTL} />
          <View style={styles.cornerTR} />
          <View style={styles.cornerBL} />
          <View style={styles.cornerBR} />

          <Ionicons
            name="radio-button-on"
            size={22}
            color={Colors.cyan}
          />
        </View>

        <View style={styles.modelCard}>
          <View>
            <Text style={styles.label}>
              AI Model
            </Text>

            <Text style={styles.value}>
              {model}
            </Text>
          </View>

          <View>
            <Text style={styles.label}>
              Accuracy
            </Text>

            <Text style={styles.value}>
              {accuracy}
            </Text>
          </View>
        </View>
      </View>

      <Text style={styles.title}>
        Face Authentication
      </Text>

      <Text style={styles.subtitle}>
        Position your face within the frame
        to begin verification
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push('/liveness')
        }
      >
        <Text style={styles.buttonText}>
          Start Authentication
        </Text>
      </TouchableOpacity>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          Secure & Private
        </Text>

        <Text style={styles.infoText}>
          All biometric data is processed
          locally on your device.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },

  scanCard: {
    backgroundColor: Colors.card,
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },

  statusBadge: {
    alignSelf: 'center',
    backgroundColor: 'rgba(0,255,153,.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: Colors.green,
    fontWeight: '600',
  },

  scanFrame: {
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    position: 'relative',
  },

  cornerTL: {
    position: 'absolute',
    top: 40,
    left: 40,
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: Colors.cyan,
  },

  cornerTR: {
    position: 'absolute',
    top: 40,
    right: 40,
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: Colors.cyan,
  },

  cornerBL: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: Colors.cyan,
  },

  cornerBR: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: Colors.cyan,
  },

  modelCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#082538',
    padding: 12,
    borderRadius: 12,
  },

  label: {
    color: '#999',
    fontSize: 12,
  },

  value: {
    color: Colors.cyan,
    fontWeight: 'bold',
  },

  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
  },

  subtitle: {
    color: '#AAA',
    textAlign: 'center',
    marginTop: 10,
  },

  button: {
    backgroundColor: Colors.cyan,
    marginTop: 30,
    height: 58,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },

  infoCard: {
    backgroundColor: Colors.card,
    padding: 16,
    borderRadius: 16,
    marginTop: 25,
  },

  infoTitle: {
    color: Colors.green,
    fontWeight: 'bold',
  },

  infoText: {
    color: '#AAA',
    marginTop: 10,
  },
});