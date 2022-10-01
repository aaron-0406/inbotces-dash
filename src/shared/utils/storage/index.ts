export const convertJson = (text: string) => {
  try {
    JSON.parse(text)
  } catch (e) {
    return false
  }
  return true
}

const storageHandler = () => {
  const setItemTransfrom = <T>(value: T) => {
    return JSON.stringify(value)
  }

  const getItem = <T>(key: string): T | null => {
    try {
      const rawData = localStorage.getItem(key)
      if (!rawData) return null

      return convertJson(rawData) ? (JSON.parse(rawData) as T) : (rawData as unknown as T)
    } catch (err) {
      return err as unknown as T
    }
  }

  const setItem = <T>(key: string, value: T) => {
    return localStorage.setItem(key, setItemTransfrom<typeof value>(value))
  }

  const removeItem = (key: string) => {
    localStorage.removeItem(key)
  }

  const clearItems = () => {
    localStorage.clear()
  }

  return {
    get: getItem,
    set: setItem,
    remove: removeItem,
    clear: clearItems,
  }
}

const storage = storageHandler()
export default storage
