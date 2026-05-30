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

export default function Dashboard() {
  const [data] = useState({
    userName: 'Rajesh Kumar',
    employeeId: 'NH4452',
    role: 'Field Engineer',
    location: 'NH-44, Sector 7A',

    attendanceVerified: true,
    checkInTime: '04:39 PM',

    pendingSync: 12,
    totalVerifications: 156,

    storageUsed: 2.4,
    storageTotal: 8,

    batteryLevel: 87,

    lastSyncTime: '2 hours ago',

    aiModelActive: true,
    networkOnline: false,
  });

  const NavItem = ({
    icon,
    label,
    active,
    onPress,
  }: {
    icon: any;
    label: string;
    active?: boolean;
    onPress?: () => void;
  }) => (
    <TouchableOpacity
      onPress={onPress}
      style={styles.navItem}
    >
      <Ionicons
        name={icon}
        size={22}
        color={active ? Colors.cyan : '#FFFFFF99'}
      />

      <Text
        style={[
          styles.navLabel,
          active && {
            color: Colors.cyan,
          },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 100,
        }}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <View style={styles.shieldContainer}>
            <Ionicons
              name="shield"
              size={24}
              color={Colors.cyan}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.title}>
              NHAI SecureAuth
            </Text>

            <Text style={styles.subtitle}>
              Field Dashboard
            </Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              router.push('/enrollment')
            }
          >
            <Ionicons
              name="person-add"
              size={24}
              color={Colors.cyan}
            />
          </TouchableOpacity>
        </View>

        {/* STATUS ROW */}

        <View style={styles.statusRow}>
          <View style={styles.offlineCard}>
            <Ionicons
              name="wifi-outline"
              size={18}
              color="orange"
            />

            <Text style={styles.offlineText}>
              Offline Mode Active
            </Text>
          </View>

          <View style={styles.batteryCard}>
            <Ionicons
              name="battery-half"
              size={18}
              color={Colors.green}
            />

            <Text style={styles.batteryText}>
              {data.batteryLevel}%
            </Text>
          </View>
        </View>

        {/* PROFILE CARD */}

        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <View>
              <View style={styles.avatar}>
                <Ionicons
                  name="person"
                  size={30}
                  color="white"
                />
              </View>

              <View
                style={styles.onlineDot}
              />
            </View>

            <View
              style={{
                marginLeft: 15,
                flex: 1,
              }}
            >
              <Text
                style={styles.userName}
              >
                {data.userName}
              </Text>

              <Text
                style={styles.userInfo}
              >
                {data.role}
              </Text>

              <Text
                style={styles.userInfo}
              >
                ID: {data.employeeId}
              </Text>

              <Text
                style={styles.userInfo}
              >
                {data.location}
              </Text>
            </View>
          </View>
        </View>

        {/* ATTENDANCE */}

        <View style={styles.card}>
          <View
            style={styles.spaceBetween}
          >
            <Text
              style={styles.sectionTitle}
            >
              Attendance
            </Text>

            <View
              style={[
                styles.statusBadge,
                {
                  backgroundColor:
                    'rgba(0,255,153,.15)',
                },
              ]}
            >
              <Text
                style={{
                  color: Colors.green,
                }}
              >
                Verified
              </Text>
            </View>
          </View>

          <Text
            style={{
              color: '#FFFFFF99',
              marginTop: 12,
            }}
          >
            Check-In : {data.checkInTime}
          </Text>
        </View>

        {/* STATS */}

        <View
          style={styles.statsRow}
        >
          <View
            style={styles.statCard}
          >
            <Text
              style={styles.statTitle}
            >
              Offline Data
            </Text>

            <Text
              style={styles.statValue}
            >
              {data.pendingSync}
            </Text>

            <Text
              style={styles.statSub}
            >
              Pending Sync
            </Text>
          </View>

          <View
            style={styles.statCard}
          >
            <Text
              style={styles.statTitle}
            >
              Verifications
            </Text>

            <Text
              style={styles.statValue}
            >
              {data.totalVerifications}
            </Text>

            <Text
              style={styles.statSub}
            >
              This Month
            </Text>
          </View>
        </View>

        {/* SYNC CARD */}

        <View style={styles.card}>
          <View
            style={styles.spaceBetween}
          >
            <View>
              <Text
                style={
                  styles.sectionTitle
                }
              >
                Last Sync
              </Text>

              <Text
                style={{
                  color:
                    '#FFFFFF99',
                  marginTop: 6,
                }}
              >
                {data.lastSyncTime}
              </Text>
            </View>

            <TouchableOpacity
              style={
                styles.syncButton
              }
            >
              <Text
                style={{
                  color: '#000',
                  fontWeight:
                    'bold',
                }}
              >
                Sync Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* NEW VERIFICATION */}

        <TouchableOpacity
  style={styles.verifyButton}
  onPress={() =>
    router.push('/face-scan')
  }
>
          <View
            style={{
              flexDirection:
                'row',
              alignItems:
                'center',
            }}
          >
            <Ionicons
              name="add"
              size={22}
              color="white"
            />

            <Text
              style={
                styles.verifyText
              }
            >
              New Verification
            </Text>
          </View>

          <Ionicons
            name="arrow-forward"
            size={24}
            color="white"
          />
        </TouchableOpacity>

        {/* DEVICE STATUS */}

        <View style={styles.card}>
          <Text
            style={
              styles.sectionTitle
            }
          >
            Device Status
          </Text>

          <View
            style={[
              styles.spaceBetween,
              { marginTop: 15 },
            ]}
          >
            <Text
              style={
                styles.deviceLabel
              }
            >
              AI Model
            </Text>

            <Text
              style={{
                color:
                  Colors.green,
                fontWeight:
                  'bold',
              }}
            >
              Active
            </Text>
          </View>

          <View
            style={[
              styles.spaceBetween,
              { marginTop: 15 },
            ]}
          >
            <Text
              style={
                styles.deviceLabel
              }
            >
              Storage
            </Text>

            <Text
              style={{
                color: 'white',
              }}
            >
              {data.storageUsed} GB
              /{' '}
              {
                data.storageTotal
              }{' '}
              GB
            </Text>
          </View>

          <View
            style={[
              styles.spaceBetween,
              { marginTop: 15 },
            ]}
          >
            <Text
              style={
                styles.deviceLabel
              }
            >
              Network
            </Text>

            <Text
              style={{
                color:
                  data.networkOnline
                    ? Colors.green
                    : 'orange',
                fontWeight:
                  'bold',
              }}
            >
              {data.networkOnline
                ? 'Online'
                : 'Offline'}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* BOTTOM NAV */}

      <View style={styles.bottomBar}>
        <NavItem
          icon="home"
          label="Home"
          active
        />

        <NavItem
          icon="analytics"
          label="Analytics"
          onPress={() =>
            router.push(
              '/analytics'
            )
          }
        />

        <NavItem
          icon="person-add"
          label="Enroll"
          onPress={() =>
            router.push(
              '/enrollment'
            )
          }
        />

        <NavItem
          icon="sync"
          label="Sync"
          onPress={() =>
            router.push('/sync')
          }
        />

        <NavItem
          icon="settings"
          label="Settings"
          onPress={() =>
            router.push(
              '/settings'
            )
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      Colors.background,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  shieldContainer: {
    backgroundColor:
      'rgba(0,217,255,.15)',
    padding: 12,
    borderRadius: 30,
    marginRight: 12,
  },

  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#FFFFFF99',
    marginTop: 2,
  },

  statusRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },

  offlineCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:
      'rgba(255,165,0,.15)',
    padding: 12,
    borderRadius: 12,
  },

  offlineText: {
    color: 'orange',
    marginLeft: 6,
  },

  batteryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor:
      'rgba(0,255,153,.15)',
    padding: 12,
    borderRadius: 12,
  },

  batteryText: {
    color: Colors.green,
    marginLeft: 5,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor:
      Colors.card,
    borderRadius: 18,
    padding: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor:
      Colors.border,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor:
      Colors.cyan,
    justifyContent:
      'center',
    alignItems: 'center',
  },

  onlineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor:
      Colors.green,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor:
      Colors.card,
  },

  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  userInfo: {
    color: '#FFFFFF99',
    marginTop: 4,
  },

  sectionTitle: {
    color: 'white',
    fontWeight: 'bold',
  },

  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    marginBottom: 15,
  },

  statCard: {
    width: '48%',
    backgroundColor:
      Colors.card,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor:
      Colors.border,
  },

  statTitle: {
    color: '#FFFFFF99',
  },

  statValue: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
  },

  statSub: {
    color: '#FFFFFF99',
    marginTop: 10,
  },

  syncButton: {
    backgroundColor:
      Colors.cyan,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },

  verifyButton: {
    backgroundColor:
      '#1089FF',
    height: 60,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  verifyText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  deviceLabel: {
    color: '#FFFFFF99',
  },

  spaceBetween: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  bottomBar: {
    flexDirection: 'row',
    justifyContent:
      'space-around',
    backgroundColor:
      Colors.card,
    borderTopWidth: 1,
    borderTopColor:
      Colors.border,
    paddingVertical: 10,
  },

  navItem: {
    alignItems: 'center',
  },

  navLabel: {
    color: '#FFFFFF99',
    fontSize: 11,
    marginTop: 4,
  },
});