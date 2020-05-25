import React from 'react';
import {toggleCartHidden} from '../redux/cart/cart.actions';
import {connect} from 'react-redux';
import {calculateCartItemsCountSelectors} from '../redux/cart/cart.selectors.js'

const CartIcon = ({toggleCartHidden,itemsCount})=>(
    <>
        <div className="flex w-auto h-full justify-center items-center " onClick={toggleCartHidden}>
            <div className="w-8 h-8">
                <svg className="h-full w-full" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M500 472.5L440.3 121.5C438.6 111.8 430.2 104.6 420.3 104.6H351.4C332.3 60.1 300.1 13 255.9 13C211.7 13 179.5 60 160.3 104.6H91.4C81.5 104.6 73.1 111.7 71.4 121.5L11.3 475.3C8.89998 486.3 14.4 498.9 31.3 498.9H480.6C480.7 498.9 480.7 498.9 480.8 498.9C491.9 499 503.7 486.3 500 472.5V472.5ZM255.9 53.5C274.7 53.5 293 77.4 306.9 104.6H204.9C218.8 77.4 237.1 53.5 255.9 53.5V53.5ZM55.2 458.5L108.5 145.2H145.9C141.7 160.1 139.6 172.1 139.6 178.3C139.6 189.5 148.7 198.5 159.8 198.5C171 198.5 180 189.4 180 178.3C180 172.1 182.8 159.8 187.7 145.2H323.8C328.7 159.8 331.5 172.1 331.5 178.3C331.5 189.5 340.6 198.5 351.7 198.5C362.9 198.5 371.9 189.4 371.9 178.3C371.9 172.1 369.8 160.1 365.6 145.2H403L456.3 458.5H55.2V458.5Z" fill="black"/>
                    <text x="50%" y="50%" fontWeight="900" text-anchor="middle" fill="black" font-size="170px" dy=".6em">{itemsCount}</text>
                </svg>

            </div>
        </div>
    </>
)

const mapStateToProps = (state) =>({
    itemsCount: calculateCartItemsCountSelectors(state)
});
const mapDispatchToProps = (dispatch) =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);