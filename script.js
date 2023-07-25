// Questions that will be asked
const Questions = [
	{
		q: "1. پایتخت ایران چیست؟",
		a: [
			{ text: "1. گرگان", isCorrect: false },
			{ text: "2. شیراز", isCorrect: false },
			{ text: "3. تهران", isCorrect: true },
			{ text: "4. اصفحان", isCorrect: false }
		]
	},
	{
		q: "2. پایتخت آمریکا چیست؟",
		a: [
			{ text: "1. نیوجرسی", isCorrect: false },
			{ text: "2. لس آنجلس", isCorrect: false },
			{ text: "3. فیلادلفیا", isCorrect: false },
			{ text: "4. واشنگتن", isCorrect: true }
		]
	},
	{
		q: "3. پایتخت آلمان چیست؟",
		a: [
			{ text: "1. مونیخ", isCorrect: false },
			{ text: "2. شیکاگو", isCorrect: false },
			{ text: "3. برلین", isCorrect: true },
			{ text: "4. فرانکفورت", isCorrect: false }
		]
	},
    {
		q: "4. پایتخت کره جنوبی چیست؟",
		a: [
			{ text: "1. بوسان", isCorrect: false },
			{ text: "2. سئول", isCorrect: true },
			{ text: "3. دائجو", isCorrect: false },
			{ text: "4. اینچئون", isCorrect: false }
		]
	},
    {
		q: "5. پایتخت ژاپن چیست؟",
		a: [
			{ text: "1. توکیو", isCorrect: true },
			{ text: "2. یوکوهاما", isCorrect: false },
			{ text: "3. اوساکا", isCorrect: false },
			{ text: "4. هیروشیما", isCorrect: false }
		]
	},
    {
		q: "6. پایتخت سوئیس چیست؟",
		a: [
			{ text: "1. ژنو", isCorrect: false },
			{ text: "2. برن", isCorrect: true },
			{ text: "3. زوریخ", isCorrect: false },
			{ text: "4. گلاروس", isCorrect: false }
		]
	},
    {
		q: "7. پایتخت چین چیست؟",
		a: [
			{ text: "1. شانگهای", isCorrect: false },
			{ text: "2. هنگ کنگ", isCorrect: false },
			{ text: "3. پکن", isCorrect: true },
			{ text: "4. ووهان", isCorrect: false }
		]
	},
    {
		q: "8. پایتخت روسیه چیست؟",
		a: [
			{ text: "1. سن پترزبورگ", isCorrect: false },
			{ text: "2. نووسیبیرسک", isCorrect: false },
			{ text: "3. پسکوف", isCorrect: false },
			{ text: "4. مسکو", isCorrect: true }
		]
	},
    {
		q: "9. پایتخت انگلیس چیست؟",
		a: [
			{ text: "1. لندن", isCorrect: true },
			{ text: "2. منچستر", isCorrect: false },
			{ text: "3. لیورپول", isCorrect: false },
			{ text: "4. کمبریج", isCorrect: false }
		]
	},
    {
		q: "10. پایتخت فرانسه چیست؟",
		a: [
			{ text: "1. مارسی", isCorrect: false },
			{ text: "2. پاریس", isCorrect: true },
			{ text: "3. لیون", isCorrect: false },
			{ text: "4. استراسبورگ", isCorrect: false }
		]
	}
]

let currQuestion = 0
let score = 0

function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""

    for (let i = 0; i < Questions[currQuestion].a.length; i++) {

		const choicesdiv = document.createElement("div");
        choicesdiv.setAttribute('class','container_options_option')

		const choice = document.createElement("input");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;
		choice.id = `answer${i}`;

		const choiceLabel = document.createElement("label");

		choiceLabel.setAttribute('for',`answer${i}`);
		choiceLabel.setAttribute('class','container_options_option-label');
		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {

	const totalScore = document.getElementById("score")

    const headingOfScore = document.createElement('h3')

    totalScore.appendChild(headingOfScore);

    headingOfScore.setAttribute('id','score-h3')
    headingOfScore.textContent = `شما از ${Questions.length} سوال، به ${score} سوال جواب درست را داده اید`

    Questions.forEach((line,index) => {

        const quesDiv = document.createElement('div');
        quesDiv.setAttribute('class','container_question');
        quesDiv.innerHTML += Questions[index].q;

        const ansDiv = document.createElement('div');
        ansDiv.setAttribute('class','container_options');
        
        const spanOpt = document.createElement('span')
		spanOpt.setAttribute('class','container_options_option-label')
		spanOpt.setAttribute('class','container_options_option-label')


		for (let i = 0; i < Questions[index].a.length; i++) {

			const spanOpt = document.createElement('span')
			spanOpt.setAttribute('class','container_options_option-span')
			spanOpt.setAttribute('id',`spanid${index}-${i}`)

            spanOpt.textContent += Questions[index].a[i].text;

			ansDiv.appendChild(spanOpt);

        }

        totalScore.appendChild(quesDiv);
        totalScore.appendChild(ansDiv);

    }) 

	for (let i = 0; i < Questions.length; i++ ) {

		if (Questions[i].a[0].isCorrect === true) {

			document.getElementById(`spanid${i}-0`).style.color = 'green'

			if (answerTrueOrFalse.ATOF[i] === 1) {
				document.getElementById(`spanid${i}-1`).style.color = 'red'
			} else if (answerTrueOrFalse.ATOF[i] === 2) {
				document.getElementById(`spanid${i}-2`).style.color = 'red'
			} else if (answerTrueOrFalse.ATOF[i] === 3) {
				document.getElementById(`spanid${i}-3`).style.color = 'red'
			}

		} else if (Questions[i].a[1].isCorrect === true) {

			document.getElementById(`spanid${i}-1`).style.color = 'green'

			if (answerTrueOrFalse.ATOF[i] === 0) {
				document.getElementById(`spanid${i}-0`).style.color = 'red'
			} else if (answerTrueOrFalse.ATOF[i] === 2) {
				document.getElementById(`spanid${i}-2`).style.color = 'red'
			} else if (answerTrueOrFalse.ATOF[i] === 3) {
				document.getElementById(`spanid${i}-3`).style.color = 'red'
			}
		
		} else if (Questions[i].a[2].isCorrect === true) {

			document.getElementById(`spanid${i}-2`).style.color = 'green'

			if (answerTrueOrFalse.ATOF[i] === 0) {
				document.getElementById(`spanid${i}-0`).style.color = 'red'
			} else if (answerTrueOrFalse.ATOF[i] === 1) {
				document.getElementById(`spanid${i}-1`).style.color = 'red'
			} else if (answerTrueOrFalse.ATOF[i] === 3) {
				document.getElementById(`spanid${i}-3`).style.color = 'red'
			}

		} else if (Questions[i].a[3].isCorrect === true) {

			document.getElementById(`spanid${i}-3`).style.color = 'green'

			if (answerTrueOrFalse.ATOF[i] === 0) {
				document.getElementById(`spanid${i}-0`).style.color = 'red'
			} else if (answerTrueOrFalse.ATOF[i] === 1) {
				document.getElementById(`spanid${i}-1`).style.color = 'red'
			} else if (answerTrueOrFalse.ATOF[i] === 2) {
				document.getElementById(`spanid${i}-2`).style.color = 'red'
			}
		}
	}
}

function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}
let atof = [];
let answerTrueOrFalse = { ATOF: atof };

function checkAns() {

	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		nextQuestion();
	} else {
		nextQuestion();
	}

    answerTrueOrFalse.ATOF.push(selectedAns)
    localStorage.setItem('correctAnswer',JSON.stringify(answerTrueOrFalse.ATOF))
}