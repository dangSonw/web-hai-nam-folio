import SubpageLayout from '../components/SubpageLayout.jsx';
import './Research.css';

const projects = [
  {
    "id": "physics",
    "title": "VEX IQ Physics Education Initiative",
    "paragraph": "As a research assistant, I support my counselor’s research on integrating VEX IQ robotics kit into teaching physics. I help deliver trial lessons and collect students feedback, as well as prepare robotics equipment and instructional materials for pilot classrooms. Working closely with the data collection process gave me a deeper understanding of sampling, especially the way data is selected can influence what conclusions a study can support.",
    "photos": [
      {
        "file": "physics-teaching.png",
        "alt": "Teaching physics through VEX IQ robotics",
        "width": 668,
        "height": 438
      },
      {
        "file": "physics-stage.png",
        "alt": "VEX IQ students and mentors on stage",
        "width": 668,
        "height": 438
      },
      {
        "file": "physics-classroom.png",
        "alt": "Students collaborating during a robotics lesson",
        "width": 668,
        "height": 438
      }
    ]
  },
  {
    "id": "virc",
    "title": "Vinschool Innovation and Research Challenge",
    "paragraph": "Building my Tekmonk storm-warning application led me to a deeper scientific investigation of the problem. Rather than stopping at developing a useful application, I explored the underlying scientific and computational aspects of storm prediction and warning, using the application as a starting point for further research. This project allowed me to move from building a product to investigating the science behind it: examining how data, models, and physical phenomena can be connected to produce more meaningful predictions.",
    "photos": [
      {
        "file": "virc-team.png",
        "alt": "Research team at the Vinschool Innovation and Research Challenge",
        "width": 668,
        "height": 438
      },
      {
        "file": "virc-awards.png",
        "alt": "Receiving an award at the research challenge",
        "width": 668,
        "height": 438
      },
      {
        "file": "virc-poster.png",
        "alt": "Presenting the storm-warning research project",
        "width": 668,
        "height": 438
      }
    ]
  },
  {
    "id": "medical",
    "title": "AI for Medical Diagnosis",
    "paragraph": "Studying the use of large language models in health consultation under the guidance of a professor at Hanoi University of Science and Technology, I created a model that answers questions about health and medicine. Fine-tuning the LLM using normalized conversational data (Q&A, hypothetical situations, clinical practice guidelines). The project taught me that developing an effective AI system is rarely about choosing a model once. It is an iterative process of identifying weaknesses, testing modifications, evaluating results, and deciding which changes genuinely improve performance.",
    "photos": [
      {
        "file": "medical-paper.png",
        "alt": "Research paper on Vietnamese medical dialogue systems",
        "width": 1294,
        "height": 1230
      }
    ]
  },
  {
    "id": "fridge",
    "title": "Smart Fridge Camera",
    "paragraph": "I am developing a research project around camera-based monitoring for smart refrigerators, investigating whether computer vision can be deployed directly on an embedded device to recognize and monitor items inside the fridge. The project focuses on the challenges of bringing AI into a constrained physical environment, where computational resources, camera capabilities, latency, and cost must all be considered together.",
    "photos": [
      {
        "file": "fridge-camera.png",
        "alt": "Camera enclosure design for a smart refrigerator",
        "width": 1730,
        "height": 1140
      }
    ]
  }
];

export default function Research() {
  return (
    <SubpageLayout title="Research" className="research-page">
      {projects.map(({ id, title, paragraph, photos }) => (
        <section className={`project project-${id}`} key={id} aria-labelledby={`research-${id}-title`}>
          <h2 id={`research-${id}-title`} className="project-title">{title}</h2>
          <p className="project-description">{paragraph}</p>
          <div className="project-gallery">
            {photos.map(({ file, alt, width, height }) => (
              <figure key={file}>
                <img src={`/assets/research/${file}`} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </section>
      ))}
    </SubpageLayout>
  );
}
