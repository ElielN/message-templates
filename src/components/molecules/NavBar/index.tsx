import { NavBarOption } from "@/components/atoms/NavBarOption"
import { useDispatch } from "react-redux"
import { activeTabActionType } from "@/interfaces/statesSlice"
import { changeTab } from "@/lib/slices/statesSlice"
import AvatarIcon from '@/assets/icons/avatar.webp'
import DashboardIcon from '@/assets/icons/dashboard.svg'
import MessageIcon from '@/assets/icons/message.svg'
import MegaphoneIcon from '@/assets/icons/megaphone.svg'
import SettingIcon from '@/assets/icons/settings.svg'
import Logo from '@/assets/icons/logo.svg'
import './styles.scss'
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"

export const NavBar = () => {
    const activeTab = useSelector((state: RootState) => state.statesNode.activeTab.tab)
    const dispatch = useDispatch()

    const handleSelectOption = (option: activeTabActionType) => {
        dispatch(changeTab(option))
    }

    return (
        <div className="navbar">
            <div>
                <div className='navbar-static-option'>
                    <img src={Logo} alt="" />
                </div>
                <NavBarOption icon={AvatarIcon} onClickAction={() => handleSelectOption('account')} border isSelected={activeTab === 'account'}/>
                <NavBarOption icon={DashboardIcon} onClickAction={() => handleSelectOption('dashboard')} isSelected={activeTab === 'dashboard'}/>
                <NavBarOption icon={MessageIcon} onClickAction={() => handleSelectOption('message')} isSelected={activeTab === 'message'}/>
                <NavBarOption icon={MegaphoneIcon} onClickAction={() => handleSelectOption('edit message')} isSelected={activeTab === 'edit message'}/>
            </div>
            <div>
                <NavBarOption icon={SettingIcon} onClickAction={() => handleSelectOption('settings')} isSelected={activeTab === 'settings'}/>
            </div>
        </div>
    )
}