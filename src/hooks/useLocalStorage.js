import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
    // Get from local storage then parse stored json or return initialValue
    const readValue = () => {
        if (typeof window === "undefined") {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            const parsed = item ? JSON.parse(item) : initialValue;
            // Guard against "null" string in storage causing null result
            return parsed === null ? initialValue : parsed;
        } catch (error) {
            console.warn(`Error reading localStorage key “${key}”:`, error);
            return initialValue;
        }
    };

    const [storedValue, setStoredValue] = useState(readValue);

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));

                // Dispatch a custom event so other components (or tabs) can update if needed
                // Note: Storage event only triggers across tabs, not within the same tab/window for the same key update usually.
                // We can use a custom event for same-tab sync if strictly needed, but context is better.
                // For this simple MVP, simple usage is fine.
            }
        } catch (error) {
            console.warn(`Error setting localStorage key “${key}”:`, error);
        }
    };

    useEffect(() => {
        setStoredValue(readValue());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [storedValue, setValue];
}
