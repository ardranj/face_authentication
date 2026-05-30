import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors } from '../constants/colors';

export default function EnrollmentScreen() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    fullName: '',
    employeeId: '',
    phone: '',
    email: '',
    location: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    employeeId: '',
    phone: '',
    email: '',
    location: '',
  });

  const angles = [
    'FRONT',
    'LEFT',
    'RIGHT',
    'UP',
    'DOWN',
  ];

  const validateForm = () => {
    const newErrors = {
      fullName: '',
      employeeId: '',
      phone: '',
      email: '',
      location: '',
    };

    let valid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName =
        'Full Name is required';
      valid = false;
    }

    if (!formData.employeeId.trim()) {
      newErrors.employeeId =
        'Employee ID is required';
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        'Phone Number is required';
      valid = false;
    } else if (
      !/^\d{10}$/.test(formData.phone)
    ) {
      newErrors.phone =
        'Phone Number must contain 10 digits';
      valid = false;
    }

    if (!formData.location.trim()) {
      newErrors.location =
        'Work Location is required';
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      router.push('/dashboard');
    }
  };

  const previousStep = () => {
    if (step === 0) {
      router.push('/dashboard');
    } else {
      setStep(step - 1);
    }
  };

  if (step === 0) {
    return (
      <SafeAreaView
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={{
            padding: 20,
          }}
        >
          <View
            style={styles.header}
          >
            <TouchableOpacity
              onPress={() =>
                router.push('/dashboard')
              }
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color="white"
              />
            </TouchableOpacity>

            <Text
              style={styles.headerTitle}
            >
              Enroll New User
            </Text>

            <TouchableOpacity
              style={styles.newBtn}
            >
              <Text
                style={{
                  color:
                    Colors.cyan,
                }}
              >
                New
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={
              styles.subtitle
            }
          >
            Register field employee
          </Text>

          <View
            style={
              styles.stepContainer
            }
          >
            {[1, 2, 3, 4].map(
              (item) => (
                <View
                  key={item}
                  style={
                    styles.stepCircle
                  }
                >
                  <Text
                    style={{
                      color:
                        'white',
                    }}
                  >
                    {item}
                  </Text>
                </View>
              )
            )}
          </View>

          <View
            style={
              styles.formCard
            }
          >
            <Text
              style={
                styles.cardTitle
              }
            >
              Employee
              Information
            </Text>

            <InputField
              label="Full Name"
              value={
                formData.fullName
              }
              onChangeText={(
                text: string
              ) =>
                setFormData({
                  ...formData,
                  fullName:
                    text,
                })
              }
            />

            {errors.fullName ? (
              <Text
                style={
                  styles.errorText
                }
              >
                {
                  errors.fullName
                }
              </Text>
            ) : null}

            <InputField
              label="Employee ID"
              value={
                formData.employeeId
              }
              onChangeText={(
                text: string
              ) =>
                setFormData({
                  ...formData,
                  employeeId:
                    text,
                })
              }
            />

            {errors.employeeId ? (
              <Text
                style={
                  styles.errorText
                }
              >
                {
                  errors.employeeId
                }
              </Text>
            ) : null}

            <InputField
              label="Phone Number"
              value={
                formData.phone
              }
              onChangeText={(
                text: string
              ) =>
                setFormData({
                  ...formData,
                  phone:
                    text,
                })
              }
            />

            {errors.phone ? (
              <Text
                style={
                  styles.errorText
                }
              >
                {errors.phone}
              </Text>
            ) : null}

            <InputField
              label="Email"
              value={
                formData.email
              }
              onChangeText={(
                text: string
              ) =>
                setFormData({
                  ...formData,
                  email:
                    text,
                })
              }
            />

            <InputField
              label="Work Location"
              value={
                formData.location
              }
              onChangeText={(
                text: string
              ) =>
                setFormData({
                  ...formData,
                  location:
                    text,
                })
              }
            />

            {errors.location ? (
              <Text
                style={
                  styles.errorText
                }
              >
                {
                  errors.location
                }
              </Text>
            ) : null}

            <TouchableOpacity
              style={
                styles.captureButton
              }
              onPress={() => {
                if (
                  validateForm()
                ) {
                  setStep(1);
                }
              }}
            >
              <Text
                style={
                  styles.captureText
                }
              >
                Continue to Face
                Capture
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        <View
          style={styles.captureHeader}
        >
          <TouchableOpacity
            onPress={
              previousStep
            }
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={Colors.cyan}
            />
          </TouchableOpacity>

          <Text
            style={
              styles.captureTitle
            }
          >
            FACE ENROLLMENT
          </Text>

          <TouchableOpacity>
            <Ionicons
              name="refresh"
              size={24}
              color={Colors.cyan}
            />
          </TouchableOpacity>
        </View>

        <View
          style={styles.tabs}
        >
          {angles.map(
            (
              angle,
              index
            ) => (
              <Text
                key={angle}
                style={[
                  styles.tabText,
                  index ===
                    step -
                      1 && {
                    color:
                      Colors.cyan,
                    borderBottomWidth:
                      2,
                    borderBottomColor:
                      Colors.cyan,
                  },
                ]}
              >
                {angle}
              </Text>
            )
          )}
        </View>

        <View
          style={
            styles.faceContainer
          }
        >
          <View
            style={
              styles.outerCircle
            }
          >
            <View
              style={
                styles.middleCircle
              }
            >
              <Ionicons
                name="person"
                size={90}
                color={
                  Colors.cyan
                }
              />
            </View>
          </View>
        </View>

        <Text
          style={
            styles.angleTitle
          }
        >
          FACE{' '}
          {
            angles[
              step - 1
            ]
          }
        </Text>

        <Text
          style={
            styles.angleSub
          }
        >
          Position face in
          the frame and tap
          capture
        </Text>

        <TouchableOpacity
          style={
            styles.captureButton
          }
          onPress={nextStep}
        >
          <Text
            style={
              styles.captureText
            }
          >
            Capture Angle{' '}
            {step}/5
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (
    text: string
  ) => void;
}

function InputField({
  label,
  value,
  onChangeText,
}: InputFieldProps) {
  return (
    <View
      style={{
        marginBottom: 15,
      }}
    >
      <Text
        style={
          styles.inputLabel
        }
      >
        {label}
      </Text>

      <TextInput
        value={value}
        onChangeText={
          onChangeText
        }
        style={
          styles.input
        }
        placeholder={label}
        placeholderTextColor="#666"
      />
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        Colors.background,
    },

    header: {
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems: 'center',
    },

    headerTitle: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },

    subtitle: {
      color: '#AAA',
      marginTop: 5,
      marginBottom: 25,
    },

    newBtn: {
      borderWidth: 1,
      borderColor:
        Colors.border,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 8,
    },

    stepContainer: {
      flexDirection: 'row',
      justifyContent:
        'space-around',
      marginBottom: 25,
    },

    stepCircle: {
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor:
        Colors.cyan,
      justifyContent:
        'center',
      alignItems: 'center',
    },

    formCard: {
      backgroundColor:
        Colors.card,
      padding: 18,
      borderRadius: 18,
      borderWidth: 1,
      borderColor:
        Colors.border,
    },

    cardTitle: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },

    inputLabel: {
      color: 'white',
      marginBottom: 6,
    },

    input: {
      borderWidth: 1,
      borderColor:
        Colors.border,
      backgroundColor:
        '#082538',
      color: 'white',
      borderRadius: 10,
      paddingHorizontal: 12,
      height: 50,
    },

    errorText: {
      color: '#FF5A5A',
      fontSize: 12,
      marginTop: -10,
      marginBottom: 10,
    },

    captureButton: {
      backgroundColor:
        Colors.cyan,
      height: 56,
      borderRadius: 14,
      justifyContent:
        'center',
      alignItems: 'center',
      marginTop: 15,
    },

    captureText: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 16,
    },

    captureHeader: {
      flexDirection: 'row',
      justifyContent:
        'space-between',
      alignItems: 'center',
    },

    captureTitle: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },

    tabs: {
      flexDirection: 'row',
      justifyContent:
        'space-between',
      marginTop: 20,
      marginBottom: 40,
    },

    tabText: {
      color: '#777',
      paddingBottom: 8,
      width: 55,
      textAlign: 'center',
    },

    faceContainer: {
      alignItems: 'center',
      marginTop: 30,
    },

    outerCircle: {
      width: 280,
      height: 280,
      borderRadius: 140,
      borderWidth: 2,
      borderColor:
        Colors.cyan,
      justifyContent:
        'center',
      alignItems: 'center',
    },

    middleCircle: {
      width: 160,
      height: 160,
      borderRadius: 80,
      borderWidth: 1,
      borderColor:
        Colors.cyan,
      justifyContent:
        'center',
      alignItems: 'center',
    },

    angleTitle: {
      color: 'white',
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 40,
    },

    angleSub: {
      color: '#AAA',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 40,
    },
  });