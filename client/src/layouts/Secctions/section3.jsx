import S_card1 from "../../components/sec3_cards/s_card1";
import "../../Styles/section2_style/sec3.css"

const Section3 = () => {
  return (
    <div className="cards-container">
    <S_card1 date={7} month="May" title="Fun colourful cutlery for toddlers to more enjoy dining"
        des="Pretium fusce id velit ut tortor. Euismod quis viverra nibh
            cras pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas
            ipsum. Sed risus ultricies tristique nulla aliquet."
        more="READ MORE"
    />
    <S_card1 date={7} month="May" title="Fun colourful cutlery for toddlers to more enjoy dining"
        des="Pretium fusce id velit ut tortor. Euismod quis viverra nibh
            cras pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas
            ipsum. Sed risus ultricies tristique nulla aliquet."
        more="READ MORE"
    />
    <S_card1 date={7} month="May" title="Fun colourful cutlery for toddlers to more enjoy dining"
        des="Pretium fusce id velit ut tortor. Euismod quis viverra nibh
            cras pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas
            ipsum. Sed risus ultricies tristique nulla aliquet."
        more="READ MORE"
    />
</div>

  )
}

export default Section3;