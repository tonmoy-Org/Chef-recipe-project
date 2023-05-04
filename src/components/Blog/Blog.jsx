import React from 'react';
import App from '../../App';
import PDFDocument from '../PDFDocument/PDFDocument';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <div>
                <div className='text-center  bg-lime-100 md:py-28 py-16'>
                    <h1 className='text-3xl font-bold'>Blog</h1>
                    <p className='text-p py-6'>
                        Pages
                        <span className='text-red-400'>  - Blog </span>
                    </p>
                </div>
            </div>
             <div className='mt-20'>
             <div className='md:flex justify-between md:mx-28 mb-5 mx-16 items-center'>
                <h1 className='font-bold pb-4 md:pb-0'>Answer Of The Questions</h1>
                <PDFDocument></PDFDocument>
            </div>
            <hr />
             </div>
            <div className='p-10 mb-5'>
                <div>
                    <div>
                        <h1 className='text-2xl font-semibold'>1. Tell us the differences between uncontrolled and controlled components.
                        </h1>
                        <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                    </div>
                    <div className='my-10'>
                        <h1 className='text-2xl font-semibold'>2. How to validate React props using PropTypes</h1>
                        <p>Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components.</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>3. Tell us the difference between nodejs and express js.</h1>
                        <p>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</p>
                    </div>
                    <div className='my-10'>
                        <h1 className='text-2xl font-semibold'>4. What is a custom hook, and why will you create a custom hook?</h1>
                        <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;