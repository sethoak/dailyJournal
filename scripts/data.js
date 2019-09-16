//Part 4

/*
Creating a variable called API and running it equal to a function:
journalEntries is what we defined what the journal entries were (including date, mood, subject, and entry) in a typical journal entry one would produce.
The : is unknown to me at the momeent, but we're running another function that is returning a fetch command. And for this example, it's to our localhost (laptop) and targetting
the 'journalEntries' (see above) as the information we are going to use for this function. We are 'then' telling the function/action to take the 'response' and parse the information
into json (a computer language). We are 'then' telling the function to have journalEntries to be run as a function into renderJournalEntries. This function is explained as above.

*/
const API = {
  journalEntries: () => {
    return fetch("http://localhost:3000/journalEntries")
      .then(response => response.json())
      .then(journalEntries => renderJournalEntries(journalEntries));
  }
};

API.journalEntries();
