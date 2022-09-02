function addTweet() {
  const tweetInput = document.getElementById("tweet-input").value;
  const tweetsContainer = document.getElementById("tweet-list");
  const divElem = document.createElement("div");
  divElem.innerText = tweetInput;
  tweetsContainer.appendChild(divElem);
  document.getElementById("tweet-input").value = "";
}

