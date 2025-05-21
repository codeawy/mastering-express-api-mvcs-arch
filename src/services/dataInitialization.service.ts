import path from 'path';
import pc from 'picocolors';

export async function initializeData(): Promise<void> {
  const usersFilePath = path.join(process.cwd(), 'data/users.json');

  try {
    // initializeJsonFile
    console.log(pc.green('✓') + ' Users data file initialized successfully');
  } catch (error) {
    console.error(pc.red('✖') + ' Error initializing users.json file:', error);
    throw error; // Rethrow to be handled by the bootstrap function
  }
}
