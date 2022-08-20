import React from 'react'


function child1({changename}) {
  function chnagename2(e){
    let nam2e=e.target.value
    changename(nam2e)
}
  function chnge(){
    
    
    chnagename2()
  }

  return (
    <div>
        <input type="text" onChange={chnagename2}/>
        <button onClick={chnge}>add</button>
    </div>
  )
}

export default child1