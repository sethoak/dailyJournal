

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

const renderJournalEntries = entries => {
  for (i = 0; i < entries.length; i++) {
    document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(
      entries[i]
    );
    console.log(entries[i]);
  }
};

//write a for each for each journal entry to be set equal to

console.log(renderJournalEntries, "renderJournalEntries");

// Invoke the render journal entries
renderJournalEntries(journalEntry);
