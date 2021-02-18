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
                <div className="content-input">
                    <label htmlFor="Quote">
                        Quote
                        </label>
                    <input
                        id="Quote"
                        name="quote"
                        ref={register}
                        type="text"
                    />
                </div>
                <div className="content-input">
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
                </div>
                <div className="content-button">
                    <button>addQuote</button>
                </div>
            </form>
        </div>
    );
};

export default CreateQuote;
