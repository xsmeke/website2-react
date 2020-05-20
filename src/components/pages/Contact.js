import React, { Component } from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = {
    sections: [
        [
            {name: 'name', elementName: 'input', type:'text', placeholder:'Your Name'},
            {name: 'email', elementName: 'input', type:'email', placeholder:'Your Email'},
            {name: 'phone', elementName: 'input', type:'text', placeholder:'Your Phone'}
        ],
        [
            {name: 'message', elementName: 'textarea', type:'text', placeholder:'Type your Message'}   
        ]
    ]
}


class Contact extends Component {

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form onSubmit={this.props.handleSubmit} name="sentMessage" novalidate="novalidate">
                        <div className="row align-items-stretch mb-5">
                            
                            {fields.sections.map((section, sectionIndex) => {
                                
                                return (
                                    <div className="col-md-6">
                                        {section.map((field,i) => {
                                            return <Field 
                                                        {...field} 
                                                        key={i}
                                                        value={this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange}
                                                        onBlur={this.props.handleBlur}
                                                        touched={(this.props.touched[field.name])}
                                                        errors={this.props.errors[field.name]}
                                                    /> 
                                        })}
                                    </div>
                                )
                            })}

                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button 
                                className="btn btn-primary btn-xl text-uppercase" 
                                id="sendMessageButton" 
                                type="submit">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    
    validationSchema: Yup.object().shape({

        name: Yup.string()
                            .required('You must give us your name')
                            .min(3, 'No name is less than 3 chars dude!'),
        email: Yup.string().email('YOu need to give us a valid email').required('We need your email for research purposes.'),
        phone: Yup.string()
                            .min(10, 'I think you missed a few digits')
                            .max(15, 'This is not a valid phone number')
                            .required('Please provide your phone number. We won\'t call you lol'),
        message: Yup.string()
                            .min(500, 'Please provide more detailed information')
                            .required('Please provide a message')


    }),

    handleSubmit: (values, {setSubmitting}) => {
        alert("You've submitted the form!", JSON.stringify(values));
    }
})(Contact);