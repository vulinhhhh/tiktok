import Home from "../Pages/Home"
import Following from "../Pages/Following"
import Profile from "../Pages/Profile"
import Upload from "../Pages/Upload"
import OnlyHeader from "../Layouts/Components/OnlyHeader"

const publicRouter = [
    { path: '/', components: Home },
    { path: '/following', components: Following },
    { path: '/profile', components: Profile },
    { path: '/upload', components: Upload, layout:OnlyHeader},
]

export{publicRouter}