import { ChangeEvent, ReactNode } from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { changeHeaderImage } from '@/lib/slices/statesSlice';

type LabelProps = {
    children: ReactNode
}

export const UploadButton = ({children}: LabelProps) => {
    const dispatch = useDispatch()

    const handleSaveImage = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]) {
            const image = e.target.files[0];
            const reader = new FileReader();

            reader.onload = function () {
                dispatch(changeHeaderImage(reader.result as string))
            }

            if (image) {
                reader.readAsDataURL(image)
            }
        }
    }

    return (
        <label htmlFor="input-image" className="upload-btn">
            {children}
            <input type="file" accept='image/*' name="input-image" id="input-image" onChange={(e) => handleSaveImage(e)}/>
        </label>
    )
}