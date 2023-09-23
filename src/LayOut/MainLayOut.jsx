import { Outlet } from "react-router-dom";

const MainLayOut = () => {
    return (
        <div>
            <section className="flex justify-between px-10 shadow-md py-7">
                <div>
                    <h1>Amazon</h1>
                </div>
                <nav className="">
                    <ul className="flex gap-10">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/products">Products</a>
                        </li>
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                    </ul>
                </nav>



                <div className="min-h-screen">
                    <Outlet></Outlet>
                </div>

                

            </section>
        </div>
    );
};

export default MainLayOut;