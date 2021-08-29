import React from 'react'

const Language = (
    {setLang}
) => {
    return (
        
          <select 
            className="language"
            onChange={
                    e => (setLang(e.target.value))
                }>
                <option value="en">English</option>
                <option value="es">Español</option>
            </select>
        
    )
}

export default Language
