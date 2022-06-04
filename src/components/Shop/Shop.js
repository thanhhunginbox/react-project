import React from 'react';
import './style/Shop.css'
import ItemFilter from './ItemFilter';
import ItemList from './ItemList';

function Shop()
{

    return (
        <>
            <div className='ShopMain container'>
                <div className='row g-5'>
                    <ItemFilter/>
                    <ItemList/>
                </div>
            </div>
            
        </>
    )
}


export default Shop;