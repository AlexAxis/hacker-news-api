import React from 'react'

function Pagination(props) {
  const { currentPage, numPages, setCurrentPage } = props
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && setCurrentPage) {
      let value = parseInt(e.target.value, 10)
      if (value < 1 || !value) {
        value = 1
      } else if (value > numPages || !value) {
        value = numPages
      }
      setCurrentPage(value)
    }
  }
  return (
    <div className="rowFlex">
      <input
        type="button"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(1)}
        value="&#8678; first (1)"
      />

      <input
        type="button"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        value="previous"
      />
      <div>
        <input
          type="number"
          disabled={numPages === 1}
          min="1"
          max={numPages}
          placeholder={currentPage}
          onKeyDown={handleKeyDown}
        />
      </div>

      <input
        type="button"
        disabled={currentPage === numPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        value="next"
      />

      <input
        type="button"
        disabled={currentPage === numPages}
        onClick={() => setCurrentPage(numPages)}
        value={`last (${numPages}) `.concat(String.fromCodePoint(8680))}
      />
    </div>
  )
}

export default Pagination
