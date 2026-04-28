var questionCount = 0; //Store the number of answers clicked on
//Storing scores for potential results
var amGeniusScore = 0;
var hardBoiledScore = 0;
var brillEccScore = 0;
var postModScore = 0;

//Storing HTML elements using the DOM
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q8a3 = document.getElementById("q8a3");
var q8a4 = document.getElementById("q8a4");

var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");
var q9a3 = document.getElementById("q9a3");
var q9a4 = document.getElementById("q9a4");

var q10a1 = document.getElementById("q10a1");
var q10a2 = document.getElementById("q10a2");
var q10a3 = document.getElementById("q10a3");
var q10a4 = document.getElementById("q10a4");

//Restart button
var restart = document.getElementById("restart");

// Listen for click on answer buttons and call function if clicked
restart.addEventListener("click", restartQuiz);

q1a1.addEventListener("click", brillEcc);
q1a2.addEventListener("click", amGenius);
q1a3.addEventListener("click", hardBoiled);
q1a4.addEventListener("click", postMod);

q2a1.addEventListener("click", hardBoiled);
q2a2.addEventListener("click", postMod);
q2a3.addEventListener("click", amGenius);
q2a4.addEventListener("click", brillEcc);

q3a1.addEventListener("click", postMod);
q3a2.addEventListener("click", hardBoiled);
q3a3.addEventListener("click", amGenius);
q3a4.addEventListener("click", brillEcc);

q4a1.addEventListener("click", amGenius);
q4a2.addEventListener("click", hardBoiled);
q4a3.addEventListener("click", brillEcc);
q4a4.addEventListener("click", postMod);

q5a1.addEventListener("click", amGenius);
q5a2.addEventListener("click", brillEcc);
q5a3.addEventListener("click", postMod);
q5a4.addEventListener("click", hardBoiled);

q6a1.addEventListener("click", postMod);
q6a2.addEventListener("click", amGenius);
q6a3.addEventListener("click", brillEcc);
q6a4.addEventListener("click", hardBoiled);

q7a1.addEventListener("click", postMod);
q7a2.addEventListener("click", hardBoiled);
q7a3.addEventListener("click", amGenius);
q7a4.addEventListener("click", brillEcc);

q8a1.addEventListener("click", hardBoiled);
q8a2.addEventListener("click", brillEcc);
q8a3.addEventListener("click", postMod);
q8a4.addEventListener("click", amGenius);

q9a1.addEventListener("click", brillEcc);
q9a2.addEventListener("click", amGenius);
q9a3.addEventListener("click", hardBoiled);
q9a4.addEventListener("click", postMod);

q10a1.addEventListener("click", amGenius);
q10a2.addEventListener("click", brillEcc);
q10a3.addEventListener("click", postMod);
q10a4.addEventListener("click", hardBoiled);


// Track scores and check if quiz is complete
function amGenius() {
  amGeniusScore += 1;
  questionCount += 1;
  if (questionCount == 10) {
    console.log("The quiz is done!")
    updateResult();
  }
}
function hardBoiled() {
  hardBoiledScore += 1;
  questionCount += 1;
  if (questionCount == 10) {
    console.log("The quiz is done!")
    updateResult();
  }
}
function brillEcc() {
  brillEccScore += 1;
  questionCount += 1;
  if (questionCount == 10) {
    console.log("The quiz is done!")
    updateResult();
  }
}
function postMod() {
  postModScore += 1;
  questionCount += 1;
  if (questionCount == 10) {
    console.log("The quiz is done!")
    updateResult();
  }
}

// Update quiz result
function updateResult() {
  // Calculate percentages inside the function
  var amGeniusPercent = (amGeniusScore / 10) * 100;
  var hardBoiledPercent = (hardBoiledScore / 10) * 100;
  var brillEccPercent = (brillEccScore / 10) * 100;
  var postModPercent = (postModScore / 10) * 100;

  var resultDiv = document.getElementById("result");
  var resultHTML = "";
  
  //Determine the highest score
  if (amGeniusPercent > hardBoiledPercent && amGeniusPercent > brillEccPercent && amGeniusPercent > postModPercent) {
    resultHTML = `
      <h4>You are The Amateur Genius!</h4>
      <img src="assets/cap.webp" class= "resultimg" alt="Captain America">
      <p>Captain America is the leader with a strong moral compass and an unyielding sense of duty, always putting others before yourself. You stand for justice and always fight for what's right!</p>
    `;
    console.log("You are " + amGeniusPercent + "% The Amateur Genius");
    console.log("You are " + brillEccPercent + "% The Brilliant Eccentric");
    console.log("You are " + hardBoiledPercent + "% The Hard-Boiled PI");
    console.log("You are " + postModPercent + "% The Unreliable Postmodernist");
  } 
  else if (hardBoiledPercent > amGeniusPercent && hardBoiledPercent > brillEccPercent && hardBoiledPercent > postModPercent) {
    resultHTML = `
      <h4>You are The Hard-Boiled PI!</h4>
      <img src="assets/iron_man.webp" class="resultimg" alt="Iron Man">
      <p>Iron Man is a brilliant inventor and a quick thinker, making you a natural problem-solver. You're charismatic, confident, and always ready to save the day with your genius!</p>
    `;
    console.log("You are " + amGeniusPercent + "% The Amateur Genius");
    console.log("You are " + brillEccPercent + "% The Brilliant Eccentric");
    console.log("You are " + hardBoiledPercent + "% The Hard-Boiled PI");
    console.log("You are " + postModPercent + "% The Unreliable Postmodernist");
  } 
  else if (brillEccPercent > amGeniusPercent && brillEccPercent > hardBoiledPercent && brillEccPercent > postModPercent) {
    resultHTML = `
    <h4>You are The Brilliant Eccentric!</h4>
    <img src="assets/thor.jpg" class="resultimg" alt="Thor">
    <p>A powerful warrior with a noble heart, you’re as fearless in battle as you are loyal to your friends. Your strength and determination inspire all.</p>
    `;
    console.log("You are " + amGeniusPercent + "% The Amateur Genius");
    console.log("You are " + brillEccPercent + "% The Brilliant Eccentric");
    console.log("You are " + hardBoiledPercent + "% The Hard-Boiled PI");
    console.log("You are " + postModPercent + "% The Unreliable Postmodernist");
  }
  else if (postModPercent > amGeniusPercent && postModPercent > brillEccPercent && postModPercent > hardBoiledPercent) {
    resultHTML = `
    <h4>You are The Unreliable Postmodernist!</h4>
    <img src="assets/spider_man.webp" class="resultimg" alt="Spider-Man">
    <p>Witty, resourceful, and full of heart, you thrive under pressure and never back down from a challenge. You balance responsibility with a sense of humor. No matter how tough life gets, you always rise to protect others, proving that anyone can be a hero with the right mindset.</p>
    `;
    console.log("You are " + amGeniusPercent + "% The Amateur Genius");
    console.log("You are " + brillEccPercent + "% The Brilliant Eccentric");
    console.log("You are " + hardBoiledPercent + "% The Hard-Boiled PI");
    console.log("You are " + postModPercent + "% The Unreliable Postmodernist");
  }
  else if (amGeniusPercent == postModPercent || amGeniusPercent == brillEccPercent|| amGeniusPercent == hardBoiledPercent || postModPercent == brillEccPercent || brillEccPercent == hardBoiledPercent) {
    resultHTML = `
    <h4>You are a combination of multiple detective archetypes!</h4>
    <p>You display attributes from two or more detective archetypes, showing your versatility and unique blend of qualities that make you quite a unique investigator. See below for more details!</p>
    `;
  }
  // Add percentages for all characters
  resultHTML += `
    <br>
    <h5>Your Results:</h5>
    <ul>
      <li>Amateur Genius: ${amGeniusPercent}%</li>
      <li>Unreliable Postmodernist: ${postModPercent}%</li>
      <li>Brilliant Eccentric: ${brillEccPercent}%</li>
      <li>Hard-Boiled PI: ${hardBoiledPercent}%</li>
    </ul>
    <br>
  `;

  resultDiv.innerHTML = resultHTML;
}
//Restart Quiz
function restartQuiz() {
  resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";  // Clears the displayed results
  questionCount = 0; 
  amGeniusScore = 0;
  postModScore = 0;
  brillEccScore = 0;
  hardBoiledScore = 0;
}