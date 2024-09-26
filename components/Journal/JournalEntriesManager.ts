import {JournalEntry} from "@/components/Journal/JournalEntry";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class JournalEntriesManager {
    static entries: JournalEntry[] = []
    private static entriesKey = "journalEntries";

    public static init = async () => {
        const stored = await AsyncStorage.getItem(JournalEntriesManager.entriesKey);

        if (stored !== null)
            JournalEntriesManager.entries = JSON.parse(stored);
    }

    private static getIndexIfExists = (title: string): number => {
        for (let i = 0; i < JournalEntriesManager.entries.length; i++) {
            if (title === JournalEntriesManager.entries[i].title) return i;
        }
        return -1;
    }

    public static removeEntry = async (title: string) => {
        const index = JournalEntriesManager.getIndexIfExists(title);

        JournalEntriesManager.entries.splice(index, 1);
        await AsyncStorage.setItem(JournalEntriesManager.entriesKey, JSON.stringify(JournalEntriesManager.entries))
    }

    // Checks whether there's an entry with the same title
    // If there is, it replaces it, pushes otherwise
    public static inputEntry = async (entry: JournalEntry) => {
        const index = JournalEntriesManager.getIndexIfExists(entry.title)

        if (index >= 0)
            JournalEntriesManager.entries[index] = entry;
        else
            JournalEntriesManager.entries.push(entry)
        await AsyncStorage.setItem(JournalEntriesManager.entriesKey, JSON.stringify(JournalEntriesManager.entries))
    }
}
