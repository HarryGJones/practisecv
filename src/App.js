import Portrait from "./components/Portrait.jpg";
import TopButton from "./components/button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <TopButton />
      </div>

      <div className="Header">
        <div>
          <img className="Picture" src={Portrait} alt="Harry G Jones"></img>
        </div>

        <div className="Title">
          <h1>Harry Glynn Jones</h1>

          <hr></hr>

          <h2>
            Entry Level Front End Web Developer/Designer and Aspiring Game
            Developer
          </h2>
        </div>

        <div>
          <ul className="Contact">
            <ol>Email: harry.glynnjones@gmail.com</ol>
            <br></br>
            <ol>Mobile: 07540071824</ol>
            <br></br>
            <ol>
              LinkedIn:
              <a href="https://linkedin.com/in/harry-jones-82a7382b8">
                My LinkedIn Profile
              </a>
            </ol>
            <br></br>
            <ol>
              GitHub:
              <a href="https://github.com/HarryGJones/">My GitHub Portfolio</a>
            </ol>
          </ul>
        </div>
      </div>

      <hr></hr>

      <div className="Row">
        <div className="column left">
          <h2>About Me</h2>

          <p>
            I am a single father of two currently working part time and seeking
            a career change. I have been learning web development for some time
            with the HyperionDev BootCamp. Alongside the BootCamp, I have been
            teaching myself game development in GameMaker.
          </p>

          <p>
            I worked in retail for over 16 years as part of several leading
            brands, including Aspinal of London, Elliot Rhodes, GAME and
            Harrods. I was involved in many aspects of these businesses, from
            marketing and merchandising to customer service and retention that
            I see as transferable skills.
          </p>

          <p>
            My objective is to attain a skill level that will allow me to secure
            my first job in the gaming market. I consider myself motivated to
            learn new skills as soon as they are needed to provide effective
            solutions. I enjoy programming, learning different languages, and
            being creative.
          </p>

          <p>
            I look forward to meeting and working with others in the video game
            industry, growing and learning as we create together.{" "}
          </p>
        </div>

        <div className="column middle">
          <h2>Experience</h2>
          <h3>Full Stack Web Development Bootcamp</h3>
          <h4>
            <span>HyperionDev</span>
            <span>2024</span>
          </h4>
          <ul>
            <li>
              Exploring diverse web development technologies and refining my
              skills.
            </li>
            <li>
              Engaging in daily tasks to reinforce and expand upon the knowledge
              acquired.
            </li>
            <li>
              Having interaction with experienced professionals to receive
              genuine feedback on coding practices.
            </li>
          </ul>

          <h3>GitHub Portfolio</h3>
          <h4>
            <span>Assorted Projects</span>
            <span>2024</span>
          </h4>
          <ul>
            <li>
              My collected Web Dev and Game Dev projects, from tutorial
              run-throughs and coursework to personal projects.{" "}
            </li>
            <li>
              A timeline of my journey into a new field, showing my progress and
              method.
            </li>
          </ul>

          <br></br>

          <h2>Education</h2>
          <p>HyperionDev - London</p>
          <p className="bold">
            <span>Bootcamp in Full Stack Web Development</span>
            <span>2024</span>
          </p>

          <p>University of the Arts London (UAL)</p>
          <p className="bold">
            <span>Fashion History and Theory, BA</span>
            <span>2007 - 2010</span>
          </p>
        </div>

        <div className="column right">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Git - GitHub</li>
            <li>GML (GameMaker Language)</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Creativity</li>
          </ul>

          <br></br>

          <h2>Languages</h2>
          <ul>
            <li>English</li>
          </ul>
        </div>
      </div>

      <div className="Footer">
        <h3>CV built by Harry Glynn Jones using:</h3>

        <h2>HTML - CSS - JavaScript - React</h2>
      </div>
    </div>
  );
}

export default App;
