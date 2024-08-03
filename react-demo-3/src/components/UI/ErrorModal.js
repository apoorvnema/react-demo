import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Card from './Card'
import './ErrorModal.css'

const Backdrop = ({props}) => {
    return <div className='backdrop' onClick={props.onConfirm}></div>
}

const ModalOverlay = ({props}) => {
    return <Card className='modal'>
    <header className='header'>
        <h2>{props.title}</h2>
    </header>
    <div className='content'>
        <p>{props.message}</p>
    </div>
    <footer className='actions'>
        <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
</Card>
}

const ErrorModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop props={props}/>,document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay props={props}/>,document.getElementById('overlay-root'))}
        </>
    )
}

export default ErrorModal