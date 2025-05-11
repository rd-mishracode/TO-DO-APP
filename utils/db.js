import { openDB } from 'idb';

const DB_NAME = 'todoApp';
const STORE_NAME = 'todos';

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
};

export const saveTodosToDB = async (todos) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);

  // Clear the store before saving fresh data
  const allKeys = await store.getAllKeys();
  for (const key of allKeys) {
    await store.delete(key);
  }

  for (const todo of todos) {
    await store.put(todo);
  }

  await tx.done;
};

export const getTodosFromDB = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};
