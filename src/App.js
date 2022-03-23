import React, { useState } from 'react'
import ColorBlock from './ColorBlock'
import ColorFrom from './ColorForm'

function App(){
    let [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    const addColor = (newColor) => {
      setColors([...colors, newColor])
    }
    
    return (
      <div className="App">
        {colors.map((color, i) => 
          <ColorBlock key={i} color={color} />
        )}
        <ColorFrom addColor={addColor} />
      </div>
    )

}

export default App;
