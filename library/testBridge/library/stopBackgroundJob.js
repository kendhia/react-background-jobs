const stopBackgroundJob = async (bridgeOperations) => {
  try {
    const value = await bridgeOperations.stopBackgroundJob();
    return `Job stopped.`;
  } catch (e) {
    throw (new Error(e));
  }
};

export default stopBackgroundJob;