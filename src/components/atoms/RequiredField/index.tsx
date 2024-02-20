import Tip from '@/assets/icons/tooltip.svg'
import './styles.scss'

type RequiredFieldProps = {
    icon: string
    iconAlt: string
    title: string
    tip: string
}

export const RequiredField = ({
    icon,
    iconAlt,
    title,
    tip
}: RequiredFieldProps) => {
    return (
        <div className="required-field">
            <img src={icon} alt="" />
            <div>
                <h2>{title}</h2>
                <img src={Tip} alt="tooltip" />
            </div>
            <div>
                REQUIRED
            </div>
        </div>
    )
}