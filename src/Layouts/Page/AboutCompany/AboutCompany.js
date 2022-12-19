import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div>
            <Heading/> {/* Заголовок и кнопка справа */}

            <div class="container">
  <div class="row justify-content-between">
    <div class="col-5 w-50 p-3">
    <General/> {/* Основная информация вроде названия, типа и телефона */}
    </div>
    <div class="col-5 w-50 p-1">
    <Addresses/> {/* Список доступных адресов заведений */}
    </div>
  </div>  </div>  </div>

          
    );
}

export default AboutCompany;