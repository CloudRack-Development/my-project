const { exec } = require('child_process');
const path = require('path');

const backendPath = path.join(__dirname, 'backend');
const frontendPath = path.join(__dirname, 'frontend');

// Install npm dependencies for backend
exec(`cd ${backendPath} && npm install`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error installing backend dependencies: ${err}`);
    return;
  }
  console.log(stdout);

  // Start backend server with pm2
  exec(`cd ${backendPath} && pm2 start server.js`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error starting backend server with pm2: ${err}`);
      return;
    }
    console.log(stdout);
  });
});

// Install npm dependencies for frontend
exec(`cd ${frontendPath} && npm install`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error installing frontend dependencies: ${err}`);
    return;
  }
  console.log(stdout);

  // Start frontend server with pm2
  exec(`cd ${frontendPath} && npm start`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error starting frontend server with pm2: ${err}`);
      return;
    }
    console.log(stdout);
  });
});
