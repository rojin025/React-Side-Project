import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <>
      {" "}
      <img className="avatar" src="image.jpg" alt="Rojin Bijukchhe"></img>
    </>
  );
}

function Intro() {
  return (
    <div>
      <h1>Rojin Bijukchhe</h1>
      <p>
        Full-stack web developer and student at MIU. When not coding or
        preparing a course, I like to Build Keyboards, to cook (and eat), or to
        just enjoy playing guitar.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👍" color="skyblue" />
      <Skill skill="NodeJS" emoji="🌦️" color="red" />
      <Skill skill="JavaScript" emoji="😄" color="green" />
      <Skill skill="HTML" emoji="🥇" color="greenyellow" />
      <Skill skill="CSS" emoji="🙃" color="yellow" />
      <Skill skill="TypeScript" emoji="😇" color="orange" />
    </div>
  );
}

function Skill(props) {
  const { skill, emoji, color } = props;
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

export default App;
