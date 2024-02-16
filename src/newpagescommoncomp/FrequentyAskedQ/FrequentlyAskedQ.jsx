import React , {useState} from 'react';
import './faq1.scss';
import vectorDesign from '../../assets/commonAssets/Vector.png'


const questions = [
    {
      id: 1,
      question: 'Where I can personally visit to Donate?',
      answer: "Vishwa Jagriti Mission’s headquarters are located at Anand Dham Ashram in New Delhi. However, Due to spread of  Covid-19 Pandemic it is not possible to visit Anand Dham Ashram personally. You can donate only through PayTM, PhonePe or any other UPI app and Online Net Banking, cheque or demand draft. Further query you can call at Phone: +91 9999904747 Toll Free: 1800 11 8188",
    },
      {
      id: 2,
      question: 'Can Money be transferred through PayTM or any other app?',
      answer: 'Money can be transferred through PayTM, PhonePe or any other UPI app and Online Net Banking, cheque or demand draft.',
    },
      {
      id: 3,
      question: 'Is the neighbourhood safe around Ashram?',
      answer: 'The Ashram is located in between the laps of nature. Surrounded by greenery, the Ashram has 24/7 high-end security, providing a safe stay and lets one experience the tranquil aura of the Ashram with dis-connectivity from the city mess, basic amenities are provided with clean rooms and nutritious food.',
    },
        {
      id: 4,
      question: ' What is the procedure of booking a room in Anand Dham Ashram',
      answer: "In order to book a room for your stay, the ashram authorities must be informed two days in advance through phone call or in person. Smoking, alcoholic drinks, and non-vegetarian food are strictly prohibited.",
    },

    {
        id: 5,
        question: 'How Do I become a member of Vishwa Jagriti Mission?',
        answer: 'In order to become a part of Vishwa Jagriti Mission please fill the form here.',
      },
    //     {
    //     id: 6,
    //     question: 'Can individuals join ISFEA, or is it only open to organizations and institutions?',
    //     answer: 'While ISFEA primarily welcomes organizations and institutions as members, individuals who are passionate about our mission can engage with our initiatives and events.',
    //   },
    //       {
    //     id: 7,
    //     question: ' How does ISFEA facilitate collaboration between sports and education institutions?',
    //     answer: " ISFEA facilitates collaboration through networking opportunities, joint projects, and knowledge-sharing platforms, bringing sports and education organizations together.",
    //   },
    //   {
    //     id: 8,
    //     question: ' What resources and support does ISFEA offer to its members?',
    //     answer: " ISFEA offers resources such as research findings, best practices, and guidance to help members implement successful sports and education programs. Support may include mentorship and funding opportunities.",
    //   },
    
  ]
  

const FrequentlyAskedQ = () => {
  const [showFaq , setShowFaq] = useState(false);


  function Toggle(){
    if(showFaq == false){
      setShowFaq(true);
        // setTitle('-')
    }else{
      setShowFaq(false);
        // setTitle('+')
    }
}


    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const handleSearchChange = e => {
      setSearchTerm(e.target.value);
    };

    const Question = props => {
        const [isActive, setActive] = React.useState(false);
        const handleClick = (id) => {
         setActive(!isActive)
       }
         return(
           <div className="question-wrapper">
           <div className='question' id={props.id}>
             <h3 className='questionTitle' onClick={() => handleClick(props.id)} >{props.question}</h3>
             <button onClick={() => handleClick(props.id)}>
               <svg className={isActive? 'active' : ''} viewBox="0 0 320 512" width="100" title="angle-down">
         <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
       </svg>
             </button>     
           </div>
           <div className={isActive? 'answer active' : 'answer'} style={{color:"black"}}>{props.answer}</div>
           </div>
         )
       }
  return (
    <>
         <div className='container'>
      <h3 className="heading" >Frequently Asked Questions</h3>
      <img src={vectorDesign} className='middleImg'/>
      <section className='faq'>
       {questions.map(item => <Question question={item.question} answer={item.answer} />)}
      </section> 
    </div>
    </>
  )
}

export default FrequentlyAskedQ