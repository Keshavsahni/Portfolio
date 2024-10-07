const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
      answer: 'Jupiter',
    },
    {
      question: 'Which country won the FIFA World Cup in 2018?',
      options: ['Brazil', 'Germany', 'France', 'Argentina'],
      answer: 'France',
    },
    {
      question: 'What is the tallest mountain in the world?',
      options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
      answer: 'Mount Everest',
    },
    {
      question: 'Which is the largest ocean on Earth?',
      options: [
        'Pacific Ocean',
        'Indian Ocean',
        'Atlantic Ocean',
        'Arctic Ocean',
      ],
      answer: 'Pacific Ocean',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Cu', 'Fe'],
      answer: 'Au',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: [
        'Pablo Picasso',
        'Vincent van Gogh',
        'Leonardo da Vinci',
        'Michelangelo',
      ],
      answer: 'Leonardo da Vinci',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
      answer: 'Mars',
    },
    {
      question: 'What is the largest species of shark?',
      options: [
        'Great White Shark',
        'Whale Shark',
        'Tiger Shark',
        'Hammerhead Shark',
      ],
      answer: 'Whale Shark',
    },
    {
      question: 'Which animal is known as the King of the Jungle?',
      options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
      answer: 'Lion',
    },
  ];

  const quizContainer=document.querySelector(".quiz");
  const resultContainer=document.querySelector(".result");
  const submitBtn=document.getElementById("submit");
  const restartBtn=document.getElementById("restart");
  const resultBtn=document.getElementById("result");
  const prevBtn=document.getElementById("prev");

  let currentQuestion=0;
  let score=0;
  function showQuestions(){
    const questionData=quizData[currentQuestion];
    const quizElement=document.createElement('div');
    quizElement.className="question";
    quizElement.innerHTML=questionData.question;
    const optionElement=document.createElement('div');
    optionElement.className="options";
    const optionsIdx= [...questionData.options];
    for(let i=0; i<optionsIdx.length;i++){
      const option1=document.createElement('label');
      option1.className="option";
      const radio=document.createElement('input');
      radio.type="radio";
      radio.name="quiz";
      radio.value=optionsIdx[i];

      const optionTxt=document.createTextNode(optionsIdx[i]);
      option1.appendChild(radio);
      option1.appendChild(optionTxt);
      optionElement.appendChild(option1);
    }
    quizContainer.innerHTML=' ';
    quizContainer.appendChild(quizElement);
    quizContainer.appendChild(optionElement);
  }
  function checkAnswers(){
    let selectData=document.querySelector('input[name="quiz"]:checked');
    if(selectData){
      const answer=selectData.value;
      if(answer==quizData[currentQuestion].answer){
        score++;
      }
      else{
        alert(`That's wrong! The correct answer is ${quizData[currentQuestion].answer}`);
      }
      currentQuestion++;
      selectData=false;
      if(currentQuestion<quizData.length){
        showQuestions();
      }
    }
    prevBtn.classList.remove("hide");
  }
  function showResult(){
    quizContainer.style.display="none";
    resultContainer.style.display="block";
    resultContainer.innerHTML=`your score is ${score} out of ${quizData.length}<br><br><br><br><br><br><br><br><br><br><br>`;
    submitBtn.classList.add("hide");
    resultBtn.classList.remove("hide");
    restartBtn.classList.remove("hide");
  }
  function restart(){
    currentQuestion=0;
    score=0;
    resultContainer.style.display="none";
    quizContainer.style.display="block";
    restartBtn.classList.add("hide");
    // resultContainer.innerHTML = '';
    showQuestions();
  }
  
  submitBtn.addEventListener("click",checkAnswers);
  resultBtn.addEventListener("click",showResult);
  restartBtn.addEventListener("click",restart);
  showQuestions();
  