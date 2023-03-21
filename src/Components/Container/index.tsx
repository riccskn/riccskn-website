import React from "react";
import {DivContainer} from "./style";


type ContainerProps = {
    children: React.ReactNode;
};
export default function Container(props: ContainerProps) {

    return (
        <DivContainer>
            {props.children}
        </DivContainer>
    )
}