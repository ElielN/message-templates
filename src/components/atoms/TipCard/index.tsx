import { useSelector } from 'react-redux';
import './styles.scss';
import Tip from '@/assets/icons/tip.svg';
import { RootState } from '@/lib/store';
import { useEffect, useState } from 'react';

type TipCardProps = {
    title: string
    text: string
    link: string
    linkText?: string
}

export const TipCard = ({
    title,
    text,
    link,
    linkText = 'Learn More'
}: TipCardProps) => {
    const tipsEnabled = useSelector((state: RootState) => state.tips.tipsEnabled)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if(tipsEnabled) {
            setDisabled(false)
        }
    }, [tipsEnabled])

    return (
        <div className={`tip-card ${!tipsEnabled || disabled ? 'disabled' : ''}`}>
            <div>
                <div>
                    <img src={Tip} alt="tip icon" />
                    <h3>{title}</h3>
                </div>
                <div onClick={() => setDisabled(true)}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <small>{text}</small>
            <a href={link}>{linkText}</a>
        </div>
    )
}