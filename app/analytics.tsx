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

export default function AnalyticsScreen() {
  const [stats] = useState({
    successRate: 96.8,
    totalScans: 164,
    successful: 158,
    failed: 6,
  });

  const [weeklyData] = useState([
    { day: 'Mon', success: 24, failed: 3 },
    { day: 'Tue', success: 27, failed: 6 },
    { day: 'Wed', success: 20, failed: 2 },
    { day: 'Thu', success: 29, failed: 4 },
    { day: 'Fri', success: 25, failed: 3 },
    { day: 'Sat', success: 18, failed: 2 },
    { day: 'Sun', success: 14, failed: 1 },
  ]);

  const [failures] = useState([
    {
      title: 'Poor lighting conditions',
      time: '2 hours ago',
      severity: 'Medium',
      color: '#F59E0B',
    },
    {
      title: 'Face not aligned properly',
      time: '5 hours ago',
      severity: 'Low',
      color: '#64748B',
    },
    {
      title: 'Liveness check failed',
      time: '1 day ago',
      severity: 'High',
      color: '#EF4444',
    },
  ]);

  const maxValue = Math.max(
    ...weeklyData.map(
      item =>
        item.success + item.failed
    )
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}

        <View style={styles.header}>
          <View>
            <Text style={styles.title}>
              Analytics & Reports
            </Text>

            <Text style={styles.subtitle}>
              Performance insights
            </Text>
          </View>

          <TouchableOpacity
            style={styles.weekButton}
          >
            <Ionicons
              name="calendar-outline"
              size={14}
              color={Colors.cyan}
            />

            <Text
              style={
                styles.weekButtonText
              }
            >
              This Week
            </Text>
          </TouchableOpacity>
        </View>

        {/* Top Cards */}

        <View style={styles.row}>
          <View style={styles.card}>
            <View
              style={styles.cardHeader}
            >
              <Ionicons
                name="checkmark-circle"
                size={20}
                color={Colors.cyan}
              />

              <Text
                style={
                  styles.cardLabel
                }
              >
                Success Rate
              </Text>
            </View>

            <Text
              style={
                styles.bigNumber
              }
            >
              {stats.successRate}%
            </Text>

            <Text
              style={
                styles.positiveText
              }
            >
              ↗ +2.3%
            </Text>
          </View>

          <View style={styles.card}>
            <View
              style={styles.cardHeader}
            >
              <Ionicons
                name="people-outline"
                size={20}
                color={Colors.cyan}
              />

              <Text
                style={
                  styles.cardLabel
                }
              >
                Total Scans
              </Text>
            </View>

            <Text
              style={
                styles.bigNumber
              }
            >
              {stats.totalScans}
            </Text>

            <Text
              style={
                styles.positiveText
              }
            >
              ↗ +12
            </Text>
          </View>
        </View>

        {/* Pie Style Card */}

        <View style={styles.row}>
          <View style={styles.card}>
            <View
              style={styles.fakePie}
            >
              <View
                style={
                  styles.pieCenter
                }
              />
            </View>

            <View
              style={{
                marginTop: 12,
              }}
            >
              <Text
                style={
                  styles.legend
                }
              >
                ● Successful{' '}
                {stats.successRate}%
              </Text>

              <Text
                style={[
                  styles.legend,
                  {
                    color:
                      '#FF5F7A',
                  },
                ]}
              >
                ● Failed 3.2%
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.card,
              {
                justifyContent:
                  'center',
              },
            ]}
          >
            <Text
              style={
                styles.bigNumber
              }
            >
              {
                stats.successful
              }
            </Text>

            <Text
              style={
                styles.cardLabel
              }
            >
              Successful
            </Text>

            <View
              style={{
                height: 20,
              }}
            />

            <Text
              style={[
                styles.bigNumber,
                {
                  color:
                    '#FF5F7A',
                },
              ]}
            >
              {stats.failed}
            </Text>

            <Text
              style={
                styles.cardLabel
              }
            >
              Failed
            </Text>
          </View>
        </View>

        {/* Daily Verification */}

        <View
          style={styles.chartCard}
        >
          <Text
            style={
              styles.sectionTitle
            }
          >
            Daily Verifications
          </Text>

          <Text
            style={
              styles.sectionSub
            }
          >
            Last 7 days activity
          </Text>

          <View
            style={
              styles.chartArea
            }
          >
            {weeklyData.map(
              item => {
                const total =
                  item.success +
                  item.failed;

                const height =
                  (total /
                    maxValue) *
                  140;

                return (
                  <View
                    key={
                      item.day
                    }
                    style={
                      styles.barContainer
                    }
                  >
                    <View
                      style={{
                        justifyContent:
                          'flex-end',
                        height: 150,
                      }}
                    >
                      <View
                        style={{
                          width: 18,
                          height,
                          backgroundColor:
                            '#FF5F7A',
                          borderRadius: 4,
                        }}
                      />
                    </View>

                    <Text
                      style={
                        styles.dayText
                      }
                    >
                      {item.day}
                    </Text>
                  </View>
                );
              }
            )}
          </View>

          <View
            style={
              styles.legendRow
            }
          >
            <Text
              style={{
                color:
                  Colors.cyan,
              }}
            >
              ● Successful
            </Text>

            <Text
              style={{
                color:
                  '#FF5F7A',
              }}
            >
              ● Failed
            </Text>
          </View>
        </View>

        {/* Recent Failures */}

        <View
          style={styles.chartCard}
        >
          <View
            style={{
              flexDirection:
                'row',
              justifyContent:
                'space-between',
            }}
          >
            <Text
              style={
                styles.sectionTitle
              }
            >
              Recent Failures
            </Text>

            <Ionicons
              name="warning-outline"
              size={20}
              color="#F59E0B"
            />
          </View>

          <Text
            style={
              styles.sectionSub
            }
          >
            Authentication issues
          </Text>

          {failures.map(
            (
              item,
              index
            ) => (
              <View
                key={index}
                style={
                  styles.failureCard
                }
              >
                <View>
                  <Text
                    style={
                      styles.failureTitle
                    }
                  >
                    {item.title}
                  </Text>

                  <Text
                    style={
                      styles.failureTime
                    }
                  >
                    {item.time}
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor:
                      item.color,
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      color:
                        'white',
                      fontSize: 11,
                    }}
                  >
                    {
                      item.severity
                    }
                  </Text>
                </View>
              </View>
            )
          )}
        </View>

        {/* Bottom Navigation */}

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
              style={
                styles.navText
              }
            >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons
              name="analytics"
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
              style={
                styles.navText
              }
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
              style={
                styles.navText
              }
            >
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles =
  StyleSheet.create({
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
      marginBottom: 15,
    },

    title: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },

    subtitle: {
      color: '#8FA5C3',
      marginTop: 4,
    },

    weekButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:
        Colors.card,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 10,
    },

    weekButtonText: {
      color: Colors.cyan,
      marginLeft: 6,
      fontSize: 12,
    },

    row: {
      flexDirection: 'row',
      gap: 12,
      marginBottom: 12,
    },

    card: {
      flex: 1,
      backgroundColor:
        Colors.card,
      borderRadius: 18,
      borderWidth: 1,
      borderColor:
        Colors.border,
      padding: 16,
    },

    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },

    cardLabel: {
      color: '#8FA5C3',
      marginLeft: 8,
    },

    bigNumber: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
    },

    positiveText: {
      color: '#00FF99',
      marginTop: 6,
    },

    fakePie: {
      width: 90,
      height: 90,
      borderRadius: 45,
      borderWidth: 10,
      borderColor: Colors.cyan,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },

    pieCenter: {
      width: 35,
      height: 35,
      borderRadius: 18,
      backgroundColor:
        Colors.card,
    },

    legend: {
      color: Colors.cyan,
      fontSize: 12,
    },

    chartCard: {
      backgroundColor:
        Colors.card,
      borderRadius: 18,
      borderWidth: 1,
      borderColor:
        Colors.border,
      padding: 16,
      marginBottom: 12,
    },

    sectionTitle: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },

    sectionSub: {
      color: '#8FA5C3',
      marginTop: 4,
      marginBottom: 12,
    },

    chartArea: {
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems: 'flex-end',
      height: 180,
      marginTop: 10,
    },

    barContainer: {
      alignItems: 'center',
    },

    dayText: {
      color: '#8FA5C3',
      marginTop: 6,
      fontSize: 11,
    },

    legendRow: {
      flexDirection: 'row',
      justifyContent:
        'center',
      gap: 20,
      marginTop: 12,
    },

    failureCard: {
      backgroundColor:
        '#082538',
      borderRadius: 12,
      padding: 14,
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },

    failureTitle: {
      color: 'white',
      fontWeight: '600',
    },

    failureTime: {
      color: '#8FA5C3',
      marginTop: 4,
      fontSize: 12,
    },

    bottomNav: {
      flexDirection: 'row',
      justifyContent:
        'space-around',
      marginTop: 15,
      marginBottom: 20,
      paddingVertical: 12,
      backgroundColor:
        Colors.card,
      borderRadius: 18,
    },

    navText: {
      color: '#8FA5C3',
      fontSize: 11,
      textAlign: 'center',
      marginTop: 4,
    },
  });