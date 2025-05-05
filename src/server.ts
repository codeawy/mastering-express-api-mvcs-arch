import app from './app';
import pc from 'picocolors';

// Get port from environment or use default
const PORT = process.env.PORT || 5001;

// Helper function to create formatted group headers
const createGroupHeader = (title: string): string => {
  const line = '━'.repeat(50);
  return `\n${pc.bold(pc.blue(line))}\n${pc.bold(pc.green('■'))} ${pc.bold(pc.white(title))}\n${pc.bold(pc.blue(line))}`;
};

// Start the server
const server = app.listen(PORT, () => {
  const timeStamp = new Date().toLocaleTimeString();
  const timeInfo = pc.gray(`[${timeStamp}]`);

  // Server information group
  console.log(createGroupHeader('SERVER INFORMATION'));
  console.log(`${timeInfo} ${pc.green('✓')} Server started`);
  console.log(`${timeInfo} ${pc.green('✓')} Listening on port ${pc.cyan(PORT)}`);
  console.log(
    `${timeInfo} ${pc.green('✓')} Environment: ${pc.yellow(process.env.NODE_ENV || 'development')}`,
  );

  // API endpoints group
  console.log(createGroupHeader('API ENDPOINTS'));
  console.log(
    `${timeInfo} ${pc.green('✓')} API Base URL: ${pc.blue(`http://localhost:${PORT}/api/v1`)}`,
  );

  // Documentation group
  console.log(createGroupHeader('DOCUMENTATION'));
  console.log(
    `${timeInfo} ${pc.green('✓')} API Documentation: ${pc.blue(`http://localhost:${PORT}/docs`)}`,
  );

  // Health & monitoring group
  console.log(createGroupHeader('HEALTH & MONITORING'));
  console.log(
    `${timeInfo} ${pc.green('✓')} Health Check: ${pc.blue(`http://localhost:${PORT}/health`)}`,
  );

  console.log('\n' + pc.bold(pc.magenta('▶ Server is ready to handle requests')));
});

// Handle unhandled rejections
process.on('unhandledRejection', (err: Error) => {
  console.error(createGroupHeader('ERROR: UNHANDLED REJECTION'));
  console.error(pc.red(err.name), pc.red(err.message));
  console.error(err.stack);

  // Gracefully close server before exiting
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err: Error) => {
  console.error(createGroupHeader('ERROR: UNCAUGHT EXCEPTION'));
  console.error(pc.red(err.name), pc.red(err.message));
  console.error(err.stack);
  process.exit(1);
});

export default server;
