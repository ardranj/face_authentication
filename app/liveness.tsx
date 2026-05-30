import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors } from '../constants/colors';

export default function LivenessScreen() {
  const tasks = [
    'Blink your eyes',
    'Smile naturally',
    'Turn head left, then right',
  ];

  const [currentStep, setCurrentStep] =
    useState(0);

  const progress =
    ((currentStep + 1) /
      tasks.length) *
    100;

  const handleNext = () => {
    if (
      currentStep <
      tasks.length - 1
    ) {
      setCurrentStep(
        currentStep + 1
      );
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <SafeAreaView
      style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
      >
        {/* Header */}

        <View style={styles.header}>
          <Text style={styles.title}>
            Liveness Detection
          </Text>

          <View
            style={styles.aiBadge}
          >
            <Text
              style={
                styles.aiBadgeText
              }
            >
              AI Verification
            </Text>
          </View>
        </View>

        {/* Progress */}

        <View
          style={styles.progressRow}
        >
          <Text
            style={styles.stepText}
          >
            Step{' '}
            {currentStep + 1} of{' '}
            {tasks.length}
          </Text>

          <Text
            style={styles.percentText}
          >
            {Math.round(progress)}
            %
          </Text>
        </View>

        <View
          style={
            styles.progressBar
          }
        >
          <View
            style={[
              styles.progressFill,
              {
                width: `${progress}%`,
              },
            ]}
          />
        </View>

        {/* Face Card */}

        <View
          style={styles.faceCard}
        >
          <View
            style={styles.faceCircle}
          >
            <View
              style={
                styles.faceInner
              }
            >
              <Ionicons
                name="happy-outline"
                size={90}
                color={
                  Colors.cyan
                }
              />
            </View>

            <View
              style={
                styles.scanLine
              }
            />
          </View>

          <View
            style={
              styles.currentTask
            }
          >
            <Ionicons
              name="flash"
              size={16}
              color={
                Colors.cyan
              }
            />

            <Text
              style={{
                color:
                  'white',
                marginLeft: 8,
                fontWeight:
                  '600',
              }}
            >
              {
                tasks[
                  currentStep
                ]
              }
            </Text>
          </View>
        </View>

        {/* Steps */}

        {tasks.map(
          (
            task,
            index
          ) => (
            <View
              key={task}
              style={[
                styles.stepCard,
                index ===
                  currentStep &&
                  styles.activeStep,
              ]}
            >
              <View
                style={[
                  styles.stepNumber,
                  index ===
                    currentStep &&
                    styles.activeNumber,
                ]}
              >
                <Text
                  style={{
                    color:
                      'white',
                    fontWeight:
                      'bold',
                  }}
                >
                  {index + 1}
                </Text>
              </View>

              <Text
                style={[
                  styles.stepLabel,
                  index ===
                    currentStep && {
                    color:
                      'white',
                  },
                ]}
              >
                {task}
              </Text>

              {index <
              currentStep ? (
                <Ionicons
                  name="checkmark-circle"
                  size={22}
                  color={
                    Colors.green
                  }
                />
              ) : null}
            </View>
          )
        )}

        {/* Action Button */}

        <TouchableOpacity
          style={styles.button}
          onPress={handleNext}
        >
          <Text
            style={
              styles.buttonText
            }
          >
            {currentStep ===
            tasks.length - 1
              ? 'Finish Verification'
              : 'Complete Step'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            router.back()
          }
          style={{
            alignSelf:
              'center',
            marginTop: 15,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              color:
                '#AAAAAA',
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
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
      padding: 16,
    },

    header: {
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems: 'center',
      marginTop: 10,
    },

    title: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },

    aiBadge: {
      backgroundColor:
        '#113A56',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 8,
    },

    aiBadgeText: {
      color: Colors.cyan,
      fontSize: 11,
    },

    progressRow: {
      flexDirection: 'row',
      justifyContent:
        'space-between',
      marginTop: 20,
    },

    stepText: {
      color: '#AAA',
    },

    percentText: {
      color: Colors.cyan,
      fontWeight: 'bold',
    },

    progressBar: {
      height: 6,
      backgroundColor:
        '#1A2D40',
      borderRadius: 10,
      marginTop: 8,
      overflow: 'hidden',
    },

    progressFill: {
      height: 6,
      backgroundColor:
        Colors.cyan,
    },

    faceCard: {
      backgroundColor:
        Colors.card,
      borderRadius: 20,
      padding: 20,
      marginTop: 20,
      borderWidth: 1,
      borderColor:
        Colors.border,
      alignItems: 'center',
    },

    faceCircle: {
      width: 180,
      height: 180,
      borderRadius: 90,
      borderWidth: 2,
      borderColor:
        Colors.cyan,
      justifyContent:
        'center',
      alignItems: 'center',
    },

    faceInner: {
      width: 120,
      height: 120,
      borderRadius: 60,
      borderWidth: 2,
      borderColor:
        Colors.cyan,
      justifyContent:
        'center',
      alignItems: 'center',
    },

    scanLine: {
      position: 'absolute',
      width: '100%',
      height: 2,
      backgroundColor:
        Colors.cyan,
    },

    currentTask: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:
        '#082538',
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderRadius: 12,
      marginTop: 20,
      width: '100%',
    },

    stepCard: {
      backgroundColor:
        Colors.card,
      borderRadius: 14,
      borderWidth: 1,
      borderColor:
        Colors.border,
      padding: 15,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 12,
    },

    activeStep: {
      borderColor:
        Colors.cyan,
    },

    stepNumber: {
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor:
        '#233245',
      justifyContent:
        'center',
      alignItems: 'center',
    },

    activeNumber: {
      backgroundColor:
        '#1089FF',
    },

    stepLabel: {
      flex: 1,
      marginLeft: 12,
      color: '#AAA',
    },

    button: {
      backgroundColor:
        Colors.cyan,
      height: 56,
      borderRadius: 14,
      justifyContent:
        'center',
      alignItems: 'center',
      marginTop: 20,
    },

    buttonText: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });