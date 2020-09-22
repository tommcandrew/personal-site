export const projects = [
  {
    title: "Bilingual Baby",
    path: "bilingual-baby",
    date: "September 2020",
    siteLink: "https://bilingual-baby.netlify.app/",
    repoLink: "https://github.com/tommcandrew/bilingual-baby",
    description:
      "A site where parents of different nationalities can find a name for their baby that works in both of their languages.",
    skills: ["TypeScript", "React", "Sass", "TDD", "Jest", "Enzyme"],
    paragraphs: [
      'Dissatisfied with the results from a similar website, I wrote an algorithm that compares words and returns a "similarity score" by taking into account a number of factors including the individual phonemes and the number of syllables. Using this algorithm and lists of common names in English, Spanish and Turkish, I compiled a list of similar names for each language pair.',

      "In addition to similar names, users can also see a list of names that are spelled the same way in each language as well as names that have a version in each language.",
    ],
  },

  {
    title: "Skrabl",
    path: "skrabl",
    date: "August 2020",
    siteLink: "http://www.skrabl.club",
    repoLink: "https://github.com/ZehraRiz/skrabl",
    description:
      "A Scrabble game where you can play against other people online or against the computer.",
    skills: ["JavaScript", "CSS", "React", "Express", "Node", "Socket.io"],
    paragraphs: [
      'This project originated in a suggestion of mine to two fellow developers to collaborate and try to build an entire project in one day. We managed to finish the main functionality in a little longer than this. However, we thought of additional features that we wanted to add and we continued working on it for a whole month. My main responsibility was writing the code for the "AI player".',
      "The app uses socket.io to allow users to play against each other in online mode. When playing against the computer, regular expressions are used to search word lists to find words that are both playable and suitable for the chosen difficulty level. There are four languages to choose from - English, French, German and Turkish.",
    ],
  },

  {
    title: "Clear English IPA",
    path: "clear-english-ipa",
    date: "July 2020",
    siteLink: "www.clearenglishipa.com",
    repoLink: "https://github.com/tommcandrew/clear-english-ipa",
    description:
      "A professional site for an English teacher based in Hong Kong.",
    skills: ["JavaScript", "CSS", "React", "Gatsby", "Contentful", "Netlify"],
    paragraphs: [
      "An English teacher in Hong Kong requested that I make a website for her private tutoring business. I worked from a design provided to me and the client was very particular that the final website must replicate it exactly. She wanted the website to be available in four languages/scripts - English, simplified Chinese, traditional Chinese and Japanese. She also requested that she be able to update the tuition fees displayed on the website herself.",
      "The languages proved a challenge, mostly as I had to copy all text formatting from the design and this was quite difficult when working with Chinese and Japanese characters. In addition, the fonts and font sizes needed to be applied conditionally depending on the language. To allow the client to update the tuition fees information herself, I created an admin section with a form that updates the information on Contentful using the API.",
    ],
  },
  {
    title: "Spark Quiz",
    path: "spark-quiz",
    date: "June 2020",
    siteLink: "https://spark-quiz.vercel.app/",
    repoLink: "https://github.com/tommcandrew/quiz-master",
    description:
      "An online platform where teachers can create quizzes and share them with their students.",
    skills: ["JavaScript", "CSS", "React", "Redux", "Material UI"],
    paragraphs: [
      "When discussing ideas for a project to collaborate on with another developer, I suggested a website where teachers could create a quiz, for example, on a subject that they had been learning about with their students in school, and then share the quiz online with their students.",
      "The teacher is be able to attach images, audio files and video files to any question in a quiz and working with these different media formats was one of the biggest challenges. After adding the questions, setting options such as a time limit and adding students or groups to the invite list, the teacher publishes the quiz. In the backend, the Nodemailer library is used to email the selected students with an invite code they can use to log in and take the quiz.",
    ],
  },
  {
    title: "SACAP",
    path: "sacap",
    date: "May 2020",
    siteLink: "https://sacap.netlify.app/",
    repoLink: "https://github.com/tommcandrew/sacap",
    images: [
      "/images/screenshots/sacap/sacap-main.png",
      "/images/screenshots/sacap/sacap-product.png",
    ],
    paragraphs: [
      "The client, who works in the packaging industry, wanted an online shop-style site where prospective customers could request quotes on orders and that he could update himself. I decided to build a Jamstack site as I had read that it was especially suitable for this case.",
      "I chose Gatsby as the static-site generator and Contentful as the CMS. I used Material UI for the styling. The site is fully responsive and features a slide-out 'drawer' component for the cart on mobile. The site is hosted on Netlify and an email is sent to the client whenever an order is submitted using Netlify Forms. The site is available in both English and Spanish.",
    ],
    description: "An e-commerce site built for a client using the Jamstack.",
    skills: [
      "JavaScript",
      "CSS",
      "React",
      "Gatsby",
      "Contentful",
      "Netlify",
      "Material UI",
    ],
  },
  {
    title: "Idiomatic",
    path: "idiomatic",
    date: "April 2020",
    siteLink: "http://www.idiomatic.space/",
    repoLink: "https://github.com/tommcandrew/idiomatic",
    images: [
      "/images/screenshots/idiomatic/idiomatic-dashboard.png",
      "/images/screenshots/idiomatic/idiomatic-definitions.png",
      "/images/screenshots/idiomatic/idiomatic-reader.png",
      "/images/screenshots/idiomatic/idiomatic-gaps.png",
      "/images/screenshots/idiomatic/idiomatic-texts.png",
    ],
    paragraphs: [
      "I have been interested in language-learning for a long time and have used many different websites and apps, both as a learner and a teacher. I wanted to create a language learning application that I would have found useful so I built Idiomatic. It differs from most language-learning methods in that the learner can pre-select the material as well as the vocabulary they would like to learn.",
      "After choosing a text that they would like to study (e.g. a blog post, a news article or a film review), the user either pastes it into the application or uploads it as as file. They can then select their target vocabulary before saving the text to their collection. In the Reader component, the user reads the text where they will see their chosen vocabulary highlighted. If they click on one of these words, the will see a dictionary definition. They can also listen to the pronunciation of the word. If any of the provided definitions are inaccurate or the user would simply like to add their own, they can do this in the Edit component. After reading a text and checking the definitions, the user can attemt three exercises, generated automatically based on their chosen vocabulary. In the first, they must fill in the gaps. In the second, they match the words to the correct definitions. In the final exercise, they must write the word they hear.",
    ],
    description: "A language-learning application for English-learners.",
    skills: [
      "JavaScript",
      "Sass",
      "React",
      "Context API",
      "MongoDB",
      "Express",
      "Node",
      "APIs",
    ],
  },

  {
    title: "Eventful",
    path: "eventful",
    date: "February 2020",
    siteLink: "https://www.eventful-calendar.co.uk/calendar/",
    repoLink: "https://github.com/tommcandrew/eventful-calendar",
    images: [
      "/images/screenshots/eventful/year-view.png",
      "/images/screenshots/eventful/add-event.png",
      "/images/screenshots/eventful/move-event.png",
      "/images/screenshots/eventful/my-events.png",
      "/images/screenshots/eventful/settings.png",
    ],
    paragraphs: [
      "I decided that a calendar app would be a suitable choice for my first full-stack project. For inspiration, I looked to a number of other calendar applications, including Google Calendar.",
      "There are two main views available - year and month. Users can add an event to any day, including the name, time and an emoji. They can also drag and drop any event to a different day. This functionality is achieved using the react-beautiful-dnd library. Holiday data is fetched from the Calendarific API based on the user's location. Users can change their location in settings if they would like to see holiday data from a different country. They also have the option to turn off holidays if they wish. Also in settings, users can choose between a light and dark mode as well as between four languages - English, Spanish, French and Turkish. All settings are persisted across sessions",
    ],
    description: "A full-stack calendar app.",
    skills: [
      "JavaScript",
      "Sass",
      "React",
      "Context API",
      "MongoDB",
      "Express",
      "Node",
    ],
  },
  {
    title: "Brexit Central",
    path: "brexit-central",
    subtitle: "Team project",
    date: "October 2019",
    siteLink: "https://brexit-central.netlify.com/",
    repoLink: "https://github.com/tommcandrew/brexit-central",
    images: [
      "/images/screenshots/brexit-central/map.png",
      "/images/screenshots/brexit-central/news.png",
      "/images/screenshots/brexit-central/timeline.png",
    ],
    paragraphs: [
      "During my second time participating in the Chingu remote developer program, my teammates and I decided to build a Brexit-themed app.",
      "Our final project, Brexit Central, features a countdown clock, a news section where the latest Brexit-related news stories are collated, a Brexit Timeline which displays information and media for every significant event in Brexit history as well as a Travel page where those who wish to escape the UK can see flights and prices out of a selected airport as well as links if they wish to make a purchase. ",
    ],
    description: "A Brexit-themed team project.",
    skills: ["JavaScript", "CSS", "APIs"],
  },
];
