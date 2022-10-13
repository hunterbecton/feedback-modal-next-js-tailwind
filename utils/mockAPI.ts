export const mockAPI = (success: boolean, timeout: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('There was an error processing your request.'));
      }
    }, timeout);
  });
};
