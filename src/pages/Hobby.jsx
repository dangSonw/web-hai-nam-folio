import SubpageLayout from '../components/SubpageLayout.jsx';
import './Hobby.css';

const hobbies = [
  {
    "id": "basketball",
    "title": "Basketball",
    "paragraph": "I casually play basketball with my friends at a local outdoor court, where I have become part of a community of around 30 regular hoopers. I often play as a Point Guard, bringing the ball up and orchestrating our possessions, or as a Power Forward to become a playmaker for my friends to shine."
  },
  {
    "id": "manga",
    "title": "Manga",
    "paragraph": "I have been in love with Japanese comic books, or manga, since I was a child. The captivating, innovative story illustrated through exquisite strokes genuinely fascinated me. I still visit bookstores with my friends to hunt for special editions of my favorite series, gradually building a collection that now fills my bookshelves."
  },
  {
    "id": "boardgame",
    "title": "Boardgame",
    "paragraph": "Board games are one of my favorite ways to spend an evening with friends, combining plenty of laughter with the occasional brain-teasing puzzle. My favorite is Werewolf, where I can step into different characters, bluff my way through accusations, and try to figure out when my friends are telling the truth or convincingly pretending to."
  },
  {
    "id": "figures",
    "title": "Figure collecting",
    "paragraph": "Recently, I have started collecting Funko Pop figures of characters from animation and video games. Since Funko Pops can be difficult to find in Vietnam, I often look for them whenever I travel abroad, usually bringing home at least one or two. Beyond decorating my desk, each figure has become a small reminder of a place I have visited."
  },
  {
    "id": "games",
    "title": "Video games",
    "paragraph": "I’m a big fan of strategy games like Teamfight Tactics and online chess. What I love most is that no two games ever play out the same way, so I’m always figuring out what to do next. I enjoy adapting flexible strategies whenever the situation changes, experimenting with weird ideas."
  }
];

export default function Hobby() {
  return (
    <SubpageLayout title="Hobby" extraHeading={<span aria-hidden="true">Hobby</span>}>
      {hobbies.map(({ id, title, paragraph }) => (
        <section className={`hobby hobby-${id}`} key={id} aria-labelledby={`hobby-${id}-title`}>
          <h2 id={`hobby-${id}-title`} className="hobby-title">{title}</h2>
          <p className="hobby-description">{paragraph}</p>
        </section>
      ))}
    </SubpageLayout>
  );
}
