import SubpageLayout from '../components/SubpageLayout.jsx';
import './Community.css';

const projects = [
  {
    "id": "gart",
    "title": "Gart Camp",
    "paragraphs": [
      "At Gart Camp, I introduced students to robotics through hands-on building and experimentation. Rather than simply teaching them how to assemble a robot, I encouraged them to understand why each mechanism worked and experiment with their own solutions. The experience showed me that engineering becomes much more meaningful when people are given the freedom to build and discover for themselves."
    ],
    "photos": [
      {
        "file": "gart-group.png",
        "alt": "Gart Camp students and mentors at the robotics camp",
        "width": 668,
        "height": 438
      },
      {
        "file": "gart-presentation.png",
        "alt": "Do Hai Nam presenting a robotics activity at Gart Camp",
        "width": 668,
        "height": 438
      },
      {
        "file": "gart-workshop.png",
        "alt": "Students collaborating to build a robot during Gart Camp",
        "width": 668,
        "height": 438
      }
    ]
  },
  {
    "id": "mentor",
    "title": "VEX IQ Mentor",
    "paragraphs": [
      "My experience with VEX IQ also led me to mentor other robotics teams. I helped students with robot design, programming, troubleshooting, and competition preparation, while encouraging them to solve problems independently rather than simply giving them answers. Mentoring became an opportunity for me to turn the lessons I learned through competition into knowledge that other students could build upon."
    ],
    "photos": [
      {
        "file": "vex-workshop.png",
        "alt": "Students testing VEX IQ robots during a mentoring workshop",
        "width": 668,
        "height": 438
      },
      {
        "file": "vex-mentoring.png",
        "alt": "Helping a robotics team troubleshoot its robot",
        "width": 668,
        "height": 438
      },
      {
        "file": "vex-team.png",
        "alt": "The mentored robotics team at a VEX competition",
        "width": 668,
        "height": 438
      }
    ]
  },
  {
    "id": "stemina",
    "title": "STEMINA",
    "paragraphs": [
      "I founded STEMINA to bring hands-on STEM experience to students in underdeveloped regions, who have limited access to science activities. As the founder, I led a team of 12 students and coordinated with schools and local officials to organize STEM activities for over 150 students in Tri Le, Lang Son. Under our guidance, students went through many interesting activities, from driving VEX IQ robots, programming robots on simulation platforms, assembling and coding simple sensor systems to viewing DIY projects exhibition.",
      "Rather than simply presenting finished projects, we designed activities that encourage students to experiment themselves and learn from vivid interactions. The event was a huge success, gaining approval from the local officials for STEM contributions to the region. Although I face many challenges when preparing for the event, STEMINA taught me valuable lessons about team management and event preparation, understanding the process to turn from idea into actual event."
    ],
    "photos": [
      {
        "file": "stemina-activity.png",
        "alt": "STEMINA volunteers guiding students through a hands-on experiment",
        "width": 668,
        "height": 438
      },
      {
        "file": "stemina-students.png",
        "alt": "A STEMINA volunteer introducing a STEM activity to younger students",
        "width": 668,
        "height": 438
      },
      {
        "file": "stemina-workshop.png",
        "alt": "STEMINA participants exploring robotics and sensor projects",
        "width": 668,
        "height": 438
      }
    ]
  },
  {
    "id": "amstro",
    "title": "Amstro’s Gallery",
    "paragraphs": [
      "Amstro’s Gallery is an annual astronomy exhibition of my school astronomy club. Participating as a collaborative member, I made an interactive experiment to illustrate how astronauts simulate spacecraft movement and presented it in my booth for visitors, attracting many young enthusiasts."
    ],
    "photos": [
      {
        "file": "amstro-experiment.png",
        "alt": "Interactive spacecraft movement experiment at Amstro’s Gallery",
        "width": 1914,
        "height": 1090
      }
    ]
  }
];

export default function Community() {
  return (
    <SubpageLayout title="Community" className="community-page">
      {projects.map(({ id, title, paragraphs, photos }) => (
        <section className={`project project-${id}`} key={id} aria-labelledby={`community-${id}-title`}>
          <h2 id={`community-${id}-title`} className="project-title">{title}</h2>
          <div className="project-description">
            {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
          <div className="project-gallery">
            {photos.map(({ file, alt, width, height }) => (
              <figure key={file}>
                <img src={`/assets/community/${file}`} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </section>
      ))}
    </SubpageLayout>
  );
}
