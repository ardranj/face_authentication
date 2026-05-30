import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function HomeScreen() {
  const [operatorId, setOperatorId] = useState('');
  const [accessKey, setAccessKey] = useState('');
  const [pin, setPin] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    operatorId: '',
    accessKey: '',
    pin: '',
  });

  const validateLogin = () => {
    const newErrors = {
      operatorId: '',
      accessKey: '',
      pin: '',
    };

    let valid = true;

    if (!operatorId.trim()) {
      newErrors.operatorId =
        'Operator ID is required';
      valid = false;
    }

    if (!accessKey.trim()) {
      newErrors.accessKey =
        'Access Key is required';
      valid = false;
    }

    if (!pin.trim()) {
      newErrors.pin =
        'Security PIN is required';
      valid = false;
    } else if (pin.length !== 6) {
      newErrors.pin =
        'PIN must contain exactly 6 digits';
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleAuthenticate = () => {
    if (validateLogin()) {
      router.push('/dashboard');
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#020B1D',
      }}
    >
      <StatusBar barStyle="light-content" />

      <View
        style={{
          flex: 1,
          padding: 24,
          justifyContent: 'center',
        }}
      >
        {/* HEADER */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent:
              'space-between',
            alignItems: 'center',
            marginBottom: 25,
          }}
        >
          <View>
            <Text
              style={{
                color: '#7A8BA3',
                letterSpacing: 4,
                fontSize: 10,
              }}
            >
              SYSTEM ACCESS
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
                marginTop: 8,
              }}
            >
              AUTHENTICATION
            </Text>
          </View>

          <View
            style={{
              width: 55,
              height: 55,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: '#00D4FF',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Ionicons
              name="shield-outline"
              size={24}
              color="#00D4FF"
            />
          </View>
        </View>

        {/* OFFLINE CARD */}

        <View
          style={{
            backgroundColor: '#071B2E',
            borderRadius: 18,
            borderWidth: 1,
            borderColor: '#0F3A5A',
            padding: 18,
            marginBottom: 22,
            flexDirection: 'row',
            justifyContent:
              'space-between',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 12,
                backgroundColor: '#0C2F1F',
                justifyContent:
                  'center',
                alignItems: 'center',
                marginRight: 12,
              }}
            >
              <Ionicons
                name="wifi-outline"
                size={20}
                color="#00FF99"
              />
            </View>

            <View>
              <Text
                style={{
                  color: '#00FF99',
                  fontWeight: 'bold',
                }}
              >
                OFFLINE READY
              </Text>

              <Text
                style={{
                  color: '#8AA0B8',
                  marginTop: 3,
                }}
              >
                Device: FP-742C-9E4D
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: '#00FF99',
            }}
          />
        </View>

        {/* LOGIN CARD */}

        <View
          style={{
            backgroundColor: '#041628',
            borderRadius: 28,
            borderWidth: 1,
            borderColor: '#123456',
            padding: 22,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 24,
            }}
          >
            <Ionicons
              name="lock-closed-outline"
              size={18}
              color="white"
            />

            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                marginLeft: 10,
                fontSize: 16,
              }}
            >
              FIELD OPERATOR LOGIN
            </Text>
          </View>

          {/* OPERATOR ID */}

          <Text
            style={{
              color: '#7A8BA3',
              letterSpacing: 3,
              fontSize: 11,
              marginBottom: 10,
            }}
          >
            OPERATOR ID
          </Text>

          <TextInput
            placeholder="Enter Operator ID"
            placeholderTextColor="#7A8BA3"
            value={operatorId}
            onChangeText={setOperatorId}
            style={{
              backgroundColor: '#08243A',
              color: 'white',
              padding: 16,
              borderRadius: 14,
            }}
          />

          {errors.operatorId ? (
            <Text
              style={{
                color: '#FF5A5A',
                fontSize: 12,
                marginTop: 6,
                marginBottom: 12,
              }}
            >
              {errors.operatorId}
            </Text>
          ) : (
            <View
              style={{
                marginBottom: 20,
              }}
            />
          )}

          {/* ACCESS KEY */}

          <Text
            style={{
              color: '#7A8BA3',
              letterSpacing: 3,
              fontSize: 11,
              marginBottom: 10,
            }}
          >
            ACCESS KEY
          </Text>

          <View
            style={{
              backgroundColor: '#08243A',
              borderRadius: 14,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 15,
            }}
          >
            <TextInput
              placeholder="Enter Access Key"
              placeholderTextColor="#7A8BA3"
              secureTextEntry={!showPassword}
              value={accessKey}
              onChangeText={setAccessKey}
              style={{
                flex: 1,
                color: 'white',
                paddingVertical: 16,
              }}
            />

            <TouchableOpacity
              onPress={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >
              <Ionicons
                name={
                  showPassword
                    ? 'eye-off-outline'
                    : 'eye-outline'
                }
                size={20}
                color="#7A8BA3"
              />
            </TouchableOpacity>
          </View>

          {errors.accessKey ? (
            <Text
              style={{
                color: '#FF5A5A',
                fontSize: 12,
                marginTop: 6,
                marginBottom: 12,
              }}
            >
              {errors.accessKey}
            </Text>
          ) : (
            <View
              style={{
                marginBottom: 20,
              }}
            />
          )}

          {/* PIN */}

          <Text
            style={{
              color: '#7A8BA3',
              letterSpacing: 3,
              fontSize: 11,
              marginBottom: 10,
            }}
          >
            6-DIGIT SECURITY PIN
          </Text>

          <TextInput
            placeholder="Enter 6-digit PIN"
            placeholderTextColor="#7A8BA3"
            keyboardType="numeric"
            maxLength={6}
            value={pin}
            onChangeText={setPin}
            style={{
              backgroundColor: '#08243A',
              color: 'white',
              padding: 16,
              borderRadius: 14,
            }}
          />

          {errors.pin ? (
            <Text
              style={{
                color: '#FF5A5A',
                fontSize: 12,
                marginTop: 6,
                marginBottom: 12,
              }}
            >
              {errors.pin}
            </Text>
          ) : (
            <View
              style={{
                marginBottom: 28,
              }}
            />
          )}

          {/* BUTTON */}

          <TouchableOpacity
            onPress={
              handleAuthenticate
            }
            style={{
              backgroundColor: '#00C8FF',
              paddingVertical: 18,
              borderRadius: 15,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent:
                'center',
            }}
          >
            <Ionicons
              name="finger-print"
              size={20}
              color="black"
            />

            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                marginLeft: 8,
                letterSpacing: 1,
              }}
            >
              AUTHENTICATE
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: '#556677',
            textAlign: 'center',
            fontSize: 10,
            marginTop: 20,
          }}
        >
          AES-256 ENCRYPTED • FIPS 140-2
          COMPLIANT • OFFLINE SECURE
          VAULT
        </Text>
      </View>
    </SafeAreaView>
  );
}