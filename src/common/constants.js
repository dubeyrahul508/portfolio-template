const APPS = {
  GITHUB: 'github',
  LINKEDIN: 'linkedin',
};

const CONTACTS = {
  EMAIL: 'email',
  PHONE: 'phone',
  WHATSAPP: 'whatsapp',
};

const METADATA = {
  TITLE: 'Rahul Dubey: Mobile & Web developer',
  DESCRIPTION: 'Portfolio of Rahul Dubey, Full Stack Developer with 7+ years experience building SaaS and mobile applications.',
};

const RESUME_FILE_NAME = 'Rahul_Dubey_Resume.pdf';
const PROFILE_IMAGE_NAME = 'profile.jpg';
const DEVELOPER_NAME = 'Rahul Dubey';
const DESIGNATION = 'Full Stack Mobile &\nWeb Developer';
const INTRO =
  `Full Stack Developer with 7+ years of experience building scalable SaaS and mobile platforms using React, Node.js, Ruby on Rails, and AWS.
Skilled in integrating AI APIs (OpenAI, LanguageTool), developing dynamic PDF generation tools, and delivering business-impacting features through clean, test-driven code.
I’m passionate about solving complex problems with scalable systems and thoughtful engineering.`;
const INFO = [
  {
    label: 'Years of\nexperience',
    value: '7+',
  },
  {
    label: 'Projects completed',
    value: '10+',
  },
];
const URLS = [
  {
    for: APPS.GITHUB,
    url: 'https://github.com/dubeyrahul508',
  },
  {
    for: APPS.LINKEDIN,
    url: 'https://www.linkedin.com/in/dubey5864/',
  },
  {
    for: CONTACTS.EMAIL,
    url: 'mailto:dubey5864@gmail.com',
  },
  {
    for: CONTACTS.PHONE,
    url: 'tel:+447553729181',
  },
  {
    for: CONTACTS.WHATSAPP,
    url: ' https://wa.me/447553729181',
  },
];

export {
  APPS,
  CONTACTS,
  DESIGNATION,
  DEVELOPER_NAME,
  INFO,
  INTRO,
  METADATA,
  PROFILE_IMAGE_NAME,
  RESUME_FILE_NAME,
  URLS,
};
