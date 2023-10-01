import React from 'react';
import './banktransfer.scss';
import vectorDesign from '../../../assets/commonAssets/vectorwhite.png';
import Left from '../../../assets/BankTransfer/Left.png'

const BankTransfer = () => {
  return (
    <div className="banktransfer">
        <div className='banktransferContainer'>
            <div className="banktransferleft">
                <img className='leftImg' alt="leftImg" src={Left}/>
            </div>
            <div className="banktransferright">
                <div className="transferTitle">Online / Direct Bank Transfer Details</div>
                <img className="transferImage" src={vectorDesign}/>
                <div className="transferDesc">
                    
                            <h5> A/C Name : <strong>Vishwa Jagriti Mission </strong> </h5>
                            <h5> Bank Name :  Axis Bank Ltd. </h5>
                            <h5> Branch :  A-11, Vishal Enclave, Opp. Rajouri Garden, New Delhi 110027 </h5>
                            <h5> A/C No : 066010100387095 </h5>
                            <h5> IFSC Code : UTIBOO000066</h5>
                            <h5> WhatsApp No : (+91) 9589938938, 9685938938, 8826897955, 7291986653, 9312284390</h5>
                            <h5>After the successful online transfer, take the screenshot of the payment confirmation and send to: info@sudhanshujimaharaj.net </h5>
                </div>

            </div>
        </div>

    </div>
  )
}

export default BankTransfer