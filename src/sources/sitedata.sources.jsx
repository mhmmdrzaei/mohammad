const SITE_DATA ={
    site_header: 'front end developer / creative problem solver',
    about_text: '<p>My name is Mohammad. </p><p>I create custom built  accessible and responsive sites for my clients using the latest libraries, tools, and technologies. I aim to bridge the gap between the technology and the client needs regarding their brand and audience in the best light.  </p><p>I’m comfortable writing code using different languages + frameworks. This includes  <span>React</span>, and other React frameworks / tools such as <span>React Redux</span>, <span>GraphQL</span>, <span>Gatsby</span>, <span>NextJS</span> and <span>Sanity</span> . I  work with <span>CMS</span> clients and databases regularly to set up  <span>headless sites</span>. I’ve worked extensively with <span>Wordpress</span>, building <span>custom themes</span>, <span>custom post types</span>, and <span>custom widgets</span>  for clients. </p><p>I approach every project I take on as an opportunity — I want to problem solve using creative approaches, taking what I’ve learned as an arts and design enthusiast and applying it to every project. </p><p>Let’s work together!</p>',
    works_header:'here is a sample of client development, design and creative visioning I’ve worked on: ',
    portfolio: [
      { id: 1, 
        name: 'Cooper Cole',
        job_type:'Web Development, branding & design',
        web_img:'mohammadPort/cooper-cole-1024x624_vjz2wo',
        mobile_img:'mohammadPort/cc-truck_voxwx9',
        video:'mohammadPort/cc_svg_animation_cffrye',
        video_sc:'hmohammadPort/ccvideo_cover_dqqmlx',
        video_caption:'SVG animation featured on the site',

        web_adress: 'https://coopercolegallery.com/',
        description: '<p>Cooper Cole is one of the prominent commercial art galleries in Canada.</p><p>For Cooper Cole, I worked with a designer, and together we developed a new branding strategy for the organization, including new logo, all new design assets and guidelines.</p><p>I developed the organization’s new website by building a custom themed Wordpress back end. </p> '
      },
      { id: 2, 
        name: 'Chadha Ranch',
        job_type:'Web Development',
        web_img:'mohammadPort/chad_desk_uikqb8',
        mobile_img:'mohammadPort/chad_mobile_rslgd0',
        web_adress: 'https://chadharanch.com/',
        description: '<p>Chadha Ranch is a design studio based out of New York City. With a focus on architecture, it seeks opportunities of impact within design and visual space. Site is build using Sanity for the back-end of the site and NextJs for the front end of the site.  </p> '
      },
      { id: 3, 
        name: 'In Search of',
        job_type:'Web Development',
        web_img:'mohammadPort/iso_desk_wrafhd',
        mobile_img:'mohammadPort/iso_mobile_lm5oib',
       
        web_adress: 'https://insearchof.agency/',
        description: '<p>In Search Of is a full service casting and management agency based in New York, Los Angeles + Toronto. Site is build using Sanity for the back-end of the site and NextJs for the front end of the site. </p> '
      },

      { id: 4, 
        name: 'Trinity Square Video',
        job_type:'Web Development',
        web_img:'mohammadPort/trinity-square-video-1024x624_xqq2ry',
        mobile_img:'mohammadPort/tsv-mobile_bifgz6',
        video:'mohammadPort/access_widget_tsv_y6uuzx',
        video_sc:'mohammadPort/access_widget_tsv_y6uuzx',
        video_caption:'Custom Accessibility Widget developed for client',
        web_adress: 'https://www.trinitysquarevideo.com/',
        description: '<p>I was hired by an agency to build Trinity Square Video’s new website. </p><p>The website redesign focused on archiving the organization’s extensive activities throughout the past decades of operation, while highlighting all of the services and programming currently offered. </p><p>In addition to the website information structure, we worked with the organization to incorporate their rental services software using their API to pull in all the assets. We also came up with a new more user friendly way to display upcoming workshops and activities and pulling information on how to take part.  </p> '
      },
      { id: 5, 
        name: 'peripherie-peripherie',
        job_type:'Web Development & Design',
        web_img:'mohammadPort/pp_desk_ciijel',
        mobile_img:'mohammadPort/pp_mobile_ydbz1d',
        web_adress: 'https://peripherie.peripheralreview.com/',
        description: '<p>Peripherie Peripherie is an offshoot online publication of The Peripheral Review. Paywalled content can be viewed by purchasing an access code from Peripheral Review’s web shop. The site is  build using Wordpress API as the backend and GatsbyJs to pull information to the front-end. </p> '
      },
      { id: 6, 
        name: 'Peripheral Review',
        job_type:'Web Development & Design',
        web_img:'mohammadPort/peripheralreview-1024x624_irjacu',
        mobile_img:'mohammadPort/pr-mobile_kta8or',
        web_adress: 'https://www.peripheralreview.com/',
        description: '<p>Peripheral Review is an independent critical art review publication based in Canada, offered both in print and online.  </p><p>For Peripheral Review, I worked with a designer and together we came up with a new layout structure and design for the website. The publication wanted an addition of a shop, as well as the ability to donate and purchase memberships, while highlighting their archives.  </p><p>Additional sections of the site behind a paywall will be released in early 2023. </p> '
      },
      { id: 7, 
        name: 'Missed Connections',
        job_type:'Web Development & Design',
        web_img:'mohammadPort/missed-connection-1024x624_plftsh',
        mobile_img:'mohammadPort/missed-conncection-mobile_m1bxkw',
        web_adress: 'https://missedconnections.art/',
        description: '<p>Missed Connections is an online exhibition space produced by South Asian Visual Arts Centre (SAVAC) in Toronto.</p><p>Working with a designer, the curators and the artists, I developed a custom themed Wordpress site to showcase the diverse range of works presented. Through the development of a back end, I made sure the organization had the option to exhibit future renditions of the project here easily. </p>'
      },
      { id: 8, 
        name: 'X in Residence',
        job_type:'Web Development & Design',
        web_img:'mohammadPort/x-ir-desktop_aqziyz',
        mobile_img:'mohammadPort/xir-mobile_ym4fki',
        web_adress: 'https://x-ir.net/',
        description: '<p>X in Residence is an artist residency centre located in Toronto, Canada.   </p><p>Working with a designer, we developed the branding identity for the organization, as well as the design of the website. The organization wanted a tool to incorporate their application submissions via a form  on to their site. I incorporated this functionality while developing systems in place to track and review the submitted applications through the back end of the website. </p> '
      },
      // { id: 6, 
      //   name: 'Bricks & Glitter',
      //   job_type:'Web Development',
      //   web_img:'mohammadPort/bricks-glitter-1024x624_tifcew',
      //   mobile_img:'mohammadPort/bricksglittermobile_sqwmzu',
      //   web_adress: 'https://bricks-glitter.com/',
      //   description: '<p>Bricks & Glitter is a community organization festival located in Toronto, Canada.  </p><p>I developed the website for the organization with a few goals in mind. As a team, we wanted a place for the users to find information about the festival activities with ease, be able to browse through past activities, and to be able to see the live stream of the festival on the site as it took place. We developed the site information layout through a series of interviews with participants and audiences of the festival. The final site results are simple in demonstration, with a lot of consideration to the festival’s audiences.  </p> '
      // },


      ],
    music_videos: [
    {
      id:11,
      embed_link:'<iframe width="560" height="315" src="https://www.youtube.com/embed/frN5DjkFiGw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      id:12,
      embed_link:'<iframe width="560" height="315" src="https://www.youtube.com/embed/oKeocYwrp5E?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      id:13,
      embed_link:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Jf35I9M2SWk?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }

      ],
    contact: [
        {
          id:21,
          title:'Instagram',
          url:'https://www.instagram.com/mohammmmmmmmmmmmmmmmmmmad/'
        },
        {
          id:22,
          title:'LinkedIn',
          url:'https://www.linkedin.com/in/mohammad-rezaei-434248113/'
        },
        {
          id:23,
          title:'Github',
          url:'https://github.com/mhmmdrzaei'
        },

      ],
    email_address: 'info@mohammadrezaei.com',



};

export default SITE_DATA;
