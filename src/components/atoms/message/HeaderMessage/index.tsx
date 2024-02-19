import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import './styles.scss'

export const HeaderMessage = () => {
    const headerFile = useSelector((state: RootState) => state.statesNode.nodes.headerNode.file)
    return (
        <div className="header-message">
            <img src={headerFile} alt="" />
            <div>Header</div>
        </div>
    )
}