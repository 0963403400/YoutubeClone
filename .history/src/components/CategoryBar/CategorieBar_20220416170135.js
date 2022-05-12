import React from 'react'
import "./_CategorieBar.scss"


const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
]

const CategorieBar = () => {
  const [activeElement,setActiveElement]=useState('All')
  const handleClick=value=>setActiveElement(value)
  return (
    <div className='categoriesBar' >
      {keywords.map((value,i)=>
        <span
        onClick={()=>handleClick(value)}
        className={value===activeElement?'active':''}
        ></span>

      )}
    </div>
  )
}

export default CategorieBar