import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

// Material Icons


// Style
import "../styles/news.css";

// Other
import { v4 as uuidv4 } from "uuid";

const News = () => {
  // Translat
  const [ t ] = useTranslation();
  let local = localStorage.getItem("translat")
  
  const iconsLanding = [
    {
      id: uuidv4(),
      title: "Pistoals",
      icon: require("../assets/all_images/pistol.png")
    },
    {
      id: uuidv4(),
      title: "Guns",
      icon: require("../assets/all_images/gun.jpg")
    },
    {
      id: uuidv4(),
      title: "Ammo",
      icon: require("../assets/all_images/ammo.png")
    },
  ]

  const items = [
    {
      id: uuidv4(),
      img: require("../assets/all_images/item01.webp"),
    },
    {
      id: uuidv4(),
      img: require("../assets/all_images/item02.webp"),
    },
    {
      id: uuidv4(),
      img: require("../assets/all_images/item03.webp"),
    },
  ]
  return (
    <Helmet title="Industry News">
      <div className="landing_page">
         <Container style={{direction: local === "ar" ? "rtl" : "ltr"}}>
          <div>
            <div className="title">
              <h2>{t("Industry News")}</h2>
              <p>{t("In early September 2024, Egypt witnessed significant developments in the industrial sector. The Ministry of Industry launched the first phase of the 'Egypt Digital Industrial Platform,' aiming to enhance digital transformation within the industrial sector and facilitate communication between investors and government entities. The platform provides interactive tools and digital services, such as a secure electronic document vault and 24/7 technical support​( العين الإخبارية , Ela Osboa).")}</p>
              <p>{t("Additionally, the ministry announced the allocation of 1,124 industrial land plots across 14 governorates, including Cairo, Alexandria, and Monufia, from September 1st to 8th. This move is part of the ministry's efforts to boost industrial investment and streamline the process of land allocation for investors​(مصراوي)")}</p>
            </div>
            <div className="content">
              {
                iconsLanding.map(x => (
                  <div className="item" key={x.id}>
                    <div className="icon"><img src={x.icon} alt="" /></div>
                    <p>{x.title}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="image">
            <img className={ local === "ar" ? "ar" : ""} src={require("../assets/all_images/abu_abaidah.png")} alt="" />
          </div>
         </Container>
      </div>
      <div className="legislation">
        <Container>
          <div className="page">
            <h3 className="title">{t("Legislation and Regulations")}</h3>
            <div className="page_content">
              <p>{t("In Egypt, gun ownership is highly regulated under Law No. 394 of 1954. This law requires citizens to obtain a license for the acquisition and possession of firearms, including smooth-barrel guns, pistols, and shotguns. To get a license, applicants must undergo a thorough process that includes background checks, providing a valid reason for ownership, and passing safety courses. Licenses must be renewed every three years.")}</p>
              <p>{t("Recent changes and updates include stricter enforcement of the existing laws, especially in response to the increased availability of unlicensed firearms following the 2011 revolution. The government has also launched initiatives to combat the proliferation of illegal weapons, focusing on confiscating unlicensed guns and arresting smugglers and dealers.")}</p>
              <p>The law also prohibits the manufacture, import, and trade of firearms and ammunition without a proper license. Violations of these regulations are met with severe penalties, including imprisonment and hefty fines【33†source】【34†source】.</p>
            </div>
          </div>
          <div className="cards">
            {
              items.map(x => (
                <div className="item" key={x.id}>
                  <img src={x.img} alt="" />
                </div>
              ))
            }
          </div>
        </Container>
      </div>
      <div className="weapon">
        <Container>
          <h2 className="title">{t("Weapon Reviews")}</h2>
          <div className="page_weapon">
            <div className="content_weapon">
              <p>Here’s an overview of some of the latest reviews and analyses of new or popular firearms on the market:</p>
              <p>1. **Handguns**: The Walther PDP Compact Steel Frame 4-inch is one of the top-rated handguns of 2024. Despite its somewhat bulky design, the pistol offers superb ergonomics and performance, making it a favorite among testers. Its steel frame, while adding weight, contributes to its smooth shooting experience. This model is part of Walther's successful striker-fired lineup and is known for its accuracy and reliability, especially in drills and steel shooting【42†source】.</p>
              <p>2. **Regular Maintenance and Safe Handling**: It’s important to regularly maintain your firearms to ensure they function correctly. This includes cleaning them and checking for any signs of wear or damage. Knowing how to operate your firearm safely, including how to load, unload, and store it properly, is crucial【73†source】.</p>
              <p>3. **Handgun Customization**: The **PSA 5.7 Rock** is another notable mention, especially for those interested in customization and minimal recoil. It's an excellent value for its price, offering features like slide serrations and a Picatinny accessory rail, making it a strong contender in the 5.7x28mm market【44†source】.</p>
              <p>These firearms reflect a mix of innovation and tradition, catering to a wide range of preferences and needs in the shooting community. Whether you're looking for performance, versatility, or value, these models are some of the top choices available this year.</p>
            </div>
            <div className="img">
              <img src={require("../assets/all_images/wallpaperflare.com_wallpaper (5).jpg")} style={{width: "300px"}} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <div className="interviews">
        <Container>
          <h2 className="title">Interviews with epxerts</h2>
          <div className="page_interviews">
            <div className="img">
              <img src={require("../assets/all_images/interviews_page.webp")} className='img_page' style={{width: "300px"}} alt="" />
            </div>
            <div className="content_interviews">
              <p>Recent interviews with experts in the field of military safety and weapons have provided valuable insights into various aspects of defense and military strategy. For example, Paul Scharre, a prominent expert on autonomous weapons, discussed the limited role of fully autonomous weapons in great power competition between the U.S. and China. He emphasized that while AI and automation are becoming more integrated into military systems, fully autonomous weapons are not yet a significant factor in strategic planning【52†source】.</p>
              <p>Additionally, the Stockholm International Peace Research Institute (SIPRI) has been actively involved in discussions on arms control and disarmament. Their recent events and publications have highlighted the complexities of military spending, the challenges of arms export controls, and the ongoing shifts in global geopolitical dynamics【53†source】.</p>
              <p>Defense News has also featured interviews with military leaders and industry experts. These interviews cover a wide range of topics, including modernization efforts in various military branches, the impact of the war in Ukraine on defense strategies, and the integration of advanced technologies like AI and machine learning into military operations【54†source】.</p>
              <p></p>
            </div>
          </div>
        </Container>
      </div>
      <div className="special">
        <Container>
          <h2 className="title">Interviews with epxerts</h2>
          <>
            <div className="special_page_one">
              <img src={require("../assets/all_images/special_1.webp")} style={{width: "600px", borderRadius: "20px", transition: "0.3s"}} alt="" />
              <div className="special_content">
                <p>Recent articles have explored the evolution and impact of firearms like machine guns, sniper rifles, and the AR-15 in the defense industry.</p>
                <p>The **AR-15**, originally developed in the late 1950s by Eugene Stoner for military use, has undergone significant evolution. The rifle's modular design, allowing for extensive customization, has made it a favorite in both civilian and military circles. Initially designed for military purposes, its adoption by civilians has seen it become a highly customizable platform, with numerous aftermarket parts and accessories available. This adaptability has made the AR-15 a staple for various uses, from home defense to recreational shooting. The weapon has also seen significant technological advancements, particularly in optics and attachment systems, enhancing its versatility and effectiveness【62†source】【63†source】.</p>
              </div>
            </div>
            <div className="special_page_two">
              <img src={require("../assets/all_images/special_2.webp")} style={{width: "600px", borderRadius: "20px", transition: "0.3s"}} alt="" />
              <div className="special_content">
                <p>**Sniper rifles** have seen similar advancements, with modern designs focusing on increased accuracy, range, and adaptability to different combat environments. Advances in materials and manufacturing processes have allowed for lighter and more durable rifles, while innovations in optics have significantly enhanced targeting capabilities.</p>
                <p>Machine guns have also evolved, with modern variants offering improved reliability, reduced recoil, and greater ease of use. These developments are crucial in maintaining the effectiveness of these weapons in various combat scenarios.</p>
                <p>These articles provide a deep dive into the historical evolution, technological advancements, and current significance of these weapons in the defense industry. For a more detailed exploration, you can check the sources from sites like Gun Digest and Guns.com.</p>
              </div>
            </div>
          </>
        </Container>
      </div>
      <div className="security">
        <Container>
          <div className="security_content">
            <h2 className="title">Security and Safety</h2>
            <p>When it comes to firearm safety and responsible use, there are several key practices and tips that gun owners should follow to ensure both personal and community safety.</p>
            <p>1. **Proper Training and Education**: Firearms safety training is essential for all gun owners, whether they are beginners or seasoned enthusiasts. This training covers the basic rules of firearm safety, such as treating every gun as if it's loaded, keeping the muzzle pointed in a safe direction, and keeping your finger off the trigger until ready to shoot. Training also includes understanding the legal responsibilities and safe handling of firearms【74†source】.</p>
            <p>2. **Regular Maintenance and Safe Handling**: It’s important to regularly maintain your firearms to ensure they function correctly. This includes cleaning them and checking for any signs of wear or damage. Knowing how to operate your firearm safely, including how to load, unload, and store it properly, is crucial【73†source】.</p>
            <p>3. **Secure Storage**: Storing firearms securely is a major aspect of responsible gun ownership. This means ensuring that firearms are inaccessible to unauthorized persons, particularly children. Options for secure storage include gun safes, lock boxes, and trigger locks. Proper storage not only prevents accidents but also reduces the risk of theft and misuse【73†source】.</p>
            <p>4. **Personal and Community Safety**: Understanding the impact of firearm use on community safety is part of being a responsible gun owner. Firearms safety training emphasizes the importance of situational awareness, decision-making in high-stress situations, and understanding the consequences of using a firearm in self-defense【74†source】.</p>
            <p>By following these practices, gun owners can significantly reduce the risk of accidents and contribute to a safer environment for everyone.</p>
          </div>
          <div className="img">
            <img src={require("../assets/all_images/security_01.webp")} style={{width: "400px", borderRadius: "20px", transition: "0.3s"}} alt="" />
          </div>
        </Container>
      </div>
    </Helmet>
  )
}

// Industry News

// In early September 2024, Egypt witnessed significant developments in the industrial sector. The Ministry of Industry launched the first phase of the "Egypt Digital Industrial Platform," aiming to enhance digital transformation within the industrial sector and facilitate communication between investors and government entities. The platform provides interactive tools and digital services, such as a secure electronic document vault and 24/7 technical support​(
//   العين الإخبارية
//   ,
//   Ela Osboa
//   ).
  
//   Additionally, the ministry announced the allocation of 1,124 industrial land plots across 14 governorates, including Cairo, Alexandria, and Monufia, from September 1st to 8th. This move is part of the ministry's efforts to boost industrial investment and streamline the process of land allocation for investors​(
//   مصراوي.كوم
// .
  
// World Events  )


  
// Legislation and Regulations
  
// In Egypt, gun ownership is highly regulated under Law No. 394 of 1954. This law requires citizens to obtain a license for the acquisition and possession of firearms, including smooth-barrel guns, pistols, and shotguns. To get a license, applicants must undergo a thorough process that includes background checks, providing a valid reason for ownership, and passing safety courses. Licenses must be renewed every three years.

// Recent changes and updates include stricter enforcement of the existing laws, especially in response to the increased availability of unlicensed firearms following the 2011 revolution. The government has also launched initiatives to combat the proliferation of illegal weapons, focusing on confiscating unlicensed guns and arresting smugglers and dealers.

// The law also prohibits the manufacture, import, and trade of firearms and ammunition without a proper license. Violations of these regulations are met with severe penalties, including imprisonment and hefty fines【33†source】【34†source】.
  


// Weapon Reviews

// Here’s an overview of some of the latest reviews and analyses of new or popular firearms on the market:

// 1. **Handguns**: The Walther PDP Compact Steel Frame 4-inch is one of the top-rated handguns of 2024. Despite its somewhat bulky design, the pistol offers superb ergonomics and performance, making it a favorite among testers. Its steel frame, while adding weight, contributes to its smooth shooting experience. This model is part of Walther's successful striker-fired lineup and is known for its accuracy and reliability, especially in drills and steel shooting【42†source】.

// 2. **Rifles**: Among the top new rifles of 2024, the **PTR 63** and **PWS URX** stand out. The PTR 63, inspired by classic H&K designs, is praised for its blend of old-school aesthetics with modern functionality. The PWS URX, on the other hand, is noted for its modular design, allowing quick caliber changes, making it a versatile choice for various shooting needs【43†source】.

// 3. **Handgun Customization**: The **PSA 5.7 Rock** is another notable mention, especially for those interested in customization and minimal recoil. It's an excellent value for its price, offering features like slide serrations and a Picatinny accessory rail, making it a strong contender in the 5.7x28mm market【44†source】.

// These firearms reflect a mix of innovation and tradition, catering to a wide range of preferences and needs in the shooting community. Whether you're looking for performance, versatility, or value, these models are some of the top choices available this year.



// Interviews with experts
  
// Recent interviews with experts in the field of military safety and weapons have provided valuable insights into various aspects of defense and military strategy. For example, Paul Scharre, a prominent expert on autonomous weapons, discussed the limited role of fully autonomous weapons in great power competition between the U.S. and China. He emphasized that while AI and automation are becoming more integrated into military systems, fully autonomous weapons are not yet a significant factor in strategic planning【52†source】.

// Additionally, the Stockholm International Peace Research Institute (SIPRI) has been actively involved in discussions on arms control and disarmament. Their recent events and publications have highlighted the complexities of military spending, the challenges of arms export controls, and the ongoing shifts in global geopolitical dynamics【53†source】.

// Defense News has also featured interviews with military leaders and industry experts. These interviews cover a wide range of topics, including modernization efforts in various military branches, the impact of the war in Ukraine on defense strategies, and the integration of advanced technologies like AI and machine learning into military operations【54†source】.

// These insights provide a deeper understanding of the current challenges and developments in the field of military safety and weaponry.



// Special Reports

// Recent articles have explored the evolution and impact of firearms like machine guns, sniper rifles, and the AR-15 in the defense industry.

// The **AR-15**, originally developed in the late 1950s by Eugene Stoner for military use, has undergone significant evolution. The rifle's modular design, allowing for extensive customization, has made it a favorite in both civilian and military circles. Initially designed for military purposes, its adoption by civilians has seen it become a highly customizable platform, with numerous aftermarket parts and accessories available. This adaptability has made the AR-15 a staple for various uses, from home defense to recreational shooting. The weapon has also seen significant technological advancements, particularly in optics and attachment systems, enhancing its versatility and effectiveness【62†source】【63†source】.

// **Sniper rifles** have seen similar advancements, with modern designs focusing on increased accuracy, range, and adaptability to different combat environments. Advances in materials and manufacturing processes have allowed for lighter and more durable rifles, while innovations in optics have significantly enhanced targeting capabilities.

// Machine guns have also evolved, with modern variants offering improved reliability, reduced recoil, and greater ease of use. These developments are crucial in maintaining the effectiveness of these weapons in various combat scenarios.

// These articles provide a deep dive into the historical evolution, technological advancements, and current significance of these weapons in the defense industry. For a more detailed exploration, you can check the sources from sites like Gun Digest and Guns.com.



// Security and Safety

// When it comes to firearm safety and responsible use, there are several key practices and tips that gun owners should follow to ensure both personal and community safety.

// 1. **Proper Training and Education**: Firearms safety training is essential for all gun owners, whether they are beginners or seasoned enthusiasts. This training covers the basic rules of firearm safety, such as treating every gun as if it's loaded, keeping the muzzle pointed in a safe direction, and keeping your finger off the trigger until ready to shoot. Training also includes understanding the legal responsibilities and safe handling of firearms【74†source】.

// 2. **Regular Maintenance and Safe Handling**: It’s important to regularly maintain your firearms to ensure they function correctly. This includes cleaning them and checking for any signs of wear or damage. Knowing how to operate your firearm safely, including how to load, unload, and store it properly, is crucial【73†source】.

// 3. **Secure Storage**: Storing firearms securely is a major aspect of responsible gun ownership. This means ensuring that firearms are inaccessible to unauthorized persons, particularly children. Options for secure storage include gun safes, lock boxes, and trigger locks. Proper storage not only prevents accidents but also reduces the risk of theft and misuse【73†source】.

// 4. **Personal and Community Safety**: Understanding the impact of firearm use on community safety is part of being a responsible gun owner. Firearms safety training emphasizes the importance of situational awareness, decision-making in high-stress situations, and understanding the consequences of using a firearm in self-defense【74†source】.

// By following these practices, gun owners can significantly reduce the risk of accidents and contribute to a safer environment for everyone.

export default News