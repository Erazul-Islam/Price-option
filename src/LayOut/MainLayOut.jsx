import { Outlet } from "react-router-dom";

const MainLayOut = () => {
    return (
        <div>
            <section className=" px-4 py-4 shadow-lg">
               nav
               <Outlet></Outlet>
            </section>
        </div>
    );
};

export default MainLayOut;