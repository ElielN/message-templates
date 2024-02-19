import './styles.scss'

type ButtonMessageProps = {
    text: string
}

export const ButtonMessage = ({ text }:ButtonMessageProps) => {
    return (
        <div className="button-message">
            {text}
        </div>
    )
}