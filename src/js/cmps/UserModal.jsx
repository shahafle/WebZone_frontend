import { useState } from 'react';
import { Screen } from './Screen';

// EXAMPLE FOR PROPS CAN BE FOUND BELOW THE JSX.
export function UserModal(props) {


    const [inputsValues, setInputsValues] = useState({});

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setInputsValues(prevState => ({ ...prevState, [name]: value }));
    }


    return (
        <Screen cb={props.handleCbCancel}>

            <div className="user-modal" onClick={ev => ev.stopPropagation()}>

                {props.mainTxt &&
                    <h2 className="main-txt">{props.mainTxt}</h2>}

                {props.subTxt &&
                    <p className="sub-txt">{props.subTxt}</p>}

                {props.type === 'confirm' &&
                    <div className="btns-container">
                        {props.btnTxt_1 && <button className="btn-1" onClick={props.handleCb_1}>{props.btnTxt_1}</button>}
                        {props.btnTxt_2 && <button className="btn-2" onClick={props.handleCb_2}>{props.btnTxt_2}</button>}
                        {props.btnTxtCancel && <button className="btn-cancel" onClick={props.handleCbCancel}>{props.btnTxtCancel}</button>}
                        {/* <button className="btn-optional" onClick={props.handleOptionalCb}>{props.btnOptionalTxt}</button> */}
                    </div>}

                {props.type === 'form' &&
                    <form onSubmit={(ev) => props.handleSubmitCb(ev, inputsValues)}>
                        <input type={props.inputType_1} name={props.inputName_1} onChange={handleChange} placeholder={props.inputPlaceholder_1}></input>
                        <button className="submit">{props.btnSubmitTxt}</button>
                    </form>}

            </div>

        </Screen>
    )
}




// *** EXAMPLE *** //

const propsExample = {
    mainTxt: 'Main',
    subTxt: 'Secondary',

    btnTxtCancel: 'Cancel',
    handleCbCancel: 'CB function to hide the modal',

    type: 'confirm',
    btnTxt_1: 'Yes',
    handleCb_1: 'Function to be emitted on btn-1',
    btnTxt_2: 'Maybe',
    handleCb_2: 'Function to be emitted on btn-2',

    type: 'form',
    handleSubmitCb: 'Function to be emitted on submit',
    btnSubmitTxt: 'Submit',
    inputType_1: 'text',
    inputName_1: 'websiteName',
    inputPlaceholder_1: 'Enter your text here',
}