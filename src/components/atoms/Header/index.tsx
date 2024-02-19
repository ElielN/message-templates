import { useSelector } from 'react-redux'
import './styles.scss'
import { RootState } from '@/lib/store'
import { useDispatch } from 'react-redux'
import { toggleTips } from '@/lib/slices/tipsSlice'

type HeaderProps = {
    title: string
}

export const Header = ({
    title
}: HeaderProps) => {
    const tipsEnabled = useSelector((state: RootState) => state.tips.tipsEnabled)
    const dispatch = useDispatch()

    return (
        <header className='header'>
            <h2>{title}</h2>
            <div>
                <div className={`${tipsEnabled ? 'tipsEnabled' : ''}`} onClick={() => dispatch(toggleTips())}>
                    <svg viewBox="0 0 15 17" fill="none">
                        <path d="M2.08333 10.1667L4.58333 12.6667V16.8333H9.58333V12.6667L12.0833 10.1667V5.99999H2.08333V10.1667ZM6.25 0.166656H7.91667V2.66666H6.25V0.166656ZM0 3.39582L1.17833 2.21666L2.945 3.98499L1.76667 5.16416L0 3.39582ZM11.2167 3.98749L12.9858 2.22082L14.1642 3.39916L12.3958 5.16666L11.2167 3.98749Z"/>
                    </svg>
                    Tips
                </div>
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}