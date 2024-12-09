"use client"
import React from 'react'
import { Triangle } from 'react-loader-spinner'

const loading = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", 
      width: "100vw",  
    }}>
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}

export default loading