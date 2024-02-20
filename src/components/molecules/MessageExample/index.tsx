import { RootState } from '@/lib/store'
import { useSelector } from 'react-redux'
import { HeaderMessage } from '@/components/atoms/message/HeaderMessage'
import { FooterMessage } from '@/components/atoms/message/FooterMessage'
import { BodyMessage } from '@/components/atoms/message/BodyMessage'
import Message from '@/assets/icons/message-2.svg'
import './styles.scss'
import { ButtonMessage } from '@/components/atoms/message/ButtonMessage'

export const MessageExample = () => {
    const nodes = useSelector((state: RootState) => state.statesNode.nodes)

    return (
        <div className='message-example'>
            <div>
                <div>
                    <img src={Message} alt="header image" />
                </div>
                Message Example
            </div>
            <div>
                <div className='messages'>
                    {nodes.headerNode.file && nodes.headerNode.active && (
                        <HeaderMessage />
                    )}
                    {nodes.bodyNode.text && (
                        <BodyMessage />
                    )}
                    {nodes.footerNode.text && nodes.footerNode.active && (
                        <FooterMessage />
                    )}
                </div>
                {nodes.buttonsNode.buttons.length > 0 && nodes.buttonsNode.active && (
                    <div className='buttons'>
                        {nodes.buttonsNode.buttons.map((b, idx) => {
                            return (
                                <ButtonMessage key={idx} text={b.text}/>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}