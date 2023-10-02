import React from 'react'

export default function Filter() {
    return (
        <div className="filter bg-[--grey] w-[30%] p-[20px] text-[0.9rem] max-w-[400px]">
            {/* <div className="inside p-[20px]"> */}
            <h4 className="mb-[25px] uppercase font-[600]">Filter</h4>
            <select name="neighborhood" className="filters neighborhood">
                <option value="">Hialeah</option>
            </select>

            <select name="house-type" className="filters house-type">
                <option value="">Ranch</option>
            </select>

            <select name="bedrooms" className="filters bedrooms">
                <option value="">2 BR</option>
            </select>

            <div className="filters price">
                <span className="title">Price</span>
                <input type="text" name="min-price" className="min-price" />
                <input type="text" name="max-price" className="max-price" />
            </div>

            <div className="filters floor-space">
                <span className="title">Floor Space</span>
                <input type="text" name="min-floor-space" className="min-price" />
                <input type="text" name="max-floor-space" className="max-price" />
            </div>

            <div className="filters extras">
                <span className="title">Extras</span>
                <div className="extra-container">
                    <label htmlFor="extras">Elevators</label>
                    <input name="extras" value="elevator" type="checkbox" />
                </div>

                <div className="extra-container">
                    <label htmlFor="extras">Swimming Pool </label>
                    <input name="extras" value="swimming-pool" type="checkbox" />
                </div>

                <div className="extra-container">
                    <label htmlFor="extras">Finished Basement </label>
                    <input name="extras" value="finished basement" type="checkbox" />
                </div>

                <div className="extra-container">
                    <label htmlFor="extras">Gym</label>
                    <input name="extras" value="gym" type="checkbox" />
                </div>

            </div>

            {/* </div> */}
        </div>
    )
}
