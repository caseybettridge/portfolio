const list = 
  [
    {
      name: 'new.engineering.com',
      link: 'https://new.engineering.com',
      obj: 'Our task was to take engineering.com, a news site focused on topics relevant to professional engineers, and rebuild it using the existing ProjectBoard infrastructure based on Vue.js.',
      role: 'I was responsible for the final approval of frontend pull-requests. I researched, designed, and built a new homepage and article page format. I created new personalization features, and contributed to rebuilding the login and signup flow.',
      highlight: 'One highlight was refactoring the article footer to decrease the bounce rate. This way, the user is directed to related content and encouraged to read other articles based on a recommendation engine.',
      tech: ['Vue.js', 'Bulma', 'SCSS', 'Docker',  'NPM', 'GitHub', 'Ngrok', 'responsive design', 'components', 'VueX', 'VueRouter'],
      image: './src/assets/engcom.png'

    },
    {
      name: 'ProjectBoard',
      link: 'https://projectboard.engineering.com',
      obj: 'We started with the idea to create a collaboration platform for doers, makers, and dreamers interested in the STEM fields. We built a community where users can post projects, share ideas, and get feedback from other engineering-minded folks.',
      role: 'I was part of the founding team of four. We began with a 6 month discovery phase followed by building a platform using Vue.js, Bulma, Webpack, Go, AWS, and FireBase. In the last 2 years our community has grown to 12K users. My role was to research, design, build, and maintain components across the site. I was the go-to person for styling and obscure browser compatibility issues.',
      highlight: 'One of my favourite parts of coding is simplifying. A highlight for me was consolidating the large Create component from 4 components into 1. The shared functionality and styles were broken out into mixins and shared CSS, creating much more maintainable and succinct code.',
      tech: ['Vue.js', 'Bulma', 'SCSS', 'Docker',  'NPM', 'GitHub', 'Ngrok', 'responsive design', 'components', 'VueX', 'VueRouter'],
      image: './src/assets/pb.png'
    }
  ]

export default {
  list
}