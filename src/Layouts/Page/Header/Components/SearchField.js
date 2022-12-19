import styled from 'styled-components';
import SearchIcon from '../../../../Icons/SearchIcon';
import IconOnlyButton from '../../../../Components/IconOnlyButton';

const WrapperInput = styled.div`
    position:relative;
    width: 217px;
    height: 34px;
    top: calc(50% - 34px/2);
`;

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #F8FAFC;
    width: 100%;
    &:hover {
        background-color: #F8FAFC;
        opacity: 0.8;
    }
`;

const SearchIconWrapper = styled.div`
    background-color: #F8FAFC;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    box-sizing:border-box;
    right: 20px;  /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
    width: 20px;
    top: 7px;
    height: 20px;
`;

function SearchField() {
    return (
        <WrapperInput className='d-inline-flex'>  {/* Устанавливает ширину поля и включает относительное положение */}
            <Input className='p-2' placeholder='Найти на странице...'/>
            <SearchIconWrapper className='p-2'>  {/* Устанавливает абсолютное положение внутри поля ввода */}
                <IconOnlyButton icon={<SearchIcon/>}/>
            </SearchIconWrapper>
        </WrapperInput>
    );
}

export default SearchField;