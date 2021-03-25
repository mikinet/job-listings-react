import FakeButton from "./FakeButton";
const Skills = ({ role, level, languages, tools }) => {
  return (
    <div className="skills">
      <FakeButton content={role} />
      <FakeButton content={level} />
      {languages.map((language, index) => {
        return <FakeButton key={index} content={language} />;
      })}
      {tools.map((tool, index) => {
        return <FakeButton key={index} content={tool} />;
      })}
    </div>
  );
};
export default Skills;
