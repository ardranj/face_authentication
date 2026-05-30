import { InspireFace, ImageFormat, CameraRotation } from 'react-native-nitro-inspire-face';

export interface ScanResult {
  faceFound: boolean;
  isRealHuman: boolean;
  isBlinking: boolean;
  faceEmbedding: number[] | null;
}

class BiometricEngine {
  private isInitialized = false;

  // 1. Boots up the C++ core engine using your local Pikachu asset folder
  public async setup() {
    if (this.isInitialized) return;
    try {
      await InspireFace.initialize({ modelPath: 'models/pikachu' });
      this.isInitialized = true;
      console.log("InspireFace Engine Core Ready!");
    } catch (e) {
      console.error("SDK Setup Failed:", e);
    }
  }

  // 2. Extracts coordinates and liveness attributes from camera frames
  public analyzeFrame(buffer: any, width: number, height: number): ScanResult {
    const stream = InspireFace.createEmptyImageStream();
    
    try {
      stream.setFormat(ImageFormat.YUV_NV21);
      stream.setRotation(CameraRotation.ROTATION_90);
      stream.setBuffer(buffer, width, height);

      const sessionResult = InspireFace.executeFaceTrack(stream);

      if (sessionResult.detectedNum > 0) {
        const faceToken = sessionResult.tokens[0];
        const isReal = faceToken.isRealPerson; // Prevents photo/screen spoofing
        const eyeBlinkDetected = faceToken.attributes?.hasBlinked ?? false; // Tracks eye blinks

        if (isReal) {
          const feature = InspireFace.extractFaceFeature(stream, faceToken);
          return {
            faceFound: true,
            isRealHuman: true,
            isBlinking: eyeBlinkDetected,
            faceEmbedding: feature.vector // 512-number signature array
          };
        }
        return { faceFound: true, isRealHuman: false, isBlinking: false, faceEmbedding: null };
      }
      return { faceFound: false, isRealHuman: false, isBlinking: false, faceEmbedding: null };
    } finally {
      stream.dispose(); // Recycles memory immediately to prevent your 4GB laptop from lagging
    }
  }

  // 3. Math calculation to match live face data against your registration vector
  public verifyIdentity(registeredFace: number[], liveFace: number[]): boolean {
    const similarityScore = InspireFace.compareFeature(registeredFace, liveFace);
    return similarityScore >= 0.82; // 0.82 is the standard industry matching threshold
  }
}

export const FaceEngine = new BiometricEngine();