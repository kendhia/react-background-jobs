const startBackgroundJob = async (bridgeOperations) => {
  try {
    const value = await bridgeOperations.startBackgroundJob();
    return `Job started.`;
  } catch (e) {
    throw (new Error(e));
  }
};

export default startBackgroundJob;