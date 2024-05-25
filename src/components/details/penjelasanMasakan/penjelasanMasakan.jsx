import React from 'react'

const PenjelasanMasakan = ({penjelasan}) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h3>{penjelasan}</h3>
      </div>
    </div>
  )
}

export default PenjelasanMasakan