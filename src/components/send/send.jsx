import './send.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Send({ onSend }) {

    const [value, setValue] = useState('');

    const send = () => {
        if (value !== '') {
            onSend(value)
            setValue('')
        } else {
            return alert('Type message, please');
        }

    };


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            send()
        }
    }

    return <div className="massageFormWrapper">
        <div className="massageForm">
            <input
                className="message"
                placeholder="Send a message..."
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
                onKeyDown={handleKeyDown}
            />
            <button
                className="btn"
                onClick={send}
            >
                <FontAwesomeIcon className="btnIcon" icon='paper-plane' />
            </button>
        </div>
    </div>
}