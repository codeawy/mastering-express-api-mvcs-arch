// Load environment variables first, before any other imports
import * as dotenv from 'dotenv';
dotenv.config();

import app from './app';
import pc from 'picocolors';

const PORT = parseInt(process.env.PORT || '5000');

// Start server
app.listen(PORT, () => {
  console.log(pc.yellow(`Server running at http://localhost:${PORT}`));
});
