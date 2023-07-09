const quizData = [{
	question: "WHO IS THE FATHER OF COMPUTER ?",
	a: "CHARLES BABBAGE",
	b: "WILLIAM SHAKESPEARE",
	c: "SRINIVAS RAMANUJAN",
	d: "RATAN TATA",
	correct: "a",
}, {
	question: "WHO IS THE FOUNDER OF spaceX ?",
	a: "ELON MUSK",
	b: "NIKOLAS TESLA",
	c: "SUNDAR PICHAI",
	d: "RAHUL DRAVID",
	correct: "a",
}, {
	question: "WHICH IS THE NATIONAL ANIMAL OF AUSTRALIA ?",
	a: "LION",
	b: "TIGER",
	c: "KANGAROO",
	d: "ELEPHANT",
	correct: "c",
}, {
	question: "1=3, 2=3, 3=5, 4=4, 5=??",
	a: "5",
	b: "6",
	c: "3",
	d: "4",
	correct: "d",
}, {
	question: "EXPAND CSS",
	a: "CASCADING STYLE SHEETS",
	b: "CPROGRAMMED STYLE SHEETS",
	c: "CENTRAL SIMPLE SHEETS",
	d: "CENTRAL SUBWAY STATION",
	correct: "a",
}];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitid = document.getElementById("submit");
const scoreid = document.getElementById("score");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
	answerElements.forEach((answer) => (answer.checked = false));
};

const loadQuiz = () => {
	deselectAnswers();
	const currentQuizData = quizData[currentQuiz];
	questionElement.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
};

const getSelected = () => {
	let ans;
	answerElements.forEach((i) => {
		if (i.checked)
			ans = i.id;
	});
	return ans;
};

loadQuiz();
submitid.addEventListener("click", () => {
	const answer = getSelected();
	if (answer) {
		if (answer === quizData[currentQuiz].correct)
			score++;
		currentQuiz++;
		if (currentQuiz < quizData.length)
			loadQuiz();
		else {
			quiz.innerHTML = `<h2> You answered ${score}/${quizData.length} questions correctly </h2>
		<button onclick = "history.go(0)"> Play Again! </button>`
		}
	}
});

scoreid.addEventListener("click", () => {
	alert("YOUR SCORE NOW IS " + score);
});
