"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const resultsDiv = $("#results");
const scoresDiv = $("#scores");

/*
	accepts Name and Score. adds new score and new name to their arrays.
	adds new score to the total and calculates the average and highest score. 
*/
let addScore = () =>{
	let name = $("#name");
	let score = $("#score");
	let isValid = true;
	if (name.value == ""){
		isValid = false;
		name.nextElementSibling.textContent = "Please enter a name"
	}else{
		name.nextElementSibling.textContent = "";

	}
	if (score.value < 0 || score.value > 100 || isNaN(score.value) || score.value == ""){
		isValid = false;
		score.nextElementSibling.textContent = "Score must between 0-100";
		
	}else{
		score.nextElementSibling.textContent = "";
	}
	if(isValid == true){
        names.push(name.value);
		scores.push(parseInt(score.value));
		alert("New score submitted.\n" + name.value +" - " + score.value);
		console.log(names);
		console.log(scores);
		name.value = "";
		score.value = "";
		$("#name").focus();
    }

}

/*
	calculates the highest score and the average
	if the resultsDiv does not have a child it will create an h2, and two p elements
	if the child exists, it will replace the p elements with the newly updated array info
*/
let displayResults = () =>{
	let total = 0;
	let highestGrade = 0;
	let highestGradesName = 0;
	for(let score of scores){
		total +=score;
		if(score > highestGrade){
			highestGrade = score;
			highestGradesName = scores.indexOf(score);
		}
	}
	let average = total/scores.length;		
	if (resultsDiv.firstChild == null){
		//add h2 element
		const h2 = document.createElement('h2');
		h2.setAttribute("id", "results_h2");
		resultsDiv.append(h2)
		const p = document.createElement('p');
		const p2 = document.createElement('p');
		//then add the text for it "Results"
		h2.textContent = "Results";
		const h2Element = $("#results_h2");
		h2Element.after(p);
		p.after(p2);
		console.log(names);
		console.log(scores);
		p.textContent = (`Average Score = ${average.toFixed(2)}`);
		p2.textContent= (`High score = ${names[highestGradesName]} with a score of ${scores[highestGradesName]}`);
	}else{
		let h2 = resultsDiv.firstChild;
		let p = h2.nextElementSibling;
		p.textContent = (`Average Score = ${average.toFixed(2)}`);
		let p2 = p.nextElementSibling;
		p2.textContent= (`High score = ${names[highestGradesName]} with a score of ${scores[highestGradesName]}`);	
	}
}

let displayScores = () => {
	scoresDiv.textContent = "";
	//add h2 element
	const h2 = document.createElement('h2');
	h2.setAttribute("id", "results_h2");
	scoresDiv.append(h2)
	h2.textContent = "Scores";
	//for loop that will print out the array information into two labels
	for(let index = 0; index < names.length; index++){
		let label = document.createElement('label');
		scoresDiv.append(label);
		console.log(`${names[index]}\t\t${scores[index]}`);
		label.textContent = (names[index]);
		let labelScore = document.createElement('label');
		scoresDiv.append(labelScore);
		labelScore.textContent = (scores[index]);
		let addBreak = document.createElement("br");
		labelScore.after(addBreak);	 
	}
	


}

document.addEventListener("DOMContentLoaded", () => {
	$("#name").focus();
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});