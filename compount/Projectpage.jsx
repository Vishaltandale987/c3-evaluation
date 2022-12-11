import React from 'react'

function Projectpage({name, language,stargazers_count,watchers_count,visibility}) {
  return (
    <div style={{
        "display": "grid",
        "grid-template-columns": "repeat(1, 1fr)",
        "color":"black",
        
    }}>
      <h1
      style={{
        "color":"black", 
    }}
      >{name}</h1>
      <p
       style={{
        "color":"black", 
    }}
      > <b>Use Language</b> {language}</p>
      <p
       style={{
        "color":"black", 
    }}
      > <b>Star</b>  {stargazers_count}</p>
      <p
       style={{
        "color":"black", 
    }}
      > <b>Watchers</b> {watchers_count}</p>
      <p
       style={{
        "color":"black", 
    }}
      >{visibility}</p>
    </div>
  )
}

export default Projectpage
