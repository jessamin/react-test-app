import React from 'react'

function UrlField() {
  return (
    <div className="input-modal">
      <label htmlFor="url">Movie URL:</label>
      <input type="text" id="url" name="url" />
    </div>
  )
}

export default UrlField