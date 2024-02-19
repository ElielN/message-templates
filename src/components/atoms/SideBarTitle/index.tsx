import './styles.scss'

type SideBarTitleProps = {
    title: string
    onCloseAction: () => void
}

export const SideBarTitle = ({
    title, 
    onCloseAction
}: SideBarTitleProps) => {
    return (
        <div className="side-bar-title">
            <h1>{title}</h1>
            <div onClick={onCloseAction}>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}