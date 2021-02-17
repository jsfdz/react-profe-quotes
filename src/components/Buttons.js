import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const Buttons = ({ onPrev, onNext, page, total, max }) => {
    return (
        <div className="buttons">
            <button className="prev" onClick={onPrev} disabled={!page}>
                <FontAwesomeIcon
                    icon={faAngleLeft}
                />
            </button>
            <button className="next" onClick={onNext} disabled={page === Math.ceil(total / max) - 1}>
                <FontAwesomeIcon
                    icon={faAngleRight}
                />
            </button>
        </div>
    )
}