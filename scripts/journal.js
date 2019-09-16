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

/*
Here we are creating a variable equal to 'entries'. And we are running 'entries' into a function. This is a for loop function.
We are taking 'i' and setting it equal to 0 on an array. We are also stating that 'i' when less than to the 'entries' length then we are adding 1 to 'i'.
You have to run this for loop function nested inside for this example to work. After this is declared we are running another function (inside a function) (ex I move my knee
  therefore my muscles flex) to target the DOM element of the 'document' and running a querySelector to find the class of '.entryLog'. and then we are targetting the
  innerHTML to 'add to what we have' (+=) and set it to us pushing a journal entry into a specific part of the html and adding to the continous journal entries added. 
  we are setting an arguement that 'entries' is taking an arguement of 'i' in a string format (see database). Then we log the entries.
*/
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
