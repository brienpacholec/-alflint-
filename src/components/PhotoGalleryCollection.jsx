import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
// import Img from "gatsby-image"
import PhotoGalleryCard from "./PhotoGalleryCard"

const PhotoGalleryCollection = ({ entries, hideLastItemOnMobile = false }) => {
  return (
    <>
    <div className="container">
      <div className="flex flex-wrap -mx-6 lg:-mx-6">
        {entries.map(entry => (
          <div
            className={classNames("w-full sm:w-1/2 lg:w-1/3 p-3 md:p-6", {
              "last:hidden lg:last:block": hideLastItemOnMobile,
            })}
            key={entry.id}
          >
            <PhotoGalleryCard {...entry} />
          </div>
          
        ))}
      </div>
    </div>
    </>
  )
}

PhotoGalleryCollection.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default PhotoGalleryCollection