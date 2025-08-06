const logger = {
  log: (message, data) => {
    console.log(`[LOG] ${message}:`, data);
  },
  error: (message, data) => {
    console.error(`[ERROR] ${message}:`, data);
  },
};

export default logger;
