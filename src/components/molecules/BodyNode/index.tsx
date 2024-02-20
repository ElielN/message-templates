import { RequiredField } from "@/components/atoms/RequiredField"
import { TipCard } from "@/components/atoms/TipCard"
import { useState } from "react"
import LetterIcon from '@/assets/icons/text-fields.svg'
import EmojiIcon from '@/assets/icons/emoji.svg'
import BoldIcon from '@/assets/icons/format-bold.svg'
import ClearIcon from '@/assets/icons/format-clear.svg'
import ItalicIcon from '@/assets/icons/format-italic.svg'
import CodeIcon from '@/assets/icons/code.svg'
import './styles.scss'
import { useDispatch } from "react-redux"
import { changeText } from "@/lib/slices/statesSlice"

export const BodyNode = () => {
    const [count, setCount] = useState(0)
    const maxLength = 1024
    const dispatch = useDispatch()

    const handleChange = (value: string) => {
        dispatch(changeText({node: 'bodyNode', value: value}))
        setCount(value.length)
    }

    return (
        <div className="body-node node-default">
            <RequiredField 
                icon={LetterIcon}
                iconAlt="Letter"
                title="Body message"
                tip=""
            />
            <div className="textarea-holder">
                <textarea maxLength={maxLength} onChange={(e) => handleChange(e.target.value)}></textarea>
                <span>{count}/{maxLength}</span>
            </div>
            <div className="variable-row">
                <div>ADD VARIABLE</div>
                <div>
                    <img src={EmojiIcon} alt="emoji" />
                    <img src={BoldIcon} alt="bold" />
                    <img src={ClearIcon} alt="clear" />
                    <img src={ItalicIcon} alt="italic" />
                    <img src={CodeIcon} alt="code" />
                </div>
            </div>
            <TipCard 
                title="What are variables?"
                text="Variables are dynamic content that help personalize your campaign, for example: customer names or coupon codes."
                link="#"
            />
        </div>
    )
}