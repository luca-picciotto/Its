export const cloneString = (obj) => {
  if (obj === null || typeof obj !== "object") return obj;

  const copy = Array.isArray(obj) ? [] : {};

  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "string") {
      copy[key] = value;
    } else if (typeof value === "object" && value !== null) {
      copy[key] = cloneString(value);
    }
  });
  return copy;
};
