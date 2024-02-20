import { TipCard } from "@/components/atoms/TipCard"
import { UploadButton } from "@/components/atoms/UploadButton"
import { ToggleField } from "@/components/atoms/ToggleField"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { toggleNode } from "@/lib/slices/statesSlice"
import { RootState } from "@/lib/store"
import ImageIcon from '@/assets/icons/image.svg'
import './styles.scss'

export const HeaderNode = () => {
    const nodeEnabled = useSelector((state: RootState) => state.statesNode.nodes.headerNode.active)
    const dispatch = useDispatch()

    return (
        <div className={`header-node node-default ${!nodeEnabled ? 'disabled' : ''}`}>
            <ToggleField 
                icon={ImageIcon}
                iconAlt="Add image header"
                tip="" 
                title="Header"
                toggleAction={() => dispatch(toggleNode('headerNode'))}
            />
            <select name="" id="">
                <option value="image">Image</option>
                <option value="video">Video</option>
            </select>
            <small>Image size recommendation: 800 x 418 pixel.</small>
            <UploadButton>UPLOAD IMAGE</UploadButton>
            <TipCard 
                title='Image header tips'
                text='Images can enrich the message experience and help maintain engagement. Use eye-catching images that summarize the message (eg discounts, gifts etc.)'
                link='#'
            />
        </div>
    )
}