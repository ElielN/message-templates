import { RootState } from "@/lib/store"
import { useSelector } from "react-redux"
import './styles.scss'

export const BodyMessage = () => {
    const bodyMessage = useSelector((state: RootState) => state.statesNode.nodes.bodyNode.text)
    return (
        <div className="body-message">
            <div>Body message</div>
            {bodyMessage}
        </div>
    )
}