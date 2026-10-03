const projects = [
  {
    id: 1,
    title: "Grand Theft Auto VI",
    category: "aaagames",
    tags: [ "AAA Title", "R* Games", "Content Design"],
    image: "https://www.rockstargames.com/VI/_next/static/media/Official_Cover_Art_landscape.12.uu2irr.2_a.jpg",
    about: "Placeholder description of a game or project you built.",
    experience: "A longer placeholder writeup...",
    tools: [ "Unity", "C#", "Visual Studio", "Perforce", "Trello", "G Suite", "GarageBand" ],
    responsibilities: [ "Game Design", "Technical Design", "AI Balancing and Design", "Player movement systems", "Debugging and Bug fixing" ],
    media: [
      { type: "image", src: "https://www.rockstargames.com/VI/_next/static/media/Official_Cover_Art_landscape.12.uu2irr.2_a.jpg" },
      { type: "image", src: "https://www.rockstargames.com/VI/_next/static/media/Mount_Kalaga_National_Park_03.037k2s87rwuxc.jpg" },
      { type: "video", youtubeId: "tJbzMqJGH4k" }
    ]
  },
  {
    id: 2,
    title: "3, 2, 1 Launch!",
    category: "undergradwork",
    tags: [ "Undergrad Work", "Full Sail University", "NASA/LSP", "Game Design"],
    image: "images/321Launch/321Launch_Thumb.png",
    link: "https://apps.apple.com/us/app/3-2-1-launch/id6471444553",
    linkText: "Download on the App Store",
    about: "Placeholder description of another project.",
    experience: "A longer placeholder writeup...",
    tools: [ "Unity", "C#", "Visual Studio", "Perforce", "Trello", "G Suite", "GarageBand" ],
    responsibilities: [ "Game Design", "Technical Design", "AI Balancing and Design", "Player movement systems", "Debugging and Bug fixing" ],
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
    id: 3,
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