import React from 'react'

export default function Header() {
    return (
        <header className="bg-[--darkpurple] text-white flex justify-between px-[15px] py-[20px] items-center">
            <div className="">
                Logo
            </div>

            <nav>
                <ul className="flex gap-[15px] items-center">
                    <li><a href="">Create Ads</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Log In</a></li>
                    <li><a className="register-btn bg-[--pink] rounded-[5px] px-[25px] py-[7px]" href="">Register</a></li>
                </ul>
            </nav>
        </header>
    )
}
