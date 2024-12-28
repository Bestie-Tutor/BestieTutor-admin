import React from "react";

// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";
import {useHistory} from "react-router-dom";

const EditHeader = () => {

    const username = JSON.parse(localStorage.getItem("user")).name;
    const history = useHistory();

    return (
        <>
            <div
                className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                style={{
                    minHeight: "200px",
                    backgroundSize: "cover",
                    backgroundPosition: "center top"
                }}
            >
                {/* Mask */}
                <span className="mask bg-gradient-default opacity-8"/>
            </div>
        </>
    );
}

export default EditHeader;
