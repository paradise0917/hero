import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import "./homeAnimation.scss";

/*
 * HOME ANIMATION COMPONENT
 */
export default function HomeAnimation () {
    const [aniamtionDisplay, setAniamtionDisplay] = useState(false);
    const cookies = new Cookies();

    useEffect(() => {
        const homeAnimation = cookies.get("homeAnimation");
        if (homeAnimation === undefined) {
            setAniamtionDisplay(true);
            setTimeout(() => setAniamtionDisplay(false), 5000);
            cookies.set("homeAnimation", "true", { maxAge: 86400 });
        }
    }, []);

    return (
        <>
            {aniamtionDisplay === true
                ? (<div className="home-animation">
                    <svg viewBox="0 0 1280 720">
                        <text textAnchor="middle" x="50%" y="50%">hi hero!</text>
                    </svg>
                </div>) : ""}
        </>);
}
