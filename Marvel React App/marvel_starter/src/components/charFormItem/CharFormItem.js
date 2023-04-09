import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import useMarvelService from '../../services/MarvelService';

import './charformitem.scss';

const CharFormItem = () => {
    const { getCharacterByName } = useMarvelService();

    return (
        <Formik
            initialValues={{
                text: ''
            }}
            validationSchema={
                object({
                    text: string().required('This field is required')
                })}
            onSubmit={
                (values) => {
                    getCharacterByName(values.text)
                    .then(character => console.log(character))
                }
            }
        >
            <Form className="char__form">
                <label htmlFor='text' className="char__form-item">Or find a character by name:</label>
                <Field 
                    type="text" 
                    name='text' 
                    className="char__form-input" 
                    placeholder="Enter name" />
                
                <button type="submit" className="button button__main">
                    <div className="inner">Find</div>
                </button>
                <ErrorMessage name="text" component="div" className="char__form-error" />
            </Form>

        </Formik>
    )
}

export default CharFormItem;