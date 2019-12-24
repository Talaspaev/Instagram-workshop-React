import React from 'react';
import User from './User';

export default function Users ()  {
    return (
    <div className="right">
        <User src="https://www.parimatch.ru/ufc/upload/ufc/fighters/dan-henderson/headshot.png?1572513150"
            alt="man"
            name="Dan"
        />
        <div className="users__block">

            <User src="https://www.parimatch.ru/ufc/upload/ufc/fighters/dan-henderson/headshot.png?1572513150"
                alt="man"
                name="Dan"
                min />
            <User src="https://www.parimatch.ru/ufc/upload/ufc/fighters/dan-henderson/headshot.png?1572513150"
                alt="man"
                name="Dan"
                min />
            <User src="https://www.parimatch.ru/ufc/upload/ufc/fighters/dan-henderson/headshot.png?1572513150"
                alt="man"
                name="Dan"
                min />
        </div>
    </div>)
}



