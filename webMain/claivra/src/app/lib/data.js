const predictions = [
  {
      question: "Will Bitcoin surpass $70,000 by the end of 2025?",
      options: ["Yes, definitely", "No, unlikely", "Maybe", "Not sure"],
      starred: true,
      comments: 120,
      dollar: 50, // in million
      rewards: 1000,
      chance: 75,
      image: "/trump.png"
  },
  {
      question: "Will India win the ICC Cricket World Cup 2027?",
      options: ["Yes", "No", "Possibly", "Unlikely"],
      starred: false,
      comments: 95,
      dollar: 32, // in million
      rewards: 800,
      chance: 60,
      image: "/trump.png"
  },
  {
      question: "Will AI replace 50% of customer service jobs by 2030?",
      options: ["Yes, completely", "No, not at all", "Partially", "Uncertain"],
      starred: true,
      comments: 150,
      dollar: 45, // in million
      rewards: 1200,
      chance: 65,
      image: "/trump.png"
  },
  {
      question: "Will SpaceX land humans on Mars before 2035?",
      options: ["Yes", "No", "Maybe", "Not sure"],
      starred: true,
      comments: 180,
      dollar: 70, // in million
      rewards: 2000,
      chance: 55,
      image: "/trump.png"
  },
  {
      question: "Will Ethereum gas fees drop below $1 by 2026?",
      options: ["Yes, definitely", "No, unlikely", "Possibly", "Not sure"],
      starred: false,
      comments: 85,
      dollar: 29, // in million
      rewards: 700,
      chance: 40,
      image: "/trump.png"
  },
  {
      question: "Will a major breakthrough in cancer treatment be announced by 2028?",
      options: ["Yes", "No", "Possibly", "Uncertain"],
      starred: true,
      comments: 210,
      dollar: 60, // in million
      rewards: 1500,
      chance: 70,
      image: "/trump.png"
  },
  {
      question: "Will Apple release a foldable iPhone by 2027?",
      options: ["Yes", "No", "Maybe", "Not sure"],
      starred: false,
      comments: 130,
      dollar: 40, // in million
      rewards: 1100,
      chance: 50,
      image: "/trump.png"
  },
  {
      question: "Will Tesla’s self-driving technology achieve Level 5 autonomy by 2030?",
      options: ["Yes, fully", "No, not at all", "Partially", "Uncertain"],
      starred: true,
      comments: 175,
      dollar: 65, // in million
      rewards: 1800,
      chance: 45,
      image: "/trump.png"
  },
  {
      question: "Will the global population exceed 9 billion by 2040?",
      options: ["Yes", "No", "Possibly", "Uncertain"],
      starred: false,
      comments: 90,
      dollar: 31, // in million
      rewards: 750,
      chance: 85,
      image: "/trump.png"
  },
  {
      question: "Will OpenAI release a GPT-5 model by the end of 2025?",
      options: ["Yes, definitely", "No, unlikely", "Maybe", "Not sure"],
      starred: true,
      comments: 200,
      dollar: 55, // in million
      rewards: 1400,
      chance: 80,
      image: "/trump.png"
  },
  {
      question: "Will a manned mission to the Moon occur before 2030?",
      options: ["Yes", "No", "Possibly", "Uncertain"],
      starred: false,
      comments: 105,
      dollar: 37, // in million
      rewards: 900,
      chance: 65,
      image: "/trump.png"
  },
  {
      question: "Will there be a fully functional quantum computer by 2035?",
      options: ["Yes, definitely", "No, unlikely", "Possibly", "Not sure"],
      starred: true,
      comments: 160,
      dollar: 52, // in million
      rewards: 1300,
      chance: 35,
      image: "/trump.png"
  }
];

const quizzes = [
  {
      id: 0,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      image: "/quiz1.png",
      correctOption: null, // To be set by the quiz creator
      closed: false // Indicates if the quiz is closed
  },
  {
      id: 1,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      image: "/quiz2.png",
      correctOption: null,
      closed: false
  },
  {
      id: 2,
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
      image: "/quiz3.png",
      correctOption: null,
      closed: false
  },
  {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      image: "/quiz4.png",
      correctOption: null,
      closed: false
  },
  {
      id: 4,
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
      image: "/quiz5.png",
      correctOption: null,
      closed: false
  }
];

export { predictions, quizzes };
