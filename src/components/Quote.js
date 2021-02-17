import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const Quote = ({ quote, classWeek, onDelete }) => {
    return (
        <div className="quote">
            <blockquote>{quote}</blockquote>
            <cite>-{classWeek}</cite>
            <button
                className="delete"
                onClick={onDelete}
                title="delete">
                <FontAwesomeIcon
                    icon={faTrashAlt}
                />
            </button>
        </div>
    )
}