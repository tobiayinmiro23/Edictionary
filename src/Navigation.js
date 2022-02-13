import React from 'react';

function Navigation({random}) {
  return <div className='Navigation'>
                <nav>
                    <div className="heading">
                        <h1 className='search'>Search Word</h1>
                        <h1 onClick={()=>random(false)} className='random'>Random Word</h1>
                    </div>
                </nav>
        </div>;
}

export default Navigation;
