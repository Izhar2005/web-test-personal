// Data for 30 questions with answers and scoring
const questions = [
  {
    question: "Saat berada di sebuah pesta, kamu biasanya...",
    answers: [
      { text: "Lebih suka berbicara dengan beberapa orang dekat saja", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Berinteraksi dengan banyak orang dan merasa berenergi", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung suasana hati dan situasi", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu merasa lebih nyaman saat...",
    answers: [
      { text: "Menghabiskan waktu sendiri atau dengan beberapa teman dekat", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Bersosialisasi dengan banyak orang", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Kombinasi antara sendiri dan bersama orang lain", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat menghadapi masalah, kamu cenderung...",
    answers: [
      { text: "Merenung dan mencari solusi sendiri", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Mencari bantuan dan berdiskusi dengan orang lain", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Terkadang sendiri, terkadang berdiskusi", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu lebih suka menghabiskan waktu luang dengan...",
    answers: [
      { text: "Membaca buku atau melakukan hobi sendiri", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Berkumpul dengan teman atau keluarga", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Keduanya, tergantung mood", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat berbicara di depan umum, kamu merasa...",
    answers: [
      { text: "Gugup dan lebih suka menghindar", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Percaya diri dan menikmati perhatian", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Terkadang gugup, terkadang percaya diri", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu merasa energi kamu habis setelah...",
    answers: [
      { text: "Menghabiskan waktu lama dengan banyak orang", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Menghabiskan waktu sendiri", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung situasi dan mood", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Dalam sebuah diskusi, kamu biasanya...",
    answers: [
      { text: "Mendengarkan lebih banyak daripada berbicara", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Aktif berbicara dan mengemukakan pendapat", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung topik dan suasana", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu lebih suka bekerja...",
    answers: [
      { text: "Sendiri dan fokus", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Dalam tim dan berkolaborasi", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Keduanya, tergantung tugas", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat bertemu orang baru, kamu...",
    answers: [
      { text: "Cenderung pendiam dan mengamati", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Mudah bergaul dan cepat akrab", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung suasana hati", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu merasa nyaman saat...",
    answers: [
      { text: "Berada di tempat yang tenang dan sepi", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Berada di tempat ramai dan penuh aktivitas", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung mood dan situasi", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu lebih suka menghabiskan waktu dengan...",
    answers: [
      { text: "Sedikit teman dekat", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Banyak teman dan kenalan", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Kombinasi keduanya", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat menghadiri acara sosial, kamu...",
    answers: [
      { text: "Lebih suka mengamati dan tidak terlalu aktif", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Sangat aktif dan menjadi pusat perhatian", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung suasana hati", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu merasa lebih energik saat...",
    answers: [
      { text: "Menghabiskan waktu sendiri", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Bersama banyak orang", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung situasi", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu lebih suka berbicara tentang...",
    answers: [
      { text: "Hal-hal pribadi dan mendalam", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Topik ringan dan sosial", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Keduanya, tergantung situasi", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat bekerja dalam kelompok, kamu...",
    answers: [
      { text: "Lebih suka mendengarkan dan mengamati", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Aktif memimpin dan berbicara", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung situasi dan peran", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu merasa nyaman saat menghabiskan waktu...",
    answers: [
      { text: "Sendiri atau dengan sedikit orang", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Bersama banyak orang", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung mood dan situasi", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu lebih suka menghabiskan waktu luang dengan...",
    answers: [
      { text: "Aktivitas tenang seperti membaca atau menulis", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Aktivitas sosial seperti berkumpul dengan teman", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Keduanya, tergantung mood", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat merasa stres, kamu biasanya...",
    answers: [
      { text: "Mencari waktu sendiri untuk menenangkan diri", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Berbagi masalah dengan orang lain", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung situasi dan mood", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu merasa lebih nyaman saat...",
    answers: [
      { text: "Berada di lingkungan yang tenang dan familiar", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Berada di lingkungan yang ramai dan dinamis", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung mood dan situasi", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu lebih suka menghabiskan waktu dengan...",
    answers: [
      { text: "Sedikit orang yang dekat dan dipercaya", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Banyak orang dan kenalan baru", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Kombinasi keduanya", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat menghadiri acara, kamu...",
    answers: [
      { text: "Lebih suka duduk dan mengamati", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Sangat aktif dan berinteraksi", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung suasana hati", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu merasa lebih energik saat...",
    answers: [
      { text: "Menghabiskan waktu sendiri", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Bersama banyak orang", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung situasi", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu lebih suka berbicara tentang...",
    answers: [
      { text: "Hal-hal pribadi dan mendalam", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Topik ringan dan sosial", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Keduanya, tergantung situasi", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat bekerja dalam kelompok, kamu...",
    answers: [
      { text: "Lebih suka mendengarkan dan mengamati", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Aktif memimpin dan berbicara", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung situasi dan peran", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu merasa nyaman saat menghabiskan waktu...",
    answers: [
      { text: "Sendiri atau dengan sedikit orang", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Bersama banyak orang", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung mood dan situasi", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu lebih suka menghabiskan waktu luang dengan...",
    answers: [
      { text: "Aktivitas tenang seperti membaca atau menulis", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Aktivitas sosial seperti berkumpul dengan teman", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Keduanya, tergantung mood", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat merasa stres, kamu biasanya...",
    answers: [
      { text: "Mencari waktu sendiri untuk menenangkan diri", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Berbagi masalah dengan orang lain", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung situasi dan mood", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu merasa lebih nyaman saat...",
    answers: [
      { text: "Berada di lingkungan yang tenang dan familiar", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Berada di lingkungan yang ramai dan dinamis", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung mood dan situasi", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
];

// Descriptions for each personality type
const personalityDescriptions = {
  introvert: "Kamu adalah seorang Introvert yang cenderung lebih suka menyendiri dan mendapatkan energi dari waktu sendiri. Kamu menikmati kedalaman dan refleksi pribadi.",
  extrovert: "Kamu adalah seorang Ekstrovert yang energik dan mendapatkan energi dari interaksi sosial. Kamu suka bergaul dan menjadi pusat perhatian.",
  ambivert: "Kamu adalah seorang Ambivert yang fleksibel, bisa menyesuaikan diri antara menjadi introvert dan ekstrovert sesuai situasi. Kamu memiliki keseimbangan yang baik.",
};

// Icons for each personality type (using emojis for simplicity)
const personalityIcons = {
  introvert: "🧘‍♂️",
  extrovert: "🎉",
  ambivert: "⚖️",
};

const startTestBtn = document.getElementById("startTestBtn");
const landingPage = document.getElementById("landing");
const quizPage = document.getElementById("quiz");
const resultPage = document.getElementById("result");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progressBar");
const resultTypeElem = document.getElementById("resultType");
const resultDescriptionElem = document.getElementById("resultDescription");
const resultPercentagesElem = document.getElementById("resultPercentages");
const resultIconElem = document.getElementById("resultIcon");
const retryBtn = document.getElementById("retryBtn");
const shareBtn = document.getElementById("shareBtn");
const darkModeToggle = document.getElementById("darkModeToggle");

let currentQuestionIndex = 0;
let scores = { introvert: 0, extrovert: 0, ambivert: 0 };

// Show a page and hide others
function showPage(page) {
  [landingPage, quizPage, resultPage].forEach((p) => {
    p.classList.remove("active");
  });
  page.classList.add("active");
}

// Animate question slide
function animateQuestion(newIndex) {
  const questionContainer = document.getElementById("questionContainer");
  questionContainer.classList.remove("slide-in-right");
  questionContainer.classList.add("slide-out-left");

  setTimeout(() => {
    currentQuestionIndex = newIndex;
    displayQuestion(currentQuestionIndex);
    questionContainer.classList.remove("slide-out-left");
    questionContainer.classList.add("slide-in-right");
  }, 400);
}

// Display question and answers
function displayQuestion(index) {
  const q = questions[index];
  questionText.textContent = q.question;
  answersContainer.innerHTML = "";

  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer.text;
    btn.addEventListener("click", () => {
      // Add scores
      scores.introvert += answer.scores.introvert;
      scores.extrovert += answer.scores.extrovert;
      scores.ambivert += answer.scores.ambivert;

      // Update progress bar
      const progressPercent = ((index + 1) / questions.length) * 100;
      progressBar.style.width = progressPercent + "%";

      // Next question or show result
      if (index + 1 < questions.length) {
        animateQuestion(index + 1);
      } else {
        showResult();
      }
    });
    answersContainer.appendChild(btn);
  });
}

// Show result page
function showResult() {
  showPage(resultPage);

  // Calculate total score
  const total = scores.introvert + scores.extrovert + scores.ambivert;

  // Calculate percentages
  const introPercent = Math.round((scores.introvert / total) * 100);
  const extroPercent = Math.round((scores.extrovert / total) * 100);
  const ambiPercent = Math.round((scores.ambivert / total) * 100);

  // Determine personality type
  let maxScore = Math.max(scores.introvert, scores.extrovert, scores.ambivert);
  let resultType = "";
  let maxCount = 0;
  [scores.introvert, scores.extrovert, scores.ambivert].forEach((score) => {
    if (score === maxScore) maxCount++;
  });

  if (maxCount > 1) {
    resultType = "ambivert";
  } else if (maxScore === scores.introvert) {
    resultType = "introvert";
  } else if (maxScore === scores.extrovert) {
    resultType = "extrovert";
  } else {
    resultType = "ambivert";
  }

  // Display result
  resultTypeElem.textContent = resultType.charAt(0).toUpperCase() + resultType.slice(1);
  resultDescriptionElem.textContent = personalityDescriptions[resultType];
  resultPercentagesElem.innerHTML = `
    Introvert: ${introPercent}%<br />
    Ekstrovert: ${extroPercent}%<br />
    Ambivert: ${ambiPercent}%
  `;
  resultIconElem.textContent = personalityIcons[resultType];
}

// Reset quiz
function resetQuiz() {
  scores = { introvert: 0, extrovert: 0, ambivert: 0 };
  currentQuestionIndex = 0;
  progressBar.style.width = "0%";
  showPage(landingPage);
}

function shareResult() {
  // This function will be replaced by new share logic
}

shareBtn.removeEventListener("click", shareResult);

shareBtn.addEventListener("click", async () => {
  const personality = resultTypeElem.textContent || "Kepribadian";
  const description = resultDescriptionElem.textContent || "";
  const percentages = resultPercentagesElem.textContent || "";
  const url = "https://linkwebsitekamu.com"; // Replace with your actual URL

  const shareText = `Hasil Tes Kepribadian saya adalah ${personality}!\n${description}\n${percentages}\nCek di ${url}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Hasil Tes Kepribadian",
        text: shareText,
        url: url,
      });
      console.log("Berhasil membagikan hasil");
    } catch (error) {
      console.error("Gagal membagikan:", error);
    }
  } else {
    // Fallback to SweetAlert2 modal with share links
    Swal.fire({
      title: "Bagikan Hasil Tesmu!",
      html: `
        <p>Bagikan hasil kepribadianmu ke platform berikut:</p>
        <div style="display: flex; justify-content: center; gap: 15px; margin-top: 15px;">
          <a href="https://wa.me/?text=${encodeURIComponent(`Hasil Tes Kepribadian saya adalah ${personality}! Cek di ${url}`)}" target="_blank" title="Bagikan ke WhatsApp">
            <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" />
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(`Hasil Tes Kepribadian saya adalah ${personality}!`)}" target="_blank" title="Bagikan ke Facebook">
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(`Hasil Tes Kepribadian saya adalah ${personality}! Cek di ${url}`)}" target="_blank" title="Bagikan ke Twitter">
            <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter" />
          </a>
          <button id="copyInstagram" style="background: none; border: none; cursor: pointer;" title="Salin hasil untuk Instagram Stories">
            <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram Stories" />
          </button>
        </div>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      background: '#fff',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `,
      didOpen: () => {
        const copyBtn = Swal.getPopup().querySelector('#copyInstagram');
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(shareText).then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Teks hasil berhasil disalin!',
              timer: 1500,
              showConfirmButton: false,
            });
          }).catch(() => {
            Swal.fire({
              icon: 'error',
              title: 'Gagal menyalin teks',
              timer: 1500,
              showConfirmButton: false,
            });
          });
        });
      }
    });
  }
});

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  // Change icon accordingly
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☀️";
  } else {
    darkModeToggle.textContent = "🌙";
  }
}

// Event listeners
startTestBtn.addEventListener("click", () => {
  showPage(quizPage);
  displayQuestion(currentQuestionIndex);
  progressBar.style.width = "0%";
});

retryBtn.addEventListener("click", () => {
  resetQuiz();
});

shareBtn.addEventListener("click", () => {
  shareResult();
});

darkModeToggle.addEventListener("click", () => {
  toggleDarkMode();
});

// Initial setup
showPage(landingPage);
