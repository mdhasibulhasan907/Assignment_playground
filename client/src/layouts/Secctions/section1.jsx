import Card1 from "../../components/card1";
import Card2 from "../../components/card2";
import Card3 from "../../components/card3";
import Card4 from "../../components/card4";


import "../../Styles/section2_style/Card1.css"
const Section1 = () => {
  return (
    <div className="section1_container">
      <div>
      <Card1/>
      </div>
      <div>
      <Card2/>
      </div>
      
      <div>
      <Card3/>
     
      </div>
      <div>
      <Card4/>
      </div>

    </div>
  )
}

export default Section1;