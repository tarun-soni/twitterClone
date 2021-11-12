export const wait = (timeout: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, timeout))
