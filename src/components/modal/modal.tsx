import { Dispatch, SetStateAction } from 'react';
import style from './style.module.css'
// @ts-ignore
import { useLockBodyScroll } from "@uidotdev/usehooks";

type PropsDescription = {
    description: string;
    className: string
    setModal: Dispatch<SetStateAction<boolean>>
}   

export default function ModalDescription({description, className ,setModal}: PropsDescription) {
    useLockBodyScroll()
    return (

        <div className={className}>
            <button onClick={() => setModal(false)} className={style['btn']}>X</button>
            <div className={style['description-container']}>
            <p className={style['description']}>
            {description}
            </p>

            </div>
        </div>
    )
}