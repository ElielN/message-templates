import './styles.scss'

type NavBarOptionProps = {
    icon: string
    iconAlt: string
    isSelected?: boolean
    border?: boolean
    onClickAction: () => void
}

export const NavBarOption = ({
    icon,
    iconAlt,
    isSelected = false,
    border = false,
    onClickAction
}: NavBarOptionProps) => {
    return (
        <div 
        className={`navbar-option ${isSelected ? 'selected' : ''} ${border ? 'border' : ''}`} onClick={onClickAction}>
            <img src={icon} alt={iconAlt} />
        </div>
    )
}