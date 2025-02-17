import React, {useState} from 'react';

// Material Icons
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Images
import mid_length from "../../assets/all_images/cards/mid_length.png";

// Style
import "../../styles/carousel-slider.css"

const items = [
    {
      id: 1,
      image: mid_length,
      title: "PA-15",
      topic: `PSA AR-15 Pistol 10.5" Carbine 1/7 Phos 9" LTWT M-Lok MOE EPT SBA4, 0DG`,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      details: {
        title: `PSA AR-15 Pistol 10.5" Carbine 1/7 Phos 9" LTWT M-Lok MOE EPT SBA4, 0DG`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
        specifications: [
          { label: "use time", value: '6 ساعات' },
          { label: 'منفذ الشحن', value: 'Type-C' },
          { label: 'متوافق', value: 'Android' },
          { label: 'بلوتوث', value: '5.3' },
          { label: 'تحكم', value: 'لمس' }
        ]
      }
    },
    {
      id: 2,
      image: mid_length,
      title: "PA-15",
      topic: `PSA AR-15 Pistol 1iphippie 1/7 Phos 9" LTWT M-Lok MOE EPT SBA4, 0DG`,
      description: 'Lorem igfgfdsit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      details: {
        title: `PSA AR-15 Pisgffdrbine 1/7 Phos 9" LTWT M-Lok MOE EPT SBA4, 0DG`,
        description: 'Lorem ipsum dolor sit sfsfgf, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
        specifications: [
          { label: "use gd", value: 'gf ساعات' },
          { label: 'منgsdفذ الشحن', value: 'gd-C' },
          { label: 'gf', value: 'fgd' },
          { label: 'b', value: 'd.3' },
          { label: 'saa', value: 'dd' }
        ]
      }
    },
    {
      id: 3,
      image: mid_length,
      title: "PA-15",
      topic: `PSA AR-15 Pistol 10.5" Carbine 1/7 Phos 9" LTWT M-Lok MOE EPT SBA4, 0DG`,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      details: {
        title: `PSA AR-15 Pistol 10.5" Carbine 1/7 Phos 9" LTWT M-Lok MOE EPT SBA4, 0DG`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
        specifications: [
          { label: "use time", value: '6 ساعات' },
          { label: 'منفذ الشحن', value: 'Type-C' },
          { label: 'متوافق', value: 'Android' },
          { label: 'بلوتوث', value: '5.3' },
          { label: 'تحكم', value: 'لمس' }
        ]
      }
    },
    {
      id: 4,
      image: mid_length,
      title: "PA-15",
      topic: `PSA AR-15 Pistol 10.5" Carbine 1/7 Phos 9" LTWT M-Lok MOE EPT SBA4, 0DG`,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      details: {
        title: `PSA AR-15 Pistol 10.5" Carbine 1/7 Phos 9" LTWT M-Lok MOE EPT SBA4, 0DG`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
        specifications: [
          { label: "use time", value: '6 ساعات' },
          { label: 'منفذ الشحن', value: 'Type-C' },
          { label: 'متوافق', value: 'Android' },
          { label: 'بلوتوث', value: '5.3' },
          { label: 'تحكم', value: 'لمس' }
        ]
      }
    },
    {
      id: 5,
      image: mid_length,
      title: "PA-15",
      topic: `PSA AR-15 Pistol 10.5" Carbine 1/7 Phos 9" LTWT M-Lok MOE EPT SBA4, 0DG`,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      details: {
        title: `PSA AR-15 Pistol 10.5" Carbine 1/7 Phos 9" LTWT M-Lok MOE EPT SBA4, 0DG`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
        specifications: [
          { label: "use time", value: '6 ساعات' },
          { label: 'منفذ الشحن', value: 'Type-C' },
          { label: 'متوافق', value: 'Android' },
          { label: 'بلوتوث', value: '5.3' },
          { label: 'تحكم', value: 'لمس' }
        ]
      }
    },
    // أضف المزيد من العناصر هنا
  ];

const CarouselSlider = () => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    };
  
    const handlePrev = () => {
      setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };
  
    const handleBack = () => {
      // أضف الوظيفة لعرض جميع العناصر أو إعادة التوجيه إلى عرض آخر
    };

    const currentItem = items[index];
  return (
    // Carousel
    <div className="carousel">
      <div className="list">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`item ${i === index ? "active" : ""}`}
          >
            <img src={item.image} alt={item.title} />
            {i === index && (
              <div className="introduce">
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.description}</div>
                <button className="seeMore">See More <ArrowOutwardIcon sx={{color: "var(--color)"}} /></button>
              </div>
            )}
            {i === index && (
              <div className="detail">
                <div className="title">{item.details.title}</div>
                <div className="des">{item.details.description}</div>
                <div className="specifications">
                  {item.details.specifications.map((spec, idx) => (
                    <div key={idx}>
                      <p>{spec.label}</p>
                      <p>{spec.value}</p>
                    </div>
                  ))}
                </div>
                <div className="checkout">
                  <button>Add to cart</button>
                  <button>touch</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={handlePrev}><KeyboardArrowLeftIcon/></button>
        <button id="back" onClick={handleBack}>See More <ArrowOutwardIcon sx={{color: "var(--color)"}} /></button>
        <button id="next" onClick={handleNext}><KeyboardArrowRightIcon/></button>
      </div>
    </div>
  )
}

//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
export default CarouselSlider