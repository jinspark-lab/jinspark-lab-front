import React from 'react';

const FormLabel = ({ formId, text }) => {
    return (
        <label for={formId} className='form-label'>{text}</label>
    )
};
export default FormLabel;