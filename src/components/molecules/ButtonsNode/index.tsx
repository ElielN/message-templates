import { ToggleField } from "@/components/atoms/ToggleField"
import { NewButton } from "@/components/atoms/NewButton"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addButton, deleteButton, toggleNode } from "@/lib/slices/statesSlice"
import { RootState } from "@/lib/store"
import ButtonIcon from '@/assets/icons/button.svg'
import './styles.scss'

export const ButtonsNode = () => {
    const buttonsNode = useSelector((state: RootState) => state.statesNode.nodes.buttonsNode);
    const dispatch = useDispatch()

    const handleAddButton = () => {
        dispatch(addButton())
    }

    return (
        <div className={`buttons-node node-default ${!buttonsNode.active ? 'disabled' : ''}`}>
            <ToggleField
                icon={ButtonIcon}
                iconAlt="Add buttons"
                tip="" 
                title="Buttons"
                toggleAction={() => dispatch(toggleNode('buttonsNode'))}
            />
            {buttonsNode.buttons.map((btn, idx) => {
                return (
                    <NewButton key={idx} idx={idx} onDelete={() => dispatch(deleteButton(idx))}/>
                )
            })}
            {buttonsNode.buttons.length < 3 && (
                <div className="add-button" onClick={handleAddButton}>ADD BUTTON</div>
            )}
        </div>
    )
}