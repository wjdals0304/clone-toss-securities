import Header from "@/components/Header";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeContainer>
      <Header />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;  
  z-index: 0;
  position: relative;
  isolation: isolate;
`;

