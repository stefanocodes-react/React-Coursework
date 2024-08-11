// import './App.css'

// Task
// 	- Create an array of objects 
// 	- each object should have a skill, level, and color variable
// 	- then loop over each object inside the array and render the list of skills
// 		- Condition
// 			- Level = Advanced => 💪 
// 			- Level = Intermediate => 👍 
// 			- Level = Beginner => 👶 

// TODO:
  // Create 4 Main Components
      // 1. Avatar ✅
      // 2. Dev Info ✅
      // 3. Skills ✅
      // 4. Skill

// within the skills component 
    // will return a Skill component which is rendering the skill itself and it will be received a prop from the skills parent el of the skills data
     // return a parapgrah within tough we will assign the specifc colors and text etc but also set the condtion for the emoji based on 


const skillsData = [

    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA"
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D"
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#C3DCAF"
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33"
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB"
    },
    {
      skill: "Svelte",
      level: "beginner",
      color: "#FF3B00"
    }
  ];

function Avatar() {
  return <img className="card__img" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
}

function Description() {
  return (
   <div className="card__content">
  <h1 className="card__title">Stefano Vidmar</h1>
  <p className="card__description">
  A front-end developer creates the visual and interactive elements of websites using HTML, CSS, and JavaScript, ensuring a smooth and engaging user experience.</p>
  </div>
  )
}
function Skills() {

  return (
    <div className="skills">
      {skillsData.map((skill, idx) => <Skill skillObject={skill} key={idx} />)}
    </div>
  )
}

function Skill({skillObject}) {
const {skill: skillName, color: skillColor, level: skillLevel} = skillObject;
const emoji = skillLevel === "advanced" ? "💪" : skillLevel === "intermediate" ? "👍" : "👶";
return(
  <p className="skill" style={{backgroundColor: skillColor}}>{skillName}{emoji}</p>
)

}
function App() {
  return (
    <div className="card">
    <Avatar/>
    <Description/>
    <Skills/>
    </div>
   
  )
}

export default App
