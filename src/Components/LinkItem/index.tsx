import React from "react";
import {LinkBox, LinkName} from "./style";
import {GrMail} from "react-icons/gr";

export interface LinkItemProps {
    icon: React.ElementType

    name: string

    link: string
}


export default function LinkItem(props: LinkItemProps) {
    return (
        <LinkBox>
          <props.icon size={"20"}/>
          <LinkName href={props.link}>{props.name}</LinkName>
        </LinkBox>
    )
}