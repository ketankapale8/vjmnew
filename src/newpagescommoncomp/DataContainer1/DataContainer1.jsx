import React from 'react';
import './datacontainer.scss';

const DataContainer1 = () => {

    const data = [
        {
            title : "Privacy policy and Registration",
            heading1 : "Please read this carefully because it sets out the terms of a legally binding agreement between you and Vishwa Jagriti Mission.",
            desc1 : "You must use all information received by you from your use of by using www.vishwajagritimission.org in accordance with our privacy policy, which is incorporated into and forms part of the terms and conditions. Please read this privacy policy for details of how we may process your personal data. Please note that www.vishwajagritimission.org will only process your personal data in accordance with this privacy policy.",
            desc2 : "In consideration of you being allowed to register as a subscriber of www.vishwajagritimission.org, you agree that:",
            // desc3 : "We recommend that you print and save a copy of these terms and conditions for your records. We strongly recommend that you read these terms and conditions in their entirety.",
            // heading2: "Introduction",
            // desc4: "These terms and conditions were last updated on August 2016 and replace all previous terms and conditions for vishwajagritimission.org. Vishwa Jagriti Mission may update these terms and conditions for legal or regulatory reasons, or to reflect changes in our services or business practices. We will provide a notice of such changes on this website. If you are anvishwajagritimission.org subscriber, any changes will become effective from the date of your next payment following the changes, unless we notify you otherwise. If you do not agree to the changes, you should not use this website. If you are not a vishwajagritimission.org subscriber, any changes will become effective as soon as we notify you of them through our website.",
            // desc5: "We may in exceptional circumstances cease to publish vishwajagritimission.org, or cease to provide subscription services. If we do so, then we will have no further obligation or liability to you, unless you are a subscriber, in which case we will offer you a refund of the value of the unexpired period of your subscription.",
            // heading3: " Access and use",
            // desc6: "Our ability to invest in and provide high quality content depends on our users complying with this section 2. Amongst other things, the copyright policy invites organizations that may be using VJM’s content without the appropriate permissions to approach us with a view to discussing the purchase of a license to legitimize that use.",
            // desc7: "Permitted use: All VJM’s content belongs to Vishwa Jagriti Mission or its licensors, who own all right, title, interest and intellectual property rights (including copyright, trademark and database rights). No intellectual property rights in any VJM’s any article, or any other source are transferred or granted to subscribers, users or other third parties. You may not use any image, video, text, content, link, without written permission from Vishwa Jagriti Mission. You may, however, do the following:",
            arr1: [
                {

                    title1 : "All information you provide to Vishwa Jagriti Mission is true, accurate and complete;",
                    title2 : " It is your responsibility to update and maintain changes to that information on the applicable vishwajagritimission.org registration or subscription pages (which may be done via the following link:)",
                    title3 : " Vishwa Jagriti Mission is entitled to rely on any information you provide to us; and.",
                    title4: " That you will not impersonate any other person or entity or use a false name that you are not authorized to use.",
                    title5 : "[if you are under 18 years of age, you confirm that you have obtained the permission of your parent or guardian before you register to use www.vishwajagritimission.org]",
                    title6: "You are responsible for all use of www.vishwajagritimission.org made by you or under your id and for preventing unauthorized use of your id. If you believe there has been any breach of security such as the disclosure, theft or unauthorized use of your id or any payment information, you must notify www.vishwajagritimission.org immediately by e-mailing us at info@vishwajagritimission.org. We recommend that you do not select an obvious user password (such as your name) and that you change it regularly.",
                    // title7: "You clearly source VJM or vishwajagritimission.org as the author of any article from which you have derived a summary by way of an attribution with a hypertext link from the word VJM to the original story published on vishwajagritimission.org;",
                    // title8: "You do not use or create summaries that promote or endorse any product or service; and If Vishwa Jagriti Mission notifies you that you are creating a substitute(s) or republishing VJM’s content, you shall immediately cease doing so and all of your rights in respect of VJM shall be regarded as having been withdrawn, unless/until Vishwa Jagriti Mission reaches an agreement with you regarding your rights in respect of the content.",
                    // title9: "Please note that in addition to our rights at law to restrict certain types of use referred to in this section 2, the restrictions below are also contractual in nature and bind all users and subscribers of vishwajagritimission.org.",
                    
                }
            ],
            heading4 : "Cookies Policy",
            desc8: "What are cookies?",
            desc9 : "Cookies are small data files placed on your computer or Internet enabled device by websites in order to add functionality. A cookie can be used to identify a user’s computer or Internet enabled device to the website, or to other third party websites. This allows websites to improve the way they work, such as remembering preferences expressed by a user or tracking a user’s use of a website for statistical analysis.",
            desc10: "Hereby, www.vishwajagritimission.org admits that for a better user experience and smooth functioning of the website we may happen to use or save cookies. If you wish not to have your browser cookies to be monitored or saved please exit the website and clear the browser history to remove any cookies being placed."
            // arr2: [
            //     {
            //         title1 : " May display VJM logo (view our brand guidelines here) but must not otherwise use any VJM trademarks without permission from VJM;",
            //         title2 : "May not remove, distort or otherwise alter the size or appearance of the logo;",
            //         title3 : "May link to the homepage of vishwajagritimission.org, and, provided that the requirements of section 2 are complied with, may also link to other pages of vishwajagritimission.org;",
            //         title4 : " Must not in any way imply that VJM is endorsing it or its products or services or any other party or that party’s products or services;",
            //         title5 : " Must not misrepresent its relationship with VJM or present false information about VJM, vishwajagritimission.org;",
            //         title6 : "Must not be a site or service that infringes any intellectual property or other right of any person or that otherwise does not comply with all relevant laws and regulations;",
            //         title7 : " Must not be a site or service that contains content that could be construed as distasteful or offensive or otherwise incompatible with the ethos of Vishwa Jagriti Mission, vishwajagritimission.org."
            //     }
            // ]
            
        }
    ]
  return (
    <div className='datacontainer'>
        {data.map(item => {
            return (
                <>
                <div className="dataManager">
                    <div className="dataContent">
                        <div className="title">{item.title}</div>
                        {/* <div className="heading">{item.heading1}</div> */}
                        <p>{item?.desc1}</p>
                        <p>{item?.desc2}</p>
                        {/* <p>{item?.desc3}</p> */}

                        {/* <div className="heading">{item?.heading2}</div> */}
                        {/* <p>{item?.desc4}</p>
                        <p>{item?.desc5}</p> */}

                        {/* <div className="heading">{item?.heading3}</div>
                        <p>{item?.desc6}</p>
                        <p>{item?.desc7}</p> */}

                        {item.arr1.map(item=>{
                            return (
                                <>
                                    <ul>
                                        <li>
                                            <p>{item.title1}</p>
                                        </li>
                                        <li>
                                            <p>{item.title2}</p>
                                        </li>
                                        <li>
                                            <p>{item.title3}</p>
                                        </li>
                                        <li>
                                            <p>{item.title4}</p>
                                        </li>
                                        <li>
                                            <p>{item.title5}</p>
                                        </li>
                                        <li>
                                            <p>{item.title6}</p>
                                        </li>
                                        {/* <li>
                                            <p>{item?.title7}</p>
                                        </li>
                                        <li>
                                            <p>{item?.title8}</p>
                                        </li>
                                        <li>
                                            <p>{item?.title9}</p>
                                        </li> */}
                                    </ul>
                                </>
                            )
                        })}

                <div className="heading">{item.heading4}</div>
                <p>{item.desc8}</p>
                {/* {item.arr2.map(item=>{
                            return (
                                <>
                                    <ul>
                                        <li>
                                            <p>{item.title1}</p>
                                        </li>
                                        <li>
                                            <p>{item.title2}</p>
                                        </li>
                                        <li>
                                            <p>{item.title3}</p>
                                        </li>
                                        <li>
                                            <p>{item.title4}</p>
                                        </li>
                                        <li>
                                            <p>{item.title5}</p>
                                        </li>
                                        <li>
                                            <p>{item.title6}</p>
                                        </li>
                                        <li>
                                            <p>{item.title7}</p>
                                        </li>
                              
                                    </ul>
                                </>
                            )
                        })} */}

                <p>{item?.desc9}</p>
                <p>{item?.desc10}</p>





                    </div>
                </div>
                
                </>
            )
        })}
    </div>
  )
}

export default DataContainer1