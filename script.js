document.addEventListener("DOMContentLoaded", function() {
  // Hide nitro code container initially
  document.getElementById("nitroCodeContainer").style.display = "none";
});

document.getElementById("generateButton").addEventListener("click", function() {
  // Change the container content
  document.querySelector('.container').innerHTML = `
    <div class="discord-style">
      <div id="nitroCodeContainer">
        <h2>Your Nitro Code:</h2>
        <div id="nitroCode">ITHykUBu8ub1QuvD</div>
        <button id="copyButton">Copy</button>
      </div>
      <div id="message" style="display: none;">Are you fucking dumb bro this is not real💀</div>
    </div>
  `;

  // Show nitro code container after generating Nitro code
  document.getElementById("nitroCodeContainer").style.display = "block";

  // Attach copy function to the copy button
  document.getElementById("copyButton").addEventListener("click", function() {
    // Hide nitro code and show "Are you fucking dumb bro" text
    document.getElementById("nitroCodeContainer").style.display = "none";
    document.getElementById("message").style.display = "block";
  });
});
