/**
 * Environment variables configuration
 * Centralizes all environment variables for easier management
 */

import { NODE_ENV, PORT } from '~/constants/env';

export const validateRequiredEnv = (): void => {
  try {
    // All env variables are required
    const requiredEnv = [NODE_ENV, PORT];

    // Check if all required env variables are set
    const missingEnvVars = requiredEnv.filter(
      (varName) => !process.env[varName] || process.env[varName]?.trim() === '',
    );

    if (missingEnvVars.length > 0) {
      throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
    }

    console.log('Environment variables validated successfully');
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : error;
    console.error('Environment validation failed:', errMsg);
    process.exit(1);
  }
};
