import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Clock = () => {

    const [clockState, setClockState] = useState()
    useEffect(() => {
        setInterval(() => {
            const clock = new Date()
            setClockState(clock.toLocaleTimeString());
        }, 1000)
    }, [])

    const [dateState, setDateState] = useState()
    useEffect(() => {
        setInterval(() => {
            const time = new Date()
            setDateState(time.toLocaleDateString());

        }, 1000)
    }, [])

    return (


        <div>

            <ul className='card__dates'>
                <li className='card__clock'><i className="fa-regular fa-clock"><b> </b>{clockState}</i></li>
                <li className='card__date'><i className="fa-regular fa-calendar"><b> </b>{dateState}</i></li>
</ul>
        </div>

    )
}

export default Clock