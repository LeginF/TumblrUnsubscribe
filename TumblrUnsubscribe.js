let entries = document.querySelectorAll(".Ut4iZ.eXQ6G.veU9u");
let unfollowed = false;

do {
    console.log('looping');
    unfollowed = false;
// Loop through all entries
for (let i = 0; i < entries.length; i++) {
  let entry = entries[i];

  // Find the div element with class "fTJAC" inside this entry
  let updatedText = entry.querySelector(".fTJAC");

  // Check if the updated text contains "Updated x years ago" where x is between 2 and 10
  if (updatedText && updatedText.innerText.match(/Updated ([2-9]|10) years ago/)) {
    // Find the unfollow button inside this entry
    let unfollowButton = entry.querySelector(".EvhBA.f68ED");

     unfollowed = true;
    // Click the unfollow button with a delay of 200ms
    if (unfollowButton) {
      console.log(`unfollowing ${i}`);
      setTimeout(() => {
        unfollowButton.click();
      }, 500* i);
    }
  } else {
    console.log(`skipping ${i}`);
  }
}
    console.log(`unfollowed is ${unfollowed}`)
} while (unfollowed === true);