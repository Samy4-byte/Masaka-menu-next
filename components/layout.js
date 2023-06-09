import Header  from "./header"


const Layout = ({ children }) => {
    <div className="content">
        <Header />
        {children}
    </div>
}

export default Layout