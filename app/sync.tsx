import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors } from '../constants/colors';

export default function SyncScreen() {
  const [server] = useState({
    name: 'AWS Cloud Server',
    status: 'Offline',
    endpoint: 'api-auth.nhai.gov.in',
    lastSync: '2 hours ago',
  });

  const [stats] = useState({
    pending: 5,
    synced: 69,
    encrypted: 256,
  });

  const [uploads] = useState([
    {
      title: 'Face Verification',
      time: '10:45 AM',
      size: '2.3 MB',
    },
    {
      title: 'Attendance Record',
      time: '10:30 AM',
      size: '0.5 MB',
    },
    {
      title: 'Face Verification',
      time: '9:15 AM',
      size: '2.1 MB',
    },
    {
      title: 'Liveness Check',
      time: '9:10 AM',
      size: '1.8 MB',
    },
    {
      title: 'GPS Data',
      time: '8:45 AM',
      size: '0.2 MB',
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}

        <Text style={styles.title}>
          Sync & Storage
        </Text>

        <Text style={styles.subtitle}>
          Manage offline data
        </Text>

        {/* Cloud Card */}

        <View style={styles.serverCard}>
          <View style={styles.serverLeft}>
            <View style={styles.iconBox}>
              <Ionicons
                name="cloud-offline-outline"
                size={24}
                color={Colors.green}
              />
            </View>

            <View>
              <Text
                style={styles.serverTitle}
              >
                {server.name}
              </Text>

              <Text
                style={styles.serverEndpoint}
              >
                {server.endpoint}
              </Text>

              <Text
                style={styles.serverEndpoint}
              >
                {server.lastSync}
              </Text>
            </View>
          </View>

          <View style={styles.offlineBadge}>
            <Text
              style={styles.offlineText}
            >
              Offline
            </Text>
          </View>
        </View>

        {/* Stats */}

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Ionicons
              name="server-outline"
              size={22}
              color={Colors.cyan}
            />

            <Text
              style={styles.statValue}
            >
              {stats.pending}
            </Text>

            <Text
              style={styles.statLabel}
            >
              Pending
            </Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons
              name="cloud-upload-outline"
              size={22}
              color={Colors.cyan}
            />

            <Text
              style={styles.statValue}
            >
              {stats.synced}
            </Text>

            <Text
              style={styles.statLabel}
            >
              MB Total
            </Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons
              name="shield-checkmark-outline"
              size={22}
              color={Colors.green}
            />

            <Text
              style={styles.statValue}
            >
              {stats.encrypted}
            </Text>

            <Text
              style={styles.statLabel}
            >
              Encrypted
            </Text>
          </View>
        </View>

        {/* Sync Button */}

        <TouchableOpacity
          style={styles.syncButton}
        >
          <Ionicons
            name="sync-outline"
            size={20}
            color="white"
          />

          <Text
            style={styles.syncText}
          >
            Sync All Data
          </Text>
        </TouchableOpacity>

        {/* Purge Button */}

        <TouchableOpacity
          style={styles.deleteButton}
        >
          <Ionicons
            name="trash-outline"
            size={18}
            color="#FF5F7A"
          />

          <Text
            style={styles.deleteText}
          >
            Purge Local Data
          </Text>
        </TouchableOpacity>

        {/* Uploads */}

        <Text style={styles.sectionTitle}>
          Pending Uploads
        </Text>

        {uploads.map(
          (item, index) => (
            <View
              key={index}
              style={styles.uploadCard}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <View
                  style={styles.uploadIcon}
                >
                  <Ionicons
                    name="document-text-outline"
                    size={18}
                    color={Colors.cyan}
                  />
                </View>

                <View>
                  <Text
                    style={
                      styles.uploadTitle
                    }
                  >
                    {item.title}
                  </Text>

                  <Text
                    style={
                      styles.uploadInfo
                    }
                  >
                    {item.time} •{' '}
                    {item.size}
                  </Text>
                </View>
              </View>

              <View
                style={
                  styles.pendingBadge
                }
              >
                <Text
                  style={
                    styles.pendingText
                  }
                >
                  Pending
                </Text>
              </View>
            </View>
          )
        )}

        {/* Encryption */}

        <View
          style={
            styles.encryptionCard
          }
        >
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Ionicons
              name="shield-checkmark"
              size={24}
              color={Colors.green}
            />

            <View
              style={{
                marginLeft: 10,
                flex: 1,
              }}
            >
              <Text
                style={
                  styles.encryptionTitle
                }
              >
                End-to-End Encryption
              </Text>

              <Text
                style={
                  styles.encryptionText
                }
              >
                All data is encrypted
                using AES-256 before
                transmission.
              </Text>

              <Text
                style={
                  styles.activeEncryption
                }
              >
                Encryption Active
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom Nav */}

        <View style={styles.bottomNav}>
          <TouchableOpacity
            onPress={() =>
              router.push(
                '/dashboard'
              )
            }
          >
            <Ionicons
              name="home"
              size={22}
              color="#8FA5C3"
            />
            <Text
              style={styles.navText}
            >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              router.push(
                '/analytics'
              )
            }
          >
            <Ionicons
              name="analytics"
              size={22}
              color="#8FA5C3"
            />
            <Text
              style={styles.navText}
            >
              Analytics
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons
              name="sync"
              size={22}
              color={Colors.cyan}
            />
            <Text
              style={[
                styles.navText,
                {
                  color:
                    Colors.cyan,
                },
              ]}
            >
              Sync
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              router.push(
                '/settings'
              )
            }
          >
            <Ionicons
              name="settings"
              size={22}
              color="#8FA5C3"
            />
            <Text
              style={styles.navText}
            >
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      Colors.background,
    padding: 14,
  },

  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#8FA5C3',
    marginTop: 4,
    marginBottom: 15,
  },

  serverCard: {
    backgroundColor: Colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  serverLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#0A2A1D',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  serverTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  serverEndpoint: {
    color: '#8FA5C3',
    fontSize: 12,
  },

  offlineBadge: {
    backgroundColor: '#3D2F12',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },

  offlineText: {
    color: '#FBBF24',
    fontSize: 12,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    marginBottom: 12,
  },

  statCard: {
    flex: 1,
    backgroundColor: Colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 15,
    marginHorizontal: 4,
    alignItems: 'center',
  },

  statValue: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 8,
  },

  statLabel: {
    color: '#8FA5C3',
    marginTop: 4,
  },

  syncButton: {
    height: 56,
    borderRadius: 14,
    backgroundColor: '#1E80FF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 12,
  },

  syncText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },

  deleteButton: {
    height: 56,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FF5F7A',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },

  deleteText: {
    color: '#FF5F7A',
    marginLeft: 8,
    fontWeight: '600',
  },

  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  uploadCard: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  uploadIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#082538',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  uploadTitle: {
    color: 'white',
    fontWeight: '600',
  },

  uploadInfo: {
    color: '#8FA5C3',
    fontSize: 12,
    marginTop: 3,
  },

  pendingBadge: {
    backgroundColor: '#3D2F12',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },

  pendingText: {
    color: '#FBBF24',
    fontSize: 11,
  },

  encryptionCard: {
    backgroundColor: Colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.green,
    padding: 16,
    marginTop: 10,
    marginBottom: 15,
  },

  encryptionTitle: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 6,
  },

  encryptionText: {
    color: '#8FA5C3',
    fontSize: 12,
    lineHeight: 18,
  },

  activeEncryption: {
    color: Colors.green,
    marginTop: 8,
    fontWeight: '600',
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent:
      'space-around',
    backgroundColor: Colors.card,
    paddingVertical: 14,
    borderRadius: 18,
    marginBottom: 20,
  },

  navText: {
    color: '#8FA5C3',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 4,
  },
});