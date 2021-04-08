export const Logo = ({ link }) => {
  return (
    <div className="logo">
      <img src={link} alt="logo" />
    </div>
  );
};

export const Headings = ({ company, isNew, isFeatured }) => {
  return (
    <div class="headings">
      <span className="company">{company}</span>
      {isNew && <span className="new">NEW!</span>}
      {isFeatured && <span className="featured">FEATURED</span>}
    </div>
  );
};

export const JobTitle = ({ title }) => {
  return <h3 className="job-title">{title}</h3>;
};

export const Miscellaneous = (props) => {
  return (
    <ul className="miscellaneous-data">
      {Object.keys(props).map((data, index) => {
        return <li key={index}>{props[data]}</li>;
      })}
    </ul>
  );
};

export const Skills = ({ role, level, languages, tools }) => {
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

export const FakeButton = ({ content }) => {
  return <span className="fake-button">{content}</span>;
};