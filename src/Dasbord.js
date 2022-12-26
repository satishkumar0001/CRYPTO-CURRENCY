import React from 'react'

const Dasbord = ({match}) => {
  return (
    <div>
        <center>
      <h4>This is DAsbord page: {match.params.name}</h4>
      </center>
    </div>
  )
}

export default Dasbord
