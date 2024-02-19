import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import './styles.scss';

interface ButtonProps 
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
        negative?: boolean
    }

export const Button = (props: ButtonProps) => {
    const { negative, ...buttonProps } = props
    return (
        <button {...buttonProps} className={`button ${negative ? 'negative' : ''}`}>
            {props.children}
        </button>
    )
}