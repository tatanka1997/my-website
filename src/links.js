module.exports = {
  email: "eriknurja12@gmail.com",

  SocialMedia: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/enurja/",
    },
    {
      name: "Github",
      url: "https://github.com/tatanka1997",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/eriknurja/",
    },
  ],
  navLinks: [
    {
      name: "About Me",
      url: "/#aboutme",
    },
    {
      name: "Experience",
      url: "/#jobs",
    },
    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],
  colors: {
    lblue: "#002632",
    yellow: '#aab17c',
    lavander: "#947E92",
  },
  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
  
}
