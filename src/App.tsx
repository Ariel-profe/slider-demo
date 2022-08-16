import { useEffect, useState } from 'react'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';
import './App.css'
import { data } from './data/data'
import { Title } from './components/Title';
import { PersonCard } from './components/PersonCard';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const handleNextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if(index > people.length -1){
        index = 0
      }
      return index;
    })
  }

  const handlePrevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if(index < 0){
        index = people.length -1
      }
      return index;
    })
  }

  useEffect(() => {
    let slider = setInterval( () => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if(index > people.length -1){
          index = 0
        }
        return index;
      })
    }, 5000);

    return () => clearInterval(slider)
  }, [index])
  
  

  return (
    <section className='section'>
      <Title />
      <div className="section-center">
        {
          data.map( (person, personIndex) => {
            const {id, image, name, title, quote} = person;
            let position = 'nextSlide';
            if(personIndex === index){
              position= 'activeSlide'
            }
            if(personIndex === index -1 || index === 0 && personIndex === data.length -1){
              position = 'lastSlide'
            }
            return (
              <article key={id} className={position}>
                <PersonCard image={image} name={name} title={title} quote={quote} />
              </article>
            )
          })
        }
        <button 
          className="prev"
          onClick={handlePrevSlide}
        >
          <FaChevronLeft />
        </button>
        <button 
          className="next"
          onClick={handleNextSlide}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
