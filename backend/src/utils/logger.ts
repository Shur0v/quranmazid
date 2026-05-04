export const logger = {
  info: (...args: unknown[]) => console.log("[backend]", ...args),
  error: (...args: unknown[]) => console.error("[backend]", ...args),
};
