import ProductCard from './components/ProductCard'
import courseImage from "../src/assets/course_1662795698.jpg"

const App = () => {
  return (
    <div>
      <div className='m-10'>
        <ProductCard image={courseImage} likes={76} views={12.3} author={"Mako Tserteli"}/>
      </div>

    </div>
  )
}

export default App