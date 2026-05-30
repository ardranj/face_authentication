import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors } from '../constants/colors';

export default function SettingsScreen() {
  const [faceAuth, setFaceAuth] =
    useState(true);

  const [antiSpoof, setAntiSpoof] =
    useState(true);

  const [autoLogout, setAutoLogout] =
    useState(false);

  const [location, setLocation] =
    useState(false);

  const [notifications, setNotifications] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
      >
        {/* HEADER */}

        <View style={styles.header}>
          <View>
            <Text style={styles.title}>
              Settings
            </Text>

            <Text
              style={styles.subtitle}
            >
              App configuration
            </Text>
          </View>

          <View
            style={styles.offlineBadge}
          >
            <Ionicons
              name="wifi-outline"
              size={12}
              color="#FBBF24"
            />

            <Text
              style={
                styles.offlineText
              }
            >
              Offline
            </Text>
          </View>
        </View>

        {/* SECURITY */}

        <View style={styles.section}>
          <Text
            style={styles.sectionTitle}
          >
            Security Settings
          </Text>

          <SettingItem
            icon="scan-outline"
            color="#00D9FF"
            title="Face Authentication"
            subtitle="Secure app login"
            value={faceAuth}
            onValueChange={
              setFaceAuth
            }
          />

          <View
            style={styles.statusCard}
          >
            <View
              style={
                styles.leftContent
              }
            >
              <View
                style={[
                  styles.iconBox,
                  {
                    backgroundColor:
                      '#082538',
                  },
                ]}
              >
                <Ionicons
                  name="shield-checkmark-outline"
                  size={20}
                  color="#00D9FF"
                />
              </View>

              <View>
                <Text
                  style={
                    styles.settingTitle
                  }
                >
                  Device Encryption
                </Text>

                <Text
                  style={
                    styles.settingSubtitle
                  }
                >
                  AES-256 enabled
                </Text>
              </View>
            </View>

            <Ionicons
              name="checkmark-circle"
              size={22}
              color="#00FF99"
            />
          </View>

          <SettingItem
            icon="eye-outline"
            color="#00D9FF"
            title="Anti-Spoof Protection"
            subtitle="Detect fake attacks"
            value={antiSpoof}
            onValueChange={
              setAntiSpoof
            }
          />

          <SettingItem
            icon="time-outline"
            color="#FBBF24"
            title="Auto Logout"
            subtitle="After 15 mins inactivity"
            value={autoLogout}
            onValueChange={
              setAutoLogout
            }
          />
        </View>

        {/* PERMISSIONS */}

        <View style={styles.section}>
          <Text
            style={styles.sectionTitle}
          >
            Device Permissions
          </Text>

          <PermissionCard
            icon="camera-outline"
            color="#3B82F6"
            title="Camera Access"
            subtitle="Face scans"
          />

          <PermissionCard
            icon="folder-open-outline"
            color="#A855F7"
            title="Storage Access"
            subtitle="Store offline data"
          />

          <SettingItem
            icon="location-outline"
            color="#00D9FF"
            title="Location Permission"
            subtitle="GPS for attendance"
            value={location}
            onValueChange={
              setLocation
            }
          />

          <SettingItem
            icon="notifications-outline"
            color="#FBBF24"
            title="Notification Permission"
            subtitle="Alerts & sync status"
            value={notifications}
            onValueChange={
              setNotifications
            }
          />
        </View>

        {/* APPEARANCE */}

        <View style={styles.section}>
          <Text
            style={styles.sectionTitle}
          >
            Appearance
          </Text>

          <SettingItem
            icon="moon-outline"
            color="#FFFFFF"
            title="Dark Mode"
            subtitle="Optimized for outdoor use"
            value={darkMode}
            onValueChange={
              setDarkMode
            }
          />

          <View
            style={styles.previewCard}
          >
            <View
              style={styles.previewHeader}
            >
              <View
                style={styles.previewDot}
              />

              <View
                style={
                  styles.previewLine
                }
              />
            </View>

            <View
              style={
                styles.previewBox
              }
            />

            <View
              style={[
                styles.previewBox,
                {
                  width: '50%',
                },
              ]}
            />
          </View>
        </View>

        {/* NETWORK */}

        <View style={styles.section}>
          <Text
            style={styles.sectionTitle}
          >
            Sync & Network
          </Text>

          <View
            style={styles.networkCard}
          >
            <View
              style={
                styles.leftContent
              }
            >
              <View
                style={[
                  styles.iconBox,
                  {
                    backgroundColor:
                      '#0A2A1D',
                  },
                ]}
              >
                <Ionicons
                  name="cloud-done-outline"
                  size={20}
                  color="#00FF99"
                />
              </View>

              <View>
                <Text
                  style={
                    styles.settingTitle
                  }
                >
                  Sync Status
                </Text>

                <Text
                  style={
                    styles.settingSubtitle
                  }
                >
                  Offline Mode Active
                </Text>
              </View>
            </View>

            <Text
              style={{
                color:
                  '#00FF99',
                fontWeight:
                  '600',
              }}
            >
              Ready
            </Text>
          </View>

          <View
            style={styles.networkCard}
          >
            <View
              style={
                styles.leftContent
              }
            >
              <View
                style={[
                  styles.iconBox,
                  {
                    backgroundColor:
                      '#082538',
                  },
                ]}
              >
                <Ionicons
                  name="server-outline"
                  size={20}
                  color="#00D9FF"
                />
              </View>

              <View>
                <Text
                  style={
                    styles.settingTitle
                  }
                >
                  Local Database
                </Text>

                <Text
                  style={
                    styles.settingSubtitle
                  }
                >
                  SQLite Storage
                </Text>
              </View>
            </View>

            <Text
              style={{
                color:
                  '#00D9FF',
                fontWeight:
                  '600',
              }}
            >
              Active
            </Text>
          </View>
        </View>

        {/* BOTTOM NAV */}

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

          <TouchableOpacity
            onPress={() =>
              router.push('/sync')
            }
          >
            <Ionicons
              name="sync"
              size={22}
              color="#8FA5C3"
            />
            <Text
              style={styles.navText}
            >
              Sync
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons
              name="settings"
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
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SettingItem({
  icon,
  color,
  title,
  subtitle,
  value,
  onValueChange,
}: any) {
  return (
    <View style={styles.settingCard}>
      <View
        style={styles.leftContent}
      >
        <View
          style={[
            styles.iconBox,
            {
              backgroundColor:
                '#082538',
            },
          ]}
        >
          <Ionicons
            name={icon}
            size={20}
            color={color}
          />
        </View>

        <View>
          <Text
            style={
              styles.settingTitle
            }
          >
            {title}
          </Text>

          <Text
            style={
              styles.settingSubtitle
            }
          >
            {subtitle}
          </Text>
        </View>
      </View>

      <Switch
        value={value}
        onValueChange={
          onValueChange
        }
        trackColor={{
          false: '#333',
          true: Colors.cyan,
        }}
      />
    </View>
  );
}

function PermissionCard({
  icon,
  color,
  title,
  subtitle,
}: any) {
  return (
    <View style={styles.settingCard}>
      <View
        style={styles.leftContent}
      >
        <View
          style={[
            styles.iconBox,
            {
              backgroundColor:
                '#082538',
            },
          ]}
        >
          <Ionicons
            name={icon}
            size={20}
            color={color}
          />
        </View>

        <View>
          <Text
            style={
              styles.settingTitle
            }
          >
            {title}
          </Text>

          <Text
            style={
              styles.settingSubtitle
            }
          >
            {subtitle}
          </Text>
        </View>
      </View>

      <View
        style={styles.allowedBadge}
      >
        <Text
          style={
            styles.allowedText
          }
        >
          ✓ Allowed
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      Colors.background,
    padding: 14,
  },

  header: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#8FA5C3',
    marginTop: 4,
  },

  offlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:
      '#3D2F12',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },

  offlineText: {
    color: '#FBBF24',
    marginLeft: 5,
    fontSize: 12,
  },

  section: {
    backgroundColor:
      Colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor:
      Colors.border,
    padding: 14,
    marginBottom: 14,
  },

  sectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  settingCard: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    backgroundColor:
      '#082538',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
  },

  statusCard: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    backgroundColor:
      '#082538',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
  },

  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  settingTitle: {
    color: 'white',
    fontWeight: '600',
  },

  settingSubtitle: {
    color: '#8FA5C3',
    fontSize: 12,
    marginTop: 2,
  },

  allowedBadge: {
    backgroundColor:
      '#0A2A1D',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  allowedText: {
    color: '#00FF99',
    fontSize: 11,
  },

  previewCard: {
    backgroundColor:
      '#082538',
    borderRadius: 14,
    padding: 12,
    marginTop: 10,
  },

  previewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  previewDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor:
      Colors.cyan,
    marginRight: 10,
  },

  previewLine: {
    height: 4,
    width: 80,
    backgroundColor:
      '#334155',
    borderRadius: 10,
  },

  previewBox: {
    height: 16,
    backgroundColor:
      '#1E293B',
    borderRadius: 6,
    marginBottom: 8,
  },

  networkCard: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    backgroundColor:
      '#082538',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent:
      'space-around',
    backgroundColor:
      Colors.card,
    borderRadius: 18,
    paddingVertical: 14,
    marginBottom: 20,
  },

  navText: {
    color: '#8FA5C3',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 4,
  },
});