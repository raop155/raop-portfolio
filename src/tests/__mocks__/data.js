const projects = [
  {
    id: 1,
    title: 'Self-service Kiosk | Work Café',
    image: 'workcafe.JPG',
    small_description: "Work Café, Santander's innovative branch concept",
    description: "Work Café, Santander's innovative branch concept",
    company: {
      name: 'Santander',
      url: 'https://www.santander.com/en/stories/work-cafe-santanders-innovative-branch-concept',
      country: 'Chile',
    },
    isFeatured: true,
    isPrivate: true,
    videos: [
      {
        title: 'Video 1',
        url: 'https://vimeo.com/202974892',
      },
      {
        title: 'Video 2',
        url: 'https://vimeo.com/301629791',
      },
    ],
    gallery: [
      {
        image: 'workcafe-0.JPG',
        description: 'Home View',
      },
      {
        image: 'workcafe-1.JPG',
        description: 'Menu View',
      },
      {
        image: 'workcafe-2.JPG',
        description: 'Register/Login View',
      },
    ],
  },
  {
    id: 2,
    title: 'Self-service Kiosk',
    image: 'scotiabank.JPG',
    small_description: 'Modular System integration with various services integrations for clients',
    description: 'Description',
    company: {
      name: 'Scotiabank',
      url: 'https://www.scotiabankchile.cl/',
      country: 'Chile',
    },
    isFeatured: false,
    isPrivate: true,
    gallery: [
      {
        image: 'scotiabank-2.JPG',
        description: 'Menu View',
      },
      {
        image: 'scotiabank-1.JPG',
        description: 'Register/Login View',
      },
    ],
  },
  {
    id: 3,
    title: 'Self-service Kiosk',
    image: 'werking.JPG',
    small_description: 'Modular System integration with various services integrations for clients',
    description: 'Description',
    company: {
      name: 'Werking by Credicentro',
      url: 'https://www.werking.com/',
      country: 'Paraguay',
    },
    isFeatured: false,
    isPrivate: true,
    videos: [
      {
        title: 'Video 1',
        url: 'https://www.youtube.com/watch?v=GMZ1iVzFvSc&feature=youtu.be&t=20',
      },
    ],
    gallery: [
      {
        image: 'werking-0.JPG',
        description: 'Home View',
      },
      {
        image: 'werking-1.JPG',
        description: 'Register/Login View',
      },
      {
        image: 'werking-2.JPG',
        description: 'Menu View',
      },
    ],
  },
  {
    id: 4,
    title: 'Self-service Kiosk',
    image: 'claro.JPG',
    small_description: 'Modular System integration',
    description: 'Description',
    company: {
      name: 'Claro',
      url: 'https://www.claro.com.pe/',
      country: 'Perú',
    },
    isFeatured: false,
    isPrivate: true,
    videos: [
      {
        title: 'Video 1',
        url: 'https://vimeo.com/183005286',
      },
    ],
    gallery: [
      {
        image: 'claro-0.JPG',
        description: 'Home View',
      },
      {
        image: 'claro-1.JPG',
        description: 'Register/Login View - Spanish',
      },
      {
        image: 'claro-2.JPG',
        description: 'Register/Login View - English',
      },
    ],
  },
  {
    id: 5,
    title: 'Queue & Statistic Dashboard',
    image: 'workcafe-dashboard.JPG',
    small_description: 'Queue & Statistic System',
    description: 'Description',
    company: {
      name: 'Santander',
      url: 'https://banco.santander.cl/',
      country: 'Chile',
    },
    isFeatured: true,
    isPrivate: true,
    videos: [
      {
        title: 'Video 1',
        url: 'https://vimeo.com/301629791',
      },
    ],
    gallery: [
      {
        image: 'workcafe-dashboard-1.JPG',
        description: 'Dashboard Part 1',
      },
      {
        image: 'workcafe-dashboard.JPG',
        description: 'Dashboard Part 2',
      },

      {
        image: 'workcafe-dashboard-2.JPG',
        description: 'Dashboard Full',
      },
    ],
  },

  {
    id: 6,
    title: 'Wheather & Video Player',
    image: 'werking-wheather.JPG',
    small_description: 'Video Player and Wheather API integration',
    description: 'Description',
    company: {
      name: 'Werking by Credicentro',
      url: 'https://www.werking.com/',
      country: 'Paraguay',
    },
    isFeatured: false,
    isPrivate: true,
    videos: [
      {
        title: 'Video 1',
        url: 'https://youtu.be/fbJ7ctuHg4A?t=21',
      },
    ],
    gallery: [
      {
        image: 'werking-wheather-1.JPG',
        description: 'Wheather Part 1',
      },
      {
        image: 'werking-wheather-2.JPG',
        description: 'Wheather Part 2',
      },
      {
        image: 'werking-wheather-3.JPG',
        description: 'Wheather Full',
      },
    ],
  },

  {
    id: 7,
    title: 'Statistics Dashboard',
    image: 'werking-dashboard.JPG',
    small_description: "Web App with Werking's Self-service Kiosk stadistic records",
    description: 'Description',
    company: {
      name: 'Werking by Credicentro',
      url: 'https://www.werking.com/',
      country: 'Paraguay',
    },
    isFeatured: true,
    isPrivate: true,
    gallery: [
      {
        image: 'werking-dashboard.JPG',
        description: 'Login View',
      },
      {
        image: 'werking-dashboard-1.JPG',
        description: 'Dashboard View',
      },
    ],
  },

  {
    id: 8,
    title: 'Personal Portfolio',
    image: 'portfolio.JPG',
    small_description: "Ricardo Olarte's Personal Portfolio",
    description: 'Description',
    company: {
      name: 'Ricardo Olarte',
      url: '#about',
      country: 'Perú',
    },
    isFeatured: true,
    isPrivate: false,
    live: {
      url: 'https://raop155.com',
    },
    code: {
      url: 'https://github.com/raop155/raop-portfolio',
    },
  },
  {
    id: 9,
    title: 'Loruki',
    image: 'loruki.JPG',
    small_description: "Saas's Landing Page",
    description: 'Description',
    company: {
      name: 'Ricardo Olarte',
      url: '#about',
      country: 'Perú',
    },
    isFeatured: true,
    isPrivate: false,
    live: {
      url: 'https://vibrant-gates-241c61.netlify.app/',
    },
    code: {
      url: 'https://github.com/raop155/saas-template',
    },
  },
  {
    id: 10,
    title: 'La Casita Chaupin',
    image: 'lacasitachaupin.JPG',
    small_description: 'Web with downloadable menu for a small eco-restaurant from Chavin - Perú',
    description: 'Web with downloadable menu for a small eco-restaurant from Chavin - Perú',
    company: {
      name: 'La Casita Chaupin',
      url: 'https://www.facebook.com/La-Casita-Chaupin-345688692166796/',
      country: 'Perú',
    },
    isFeatured: false,
    isPrivate: false,
    live: {
      url: 'https://elated-hodgkin-9360e3.netlify.app/#/',
    },
    code: {
      url: 'https://github.com/raop155/la-casita-chaupin',
    },
  },
  {
    id: 11,
    title: 'Star Wars API',
    image: 'starwars.JPG',
    small_description: 'Small Web App with Star Wars planets & people',
    description: '',
    company: {
      name: 'Ricardo Olarte',
      url: '#about',
      country: 'Perú',
    },
    isFeatured: false,
    isPrivate: false,
    live: {
      url: 'https://pensive-jennings-f29536.netlify.app/',
    },
    code: {
      url: 'https://github.com/raop155/starwars',
    },
  },

  {
    id: 12,
    title: 'Financial Indicators | CENEFA',
    image: 'hub-cenefa.JPG',
    small_description: 'Web App with financial indicators for premium clients',
    description: '',
    company: {
      name: 'Santander',
      url: 'https://banco.santander.cl/',
      country: 'Chile',
    },
    isFeatured: false,
    isPrivate: false,
    live: {
      url: 'https://trusting-kepler-8e9a66.netlify.app/',
    },
    code: {
      url: 'https://github.com/raop155/hub-cenefa',
    },
  },

  {
    id: 13,
    title: 'Financial Indicators | Dashboard',
    image: 'hub-dashboard.JPG',
    small_description: 'Web App with financial indicators for premium clients',
    description: '',
    company: {
      name: 'Santander',
      url: 'https://banco.santander.cl/',
      country: 'Chile',
    },
    isFeatured: true,
    isPrivate: false,
    live: {
      url: 'https://epic-montalcini-4ad150.netlify.app/',
    },
    code: {
      url: 'https://github.com/raop155/hub-dashboard',
    },
  },

  {
    id: 14,
    title: 'Arturo Prat Infographic',
    image: 'wall-prat.JPG',
    small_description: 'Small educational infographic',
    description: '',
    company: {
      name: 'Santander',
      url: 'https://banco.santander.cl/',
      country: 'Chile',
    },
    isFeatured: true,
    isPrivate: false,
    live: {
      url: 'https://5fcaa386c3b2d8129cfa990b--compassionate-torvalds-2aff15.netlify.app/#/',
    },
    code: {
      url: 'https://github.com/raop155/santander-wall-touch-prat',
    },
  },
  {
    id: 15,
    title: 'Expensify App',
    image: 'expensify.JPG',
    small_description: 'Expensify App where you can record your expenses',
    description: 'Expensify App where you can record your expenses',
    company: {
      name: 'Ricardo Olarte',
      url: '#about',
      country: 'Perú',
    },
    isFeatured: true,
    isPrivate: false,
    live: {
      url: 'https://bugdet-app.herokuapp.com/',
    },
    code: {
      url: 'https://github.com/raop155/budget-app',
    },
  },
  {
    id: 16,
    title: 'Shopping List App',
    image: 'shoppinglist.JPG',
    small_description: 'Small Web App with shared shopping list',
    description: '',
    company: {
      name: 'Ricardo Olarte',
      url: '#about',
      country: 'Perú',
    },
    isFeatured: false,
    isPrivate: false,
    live: {
      url: 'https://shopping-list-mern-production.herokuapp.com/',
    },
    code: {
      url: 'https://github.com/raop155/mern_shopping_list',
    },
  },
];

export default projects;
