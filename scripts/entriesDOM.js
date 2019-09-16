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
