export default function Footer() {
    return <>
        <footer>
            <div className="footer w-full h-[45vh] bg-slate-700 flex">
                <div className="item1 flex flex-col  w-[33.33%] text-center space-y-4 justify-center font-semibold text-white">
                    <h3 className="text-3xl">
                        Location
                    </h3>

                    <p>2215 John Daniel Drive</p>

                    <p>Clark, MO 65243</p>
                </div>

                <div className="item2 flex flex-col   w-[33.33%] items-center pt-20 space-y-6 text-white">
                    <h3 className="text-3xl font-semibold">AROUND THE WEB</h3>
                    <div className="item2-icons flex space-x-7 text-xl">
                    <i class="icon relative fa-brands fa-facebook cursor-pointer"></i>
                    <i class="icon relative fa-brands fa-twitter cursor-pointer"></i>
                    <i class="icon relative fa-brands fa-linkedin cursor-pointer"></i>
                    <i class="icon relative fa-solid fa-globe cursor-pointer"></i>

                    </div>
                </div>
                <div className="item3 flex flex-col w-[33.33%] items-center text-white space-y-6 pt-20">
                    <h3 className="text-3xl font-semibold">ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap <br /> theme created by Route</p>
                </div>
            </div>
            <div className="footer-extend w-full h-[10vh] bg-slate-800 text-center text-white pt-3">
            <p>Copyright © Your Website 2021</p>
            </div>
            
        </footer>

    </>

}
