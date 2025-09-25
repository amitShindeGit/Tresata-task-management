export function formatDate(date: Date): string {
  date = new Date(date);
  if (isNaN(date.getTime())) {
    return "-"; // invalid date
  }

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayName = days[date.getDay()];
  const dayNumber = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayName} ${dayNumber}, ${monthName} ${year}`;
}

// utils/storage.ts
/**
 * Store any JSON-serializable data in localStorage
 * @param key The storage key
 * @param data The data to store (array, object, etc.)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setJsonData = (key: string, data: any): void => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    console.error(`Error saving to localStorage key "${key}":`, error);
  }
};

/**
 * Retrieve JSON data from localStorage
 * @param key The storage key
 * @returns Parsed data or null if not found
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getJsonData = (key: string): any | null => {
  try {
    const jsonData = localStorage.getItem(key);
    if (!jsonData) return null;
    return JSON.parse(jsonData);
  } catch (error) {
    console.error(`Error reading from localStorage key "${key}":`, error);
    return null;
  }
};

/**
 * Remove data from localStorage
 * @param key The storage key
 */
export const removeJsonData = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error);
  }
};

/**
 * Clear all data from localStorage
 */
export const clearStorage = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Error clearing localStorage:", error);
  }
};
