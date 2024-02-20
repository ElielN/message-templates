import { SideBarTitle } from '@/components/atoms/SideBarTitle'
import { HeaderNode } from '@/components/molecules/HeaderNode'
import { BodyNode } from '@/components/molecules/BodyNode'
import { FooterNode } from '@/components/molecules/FooterNode'
import { ButtonsNode } from '@/components/molecules/ButtonsNode'
import { Button } from '@/components/atoms/Button'
import './styles.scss'
import { useSelector } from 'react-redux'
import { RootState, zustandStore } from '@/lib/store'
import { useDispatch } from 'react-redux'
import { changeTab } from '@/lib/slices/statesSlice'


export const EditMessage = () => {
    const activeTab = useSelector((state: RootState) => state.statesNode.activeTab.tab)
    const nodes = useSelector((state: RootState) => state.statesNode.nodes)
    const dispatch = useDispatch()
    const { saveMessage } = zustandStore()

    const handleSave = () => {
        saveMessage(nodes);
    }
    
    return (
        <div className={`edit-message ${activeTab === 'edit message' ? 'active' : ''}`}>
            <div>
                <SideBarTitle title='Edit Message' onCloseAction={() => dispatch(changeTab(''))}/>
                <h2>Content</h2>
                <HeaderNode />
                <BodyNode />
                <FooterNode />
                <ButtonsNode />
            </div>
            <div>
                <Button onClick={handleSave}>SAVE</Button>
                <Button negative>DELETE</Button>
            </div>
        </div>
    )
}