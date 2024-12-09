import CourseDetailsMain from '@/components/course-details/CourseDetailsMain';
import courses_data from '@/data/courses-data';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react'


export async function generateStaticParams() {
    const subjects = courses_data;
    return subjects.map((subject) => ({
        id: subject.board?.toString() || '',
        categoryId: subject.category?.toString() || '',
        categoryClass: subject.categoryClass?.toString() || '',
        subject: subject.title?.toString() || '',
    }));
}


const page = ({ params }: { params: { id: string, categoryId: string, categoryClass: string, subject: string } }) => {

    return (
        <Wrapper>
            <main>
                <CourseDetailsMain id={params.id} categoryId={params.categoryId} categoryClass={params.categoryClass} subject={params.subject} />
            </main>
        </Wrapper>
    )
}

export default page