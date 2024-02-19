import './styles.scss'

type NavBarOptionProps = {
    icon: string
    isSelected?: boolean
    border?: boolean
    onClickAction: () => void
}

export const NavBarOption = ({
    icon,
    isSelected = false,
    border = false,
    onClickAction
}: NavBarOptionProps) => {
    return (
        <div 
        className={`navbar-option ${isSelected ? 'selected' : ''} ${border ? 'border' : ''}`} onClick={onClickAction}>
            <img src={icon} alt="" />
        </div>
    )
}