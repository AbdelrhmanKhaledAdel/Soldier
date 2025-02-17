import React from 'react';
import Helmet from "../components/Helmet/Helmet";
import { Container } from 'react-bootstrap';

// Material Icons
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

// Style
import "../styles/guide.css";

// Other
import { v4 as uuidv4 } from "uuid";

const Guide = () => {
  const firearmItems = [
    {
      id: uuidv4(),
      title: "1. Choosing a Firearm for Self-Defense",
      content: <ul>
        <li><CheckOutlinedIcon /> Choose a compact and lightweight firearm if you plan to carry it daily.</li>
        <li><CheckOutlinedIcon /> Ensure ease of use and quick handling under pressure.</li>
        <li><CheckOutlinedIcon /> Use appropriate ammunition that balances stopping power with recoil control.</li>
      </ul>
    },
    {
      id: uuidv4(),
      title: "2. Choosing a Firearm for Hunting",
      content: <ul>
        <li><CheckOutlinedIcon /> Determine the type of game and shooting distance to choose the appropriate caliber.</li>
        <li><CheckOutlinedIcon /> Use a rifle with suitable accuracy and range, preferably equipped with a scope.</li>
        <li><CheckOutlinedIcon /> Ensure the firearm complies with local hunting laws and regulations.</li>
      </ul>
    },
    {
      id: uuidv4(),
      title: "3. Choosing a Firearm for Target Shooting and Training",
      content: <ul>
        <li><CheckOutlinedIcon /> Choose a firearm with stability and high accuracy.</li>
        <li><CheckOutlinedIcon /> Ensure ammunition is affordable and readily available for frequent training.</li>
        <li><CheckOutlinedIcon /> Use an appropriate scope to enhance long-range shooting precision.</li>
      </ul>
    },
    {
      id: uuidv4(),
      title: "4. Choosing a Firearm for Tactical or Military Use",
      content: <ul>
        <li><CheckOutlinedIcon /> Choose a firearm with high durability and compatibility with accessories like scopes and lasers.</li>
        <li><CheckOutlinedIcon /> Ensure ease of maintenance and availability of ammunition and spare parts.</li>
        <li><CheckOutlinedIcon /> Select a firearm that suits the specific tasks and operational environment.</li>
      </ul>
    },
  ];
  const shootingItems = [
    {
      id: uuidv4(),
      title: "1. Proper Firearm Grip",
      p: "A correct grip is crucial for control, accuracy, and recoil management.",
      content: <div style={{display: "flex", flexDirection: "column", gap: "15px"}}>
        <ul>
          <li><h4>Handgun Grip:</h4></li>
          <li><CheckOutlinedIcon/> <span>Use a Firm, Two-Handed Grip:</span> Place your dominant hand around the grip, with your index finger resting outside the trigger guard.</li>
          <li><CheckOutlinedIcon /> <span>Support with Your Non-Dominant Hand:</span> Wrap your support hand around the dominant hand, ensuring thumbs are aligned along the frame.</li>
          <li><CheckOutlinedIcon /> <span>Maintain Steady Pressure:</span> Avoid gripping too tightly, as it may cause unnecessary movement.</li>
        </ul>
        <ul>
          <li><h4>Rifle and Shotgun Grip:</h4></li>
          <li><CheckOutlinedIcon /> <span>Shoulder the Firearm Properly:</span> Position the stock firmly against your shoulder for stability.</li>
          <li><CheckOutlinedIcon /> <span>Support the Barrel:</span> Use your non-dominant hand to support the front of the firearm.</li>
          <li><CheckOutlinedIcon /> <span>Keep Your Elbows Slightly Bent:</span> This helps absorb recoil and maintain balance.</li>
        </ul>
      </div>
    },
    {
      id: uuidv4(),
      title: "2. Aiming Techniques",
      p: "Accuracy depends on proper aiming and sight alignment.",
      content: <ul>
          <li><CheckOutlinedIcon/> <span>Align the Sights:</span> The front and rear sights should be in a straight line, with the front sight centered.</li>
          <li><CheckOutlinedIcon /> <span>Focus on the Front Sight:</span> Keep your eyes on the front sight while maintaining a clear view of the target.</li>
          <li><CheckOutlinedIcon /> <span>Maintain a Steady Stance:</span> Keep your body balanced and avoid unnecessary movements.</li>
          <li><CheckOutlinedIcon /> <span>Control Your Breathing:</span> Inhale deeply and exhale slightly before pulling the trigger to reduce movement.</li>
        </ul>
    },
    {
      id: uuidv4(),
      title: "3. Recoil Control",
      p: "Managing recoil is essential for accuracy and follow-up shots.",
      content: <ul>
          <li><CheckOutlinedIcon/> <span>Maintain a Proper Stance:</span> A balanced stance with slightly bent knees helps absorb recoil.</li>
          <li><CheckOutlinedIcon /> <span>Hold the Firearm Firmly:</span> A firm grip prevents excessive movement.</li>
          <li><CheckOutlinedIcon /> <span>Lean Slightly Forward:</span> This helps counteract the backward force of the recoil.</li>
          <li><CheckOutlinedIcon /> <span>Use the Correct Ammunition:</span> Lighter rounds have less recoil, making them ideal for beginners.</li>
        </ul>
    },
    {
      id: uuidv4(),
      title: "4. General Shooting Tips for Beginners",
      p: "Managing recoil is essential for accuracy and follow-up shots.",
      content: <ul>
          <li><CheckOutlinedIcon/> <span>Start with a Low-Caliber Firearm:</span> A .22 caliber firearm is excellent for beginners.</li>
          <li><CheckOutlinedIcon /> <span>Practice Dry Firing:</span> This helps improve trigger control and aiming without using live ammunition.</li>
          <li><CheckOutlinedIcon /> <span>Train at a Shooting Range:</span> Practicing in a controlled environment ensures safety and proper guidance.</li>
          <li><CheckOutlinedIcon /> <span>Take a Firearms Training Course:</span> Learning from a certified instructor helps build confidence and proper technique.</li>
        </ul>
    },
  ];
  const detailedItems = [
    {
      id: uuidv4(),
      title: "1. Essential Cleaning Tools and Supplies",
      p: "Before starting the cleaning process, gather the necessary tools:",
      content: <ul>
        <li><ScatterPlotIcon /><span>Cleaning Rods and Brushes:</span> Used to remove debris from the barrel.</li>
        <li><ScatterPlotIcon /><span>Bore Cleaner/Solvent:</span> Helps dissolve gunpowder residue and fouling.</li>
        <li><ScatterPlotIcon /><span>Gun Oil/Lubricant:</span> Prevents rust and ensures smooth operation.</li>
        <li><ScatterPlotIcon /><span>Cleaning Patches and Cloths:</span> Used to wipe down components.</li>
        <li><ScatterPlotIcon /><span>Toothbrush or Small Brush:</span> For cleaning small and intricate parts.</li>
        <li><ScatterPlotIcon /><span>Safety Gear:</span> Gloves and protective eyewear.</li>
      </ul>
    },
    {
      id: uuidv4(),
      title: "2. Safety Precautions Before Cleaning",
      p: "Before handling a firearm for cleaning, follow these safety steps:",
      content: <ul>
        <li><CheckOutlinedIcon className='check' /><span>Unload the Firearm:</span> Remove the magazine and check the chamber to ensure it is empty.</li>
        <li><CheckOutlinedIcon className='check' /><span>Work in a Well-Ventilated Area:</span> Cleaning solvents may have strong fumes.</li>
        <li><CheckOutlinedIcon className='check' /><span>Use a Safe and Stable Workspace:</span> </li>
      </ul>
    },
    {
      id: uuidv4(),
      title: "3. Step-by-Step Firearm Cleaning Process",
      p: "",
      content: <div style={{display: "flex", flexDirection: "column", gap: "15px"}}>
        <ul>
          <li><h4>A. Disassembling the Firearm</h4></li>
          <li><ScatterPlotIcon /> Refer to the firearm’s manual to properly disassemble it into key components (barrel, slide, bolt, etc.).</li>
          <li><ScatterPlotIcon /> Keep small parts in a secure place to prevent loss.</li>
        </ul>
        <ul>
          <li><h4>B. Cleaning the Barrel and Bore</h4></li>
          <li>1. Attach a cleaning patch soaked in solvent to a cleaning rod and run it through the barrel.</li>
          <li>2. Use a bore brush to scrub the inside of the barrel, loosening any buildup.</li>
          <li>3. Run dry cleaning patches through until they come out clean.</li>
          <li>4. Apply a light coat of gun oil to prevent rust.</li>
        </ul>
        <ul>
          <li><h4>C. Cleaning Other Components</h4></li>
          <li><ScatterPlotIcon /> Use a brush and solvent to clean the slide, bolt, trigger assembly, and other moving parts.</li>
          <li><ScatterPlotIcon /> Wipe all parts with a clean cloth to remove excess residue.</li>
        </ul>
        <ul>
          <li><h4>D. Lubrication and Reassembly</h4></li>
          <li><ScatterPlotIcon /> Apply a small amount of lubricant to moving parts, avoiding over-lubrication.</li>
          <li><ScatterPlotIcon /> Reassemble the firearm according to the manufacturer’s instructions.</li>
          <li><ScatterPlotIcon /> Perform a function check to ensure everything operates smoothly.</li>
        </ul>
      </div>
    },
    {
      id: uuidv4(),
      title: "4. Firearm Storage and Maintenance Tips",
      p: "",
      content: <ul>
        <li><CheckOutlinedIcon className='check' />Store firearms in a cool, dry place to prevent rust.</li>
        <li><CheckOutlinedIcon className='check' />Use a gun safe or locked cabinet to prevent unauthorized access.</li>
        <li><CheckOutlinedIcon className='check' />Clean the firearm after each use, especially after exposure to moisture or dust.</li>
        <li><CheckOutlinedIcon className='check' />Regularly inspect for signs of wear or damage.</li>
      </ul>
    },
  ]
  const guidelineItems = [
    {
      id: uuidv4(),
      title: "1. Always Treat the Firearm as If It Is Loaded",
      content: `One of the most critical safety rules is to always assume that the firearm is loaded, 
      even if you believe it is not. Handle it with caution and never point it at anything you do not intend 
      to shoot.`
    },
    {
      id: uuidv4(),
      title: "2. Keep the Muzzle Pointed in a Safe Direction",
      content: `Always ensure that the firearm is pointed in a safe direction. 
      A safe direction means an area where an accidental discharge would not cause harm to 
      people or property`
    },
    {
      id: uuidv4(),
      title: "3. Keep Your Finger Off the Trigger Until Ready to Shoot",
      content: `Your finger should always remain outside the trigger guard until you are ready to fire. 
      This prevents accidental discharges caused by an unintentional trigger pull.`
    },
    {
      id: uuidv4(),
      title: "4. Know Your Target and What Is Beyond It",
      content: `Before shooting, always identify your target and be aware of what is behind it.
       Bullets can penetrate targets and continue traveling, posing a risk to unintended areas.`
    },
    {
      id: uuidv4(),
      title: "5. Store Firearms Securely and Away from Unauthorized Access",
      content: `Firearms should be stored in a locked safe or secure location, away from children
       and unauthorized individuals. Ammunition should be stored separately for added safety.`
    },
    {
      id: uuidv4(),
      title: "6. Use the Correct Ammunition",
      content: `Using the wrong type of ammunition can cause malfunctions or severe damage to the firearm. 
      Always check that the ammunition matches the specifications of your firearm.`
    },
    {
      id: uuidv4(),
      title: "7. Wear Protective Gear When Shooting",
      content: `Hearing protection and safety glasses should always be worn when shooting to protect against loud noise and debris.`
    },
    {
      id: uuidv4(),
      title: "8. Maintain and Inspect Your Firearm Regularly",
      content: `Regular cleaning and maintenance are essential to ensure the firearm functions properly and safely. 
      Inspect it frequently for signs of wear, damage, or malfunctions.`
    },
    {
      id: uuidv4(),
      title: "9. Never Handle Firearms Under the Influence of Drugs or Alcohol",
      content: `Firearms should never be handled while under the influence of alcohol, drugs, or any substances that impair judgment and coordination.`
    },
    {
      id: uuidv4(),
      title: "10. Take Proper Firearm Safety Training",
      content: `Enrolling in a firearm safety course is highly recommended for beginners and experienced users alike.
       Proper training helps improve handling skills and ensures responsible firearm use.`
    },
  ]
  return (
    <Helmet title="Tips and tricks, educational videos">
      <div className="guide">
        <div className="firearm_guide">
          <Container>
            <div className="img">
              <img src={require("../assets/all_images/articles_page.webp")} alt="" />
            </div>
            <div className="firearm_content">
              {
                firearmItems.map(x => (
                  <div className="item" key={x.id}>
                    <h3 className="title">{x.title}</h3>
                    {x.content}
                  </div>
                ))
              }
            </div>
          </Container>
        </div>
        <div className="shooting ">
          <Container>
            <div className="shooting_one">
              <div className="img">
                <img src={require("../assets/all_images/types_weapons_02.webp")} alt="" />
              </div>
              <div className="essential_content">
                {
                  shootingItems.slice(0, 2).map(x => (
                    <div className="item" key={x.id}>
                      <h2 className="title">{x.title}</h2>
                      <p>{x.p}</p>
                      {x.content}
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="shooting_two">
              <div className="img">
                <img src={require("../assets/all_images/security_01.webp")} alt="" />
              </div>
              <div className="essential_content">
                {
                  shootingItems.slice(2, 4).map(x => (
                    <div className="item" key={x.id}>
                      <h2 className="title">{x.title}</h2>
                      <p>{x.p}</p>
                      {x.content}
                    </div>
                  ))
                }
              </div>
            </div>
          </Container>
        </div>
        <div className="detailed">
          <Container>
            <div className="img">
              <img src={require("../assets/all_images/choose_weapons_page.webp")} alt="" />
            </div>
            <div className="detailed_content">
              {
                detailedItems.map(x => (
                  <div className="item" key={x.id}>
                    <h3 className='title'>{x.title}</h3>
                    {x.p === "" ? "" : <p>{x.p}</p>}
                    {x.content}
                  </div>
                ))
              }
            </div>
          </Container>
        </div>
        <div className="guidelines">
          <Container>
            <div className="guideline_one">
              <div className="img">
                <img src={require("../assets/all_images/types_weapons_01.webp")} alt="" />
              </div>
              <div className="guideline_content">
                {
                  guidelineItems.slice(0, 5).map(x => (
                    <div className="item" key={x.id}>
                      <h4 className="title">{x.title}</h4>
                      <p>{x.content}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="guideline_two">
              <div className="img">
                <img src={require("../assets/all_images/beginners_01.webp")} alt="" />
              </div>
              <div className="guideline_content">
                {
                  guidelineItems.slice(5, 10).map(x => (
                    <div className="item" key={x.id}>
                      <h4 className="title">{x.title}</h4>
                      <p>{x.content}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Helmet>
  )
}

export default Guide