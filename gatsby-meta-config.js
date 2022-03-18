module.exports = {
  title: `tkdalsgks.me`,
  description: `배운 것을 코드와 글로 기록합니다.`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://tkdalsgks.me/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `tkdalsgks/tkdalsgks.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `한상민`,
    bio: {
      role: `개발자`,
      description: ['소통의 가치를 아는', '끝까지 해내려 노력하는', '이로운 것을 나누고픈'],
      thumbnail: 'profile.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/tkdalsgks`,
      linkedIn: ``,
      email: `alstkdgks@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.12 ~ 2022.06',
        activity: '멀티캠퍼스 자바 웹 풀스택 과정 수강 중',
        links: {
          //post: '',
          github: 'https://github.com/tkdalsgks/Education.git',
          //demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      //{
      //title: '개발 블로그 테마 개발',
      //description:'',
      //techStack: [''],
      //thumbnailUrl: '',
      //links: {
      //post: '',
      //github: '',
      //demo: '',
      //},
      //},
    ],
  },
};
