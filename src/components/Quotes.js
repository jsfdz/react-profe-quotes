import React, { useEffect, useState } from 'react'
import { Quote } from './Quote'
import { Buttons } from './Buttons'
import { Svg } from './Svg'
import { getQuotes, deleteQuote } from '../helpers/crud'

export const Quotes = () => {
    const maxQuote = 1

    const [quotes, setQuotes] = useState([])
    const [page, setPage] = useState(0)

    const totalQuotes = quotes.length
    const maxPage = Math.ceil(totalQuotes / maxQuote)

    const onNextPage = () => {
        setPage((page + 1) % maxPage);
    };
    const onPrevPage = () => {
        setPage((page - 1) % maxPage);
    };

    useEffect(() => {
        getQuotes().then(data => {
            setQuotes(data.quotes.reverse())
        })
    }, [quotes])

    return (
        <div className="wave-container">
            {quotes &&
                quotes
                    .slice(page * maxQuote, maxQuote * (page + 1))
                    .map(quote =>
                        <Quote
                            key={quote._id}
                            id={quote._id}
                            quote={quote.quote}
                            classWeek={quote.class}
                            onDelete={() => deleteQuote(quote._id)}
                        />
                    )
            }

            <Buttons
                onPrev={onPrevPage}
                onNext={onNextPage}
                page={page}
                total={totalQuotes}
                max={maxQuote}
            />

            <Svg />
        </div>
    )
}