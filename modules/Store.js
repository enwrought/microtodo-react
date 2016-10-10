import { AsyncStorage } from 'react-native';

export const KEYS = {
  TASKS: 'tasks',
  SETTINGS: 'settings'
};

export default function saveTasks(taskProps) {
  AsyncStorage.setItem(KEYS.TASKS, JSON.stringify(taskProps));
}

export function loadTasks() {
  const value = AsyncStorage.getItem(KEYS.TASKS) || '[]';
  return JSON.parse(value);
}

// TODO: handle settings
// export const function saveSettings
