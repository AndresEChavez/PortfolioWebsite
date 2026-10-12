const projects = [
  {
    id: 1,
    title: "Grand Theft Auto VI",
    category: "aaagames",
    tags: [ "AAA Title", "R* Games", "Content Design"],
    image: "images/GTA6/projectThumb.jpg",
    links: [
      { text: "Visit Rockstar Games", url: "https://www.rockstargames.com/VI" },
      { text: "Game Credits website", url: "https://www.rockstargames.com/gta-v/thankyou" }
    ],
    dates: "Jun 2021 - Present",
    role: "Designer: Exploration & Ambient Content",
    tools: [ "In-house tools" ],
    about: "My first AAA title, working on one of the most anticipated games ever. A dream come true.",
    experience: [
      "This project is under NDA, so I cannot disclose any details about my work on this project", 
      "I can only say that I am working on the exploration and ambient content for the game, developing some of the most unique and memorable experiences this game has to offer with some of the most talented individuals in the industry.",
      "I am so grateful for the opportunity to work on this once in a lifetime project. I've learned so much since I joined Rockstar Games and I am very excited about the future of this project.",
    ],
    media: [
      { type: "image", src: "images/GTA6/projectThumb.jpg" },
      { type: "image", src: "images/GTA6/projectPic0.jpg" },
      { type: "image", src: "images/GTA6/projectPic1.jpg" },
      { type: "video", youtubeId: "tJbzMqJGH4k" }
    ]
  },
  {
    id: 2,
    title: "ABXR Engine (Now 'Niloom.ai')",
    category: "engineering",
    tags: [ "Tech Startup", "Software Engineering", "Augmented Reality" ],
    image: "images/ABXR/projectThumb.jpg",
    links: [
      { text: "Visit Niloom.ai", url: "https://www.niloom.ai" },
      { text: "Columbia University Collaboration - IG Post 1", url: "https://www.instagram.com/p/CEKLWvSlHaJ/" },
      { text: "Columbia University Collaboration - IG Post 2", url: "https://www.instagram.com/p/CEDDx80lc-J/" }
    ],
    dates: "Jul 2020 - Apr 2021",
    role: "Junior Engineer",
    tools: [ "Unity", "C#", "Visual Studio", "GitHub", "Asana", "Google Firebase", "Adobe XD", "Apple TestFlight" ],
    about: "Write something here",
    experience: [
      "Write something here",
    ],
    media: [
      { type: "image", src: "images/ABXR/projectThumb.jpg" },
      { type: "image", src: "images/ABXR/projectPic2.jpg" },
      { type: "image", src: "images/ABXR/projectPic0.svg" },
      { type: "image", src: "images/ABXR/projectPic1.png" },
    ]
  },
  {
    id: 3,
    title: "3, 2, 1 Launch!",
    category: "undergradwork",
    tags: [ "Undergrad Work", "Full Sail University", "NASA/LSP", "Game Design"],
    image: "images/321Launch/321Launch_Thumb.png",
    links: [
      { text: "Download on the App Store", url: "https://apps.apple.com/us/app/3-2-1-launch/id6471444553" }
    ],
    dates: "Feb 2020 - Jul 2020",
    role: "Game Designer",
    tools: [ "Unity", "C#", "Visual Studio", "Perforce", "Trello"],
    about: 'Capstone project for my game design degree. 3, 2, 1 Launch! is an educational game for iOS devices. This game teaches LSP\'s (Launch Services Program) process of launching a rocket into space through 8 different mini-games.',
    experience: [
      "This game was built through a unique university partnership between NASA and Orbis Leadership & Management (the student-led master's program production house at Full Sail University).",

      "This project was an introduction to how real world game design works, everything stopped being about assignments and doing one time prototypes for a class. As soon as I accepted my new role it was all about meeting deadlines, sustaining long standing designs, the ability to quickly adapt my designs to feedback from leads or features being rolled into the project. It was so rewarding to finally be able to work with full assets made by artist and animator teammates and finally work on something that didn’t have the placeholder look I was used to through my degree.",

      "I joined the project in February, 2020 and left it around July, 2020 right after graduating. I designed 3 mini games while working on this project, two of them made it to the final version of the game (Contract mini game and Satellite Cleaning). The game didn’t release until 2024, going through the hands of multiple other students at Full Sail so I was very excited to see my mini games still in the game after so many years."
    ],
    media: [
      { type: "image", src: "images/321Launch/projectPic0.webp" },
      { type: "image", src: "images/321Launch/projectPic1.webp" },
      { type: "video", youtubeId: "kHr4wBf4O6I" },
      { type: "image", src: "images/321Launch/projectPic2.webp" },
      { type: "image", src: "images/321Launch/projectPic3.jpeg" },
      { type: "video", youtubeId: "CoMm8PRnWc8" },
      { type: "image", src: "images/321Launch/projectPic4.jpeg" },
      { type: "image", src: "images/321Launch/projectPic5.png" },
    ]
  },
  {
    id: 4,
    title: "Project Photography",
    category: "undergradwork",
    tags: [ "Undergrad Work", "Full Sail University", "Game Design"],
    image: "https://static.wixstatic.com/media/8e6a77_c2411dc82526491488ad3e4ec2963d9d~mv2.png/v1/fill/w_1920,h_1080,al_c,q_95,enc_auto/8e6a77_c2411dc82526491488ad3e4ec2963d9d~mv2.png",
    about: 'Project Photography is a 1st person puzzle game prototype for Windows PCs. This prototype was developed by a team of 6 designers for one of my classes at Full Sail University (1-month duration). I fulfilled the role of a Game Designer and Technical Designer for this project.',
    experience: `I worked as a Technical Designer for most of my time working on this project and largely developed my scripting skills.
​
Features I worked on:  
Player and camera movement
      Built and designed the player and camera movement from scratch, the movement controls had to be as precise and responsive as possible as precision and timing were important factors and pillars for each level.
I used ridigbody for player movement, Quaternions for the player's Y-axis rotation, and a sphere cast for the jumping. The camera moves with Quaternions as well on the X and Y axes. The sensibility for all of the mouse-related movement can be adjusted in the pause menu.
 
Polaroid and Flashlight mechanics 
- Polaroid: The player can move interactable objects with this tool by taking a picture of them and then placing them wherever the player wants. I used a raycast to detect if the player takes a picture of the interactable object and for placing the captured object back on the level.
- Flashlight: The flashlight is used to manipulate the physics of the interactable objects, left click to freeze, and right-click to unfreeze the physics on the interactable object the player is aiming at. 
 
I also worked on designing some of the AI enemies, fixed a lot of bugs, and made the song looping in the background with GarageBand. 
​
What went right? I'm very proud of how the player movement ended up being and I'm also proud of how well the mechanics we designed work together 
​
What went wrong? I feel like we didn't balance our time right, we spend most of our time as a team scripting and bug fixing mechanics but we forgot about the level design, I feel like we missed a great opportunity to make some awesome levels for our portfolio. `,
    tools: [ "Unity", "C#", "Visual Studio", "Perforce", "Trello", "G Suite", "GarageBand" ],
    responsibilities: [ "Game Design", "Technical Design", "AI Balancing and Design", "Player movement systems", "Debugging and Bug fixing" ],
    media: [
      { type: "video", youtubeId: "crmn64dIpT4" }
    ]
  }
];