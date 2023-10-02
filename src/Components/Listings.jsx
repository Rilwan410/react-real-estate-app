import React from 'react'

export default function Listings() {
    return (
        <section>
            <section className="search-area">
                <input type="text" name="search" />
            </section>

            <section className="sort-by-area">

                <div>
                    390 results found
                </div>

                <div className="sort-options">
                    <select name="sort-by">
                        <option value="price-asc">Highest Price</option>
                        <option value="price-dsc">Lowest Price</option>
                    </select>

                    <div className="">
                        <i className="fa-solid fa-bars" />
                    </div>
                </div>
            </section>

            <section className="listings-results">

                <div className="listing">
                    <div className="listing-img">
                        <span className="address">Address</span>
                        <div className="details">
                            <img src="" alt="" className="user-img" />
                            <div className="user-details">
                                <span className="user-name">Nina Smith</span>
                                <span className="post-date">05/05/2023</span>
                            </div>

                            <div className="listing-details">
                                <div className="floor-space"> <i className="fa-regular fa-square" /> <span>1000 ft&sup2;</span></div>

                                <div className="bedrooms"><i className="fa-solid fa-bed" /> <span>3 bedrooms</span> </div>

                            </div>
                        </div>
                    </div>

                    <div className="bottom-info">
                        <span>11000 / month</span>
                        <span><i className="fa-solid fa-location-dot" />Hialeah, FL</span>
                    </div>
                </div>

            </section>

            <section className="pagination">

                <ul className="pagination-nums">
                    <li>Prev</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>Next</li>
                </ul>
            </section>

        </section>
    )
}
