import { TipCard } from "@/components/atoms/TipCard"
import { ToggleField } from "@/components/atoms/ToggleField"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { changeText, toggleNode } from "@/lib/slices/statesSlice"
import { RootState } from "@/lib/store"
import TextIcon from '@/assets/icons/text-fields.svg'
import EmojiIcon from '@/assets/icons/emoji.svg'
import BoldIcon from '@/assets/icons/format-bold.svg'
import ClearIcon from '@/assets/icons/format-clear.svg'
import ItalicIcon from '@/assets/icons/format-italic.svg'
import CodeIcon from '@/assets/icons/code.svg'
import './styles.scss'

export const FooterNode = () => {
    const [count, setCount] = useState(0)
    const maxLength = 248
    const nodeEnabled = useSelector((state: RootState) => state.statesNode.nodes.footerNode.active)
    const dispatch = useDispatch()

    const handleChange = (value: string) => {
        dispatch(changeText({node: 'footerNode', value: value}))
        setCount(value.length)
    }

    return (
        <div className={`footer-node node-default ${!nodeEnabled ? 'disabled' : ''}`}>
            <ToggleField
                icon={TextIcon}
                iconAlt="Add footer text"
                tip="" 
                title="Footer text"
                toggleAction={() => dispatch(toggleNode('footerNode'))}
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
                title='Footer text tips'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                link='#'
            />
        </div>
    )
}