import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { postQuote, getOptions } from '../helpers/crud'

const CreateQuote = () => {

    const { register, handleSubmit } = useForm()
    const [options, setOptions] = useState([])

    useEffect(() => {
        getOptions().then(data => {
            setOptions(data.classOptions)
        })
    }, [options])

    return (
        <div className="form-container">
            <p>Add new Quote</p>
            <form onSubmit={handleSubmit(postQuote)}>
                <label htmlFor="Quote">
                    Quote
                    </label>
                <input
                    id="Quote"
                    name="quote"
                    ref={register}
                    type="text"
                />

                <label htmlFor="Class">
                    Class
                    </label>
                <select
                    id="Class"
                    name="class"
                    ref={register}
                >
                    {options &&
                        options.map((classOption, index) => <option key={index + 1} value={classOption}>{classOption}</option>)
                    }
                </select>

                <button>addQuote</button>
            </form>
        </div>
    );
};

export default CreateQuote;
