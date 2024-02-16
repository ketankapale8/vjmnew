import React , {useState} from 'react';
import './faq.scss';
import vectorDesign from '../../assets/commonAssets/Vector.png'


const questions = [
    {
      id: 1,
      question: 'VJM Activities/Solution',
      answer: "Project Sponsor a Girl Child is a participatory program where you can sponsor the education of a girl child for a minimum period of one year. For as little as INR 5000–15,000, you can support a girl studying in our schools and getting training at our skill development centre. As a sponsor, you will receive the photograph and profile of your Sponsor a Girl Child program, followed by periodic progress reports.Your small contribution has the power to bring about better living circumstances for poor and marginalised children at VJM institutions.",
    },
      {
      id: 2,
      question: 'Our Work',
      answer: 'At VJM, we’re committed to doing everything we can to protect India’s deprived children’s Right to Education. We engage with parents, volunteers, teachers, and communities to meet the essential needs of children. The majority of the children adopted and supported by VJM have been saved from poverty, rag picking, child labour, and domestic violence. We wish to assist them in becoming self-sufficient and responsible citizens. With the help of donations, supporters, and volunteers, we support them morally, socially, and financially. Join hands to provide better facilities for children.',
    },
      {
      id: 3,
      question: '80G Benefits',
      answer: 'Vishwa Jagriti Mission is registered under Section 80(G) (5) of the Income Tax Act and whosoever donates to VJM is eligible to get a 50% tax deduction on the amount paid by them if the donated amount does not exceed 10% of their Gross Total Income. After donation, receive a certificate under Section 80g along with your receipt. While filing income tax returns, claim amount donated as a deduction under Section 80G. NRI donors (Indian citizens; holding an Indian passport) are eligible to tax exemption under section 80 G of the IT Act.',
    },
        {
      id: 4,
      question: ' Why Donate',
      answer: "A small investment in girls education is the least we can do to build a better society around ourselves. The importance of girls’ education is also recognised by the UN Sustainable Development Goals. The Government of India’s ‘Beti Bachao Beti Padho’ campaign is also in the same line. We at VJM are also providing marginalised girls with the support they need to get quality education free of cost, and grow up to be well-educated, confident, and independent young women.",
    },

    {
        id: 5,
        question: 'About Vishwa Jagriti Mission',
        answer: 'VJM is a prominent spiritual and social service organisation and one of India’s most trustworthy NGOs, founded in 1991 by HH Sudhanshu Ji Maharaj. It has worked tirelessly for over three decades to improve the lives of impoverished children and support them in enjoying their childhood. With the aid of donors and volunteers from India and overseas, the organisation is striving to address challenges such as a lack of education, healthcare, nutrition, and safety. In India, VJM has established Ashrams, Primary and Secondary Schools, and Vocational Training Centers. These institutes provide free education to children in need. With your support, we can continue our charitable programs more easily and even expand them to different parts of India.',
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
  

const FAQ = () => {
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
      <h3 className="heading" >FAQs</h3>
      <img src={vectorDesign} className='middleImg'/>
      <section className='faq'>
       {questions.map(item => <Question question={item.question} answer={item.answer} />)}
      </section> 
    </div>
    </>
  )
}

export default FAQ