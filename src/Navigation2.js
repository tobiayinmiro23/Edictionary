import React from 'react';

function Navigation2({search}) {
  return <div className='Navigation'>
                <nav>
                    <div className="heading">
                        <h1 onClick={()=>search(true)} className='search2'>Search Word</h1>
                        <h1 className='random2' style={{cursor:'pointer'}}>Random Word</h1>
                    </div>
                </nav>
        </div>;
}

export default Navigation2;
