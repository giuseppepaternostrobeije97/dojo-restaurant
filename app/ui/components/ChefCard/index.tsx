// -- REACT
import { FC } from "react";
// -- TYPE
import { chefCardProps } from "./chef-card";
// -- STYLE
import './chef-card.scss';
// -- NEXT
import Image from "next/image";

export const ChefCard:FC<chefCardProps> = (props):JSX.Element => {

    // # DISPLAY SOCIAL FOOTER IN CARD
    function displaySocial():JSX.Element[]{
        return(
            props?.social?.map((item,index) => {
                return(
                    <div className="socialMiniCard" key={index}>
                        <i className={`fa-brands fa-${item.social}`}></i>
                    </div>
                )
            })
        )
    }
    return(
        <div id="chefCard" key={props.key}>
            <div className="profileImgContainer">
                <div className="profileImg">
                    <Image alt="profile pic" src={props.profilePic}/>
                </div>
            </div>
            <div className="fullName">
                <span>{props.name + props.surname}</span>
            </div>
            <div className="role">
                <span>{props.role}</span>
            </div>
            <div className="socialContainer">
                {displaySocial()}
            </div>
        </div>
    )
}