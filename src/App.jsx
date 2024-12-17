
import { useState } from 'react'
import './App.css'
import Select from './components/Select'
import { fontFamilies, fontSizes } from './data/tailwindData'
import SelectColors from './components/SelectColors'

function App() {

  const [font, setFont] = useState('')
  const [fontSize, setFontSize] = useState('')
  
  return (
    <>
    
    <div className="flex gap-4">
      <Select label={'Font Family'} options={fontFamilies} handleChange={e => setFont(e)}/>
      <Select label={'Font Size'} options={fontSizes} handleChange={e => setFontSize(e)}/>

      <SelectColors />
    </div>   
      <p className={`mt-4 ${font} ${fontSize}`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat molestias sapiente cupiditate quidem! Recusandae illo dolores, repellendus molestias voluptatibus reiciendis dolorem aut magni aliquam consequuntur accusamus et nesciunt. Facilis, porro?
      </p>

    </>
  )
}

export default App
