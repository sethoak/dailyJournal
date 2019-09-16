//Journal Part 3

const entryTags = ["date", "mood", "subject", "entry"];

const makeJournalEntryComponent = journalEntry => {
  // Create your own HTML structure for a journal entry
  return `
    <div>
    <ul>
      <li>${journalEntry.date}</li>
      <li>${journalEntry.mood}</li>
      <li>${journalEntry.subject}</li>
      <li>${journalEntry.entry}</li>
    </ul>
    </div>
  `;
};
