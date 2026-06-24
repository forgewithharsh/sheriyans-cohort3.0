let About = ({ width, name, age, element, children }) => {
  console.log(width, name, age, element);

  console.log(children);
  

  return (
    <nav>
      <h1>Hey i am about</h1>
      {children}
    </nav>
  );
};

export default About;
