import ClassSubject from '@/components/ClassComponent/ClassSubject';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import courses_data from '@/data/courses-data';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react'


export async function generateStaticParams() {
    const subjects = courses_data;
    return subjects.map((subject) => ({
        id: subject.board?.toString() || '',
        categoryId: subject.category?.toString() || '',
        categoryClass: subject.categoryClass?.toString() || '',
    }));
}


const page = ({ params }: { params: { categoryId: string, id: string, categoryClass: string } }) => {


    return (

        <Wrapper>
            <Breadcrumb title={` class ${params.categoryClass}`} subTitle={params.categoryClass} />
            <ClassSubject board={params.id} category={params.categoryId} categoryClass={params.categoryClass} />
        </Wrapper>

    )
}

export default page