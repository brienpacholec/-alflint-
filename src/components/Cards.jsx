import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import Card from "./Card"


const Cards = ({ items, hideLastItemOnMobile = false }) => {
  return (
    <>
    <div className="container">
      <div className="flex flex-wrap -mx-6 lg:-mx-6">
        {items.slice(1).map(item => (
          <div
            className={classNames("w-full sm:w-1/2 lg:w-1/3 p-3 md:p-6", {
              "last:hidden lg:last:block": hideLastItemOnMobile,
            })}
            key={item.id}
          >

            <Card {...item} />
          </div>
          
        ))}
      </div>
    </div>
    </>
  )
}

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Cards
