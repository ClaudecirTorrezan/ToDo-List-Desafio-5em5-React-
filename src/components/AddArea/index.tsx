import { useState, KeyboardEvent } from 'react';
import * as Comps from './styles';

type Props = {
    onEnter: (taskName: string) => void
}


export const AddArea = ({ onEnter }: Props) => {

    const [inputText, setInputText] = useState ('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');

        }
    }


    return (
        <Comps.Container>
            <div className="image">➕</div>
            <input
                type="text"
                placeholder="Adicione aqui"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
                />
        </Comps.Container>

    );

}