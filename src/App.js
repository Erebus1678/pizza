import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock'

import './scss/app.scss'
import { useEffect, useState } from 'react'
import Skeleton from './components/PizzaBlock/Skeleton'

function App() {
  // 
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://63ef60d0271439b7fe6d2d51.mockapi.io/Pizzas-items')
      .then((res) => res.json())
      .then((json) => {
        setItems(json)
        setIsLoading(false)
      })

  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading
                ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
                : items.map(item => <PizzaBlock {...item} key={item.id} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
