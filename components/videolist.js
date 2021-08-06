import React from "react";
import Videoitem from "./videoitem";

const videolist = ({videos}) => {
    return <div>{videos.length}</div>;
}

export default videolist;
//render each item in video list