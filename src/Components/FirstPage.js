import React,{useState} from 'react'
import '../CSSComponent/Page.css'
import { Icon } from 'react-icons-kit'
import {ic_keyboard_arrow_up} from 'react-icons-kit/md/ic_keyboard_arrow_up'
import {ic_keyboard_arrow_down_twotone} from 'react-icons-kit/md/ic_keyboard_arrow_down_twotone'
import {smallRight} from 'react-icons-kit/entypo/smallRight'
import {smallDown} from 'react-icons-kit/entypo/smallDown'
function FirstPage() {
const [myPicture,setMyPicture] = useState(false)
const [objective1,setObjective1] = useState(false)
const [pictureBox,setPictureBox] = useState('for_my_resuming.jpg')
const [information,setInformation] = useState(false)
const [institution,setInstitution] = useState(false)
const [myqualification,setMyqualification] = useState(false)
const [myWorkExpirience,setMyWorkExpirience] = useState(false)
const [myhobbies,setMyhobbies] = useState(false)
const [myReferees,setMyReferees] = useState(false)
    const openpicture =() => {
        setMyPicture(!myPicture)
    }
    const closePicture =() => {
        setMyPicture(!myPicture)
    }
    const objective = () => {
     setObjective1(!objective1)
    }
    const biodata = () => {
     setInformation(!information)
     }
     const school = () => {
      setInstitution(!institution)
      }
      const qualification = () => {
        setMyqualification(!myqualification)
      }
      const workExpirience = () => {
        setMyWorkExpirience(!myWorkExpirience)
      }

      const hobbies = () => {
        setMyhobbies(!myhobbies)
      }
      const referees = () => {
       setMyReferees(!myReferees)
      }
      const screenWidth  = window.screen.width;
      const screenHeight = window.screen.height;
      console.log(screenWidth,screenHeight);
  return (
    <div className='div-direction'>
      <div className='resumeSize'>
       <div>
       {myPicture ? <img src={pictureBox} onClick={closePicture} className='pictureWork2'/>:
        <img src='for_my_resuming.jpg' className='pictureWork' onClick={openpicture}/>}
       </div>
        <div className='heading'>
        <h3 className='my_name'> IBHALUOBE GODWIN GEORGE </h3>
        <h3 className='abot_me'> fullStack(React.js, react-native(Mobile), typeScript, node.js, mySql and MongoDB) </h3>
        <h4 className='my_address'>55a, Rasaki Oladega Street, Satellite Town Lagos.</h4>
        <h4 className='my_phone'>Phone: 07069183891</h4>
        </div>
        <h3 className='objective' onClick={objective}>OBJECTIVES
         {objective1 === false ? (<Icon icon={smallRight} style={{width:"3rem"}}/>):
         (<Icon icon={smallDown}  style={{width:"3rem"}} />)}
         </h3>
        {objective1 && <div className='objective1'>
          <p>To work in a dynamic environment where challenges 
            can be turned into development and professional expertise, 
            with a positive oriented organization structure for the achievement of
             the peak goals of the organization and individuals.</p>
        </div> }
        <h3 className='biodata'onClick={biodata} >BIO DATA
        {information === false ? (<Icon icon={smallRight} style={{width:"3rem"}}/>):
         (<Icon icon={smallDown}  style={{width:"3rem"}} />)}
        </h3>
        {information && <div className='biodata1'>
          <table>
          <tr className='right-td'>
           <div className='dateOfBirth'><td>Date of Birth:</td></div>
            <td>23rd July 1988.</td>
          </tr>
          <tr>
            <div className='stateOfOrign'><td>State of Origin:</td></div>
            <td>Edo State </td>
          </tr>
          <tr>
           <div className='lga'> <td>Local Government:</td></div>
            <td>Esan North-East </td>
          </tr>
          <tr>
           <div className='religion'><td>Religion:</td></div>
            <td>Christian </td>
          </tr>
          <tr>
           <div className='nationality'><td>Nationality:</td></div>
            <td>Nigerian </td>
          </tr>
          </table>
          </div>}
          <h3 className='school'onClick={school} >EDUCATIONAL INSTITUTION
          {institution === false ? (<Icon icon={smallRight} style={{width:"3rem"}}/>):
         (<Icon icon={smallDown}  style={{width:"3rem"}} />)}
          </h3>
          {institution && <div className='mylist'>
          <ul>
          <li className='school_attends'>Gaskiya College, Ijora Badia, Lagos.</li>
           <li className='school_attends'>Autonet Computer Institution</li>
          </ul>
            </div>}
            <h3 className='qualification'onClick={qualification} >QUALIFICATIONS
            {myqualification === false ? (<Icon icon={smallRight} style={{width:"3rem"}}/>):
            (<Icon icon={smallDown}  style={{width:"3rem"}} />)}
            </h3>
            {myqualification && <div className='mylist'>
              <ul>
              <li className='school_attends'>Computer programming.</li>
              <li className='school_attends'>First School Leaving Certificate </li>
             </ul>
              </div>}
              <h3 className='workExpirience'onClick={workExpirience} >WORK EXPERIENCE
              {myWorkExpirience === false ? (<Icon icon={smallRight} style={{width:"3rem"}}/>):
              (<Icon icon={smallDown}  style={{width:"3rem"}} />)}
              </h3>
              {myWorkExpirience && <div className='mylist'>
                <ul>
                <li className='school_attends'>Tanikem Computer School and Data Management .</li>
                <li className='school_attends'>Work from home as a freelancer</li>
                </ul>
                </div>}
                <h3 className='hobbies'onClick={hobbies} >HOBBIES
                  {myhobbies === false ? (<Icon icon={smallRight} style={{width:"3rem"}}/>):
                 (<Icon icon={smallDown}  style={{width:"3rem"}} />)}
                </h3>
                  {myhobbies && <div className='mylist'>
                  <h3 className='school_attends'>Reading and Driving</h3>
                  </div>}
                  <h3 className='referees'onClick={referees} >REFEREES
                  {myReferees === false ? (<Icon icon={smallRight} style={{width:"3rem"}}/>):
                   (<Icon icon={smallDown}  style={{width:"3rem"}} />)}
                  </h3>
                  {myReferees && <div className='mylist'>
                   <p>On Request</p>
                  </div>}
    </div>
    </div>
  )
}

export default FirstPage