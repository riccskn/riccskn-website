import React from 'react';
import GlobalStyle from "./Styles/GlobalStyle";
import {GrMail} from "react-icons/gr";
import Container from "./Components/Container";
import Image from "../src/assets/images/me.png"
import LinkItem from "./Components/LinkItem";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {BsDiscord} from "react-icons/bs";
import {ImageProfile, LinksArea, TextDescription, TextName} from "./style";

function App() {
  return (
    <div className="app-window">
     <GlobalStyle/>
      <Container>
         <ImageProfile src={Image}/>

          <TextName>Henricke Mendes</TextName>
          <TextDescription>Software engineer, primarily using Java, Go, JavaScript, and TypeScript.</TextDescription>

           <LinksArea>
              <LinkItem name={"henrickesilvayt@gmail.com"} link={"mailto:henrickesilvayt@gmail.com"} icon={GrMail}/>
              <LinkItem name={"@henrickemendes"} link={"https://www.linkedin.com/in/henricke-mendes/"} icon={AiFillLinkedin}/>
              <LinkItem name={"@riccskn"} link={"https://github.com/riccskn"} icon={AiFillGithub}/>
              <LinkItem name={"@riccskn#8740"} link={"discord:/users/839916263135772733"} icon={BsDiscord}/>
           </LinksArea>
      </Container>
     </div>
  );
}

export default App;
