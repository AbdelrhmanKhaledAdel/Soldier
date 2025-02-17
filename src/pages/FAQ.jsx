import React from 'react';
import { Container } from 'react-bootstrap';
import Helmet from "../components/Helmet/Helmet"

// Material Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Style
import "../styles/faq.css"

const FAQ = () => {
  const items = [
    {
      id: 1,
      title: "What types of weapons are available on the website?",
      content: "We offer a wide range of weapons, including rifles, pistols, and light weapons. You can browse our catalog for more details."
    },
    {
      id: 2,
      title: "Are the weapons certified and legal?",
      content: "All products listed on Soldier are legal and comply with local and international regulations."
    },
    {
      id: 3,
      title: "Do you offer weapon accessories?",
      content: "Yes, we provide various accessories such as ammunition, thermal cameras, and more."
    },
    {
      id: 4,
      title: "How long does delivery take?",
      content: "Delivery time depends on your location. Orders are typically delivered within 5-10 business days."
    },
    {
      id: 5,
      title: "Do you offer international shipping?",
      content: "Yes, we provide international shipping to select countries. Check the list of available countries during checkout."
    },
    {
      id: 6,
      title: "Is shipping free?",
      content: "Shipping is free for orders exceeding a certain amount (e.g., $500)."
    },
    {
      id: 7,
      title: "What payment methods are available?",
      content: "We accept credit cards, bank transfers, and e-wallet payments."
    },
    {
      id: 8,
      title: "Is payment secure on the website?",
      content: "Yes, all transactions are processed through encrypted and secure payment gateways."
    },
    {
      id: 9,
      title: "Can I purchase weapons without a license?",
      content: "No, purchasing weapons requires legal authorization from local authorities."
    },
    {
      id: 10,
      title: "Do you provide consultations on weapon laws?",
      content: "Yes, our team can offer legal information regarding weapon ownership in your region."
    },
    {
      id: 11,
      title: "How can I contact the support team?",
      content: "You can reach us via email or through the phone number listed on the Contact Us page."
    },
    {
      id: 12,
      title: "Can I return or exchange a product?",
      content: "Yes, we offer a flexible return and exchange policy under specific conditions."
    },
    {
      id: 13,
      title: "Are there loyalty programs or special discounts?",
      content: "Yes, we offer a loyalty program for regular members, along with exclusive discounts on products."
    },
    {
      id: 14,
      title: "How can I subscribe to the newsletter?",
      content: "You can easily subscribe by entering your email in the designated field at the bottom of the website."
    },
    {
      id: 15,
      title: "Can I request a product that is not listed on the website?",
      content: "Yes, we provide a special request service for certain products not currently available."
    },
    {
      id: 16,
      title: "How can I stay updated with new offers?",
      content: "You can follow our offers through the newsletter or on our social media pages."
    },
  ]
  const [contentItem, setContentItem] = React.useState(0)


  return (
    <Helmet title="Frequently Asked Questions">
      <div className='faq'>
        <header>
          <h5>FAQ</h5>
          <h1>Frequently Asked Questions</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique molestias corrupti quidem eaque eos provident quae.</p>
        </header>
        <Container>
          {
            items.map(x => (
              <div className={`item ${contentItem === x.id ? 'active' : ''}`} key={x.id}>
                <head>
                  <h5>{x.title}</h5>
                  <div className="add" onClick={() => contentItem === x.id ? setContentItem(0): setContentItem(x.id)}> 
                    <AddIcon />
                  </div>
                  <div className="remove" onClick={() => contentItem === x.id ? setContentItem(0): setContentItem(x.id)}>
                    <RemoveIcon />
                  </div>
                </head>
                <div className="content_item">
                  <p>{x.content}</p>
                </div>
              </div>
            ))
          }
        </Container>
      </div>
    </Helmet>
  )
}


// في صفحة الأسئلة الشائعة (FAQ) على موقع "Soldier"، يمكنك تناول مجموعة من الأسئلة الشائعة التي قد تهم زوار الموقع. إليك بعض الأفكار التي قد تساعدك في إنشاء محتوى لهذه الصفحة:

// 1. **ما هي الأسلحة التي تعرضونها؟**
//    - تفاصيل حول أنواع الأسلحة المتاحة، مثل الأسلحة النارية، البنادق، الأسلحة البيضاء، والمعدات العسكرية الأخرى.

// 2. **هل يمكنني شراء الأسلحة عبر الموقع؟**
//    - معلومات حول عملية الشراء عبر الإنترنت، إذا كان ذلك متاحًا، وأي متطلبات قانونية أو إجراءات يجب اتباعها.

// 3. **كيف أتحقق من صحة الأسلحة التي أشتريها؟**
//    - نصائح حول كيفية التحقق من جودة الأسلحة، بما في ذلك العلامات التجارية المعروفة والاختبارات التي يجب إجراؤها.

// 4. **ما هي إجراءات السلامة التي يجب اتباعها عند استخدام الأسلحة؟**
//    - إرشادات حول كيفية استخدام الأسلحة بشكل آمن ومسؤول، بما في ذلك نصائح لتخزينها وصيانتها.

// 5. **هل تقدمون خدمات صيانة للأسلحة؟**
//    - تفاصيل حول ما إذا كان هناك خدمات صيانة أو إصلاح للأسلحة التي تبيعونها، وكيفية الاستفادة منها.

// 6. **ما هي سياسات الشحن والتوصيل؟**0
//    - معلومات حول كيفية شحن الأسلحة، تكاليف الشحن، وأوقات التسليم.

// 7. **هل هناك متطلبات قانونية لشراء الأسلحة؟**
//    - شرح للمتطلبات القانونية التي يجب تلبيتها عند شراء الأسلحة، مثل تراخيص الأسلحة أو التحقق من الخلفية.

// 8. **كيف يمكنني التواصل مع فريق الدعم؟**
//    - تفاصيل حول كيفية الاتصال بفريق الدعم للحصول على المساعدة أو الاستفسارات، مثل البريد الإلكتروني، الهاتف، أو نموذج الاتصال.

// 9. **هل توجد خصومات أو عروض خاصة؟**
//    - معلومات حول أي خصومات أو عروض ترويجية قد تكون متاحة للزوار.

// 10. **كيف يمكنني تحديث بيانات حسابي؟**
//     - إرشادات حول كيفية تحديث المعلومات الشخصية أو تفاصيل الحساب على الموقع.

// يمكنك تخصيص هذه الأسئلة والإجابات وفقًا لاحتياجات موقعك وجمهورك المستهدف.

export default FAQ;