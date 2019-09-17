import API from "./data.js";
import renderJournalEntries from "./entriesDOM.js";

API.getJournalEntries().then(results => {
  renderJournalEntries(results);
});
