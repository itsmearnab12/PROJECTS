import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = document.cookie.includes("token");

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default ProtectedRoute;