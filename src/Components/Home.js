import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 88%;
  max-width: 150px;
  border: none;
  border-radius: 2px;
  padding: 0 16px;
  height: 36px;
  color: #fff;
  background-color: red;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid grey;
  padding-bottom: 40px;
`;

const PizzaImage = styled.img`
  height: 425px;
  width: 705px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  const navigate = useNavigate();
  const routeToPizza = () => {
    navigate("pizza");
  };
  return (
    <>
      <Container>
        <h2>Looking for something new? Why not try BloomTech Pizza!</h2>
        <PizzaImage
          className="home-image"
          src="https://www.washingtonpost.com/resizer/WZA859eqdl1br735VlartjQpvYo=/arc-anglerfish-washpost-prod-washpost/public/KO6XMOQNAEI63CHIYWG4HW5O4I.jpg"
        />
        <Button
          onClick={routeToPizza}
          className="pizza-button"
          id="order-pizza"
        >
          Pizza Time!
        </Button>
      </Container>
    </>
  );
}
