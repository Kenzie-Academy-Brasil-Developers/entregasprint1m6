import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    display: flex;
    min-width: 850px;
    border: 4px solid grey;
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 30vh;

    .leftSide{
        width: 65%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .form{
        display: flex;
        flex-direction: column;
        padding: 14px;
    }
    .input{
        margin-top: 8px;
        margin-bottom: 25px;
        height: 35px;
        border-radius: 8px;
        font-size: 14px;
        padding-left: 12px;
    }
    .btnSubmit{
        width: 40%;
        height: 35px;
        margin: 5px;
        border-radius: 8px;
        margin: 0 auto;
        font-size: 18;
    }
    
    .rightSide{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35%;
        background-color: rgb(224,255,255);

    }
    .h3RightSide{
        border-bottom: 0.5px solid black;
        width: 82%;
        margin-left: 15px;
        font-size: 26px;
    }
    .dashboard{
        width: 85%;
        display: flex;
        flex-direction: column;
        color: blue;
    }
    .liDashboard{
        margin-top: 40px;
        margin-bottom: 40px;
        font-size: 20px;
    }
    


`