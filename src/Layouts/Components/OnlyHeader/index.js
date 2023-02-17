import Header from "./Header";

function OnlyHeader({ children }) {
    return (
        <div className="OnlyHeader">
            <Header />
            <div className="content">
                    {children}
                </div>
        </div>
    );
}
export default OnlyHeader;
