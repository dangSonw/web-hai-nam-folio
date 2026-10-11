import SubpageLayout from '../components/SubpageLayout.jsx';
import './Engineering.css';

const projects = [
  {
    "id": "vex",
    "title": "VEX IQ Team 25812M",
    "description": "As the team's lead designer, I had to optimize our robot within the VEX IQ kit's limited motor capacity and available components. In our ball-shooting game, alliances had one minute to maximize their score, so typically the roles were between a scorer and a passer. While most teams specialized their robots for one role, I wanted ours to switch between both depending on our alliance partner and match conditions. To achieve this flexibility, I designed a double PTO system that selectively transferred mechanical power among the drivetrain, intake roller, and shooter, allowing the robot to switch between shooter and passer modes during a match.",
    "photos": [
      {
        "file": "vex-award.png",
        "alt": "Do Hai Nam receiving a VEX robotics award",
        "width": 668,
        "height": 438
      },
      {
        "file": "vex-team.png",
        "alt": "VEX IQ team with their robot and competition awards",
        "width": 668,
        "height": 438
      },
      {
        "file": "vex-competition.png",
        "alt": "Robotics team at the VEX competition",
        "width": 668,
        "height": 438
      }
    ]
  },
  {
    "id": "conrad",
    "title": "Conrad Challenge",
    "description": "Our innovation, IDEON, is an autonomous underwater vehicle designed to monitor microplastics in water using computer vision and polarization-based sensing. Contaminated water is pumped into an optical chamber, where a laser beam passes through a series of optical components before reaching a polarization camera. Microplastics exhibit a characteristic optical property called birefringence, which alters the polarization of transmitted light. By analyzing these polarization patterns with computer vision and machine learning, the system can identify and estimate the presence of microplastics in the sample. I worked specifically on mechanical design and 3D printing components, but also accounted for embedded computing and computer vision. The project challenged me to integrate hardware and software into a single system while repeatedly testing and refining the design.",
    "photos": [
      {
        "file": "conrad-demo.png",
        "alt": "Demonstrating the IDEON underwater vehicle at a science exhibition",
        "width": 668,
        "height": 438
      },
      {
        "file": "conrad-team.png",
        "alt": "Conrad Challenge team presenting the IDEON prototype",
        "width": 668,
        "height": 438
      },
      {
        "file": "conrad-presentation.png",
        "alt": "Discussing the IDEON optical sensing system with visitors",
        "width": 668,
        "height": 438
      }
    ]
  },
  {
    "id": "fire",
    "title": "Early Fire Detection IOT",
    "description": "Concerned about the risk of forest fires in Vietnam, I designed an early-warning system using a distributed network of IoT sensor nodes. Each node monitors key environmental parameters, including temperature, humidity, and smoke levels, and triggers an alert when readings exceed predefined thresholds. As one of my first engineering projects, this work introduced me to embedded systems, sensor integration, and data processing. I began with an ESP32-based system using low-cost sensors such as the DHT11 and MQ-2, then explored more advanced sensing components. To improve the identification of potentially dangerous conditions, I also collected environmental data from active meteorological stations and experimented with several machine-learning approaches, ultimately selecting a K-Nearest Neighbors (KNN) model.",
    "photos": [
      {
        "file": "fire-sensor.png",
        "alt": "Early fire detection prototype with sensors, wiring and an ESP32",
        "width": 1470,
        "height": 962
      }
    ]
  },
  {
    "id": "storm",
    "title": "Storm Warning App",
    "description": "A mobile application designed to help users monitor storms and prepare for severe weather. The app combines real-time storm data with practical tools such as storm mapping, shelter locations, emergency checklists, and an SOS feature. I developed the application in Python using Kivy/KivyMD and integrated NASA's EONET data to visualize active storm events. I also integrated AI for geospatial calculations and data routing, suggesting optimal paths to shelters and supporting location-based emergency planning.",
    "photos": [
      {
        "file": "storm-map.png",
        "alt": "Storm Warning App map showing an active storm track",
        "width": 840,
        "height": 910
      },
      {
        "file": "storm-details.png",
        "alt": "Storm Warning App displaying storm intensity and emergency tools",
        "width": 842,
        "height": 720
      }
    ]
  }
];

export default function Engineering() {
  return (
    <SubpageLayout title="Engineering" className="engineering-page">
      {projects.map(({ id, title, description, photos }) => (
        <section className={`project project-${id}`} key={id} aria-labelledby={`${id}-title`}>
          <h2 id={`${id}-title`} className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
          <div className="project-gallery">
            {photos.map(({ file, alt, width, height }) => (
              <figure key={file}>
                <img src={`/assets/engineering/${file}`} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </section>
      ))}
    </SubpageLayout>
  );
}
