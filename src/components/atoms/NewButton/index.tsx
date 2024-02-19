import DeleteIcon from '@/assets/icons/delete-outline.svg'
import './styles.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeButtonText } from '@/lib/slices/statesSlice'

type NewButtonProps = {
    onDelete: () => void
    idx: number
}

export const NewButton = ({ onDelete, idx }: NewButtonProps) => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    const maxLength = 24

    const handleOnChange = (value: string) => {
        dispatch(changeButtonText({value: value, idx: idx}))
        setCount(value.length)
    }

    return (
        <div className='new-button'>
            <div>
                Button 1
                <img src={DeleteIcon} alt="" onClick={onDelete}/>
            </div>
            <div>
                <input type="text" placeholder='Enter text' maxLength={maxLength} onChange={(e) => handleOnChange(e.target.value)}/>
                <div>
                    {count}/{maxLength}
                </div>
            </div>
        </div>
    )
}