import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header>
                <div className='nav-bar'>
                    <Link to={"/"} className='brand'>E-cart</Link>
                    <div className='search-bar'>
                        <input type='text' placeholder='Search Product'></input>
                    </div>
                    <Link to={'/cart'} className='cart'>Cart</Link>
                </div>

                <div className='nav-bar-wrapper'>
                    <div className='items'> Filter by {"->"}</div>
                    <div className='items'> No Filter</div>
                    <div className='items'> Laptop</div>
                    <div className='items'> Mobole</div>
                    <div className='items'> Tablet </div>
                    <div className='items'>{">="}29,000</div>
                    <div className='items'>{">="}49,000</div>
                    <div className='items'>{">="}59,000</div>
                    <div className='items'>{">="}69,000</div>

                </div>


            </header>
        </>
    )
}

export default Navbar
