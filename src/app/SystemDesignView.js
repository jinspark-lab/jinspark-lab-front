import React from 'react';

const SystemDesignView = ({title, image, desc}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                <img src={image}
                    className='img-fluid' alt='...' />
            </div>
            <div>
                <p className='text-break fs-5 font-monospace'>
                    {desc}
                </p>
            </div>
            <div>
                <button type='submit' className='btn btn-primary mb-3'>Go to Project</button>
            </div>
        </div>
    )
}

export default SystemDesignView;