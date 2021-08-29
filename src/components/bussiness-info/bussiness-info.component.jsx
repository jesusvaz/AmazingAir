import React from 'react';
import './bussiness-info.styles.scss';
import pic1 from '../assets/amaizingair.jpeg';
import pic2 from '../assets/amazingmachines.jpeg';
import Language from '../language/langauge.component';

const BussinesInfo = ({lang,content,setLang}) => {
    return (
        <div className='header'>
           <h2>Amazing Air</h2>
           <Language  lang={lang} setLang={setLang}/>
           <hr/>
           
        <span className="subtitle">
            {
                lang === "en" ? content.data[0].services.en : content.data[0].services.es
            }
        </span>
           <div>
               <span className="services">(801) 471-8808</span>
               <br/>
               
                    <span className="services">
                     {
                         lang === "en" ? content.data[0].try.en : content.data[0].try.es
                     }
                    </span>
          
              

               <div className="pictures">
                   <img src={pic1}/>
                   <img src={pic2}/>
               </div>
               
           </div>
        </div>
    )
}

export default BussinesInfo


