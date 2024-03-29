import { useId } from "react"
import Tip from '@/assets/icons/tooltip.svg'
import './styles.scss'

type ToggleFieldProps = {
    icon: string,
    iconAlt: string,
    title: string,
    tip: string,
    toggleAction: () => void
}

export const ToggleField = ({
    icon,
    iconAlt,
    title,
    tip,
    toggleAction
}: ToggleFieldProps) => {
    const id = useId()
    return (
        <div className="toggle-field">
            <div>
                <img src={icon} alt={iconAlt} />
                <h2>{title}</h2>
                <img src={Tip} alt="tooltip" />
            </div>
            <label htmlFor={id}>
                <input type="checkbox" id={id} onClick={toggleAction}/>
                <div></div>
            </label>
        </div>
    )
}