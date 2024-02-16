import React from 'react';
import './datacontainer.scss';

const DataContainer = () => {

    const data = [
        {
            title : "Terms and Conditions",
            heading1 : "Please read this carefully because it sets out the terms of a legally binding agreement between you and Vishwa Jagriti Mission.",
            desc1 : "These are the terms and conditions (together with any other policies or documents referred to in these terms and conditions) (the “terms and conditions”) on which you may use the vishwajagritimission.org website. These terms and conditions apply to your use of vishwajagritimission.org and all of its content irrespective of the delivery platform or device you use to access it. vishwajagritimission.org and its content can only be used by you after you have read the terms and conditions and accepted them by clicking on the tick box provided for this purpose. If you use vishwajagritimission.org in the course of your business or work, clicking on the tick box to indicate your acceptance of the terms and conditions will mean that you are also accepting these terms and conditions on behalf of that business. We only make these terms and conditions available in the English language.",
            desc2 : "If you do not agree with the terms and conditions (or are not authorized to do so on behalf of your business or work) you should not use vishwajagritimission.org and should cancel any subscription in accordance with your cancellation rights. If you have any questions about our website or your subscription please contact grievance@vjmworld.com.",
            desc3 : "We recommend that you print and save a copy of these terms and conditions for your records. We strongly recommend that you read these terms and conditions in their entirety.",
            heading2: "Introduction",
            desc4: "These terms and conditions were last updated on August 2016 and replace all previous terms and conditions for vishwajagritimission.org. Vishwa Jagriti Mission may update these terms and conditions for legal or regulatory reasons, or to reflect changes in our services or business practices. We will provide a notice of such changes on this website. If you are anvishwajagritimission.org subscriber, any changes will become effective from the date of your next payment following the changes, unless we notify you otherwise. If you do not agree to the changes, you should not use this website. If you are not a vishwajagritimission.org subscriber, any changes will become effective as soon as we notify you of them through our website.",
            desc5: "We may in exceptional circumstances cease to publish vishwajagritimission.org, or cease to provide subscription services. If we do so, then we will have no further obligation or liability to you, unless you are a subscriber, in which case we will offer you a refund of the value of the unexpired period of your subscription.",
            heading3: " Access and use",
            desc6: "Our ability to invest in and provide high quality content depends on our users complying with this section 2. Amongst other things, the copyright policy invites organizations that may be using VJM’s content without the appropriate permissions to approach us with a view to discussing the purchase of a license to legitimize that use.",
            desc7: "Permitted use: All VJM’s content belongs to Vishwa Jagriti Mission or its licensors, who own all right, title, interest and intellectual property rights (including copyright, trademark and database rights). No intellectual property rights in any VJM’s any article, or any other source are transferred or granted to subscribers, users or other third parties. You may not use any image, video, text, content, link, without written permission from Vishwa Jagriti Mission. You may, however, do the following:",
            arr1: [
                {

                    title1 : "View vishwajagritimission.org for your personal use on any device that is compatible with vishwajagritimission.org (this might be your pc, laptop, smartphone, tablet or other mobile device) and store any content on that device for your personal use.",
                    title2 : " Print single copies of articles on paper for your personal use.",
                    title3 : " Share links to articles by using the article tools we make available at the foot of each article.",
                    title4: "Use spidering technology to search and link to vishwajagritimission.org, provided that you do not infringe the restrictions on use below.On condition that you do not create a substitute (as defined below), you may also do the following:",
                    title5 : " Publish online, the original VJM headline and a link to the VJM article and the first 140 characters of an article.",
                    title6: "Forward the original VJM headline and a link to the VJM article and the first 140 characters of an article to other individuals. These are the conditions you must comply with in order to produce summaries:",
                    title7: "You clearly source VJM or vishwajagritimission.org as the author of any article from which you have derived a summary by way of an attribution with a hypertext link from the word VJM to the original story published on vishwajagritimission.org;",
                    title8: "You do not use or create summaries that promote or endorse any product or service; and If Vishwa Jagriti Mission notifies you that you are creating a substitute(s) or republishing VJM’s content, you shall immediately cease doing so and all of your rights in respect of VJM shall be regarded as having been withdrawn, unless/until Vishwa Jagriti Mission reaches an agreement with you regarding your rights in respect of the content.",
                    title9: "Please note that in addition to our rights at law to restrict certain types of use referred to in this section 2, the restrictions below are also contractual in nature and bind all users and subscribers of vishwajagritimission.org.",
                    
                }
            ],
            heading4 : "Linking",
            desc8: "if you would like to link to vishwajagritimission.org, please read and comply with the following guidelines and all applicable laws. A site or service that links to vishwajagritimission.org:",
            arr2: [
                {
                    title1 : " May display VJM logo (view our brand guidelines here) but must not otherwise use any VJM trademarks without permission from VJM;",
                    title2 : "May not remove, distort or otherwise alter the size or appearance of the logo;",
                    title3 : "May link to the homepage of vishwajagritimission.org, and, provided that the requirements of section 2 are complied with, may also link to other pages of vishwajagritimission.org;",
                    title4 : " Must not in any way imply that VJM is endorsing it or its products or services or any other party or that party’s products or services;",
                    title5 : " Must not misrepresent its relationship with VJM or present false information about VJM, vishwajagritimission.org;",
                    title6 : "Must not be a site or service that infringes any intellectual property or other right of any person or that otherwise does not comply with all relevant laws and regulations;",
                    title7 : " Must not be a site or service that contains content that could be construed as distasteful or offensive or otherwise incompatible with the ethos of Vishwa Jagriti Mission, vishwajagritimission.org."
                }
            ]
            
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
                        <p>{item.desc1}</p>
                        <p>{item.desc2}</p>
                        <p>{item.desc3}</p>

                        <div className="heading">{item.heading2}</div>
                        <p>{item.desc4}</p>
                        <p>{item.desc5}</p>

                        <div className="heading">{item.heading3}</div>
                        <p>{item.desc6}</p>
                        <p>{item.desc7}</p>

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
                                        <li>
                                            <p>{item.title7}</p>
                                        </li>
                                        <li>
                                            <p>{item.title8}</p>
                                        </li>
                                        <li>
                                            <p>{item.title9}</p>
                                        </li>
                                    </ul>
                                </>
                            )
                        })}

                <div className="heading">{item.heading4}</div>
                <p>{item.desc8}</p>
                {item.arr2.map(item=>{
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
                                        {/* <li>
                                            <p>{item.title8}</p>
                                        </li>
                                        <li>
                                            <p>{item.title9}</p>
                                        </li> */}
                                    </ul>
                                </>
                            )
                        })}



                    </div>
                </div>
                
                </>
            )
        })}
    </div>
  )
}

export default DataContainer