const progressBar = document.querySelector(".progress-bar"),
  progressText = document.querySelector(".progress-text");

const progress = (value) => {
  const percentage = (value / time) * 100;
  progressBar.style.width = `${percentage}%`;
  progressText.innerHTML = `${value}`;
};

const startBtn = document.querySelector(".start"),
  numQuestions = document.querySelector("#num-questions"),
  category = document.querySelector("#category"),
  difficulty = document.querySelector("#difficulty"),
  timePerQuestion = document.querySelector("#time"),
  quiz = document.querySelector(".quiz"),
  startScreen = document.querySelector(".start-screen");

let questions = [],
  time = 30,
  score = 0,
  currentQuestion,
  timer;

const soalMatematika = {
  easy: [
    {
      question: "Berapakah hasil dari 2 + 3?",
      correct_answer: "5",
      incorrect_answers: ["4", "6", "7"],
    },
    {
      question: "Berapakah hasil dari 10 - 4?",
      correct_answer: "6",
      incorrect_answers: ["5", "7", "8"],
    },
    {
      question: "Berapakah hasil dari 6 + 1?",
      correct_answer: "7",
      incorrect_answers: ["6", "8", "9"],
    },
    {
      question: "Berapakah hasil dari 5 - 2?",
      correct_answer: "3",
      incorrect_answers: ["2", "4", "5"],
    },
    {
      question: "Berapakah hasil dari 3 x 3?",
      correct_answer: "9",
      incorrect_answers: ["6", "8", "12"],
    },
    {
      question: "Berapakah hasil dari 8 ÷ 2?",
      correct_answer: "4",
      incorrect_answers: ["2", "3", "5"],
    },
    {
      question: "Berapakah hasil dari 7 + 2?",
      correct_answer: "9",
      incorrect_answers: ["8", "10", "11"],
    },
    {
      question: "Berapakah hasil dari 9 - 5?",
      correct_answer: "4",
      incorrect_answers: ["3", "5", "6"],
    },
    {
      question: "Berapakah hasil dari 4 + 4?",
      correct_answer: "8",
      incorrect_answers: ["6", "7", "9"],
    },
    {
      question: "Berapakah hasil dari 5 x 1?",
      correct_answer: "5",
      incorrect_answers: ["4", "6", "7"],
    },
    {
      question: "Berapakah hasil dari 6 - 1?",
      correct_answer: "5",
      incorrect_answers: ["4", "3", "6"],
    },
    {
      question: "Berapakah hasil dari 1 + 1?",
      correct_answer: "2",
      incorrect_answers: ["1", "3", "4"],
    },
    {
      question: "Berapakah hasil dari 3 + 6?",
      correct_answer: "9",
      incorrect_answers: ["8", "10", "11"],
    },
    {
      question: "Berapakah hasil dari 8 - 3?",
      correct_answer: "5",
      incorrect_answers: ["4", "6", "7"],
    },
    {
      question: "Berapakah hasil dari 2 x 4?",
      correct_answer: "8",
      incorrect_answers: ["6", "7", "9"],
    },
    {
      question: "Berapakah hasil dari 10 ÷ 2?",
      correct_answer: "5",
      incorrect_answers: ["4", "6", "3"],
    },
    {
      question: "Berapakah hasil dari 7 - 2?",
      correct_answer: "5",
      incorrect_answers: ["4", "6", "3"],
    },
    {
      question: "Berapakah hasil dari 3 + 4?",
      correct_answer: "7",
      incorrect_answers: ["6", "5", "8"],
    },
    {
      question: "Berapakah hasil dari 6 x 1?",
      correct_answer: "6",
      incorrect_answers: ["5", "7", "8"],
    },
    {
      question: "Berapakah hasil dari 2 + 6?",
      correct_answer: "8",
      incorrect_answers: ["7", "6", "9"],
    },
    {
      question: "Berapakah hasil dari 10 - 7?",
      correct_answer: "3",
      incorrect_answers: ["2", "4", "5"],
    },
    {
      question: "Berapakah hasil dari 5 + 3?",
      correct_answer: "8",
      incorrect_answers: ["7", "6", "9"],
    },
    {
      question: "Berapakah hasil dari 9 - 2?",
      correct_answer: "7",
      incorrect_answers: ["6", "8", "5"],
    },
    {
      question: "Berapakah hasil dari 4 x 1?",
      correct_answer: "4",
      incorrect_answers: ["3", "5", "6"],
    },
    {
      question: "Berapakah hasil dari 6 ÷ 3?",
      correct_answer: "2",
      incorrect_answers: ["1", "3", "4"],
    },
    {
      question: "Berapakah hasil dari 7 + 1?",
      correct_answer: "8",
      incorrect_answers: ["6", "7", "9"],
    },
    {
      question: "Berapakah hasil dari 5 - 1?",
      correct_answer: "4",
      incorrect_answers: ["3", "5", "2"],
    },
    {
      question: "Berapakah hasil dari 3 x 2?",
      correct_answer: "6",
      incorrect_answers: ["5", "7", "8"],
    },
    {
      question: "Berapakah hasil dari 8 ÷ 4?",
      correct_answer: "2",
      incorrect_answers: ["1", "3", "4"],
    },
    {
      question: "Berapakah hasil dari 1 + 9?",
      correct_answer: "10",
      incorrect_answers: ["9", "8", "7"],
    },
    {
      question: "Berapakah hasil dari 2 + 2?",
      correct_answer: "4",
      incorrect_answers: ["3", "5", "6"],
    },
    {
      question: "Berapakah hasil dari 10 - 5?",
      correct_answer: "5",
      incorrect_answers: ["4", "6", "7"],
    },
    {
      question: "Berapakah hasil dari 7 x 1?",
      correct_answer: "7",
      incorrect_answers: ["6", "8", "9"],
    },
    {
      question: "Berapakah hasil dari 6 + 3?",
      correct_answer: "9",
      incorrect_answers: ["8", "7", "10"],
    },
    {
      question: "Berapakah hasil dari 4 - 2?",
      correct_answer: "2",
      incorrect_answers: ["1", "3", "4"],
    },
    {
      question: "Berapakah hasil dari 2 x 2?",
      correct_answer: "4",
      incorrect_answers: ["3", "5", "6"],
    },
    {
      question: "Berapakah hasil dari 10 ÷ 5?",
      correct_answer: "2",
      incorrect_answers: ["1", "3", "4"],
    },
    {
      question: "Berapakah hasil dari 3 + 2?",
      correct_answer: "5",
      incorrect_answers: ["4", "6", "7"],
    },
    {
      question: "Berapakah hasil dari 9 - 6?",
      correct_answer: "3",
      incorrect_answers: ["2", "4", "5"],
    },
    {
      question: "Berapakah hasil dari 1 x 1?",
      correct_answer: "1",
      incorrect_answers: ["0", "2", "3"],
    },
  ],
  medium: [
    {
      question: "Jika x = 4 dan y = 3, berapakah nilai dari x * y?",
      correct_answer: "12",
      incorrect_answers: ["7", "8", "10"],
    },
    {
      question: "Berapakah hasil dari 12 ÷ 4?",
      correct_answer: "3",
      incorrect_answers: ["2", "4", "6"],
    },
    {
      question:
        "Sebuah segitiga memiliki panjang sisi 3 cm, 4 cm, dan 5 cm. Apakah jenis segitiga tersebut?",
      correct_answer: "Segitiga siku-siku",
      incorrect_answers: [
        "Segitiga sama sisi",
        "Segitiga sama kaki",
        "Segitiga sembarang",
      ],
    },
    {
      question: "Berapa hasil dari 15 + 6 x 2?",
      correct_answer: "27",
      incorrect_answers: ["42", "36", "21"],
    },
    {
      question: "Jika a = 2 dan b = 5, maka nilai dari a² + b² adalah?",
      correct_answer: "29",
      incorrect_answers: ["25", "30", "27"],
    },
    {
      question:
        "Berapakah keliling dari persegi panjang dengan panjang 10 cm dan lebar 4 cm?",
      correct_answer: "28 cm",
      incorrect_answers: ["26 cm", "30 cm", "24 cm"],
    },
    {
      question: "Berapakah hasil dari 18 ÷ 3 + 2?",
      correct_answer: "8",
      incorrect_answers: ["6", "7", "9"],
    },
    {
      question: "Jika suhu naik dari 24°C menjadi 31°C, berapa kenaikannya?",
      correct_answer: "7°C",
      incorrect_answers: ["6°C", "5°C", "8°C"],
    },
    {
      question: "Berapakah hasil dari 5²?",
      correct_answer: "25",
      incorrect_answers: ["10", "15", "20"],
    },
    {
      question:
        "Jika sebuah lingkaran memiliki diameter 14 cm, berapakah jari-jarinya?",
      correct_answer: "7 cm",
      incorrect_answers: ["14 cm", "28 cm", "10 cm"],
    },
    {
      question:
        "Jika kamu membeli 3 buku seharga Rp20.000 per buku, berapa total harganya?",
      correct_answer: "Rp60.000",
      incorrect_answers: ["Rp40.000", "Rp50.000", "Rp70.000"],
    },
    {
      question: "Jika 3x = 21, maka nilai x adalah?",
      correct_answer: "7",
      incorrect_answers: ["6", "8", "9"],
    },
    {
      question: "Hasil dari 4 x (2 + 3) adalah?",
      correct_answer: "20",
      incorrect_answers: ["16", "24", "12"],
    },
    {
      question: "Berapa hasil dari 100 - 25 x 2?",
      correct_answer: "50",
      incorrect_answers: ["75", "30", "60"],
    },
    {
      question: "Jika 2x + 3 = 11, maka nilai x adalah?",
      correct_answer: "4",
      incorrect_answers: ["3", "5", "6"],
    },
    {
      question: "Rumus luas persegi panjang adalah?",
      correct_answer: "panjang x lebar",
      incorrect_answers: ["sisi x sisi", "alas x tinggi", "π x r²"],
    },
    {
      question:
        "Jika kecepatan mobil adalah 60 km/jam dan berjalan selama 2 jam, berapa jarak yang ditempuh?",
      correct_answer: "120 km",
      incorrect_answers: ["100 km", "140 km", "110 km"],
    },
    {
      question:
        "Sebuah kelas terdiri dari 12 anak laki-laki dan 18 anak perempuan. Berapa total siswa?",
      correct_answer: "30",
      incorrect_answers: ["28", "32", "26"],
    },
    {
      question: "Hasil dari 64 ÷ 8 adalah?",
      correct_answer: "8",
      incorrect_answers: ["6", "7", "9"],
    },
    {
      question: "Jika 2x = 16, maka x adalah?",
      correct_answer: "8",
      incorrect_answers: ["6", "7", "9"],
    },
    {
      question: "Luas dari persegi dengan sisi 6 cm adalah?",
      correct_answer: "36 cm²",
      incorrect_answers: ["30 cm²", "32 cm²", "34 cm²"],
    },
    {
      question: "Berapa hasil dari 2³?",
      correct_answer: "8",
      incorrect_answers: ["6", "9", "12"],
    },
    {
      question:
        "Sebuah toko memberikan diskon 20% dari harga Rp100.000. Berapa harga setelah diskon?",
      correct_answer: "Rp80.000",
      incorrect_answers: ["Rp90.000", "Rp85.000", "Rp70.000"],
    },
    {
      question: "Jika x = 3 dan y = 2, maka nilai dari x² - y² adalah?",
      correct_answer: "5",
      incorrect_answers: ["7", "3", "4"],
    },
    {
      question: "Sebuah kubus memiliki panjang sisi 4 cm. Berapa volumenya?",
      correct_answer: "64 cm³",
      incorrect_answers: ["16 cm³", "32 cm³", "48 cm³"],
    },
    {
      question: "Hasil dari 7² adalah?",
      correct_answer: "49",
      incorrect_answers: ["42", "56", "36"],
    },
    {
      question: "Jika 3x + 2 = 11, maka nilai x adalah?",
      correct_answer: "3",
      incorrect_answers: ["2", "4", "5"],
    },
    {
      question: "Berapa hasil dari (6 + 4) x 2?",
      correct_answer: "20",
      incorrect_answers: ["18", "22", "16"],
    },
    {
      question:
        "Jika sebuah lingkaran memiliki jari-jari 7 cm, berapakah diameternya?",
      correct_answer: "14 cm",
      incorrect_answers: ["10 cm", "12 cm", "16 cm"],
    },
    {
      question: "Rumus keliling lingkaran adalah?",
      correct_answer: "2πr",
      incorrect_answers: ["πr²", "r x r", "πd"],
    },
    {
      question: "Jika 5x = 45, maka x adalah?",
      correct_answer: "9",
      incorrect_answers: ["8", "10", "7"],
    },
    {
      question: "Jika suhu hari ini 25°C dan besok 29°C, berapa selisih suhu?",
      correct_answer: "4°C",
      incorrect_answers: ["3°C", "5°C", "6°C"],
    },
    {
      question: "Luas segitiga dengan alas 10 cm dan tinggi 4 cm adalah?",
      correct_answer: "20 cm²",
      incorrect_answers: ["40 cm²", "24 cm²", "18 cm²"],
    },
    {
      question: "Berapakah hasil dari 9 x 6?",
      correct_answer: "54",
      incorrect_answers: ["56", "58", "52"],
    },
    {
      question: "Berapakah hasil dari 49 ÷ 7?",
      correct_answer: "7",
      incorrect_answers: ["6", "8", "9"],
    },
    {
      question: "Jika x + 5 = 15, maka nilai x adalah?",
      correct_answer: "10",
      incorrect_answers: ["9", "11", "8"],
    },
    {
      question: "Sebuah mobil berjalan 80 km dalam 2 jam. Berapa kecepatannya?",
      correct_answer: "40 km/jam",
      incorrect_answers: ["30 km/jam", "50 km/jam", "60 km/jam"],
    },
    {
      question: "Berapa hasil dari 100 ÷ 10?",
      correct_answer: "10",
      incorrect_answers: ["5", "20", "15"],
    },
    {
      question: "Jika x = 2, y = 3, dan z = 4, maka nilai dari x + y × z?",
      correct_answer: "14",
      incorrect_answers: ["20", "18", "12"],
    },
  ],
  hard: [
    {
      question: "Jika x² = 49, maka nilai x adalah?",
      correct_answer: "7",
      incorrect_answers: ["6", "8", "-7"],
    },
    {
      question: "Berapakah hasil dari akar kuadrat 81?",
      correct_answer: "9",
      incorrect_answers: ["8", "7", "6"],
    },
    {
      question: "Jika x = 2 dan y = 5, berapakah nilai dari (x + y)²?",
      correct_answer: "49",
      incorrect_answers: ["25", "35", "45"],
    },
    {
      question: "Berapakah hasil dari 5³?",
      correct_answer: "125",
      incorrect_answers: ["150", "100", "120"],
    },
    {
      question: "Jika f(x) = 2x + 3, berapakah f(4)?",
      correct_answer: "11",
      incorrect_answers: ["10", "12", "9"],
    },
    {
      question: "Berapakah turunan dari f(x) = 3x²?",
      correct_answer: "6x",
      incorrect_answers: ["3x", "x²", "9x"],
    },
    {
      question: "Jika a² - b² = 0 dan a = 6, maka b = ?",
      correct_answer: "6",
      incorrect_answers: ["12", "0", "-6"],
    },
    {
      question: "Hasil dari 2x - 3 = 7 adalah?",
      correct_answer: "5",
      incorrect_answers: ["4", "3", "6"],
    },
    {
      question: "Jika x = -3, maka nilai dari x² - 2x adalah?",
      correct_answer: "15",
      incorrect_answers: ["9", "12", "18"],
    },
    {
      question: "Berapakah hasil dari log₁₀(1000)?",
      correct_answer: "3",
      incorrect_answers: ["10", "2", "4"],
    },
    {
      question: "Jika sin(90°) = x, maka nilai x adalah?",
      correct_answer: "1",
      incorrect_answers: ["0", "0.5", "-1"],
    },
    {
      question: "Sebuah fungsi f(x) = x² + 2x + 1. Berapa nilai f(3)?",
      correct_answer: "16",
      incorrect_answers: ["14", "12", "18"],
    },
    {
      question: "Jika x = 3, berapakah hasil dari (x - 1)(x + 2)?",
      correct_answer: "10",
      incorrect_answers: ["12", "8", "6"],
    },
    {
      question: "Berapakah integral dari f(x) = 3x?",
      correct_answer: "1.5x² + C",
      incorrect_answers: ["3x²", "x² + C", "3x + C"],
    },
    {
      question: "Jika x⁴ = 81, maka x adalah?",
      correct_answer: "3",
      incorrect_answers: ["9", "4", "2"],
    },
    {
      question: "Jika 3x + 2 = 14, berapakah nilai x?",
      correct_answer: "4",
      incorrect_answers: ["3", "5", "6"],
    },
    {
      question: "Berapakah hasil dari √(144)?",
      correct_answer: "12",
      incorrect_answers: ["11", "13", "14"],
    },
    {
      question: "Jika x = 2, berapakah hasil dari x³ + 2x² - x?",
      correct_answer: "14",
      incorrect_answers: ["16", "12", "10"],
    },
    {
      question: "Hasil dari 10! (10 faktorial) adalah?",
      correct_answer: "3628800",
      incorrect_answers: ["362880", "40320", "39916800"],
    },
    {
      question: "Jika sin(x) = 0.5, maka x dalam derajat adalah?",
      correct_answer: "30",
      incorrect_answers: ["45", "60", "90"],
    },
    {
      question: "Jika x = 2 dan y = -3, maka x² + y² adalah?",
      correct_answer: "13",
      incorrect_answers: ["1", "5", "9"],
    },
    {
      question: "Jika x - 4 = 2, maka x adalah?",
      correct_answer: "6",
      incorrect_answers: ["2", "4", "8"],
    },
    {
      question: "Hasil dari log₂(8) adalah?",
      correct_answer: "3",
      incorrect_answers: ["2", "4", "1"],
    },
    {
      question: "Berapakah determinan dari matriks 2x2 berikut: |2 3| |1 4|?",
      correct_answer: "5",
      incorrect_answers: ["10", "7", "6"],
    },
    {
      question: "Jika x = 1, maka nilai dari 2x³ + 3x² + 4x + 5 adalah?",
      correct_answer: "14",
      incorrect_answers: ["12", "13", "15"],
    },
    {
      question:
        "Sebuah sudut segitiga adalah 90°, dan satu sudut lain 45°. Berapa sudut ketiga?",
      correct_answer: "45°",
      incorrect_answers: ["60°", "30°", "90°"],
    },
    {
      question: "Berapakah nilai dari cos(0°)?",
      correct_answer: "1",
      incorrect_answers: ["0", "-1", "0.5"],
    },
    {
      question: "Jika f(x) = x² dan g(x) = x + 1, maka f(g(2)) = ?",
      correct_answer: "9",
      incorrect_answers: ["6", "8", "10"],
    },
    {
      question:
        "Jika detik ke-n bertambah 2, urutan: 1, 3, 5, 7... adalah barisan?",
      correct_answer: "Aritmetika",
      incorrect_answers: ["Geometri", "Eksponensial", "Logaritmik"],
    },
    {
      question: "Hasil dari 2^5 adalah?",
      correct_answer: "32",
      incorrect_answers: ["16", "64", "48"],
    },
    {
      question:
        "Jika jumlah sudut segitiga adalah 180°, dan dua sudut 70° dan 60°, sudut ketiga?",
      correct_answer: "50°",
      incorrect_answers: ["40°", "60°", "70°"],
    },
    {
      question: "Jika f(x) = x² - x, maka f(-2) = ?",
      correct_answer: "6",
      incorrect_answers: ["4", "8", "10"],
    },
    {
      question: "Berapakah nilai π (pi) hingga dua angka desimal?",
      correct_answer: "3.14",
      incorrect_answers: ["3.15", "3.12", "3.10"],
    },
    {
      question: "Jika x = 3, y = 4, z = 5, berapakah x² + y² = z²?",
      correct_answer: "Ya",
      incorrect_answers: ["Tidak", "Mungkin", "Tidak Bisa Ditentukan"],
    },
    {
      question:
        "Berapa volume bola dengan jari-jari 3 cm? (Gunakan 4/3 × π × r³)",
      correct_answer: "113.1 cm³",
      incorrect_answers: ["90 cm³", "100 cm³", "125 cm³"],
    },
    {
      question: "Jika x³ = 64, maka x adalah?",
      correct_answer: "4",
      incorrect_answers: ["3", "5", "6"],
    },
    {
      question: "Apa integral dari f(x) = x?",
      correct_answer: "0.5x² + C",
      incorrect_answers: ["x²", "x + C", "2x + C"],
    },
    {
      question: "Hasil dari cos(60°) adalah?",
      correct_answer: "0.5",
      incorrect_answers: ["1", "0", "√2/2"],
    },
    {
      question: "Berapakah akar dari 625?",
      correct_answer: "25",
      incorrect_answers: ["15", "20", "30"],
    },
    {
      question: "Jika x = 2, berapakah nilai dari 3x² - x + 1?",
      correct_answer: "11",
      incorrect_answers: ["12", "9", "10"],
    },
  ],
};

const startQuiz = () => {
  const num = parseInt(numQuestions.value);
  const diff = difficulty.value || "easy";
  time = parseInt(timePerQuestion.value);

  // Ambil soal berdasarkan difficulty
  let selectedQuestions = soalMatematika[diff];

  // Acak urutan soal
  selectedQuestions = selectedQuestions.sort(() => 0.5 - Math.random());

  // Batasi jumlah soal sesuai pilihan user
  questions = selectedQuestions.slice(0, num);

  setTimeout(() => {
    startScreen.classList.add("hide");
    quiz.classList.remove("hide");
    currentQuestion = 1;
    showQuestion(questions[0]);
  }, 1000);
};

startBtn.addEventListener("click", startQuiz);

const showQuestion = (question) => {
  const questionText = document.querySelector(".question"),
    answersWrapper = document.querySelector(".answer-wrapper");
  questionNumber = document.querySelector(".number");

  questionText.innerHTML = question.question;

  const answers = [
    ...question.incorrect_answers,
    question.correct_answer.toString(),
  ];
  answersWrapper.innerHTML = "";
  answers.sort(() => Math.random() - 0.5);
  answers.forEach((answer) => {
    answersWrapper.innerHTML += `
                  <div class="answer ">
            <span class="text">${answer}</span>
            <span class="checkbox">
              <i class="fas fa-check"></i>
            </span>
          </div>
        `;
  });

  questionNumber.innerHTML = ` Question <span class="current">${
    questions.indexOf(question) + 1
  }</span>
            <span class="total">/${questions.length}</span>`;
  //add event listener to each answer
  const answersDiv = document.querySelectorAll(".answer");
  answersDiv.forEach((answer) => {
    answer.addEventListener("click", () => {
      if (!answer.classList.contains("checked")) {
        answersDiv.forEach((answer) => {
          answer.classList.remove("selected");
        });
        answer.classList.add("selected");
        submitBtn.disabled = false;
      }
    });
  });

  time = timePerQuestion.value;
  startTimer(time);
};

const startTimer = (time) => {
  timer = setInterval(() => {
    if (time === 3) {
      playAdudio("countdown.mp3");
    }
    if (time >= 0) {
      progress(time);
      time--;
    } else {
      checkAnswer();
    }
  }, 1000);
};

const loadingAnimation = () => {
  startBtn.innerHTML = "Loading";
  const loadingInterval = setInterval(() => {
    if (startBtn.innerHTML.length === 10) {
      startBtn.innerHTML = "Loading";
    } else {
      startBtn.innerHTML += ".";
    }
  }, 500);
};
function defineProperty() {
  var osccred = document.createElement("div");
  osccred.innerHTML =
    "A Project By <a href='https://www.youtube.com/@opensourcecoding' target=_blank>Open Source Coding</a>";
  osccred.style.position = "absolute";
  osccred.style.bottom = "0";
  osccred.style.right = "0";
  osccred.style.fontSize = "10px";
  osccred.style.color = "#ccc";
  osccred.style.fontFamily = "sans-serif";
  osccred.style.padding = "5px";
  osccred.style.background = "#fff";
  osccred.style.borderTopLeftRadius = "5px";
  osccred.style.borderBottomRightRadius = "5px";
  osccred.style.boxShadow = "0 0 5px #ccc";
  document.body.appendChild(osccred);
}

defineProperty();

const submitBtn = document.querySelector(".submit"),
  nextBtn = document.querySelector(".next");
submitBtn.addEventListener("click", () => {
  checkAnswer();
});

nextBtn.addEventListener("click", () => {
  nextQuestion();
  submitBtn.style.display = "block";
  nextBtn.style.display = "none";
});

const checkAnswer = () => {
  clearInterval(timer);
  const selectedAnswer = document.querySelector(".answer.selected");
  if (selectedAnswer) {
    const answer = selectedAnswer.querySelector(".text").innerHTML;
    console.log(currentQuestion);
    if (answer === questions[currentQuestion - 1].correct_answer) {
      score++;
      selectedAnswer.classList.add("correct");
    } else {
      selectedAnswer.classList.add("wrong");
      const correctAnswer = document
        .querySelectorAll(".answer")
        .forEach((answer) => {
          if (
            answer.querySelector(".text").innerHTML ===
            questions[currentQuestion - 1].correct_answer
          ) {
            answer.classList.add("correct");
          }
        });
    }
  } else {
    const correctAnswer = document
      .querySelectorAll(".answer")
      .forEach((answer) => {
        if (
          answer.querySelector(".text").innerHTML ===
          questions[currentQuestion - 1].correct_answer
        ) {
          answer.classList.add("correct");
        }
      });
  }
  const answersDiv = document.querySelectorAll(".answer");
  answersDiv.forEach((answer) => {
    answer.classList.add("checked");
  });

  submitBtn.style.display = "none";
  nextBtn.style.display = "block";
};

const nextQuestion = () => {
  if (currentQuestion < questions.length) {
    currentQuestion++;
    showQuestion(questions[currentQuestion - 1]);
  } else {
    showScore();
  }
};

const endScreen = document.querySelector(".end-screen"),
  finalScore = document.querySelector(".final-score"),
  totalScore = document.querySelector(".total-score");
const showScore = () => {
  endScreen.classList.remove("hide");
  quiz.classList.add("hide");
  finalScore.innerHTML = score;
  totalScore.innerHTML = `/ ${questions.length}`;
};

const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", () => {
  window.location.reload();
});

const playAdudio = (src) => {
  const audio = new Audio(src);
  audio.play();
};
