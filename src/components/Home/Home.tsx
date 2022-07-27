import React from "react";
import { Button } from "@material-ui/core";
import { Navigate, useNavigate } from "react-router";
import { AppRoutes } from "../AppRoutes";
import './Home.css';
// import { useHistory } from "react-router";

const Home: React.FC = () => {
    // DEMO
    const navigate = useNavigate();
    // const history = useHistory();

    function goToPosts(): void {
        navigate(AppRoutes.postsHome);
        // history.push(AppRoutes.)
    }

    return (
        <Button variant="outlined" onClick={() => goToPosts()} >
            Go to Posts
        </Button>
    )
}

export default Home;