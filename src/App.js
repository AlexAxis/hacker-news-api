import React, { useState, useEffect } from 'react'
import './App.css'
import HackerCard from './components/HackerCard'
import Pagination from './components/Pagination'
function App() {
  const [topList, setTopList] = useState([])
  const [resultList, setResultList] = useState({})
  const [numPages, setNumPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  // * Fetch -> GET top hacker list
  useEffect(() => {
    const getList = () =>
      fetch(
        `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
      )
        .then((response) => response.json())
        .then((json) => {
          setTopList(json)
          setNumPages(json.length)
        })
        .catch((err) => {
          throw err
        })
    const interval = setInterval(() => {
      getList()
    }, 300000)
    if (topList.length === 0) {
      return getList()
    }
    return () => clearInterval(interval)
  }, [])

  // * Fetch -> GET single result from the top list
  useEffect(async () => {
    if (topList.length > 0) {
      let auxList = {}
      for (var i = currentPage * 10 - 10; i < currentPage * 10; i++) {
        await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${topList[i]}.json?print=pretty`
        )
          .then((response) => response.json())
          .then((json) => {
            auxList[topList[i]] = json
          })
          .catch((err) => {
            throw err
          })
        await setResultList({ ...auxList })
      }
    }
  }, [topList, currentPage])

  return (
    <div className="App">
      <div className="WrapCards">
        {Object.keys(resultList).length > 0 &&
          Object.keys(resultList).map((key) => {
            return <HackerCard key={key} resultList={resultList[key]} />
          })}
      </div>

      <Pagination
        currentPage={currentPage}
        numPages={numPages / 10}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default App
