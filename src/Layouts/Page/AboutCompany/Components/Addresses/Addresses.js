import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-flex justify-content-between col flex-column gap-2 mt-5 address-frame'>
      
            <div className='d-flex flex-column gap-3'>
            <div className='title mb-2'>Адреса заведений</div>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
                
                <div className='d-flex flex-column'>
                <SecondaryButton>Добавить филиал</SecondaryButton> </div>
            </div> 
      
    );
}

export default Addresses;