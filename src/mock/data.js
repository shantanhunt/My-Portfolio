import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shantanu Sontakke', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to My Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi. I am',
  name: 'Shantanu Sontakke',
  subtitle: 'Blockchain and Web developer',
  cta: 'Welcome to My Portfolio',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-1.PNG',
    title: 'HodlTogether',
    info: 'HodlTogether is a Defi project on Ethereum. It is made with Aave, Chainlink and the Graph. It uniquely incentivizes the users to Hodl their crypto via Public and Private pools and rewards the top 5 hodlers with ERC-1155 standard NFTs.',
    info2: 'Winner of Runner-Up prize at Chainlink Hackathon 2021',
    url: 'https://devpost.com/software/hodltogether',
    repo: 'https://github.com/chainGers-2021/HodlTogether-Docs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chain4india.PNG',
    title: 'Chain4India',
    info: 'This is a Supply Chain Blockchain Project that aims to bring Hospitals, Manufacturers, and Regulatory Authorities on a Single Platform to ensure Trust, Transparency and Traceability of goods and services exchanged between the parties. ',
    info2: 'Winner of IEEE HAC & SIGHT Funding for Covid19 in 2020 ',
    url: 'http://65.1.255.221:8021',
    repo: '  https://github.com/shantanhunt/Hyperledger-Sawtooth-Supply-Chain-with-Certifying-Client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dtc.PNG',
    title: 'Dapp-Token ICO',
    info: 'The DTC or Dapp-Token is an ERC-20 token. Its ICO aims to raise 12.5 Million in ETH. This happens via a Minted, Capped, Finalizable, Timed and Whitlisted Crowdsale.',
    info2: 'Built using the latest Openzeppelin 2.5 version for Crowdsale and Chainlink Price feed.',
    repo: 'https://github.com/shantanhunt/DappToken-ICO', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'treasure-game.png',
    title: 'Haunted House Game with AI Enemy',
    info: 'This is a hide and seek game built using C# and Unity. The player needs to find the key to the treasure before the AI enemy catches the player. ',
    info2: 'The Enemy AI uses A* pathfinding Algorithm to find the shortest distance to catch the player.',
    repo: 'https://github.com/shantanhunt/Haunted-House-Game-with-Enemy-AI', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Thanks for the Visit!',
  btn: 'E-Mail Me Here',
  email: 'shantanu.sontakke18@vit.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shantanu-sontakke-4a1b3117b',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/shantanhunt',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
