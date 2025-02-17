import React from 'react';
import Helmet from "../components/Helmet/Helmet";
import { Container } from 'react-bootstrap';

// Material Icons
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';

// Style
import "../styles/articles.css";

// Other
import { v4 as uuidv4 } from "uuid";

const Articles = () => {
  const RightItems = [
    {
      id: uuidv4(),
      title: "Ancient Times:",
      p: "Weapons first appeared with the emergence of human civilizations. Stone tools such as spears and axes were used for hunting and self-defense. With the discovery of metals, bronze and iron weapons like swords and shields were developed."
    },
    {
      id: uuidv4(),
      title: "The Middle Ages:",
      p: "This period saw significant advancements in weaponry. Longbows and catapults were introduced, and armor became stronger and more flexible. Heavy cavalry weapons like longswords and lances also emerged."
    },
    {
      id: uuidv4(),
      title: "Early Modern Era:",
      p: "The invention of gunpowder transformed warfare. Firearms and cannons were introduced, reducing the reliance on heavy armor and cavalry."
    },
    {
      id: uuidv4(),
      title: "Modern Era:",
      p: "The 20th century witnessed a massive evolution in weaponry with the development of automatic firearms, tanks, fighter planes, and submarines. Later, nuclear weapons and smart weapons were introduced."
    },
  ]
  const typesItems = [
    {
      id: uuidv4(),
      img: require("../assets/all_images/types_weapons_01.webp"),
      title: "Melee Weapons:",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />Include swords, daggers, spears, and axes.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} /> Used in close combat and do not require ammunition.</p>
      </div>
    },
    {
      id: uuidv4(),
      img: require("../assets/all_images/types_weapons_02.webp"),
      title: "Firearms:",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} /> Rifles (sniper rifles, assault rifles).</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} /> Pistols (handguns, automatic pistols).</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} /> Machine guns and artillery.</p>
      </div>
    },
    {
      id: uuidv4(),
      img: require("../assets/all_images/types_weapons_03.webp"),
      title: "Heavy Weapons:",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} /> Artillery (mortars, anti-aircraft guns).</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} /> Tanks and combat vehicles.</p>
      </div>
    },
    {
      id: uuidv4(),
      img: require("../assets/all_images/types_weapons_04.webp"),
      title: "Chemical and Biological Weapons:",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} /> Utilize toxic substances or biological agents to harm enemies.</p>
      </div>
    },
    {
      id: uuidv4(),
      img: require("../assets/all_images/types_weapons_05.webp"),
      title: "Nuclear Weapons:",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} /> Depend on the energy released from nuclear fission or fusion and are among the most destructive weapons.</p>
      </div>
    },
    {
      id: uuidv4(),
      img: require("../assets/all_images/types_weapons_06.jpg"),
      title: "Smart Weapons:",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} /> Include drones and guided missiles that use navigation systems for precision.</p>
      </div>
    },
  ]
  const chooseWeaponsItems = [
    {
      id: uuidv4(),
      title: "1. Define Your Purpose",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  /><span>Self-defense:</span> Opt for a lightweight, easy-to-handle firearm such as a pistol or revolver. Popular choices include the Glock 19 or Smith & Wesson M&P Shield.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  /><span>Hunting:</span> Depending on the game, choose rifles or shotguns. For small game, a .22 caliber rifle is ideal, while larger game may require a .308 Winchester or a 12-gauge shotgun.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  /><span>Recreational shooting: </span> Consider versatile firearms like the AR-15 for target practice or competitive shooting.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  /><span>Collecting: </span> Historical or rare weapons, such as antique revolvers or military surplus rifles, appeal to collectors.</p>
      </div>
    },
    {
      id: uuidv4(),
      title: "2. Understand Weapon Types",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  /><span>Handguns:</span> Compact and suitable for self-defense or concealed carry.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  /><span>Rifles:</span> Known for accuracy and range, ideal for hunting and sports shooting.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  /><span>Shotguns: </span> Versatile and effective for hunting or home defense.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  /><span>Melee weapons: </span> Swords, knives, or axes for collectors or survival enthusiasts.</p>
      </div>
    },
    {
      id: uuidv4(),
      title: "3. Assess Your Skill Level",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  /> Beginners should prioritize simplicity and safety features. Look for weapons with intuitive controls and manageable recoil.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  /> Advanced users may prefer customizable options like firearms with interchangeable parts or adjustable sights.</p>
      </div>
    },
    {
      id: uuidv4(),
      title: "4. Consider Comfort and Fit",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  /> Hold the weapon to ensure a comfortable grip.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  /> Test the weight and balance to ensure you can handle it effectively.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  /> Visit a range to test fire different models before purchasing.</p>
      </div>
    },
    {
      id: uuidv4(),
      title: "5. Research and Budget",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  /> Determine your price range and explore models within that budget.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  /> Read reviews and consult experienced users to understand the pros and cons of each option.</p>
      </div>
    },
  ]
  const beginnersItems = [
    {
      id: uuidv4(),
      title: "1. Understand Safety Rules",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  />Treat every weapon as if it is loaded.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  />Never point a firearm at anything you do not intend to shoot.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  />Keep your finger off the trigger until you are ready to fire.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  />Always be aware of your target and what is beyond it.</p>
      </div>
    },
    {
      id: uuidv4(),
      title: "2. Get Professional Training",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  />Attend a certified course to learn the basics of safe handling and shooting.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  />A qualified instructor can provide personalized guidance and correct your techniques.</p>
      </div>
    },
    {
      id: uuidv4(),
      title: "3. Choose the Right Weapon",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />Start with a low-recoil firearm, such as a .22 caliber pistol or rifle.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />Opt for lightweight and easy-to-handle models to focus on learning proper techniques.</p>
      </div>
    },
    {
      id: uuidv4(),
      title: "4. Focus on Stance and Grip",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  />Stand with your feet shoulder-width apart and slightly staggered for balance.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}}  />Use a firm yet comfortable grip to maintain control of the weapon.</p>
      </div>
    },
    {
      id: uuidv4(),
      title: "5. Practice Aiming",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />Align the front and rear sights with your target.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />Focus on the front sight while keeping the target in view.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />Use both hands for added stability when shooting a handgun.</p>
      </div>
    },
    {
      id: uuidv4(),
      title: "6. Control Breathing",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />Take slow, deep breaths to steady your hands and reduce movement.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />Exhale halfway before pulling the trigger for better control.</p>
      </div>
    },
    {
      id: uuidv4(),
      title: "7. Start at a Short Range",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />Begin by shooting at close-range targets to build accuracy.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />Gradually increase the distance as your confidence improves.</p>
      </div>
    },
    {
      id: uuidv4(),
      title: "8. Develop Trigger Discipline",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />Pull the trigger smoothly and steadily to avoid jerking the weapon.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />Practice dry-firing (without ammunition) to improve trigger control.</p>
      </div>
    },
    {
      id: uuidv4(),
      title: "9. Practice Regularly",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />Schedule consistent practice sessions to refine your skills.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />Try different shooting positions, such as standing, kneeling, or prone.</p>
      </div>
    },
    {
      id: uuidv4(),
      title: "10. Evaluate and Adjust",
      content: <div className="item_content">
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />After each session, analyze your performance to identify areas for improvement.</p>
        <p><ScatterPlotIcon sx={{color: "var(--main-color)"}} />Seek feedback from experienced shooters or instructors.</p>
      </div>
    },
  ];

  return (
    <Helmet title="List of Articles, Links To Full Articles">
      <div className="right_weapon">
        <Container>
          <div className="right_weapon_content">
            <h2 className='title'>History of Weapons</h2>
            <div className="items">
              {
                RightItems.map(x => (
                  <div className="item" key={x.id}>
                    <h5>{x.title}</h5>
                    <p>{x.p}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="img">
            <img src={require("../assets/all_images/articles_page.webp")} alt="" />
          </div>
        </Container>
      </div>
      <div className="types_weapons">
        <Container>
          <h2 className='title'>Types of Weapons</h2>
          <div className="items">
            {
              typesItems.map(x => (
                <div className="item">
                  <img src={x.img} alt="" />
                  <h4 style={{fontSize: "1.2rem"}}>{x.title}</h4>
                  {x.content}
                </div>
              ))
            }
          </div>
        </Container>
      </div>
      <div className="choose_weapons">
        <Container>
        <h3 className='title'>How to Choose the Right Weapon</h3>
        <p>Selecting the right weapon depends on several factors, including your purpose, level of experience, and budget. Here’s a guide to help you make an informed decision:</p>
          <div className="img" style={{display: "flex", justifyContent: "center", marginBottom: "30px"}}>
            <img src={require("../assets/all_images/choose_weapons_page.webp")} alt="" />
          </div>
          <div className="choose_weapons_page">
            <div className="items">
              {
                chooseWeaponsItems.map(x => (
                  <div className="item" key={x.id}>
                    <h4>{x.title}</h4>
                    {x.content}
                  </div>
                ))
              }
            </div>
          </div>
        </Container>
      </div>
      <div className="beginners">
        <Container>
          <h3 className='title'>Tips for Learning Shooting for Beginners</h3>
          <p>Learning how to shoot can be an exciting and rewarding experience. Follow these tips to build confidence and improve your skills:</p>
          <div className="beginners_one" style={{marginBottom: "30px"}}>
            <div className="items">
              {
                beginnersItems.slice(0, 5).map(x => (
                  <div className="item" key={x.id}>
                    <h4>{x.title}</h4>
                    {x.content}
                  </div>
                ))
              }
            </div>
            <img src={require("../assets/all_images/beginners_01.webp")} alt="" />
          </div>
          <div className="beginners_two">
            <div className="items">
              {
                beginnersItems.slice(5, 10).map(x => (
                  <div className="item" key={x.id}>
                    <h4>{x.title}</h4>
                    {x.content}
                  </div>
                ))
              }
            </div>
            <img src={require("../assets/all_images/beginners_02.webp")} alt="" />
          </div>
        </Container>
      </div>
    </Helmet>
  )
}

export default Articles;