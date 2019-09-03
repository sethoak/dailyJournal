//Journal Part 2
const journalEntry = [
  {
    date: "9/2/2019",
    mood: "One Sad Sally",
    subject: "I tried to use Flex",
    entry:
      "Flex overtook me at the initial lecture. What is fleX? Is it a super hero? I don't know. Outlook drab."
  },
  {
    date: "9/3/2019",
    mood: "Happy as a clam!",
    subject: "I defeated FLEX",
    entry:
      "The day was cold and I was at my wits end. But I learned. Taught myself. And overcame FLEX."
  },
  {
    date: "9/4/2019",
    mood: "I feel nothing. Therefore I am nothing",
    subject: "Javascript",
    entry: "What is this madness? I'm targeting the DOM. THE DOM!"
  }
];

journalEntry.push({
  date: "9/5/2019",
  mood: "No pain, no gain. Right?",
  subject: "THE PAIN",
  entry: "I gained some knowledge with some pain involved."
});

console.log(journalEntry, "journalEntry");



//Journal Part 3

const entryTags = ["date", "mood", "subject", "entry"];

const makeJournalEntryComponent = (journalEntry) {
  // Create your own HTML structure for a journal entry
  return `
    <div class="entryLog">
    <ul>
      <li>${date}</li>
      <li>${mood}</li>
      <li>${subject}</li>
      <li>${entry}</li>
    </ul>
  `};

const renderJournalEntries = entries => {};

// Invoke the render function
renderJournalEntries(journalEntries);
