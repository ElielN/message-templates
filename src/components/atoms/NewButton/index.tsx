import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setButtonText } from '@/lib/slices/statesSlice'
import DeleteIcon from '@/assets/icons/delete-outline.svg'
import './styles.scss'

type NewButtonProps = {
    onDelete: () => void
    idx: number
}

export const NewButton = ({ onDelete, idx }: NewButtonProps) => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    const maxLength = 24

    const handleOnChange = (value: string) => {
        dispatch(setButtonText({value: value, idx: idx}))
        setCount(value.length)
    }

    return (
        <div className='new-button'>
            <div>
                Button {idx + 1}
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