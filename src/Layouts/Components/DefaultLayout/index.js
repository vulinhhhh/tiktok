import { Box } from '@mui/system';
import Header from "./Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
    return (
        
        <Box sx={{
            minHeight:'100%'
        }}>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </Box>
    );
}
export default DefaultLayout;
