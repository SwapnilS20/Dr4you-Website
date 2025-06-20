import React from 'react';
import TestimonialsCard2 from '../../components/Testimonials/TestimonialsCard2';

const TestimonialPage = () => {
    return (
        <section className=' min-h-screen bg-gray-100 '>

                <div className=' grid  grid-cols-1 sm:grid-cols-3 p-16'>
                    <TestimonialsCard2/>
                    <TestimonialsCard2/>
                    <TestimonialsCard2/>
                    <TestimonialsCard2/>
                    <TestimonialsCard2/>
                  

                </div>
        </section>
    );
}

export default TestimonialPage;
