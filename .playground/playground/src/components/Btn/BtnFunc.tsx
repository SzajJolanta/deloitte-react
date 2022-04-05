import React, { FunctionComponent, useState, useEffect } from "react";

interface BtnProps {
    type: "button" | "submit" | "reset";
    title: string;
}

const Btn: FunctionComponent<BtnProps> = (props) => {
    const [ counter, setCounter ] = useState<number>(0);

    const changeCounter = (increment = 1) => {
        setCounter(counter + increment);
    }

    const a = () => {}

    useEffect(() => {
        console.log('component Btn is mounted');
        window.addEventListener('resize', a)

        return () => {
            console.log('component Btn is unmounted')
            window.removeEventListener('resize', a);
        }
    }, []); // tylko na początku

    useEffect(() => {
        console.log('component Btn is updated')
    }); // po każdym renderze

    useEffect(() => {
        document.title = props.title
    }, [props.title]); // po zmienie props title

    return (
        <div>
            <p>Kliknięto {counter} razy!</p>
            <button
                type={props.type}
                onClick={() => changeCounter()}
            >
                {props.title}
            </button>
            <button
                type={props.type}
                onClick={() => changeCounter(5)}
            >
                {props.title} Zmienia o 5
            </button>
        </div>
    )
}

Btn.defaultProps = {
    type: "button",
    title: "Kliknij mnie!"
}

export default Btn