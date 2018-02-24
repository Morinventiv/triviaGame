$('document').ready(function () {

	var questionsArray = [
		{
			id: 1,
			text: "What color is the sky?",
			answers: ["blue", "red", "green", "yellow"],
			correct: "blue"
		},
		{
			id: 2,
			text: "What color is the grass?",
			answers: ["blue", "red", "green", "yellow"],
			correct: "green"
		},
		{
			id: 3,
			text: "What color is a banana?",
			answers: ["blue", "red", "green", "yellow"],
			correct: "yellow"
		},
		{
			id: 4,
			text: "What color is a fire engine?",
			answers: ["blue", "red", "green", "yellow"],
			correct: "red"
		},
		{
			id: 5,
			text: "What color is the ocean?",
			answers: ["blue", "red", "green", "yellow"],
			correct: "blue"
		},
	];

	var qIndex = 0;
	var currentObj;
	var selectedAnswer;
	var timer = 10;
	var intervalId;

	function runTimer() {
		clearInterval(intervalId);
		intervalId = setInterval(decrement, 1000);
	}
	$("#show-timer").html("<h2>" + timer + "</h2>");
	function decrement() {
		timer--;
		 //  Show the number in the #show-number tag.
		 $("#show-timer").html("<h2>" + timer + "</h2>");


		 //  Once number hits zero...
		 if (timer === 0) {

			 //  ...run the stop function.
			 stop();

			 //  Alert the user that time is up.
			 alert("Time Up!");
		 }
	}

	//displays current question on 'start' click
	function currentQuestion() {
		currentObj = questionsArray[qIndex];
		$('#start-button').on('click', function () {
			var currentQuestion = $('#question-span');
			currentQuestion.html(currentObj.text);
			runTimer();

			//loops through the current questions answers
			for (let i = 0; i < currentObj.answers.length; i++) {
				var answersDiv = $('<input type="radio" name="answerRadio" value="' + currentObj.answers[i] + '"/>  ' + currentObj.answers[i] + '</input><br>');
				var answers = $('#answers-span').append(answersDiv);
			}

			
		})
	};

	//saves clicked answer to variable

	$('#answers-span').on('click', function() {
		// alert('click works');
		// alert($(this).val());
		// console.log(selectedAnswer);
		var x = document.getElementsByName('answerRadio').value;
		console.log(x);
	});
	



	//submit function to advance to the next qustion


	//runs functions
	currentQuestion();












	//closing for document.ready
});
