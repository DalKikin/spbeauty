import styled from "styled-components";

const TitleS = styled.div`
    color: #94A3B8;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
`;

const Input = styled.input`
    /* Steel Gray / 50 */
    background: #F8FAFC;
    /* Steel Gray / 200 */
    border: 1px solid #E2E8F0;
    border-radius: 24px;
&:hover {
        opacity 0.8;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined 
        ? (<div></div>) 
        : (<TitleS>{title}</TitleS>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='py-2 ps-3' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;