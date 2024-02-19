import { RootState } from "@/lib/store"
import { useSelector } from "react-redux"
import './styles.scss'

export const FooterMessage = () => {
    const footerMessage = useSelector((state: RootState) => state.statesNode.nodes.footerNode.text)
    return (
        <div className="footer-message">
            <div>Footer</div>
            {footerMessage}
        </div>
    )
}