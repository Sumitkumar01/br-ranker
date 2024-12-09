import Image from 'next/image'
import React from 'react'

const CategorySidebar = ({ image, data, catgoryWithoutFormatted, routeCategory }: any) => {

    console.log(catgoryWithoutFormatted, routeCategory)
    return (

        <>
            {routeCategory === catgoryWithoutFormatted ?
                ""
                :
                <div className={`d-flex gap-1 align-items-center`} >
                    <Image
                        src={image}
                        style={{ width: "6rem", height: "5rem", objectFit: "cover" }}
                        alt="image not found"
                    />
                    <div>
                        <h5 >{data}</h5>
                        <p style={{ marginBottom: "0" }}> Explore Details</p>
                    </div>
                </div>

            }

        </>

    )
}

export default CategorySidebar