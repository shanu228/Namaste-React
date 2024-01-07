import { render, screen } from "@testing-library/react";
import { RestaurantCard, withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resCard={MOCK_DATA} />);

  const name = screen.getByText("Burger King");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
  // Home Work - test HOC : withPromtedLabel()
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  render();

  const cardData = screen.getByLabelText("Promoted");

  expoect(cardData).toBeInTheDocument();
});

// describe('withRestaurantLabel Higher-Order Component', ()=>{

//   const WrappedComponent = withRestaurantLabel(RestaurantCard);
//   test('displays "Promoted" label when wrapped with withRestaurantLabel HOC', ()=> {
//     render();
//     const named = screen.getByText("Promoted")
//     expect(named).toBeInTheDocument();
//   });

//   test("Should test restaurant card", ()=>{
//     render()
//     const name = screen.getByText("PikWik Since 1991")

//     expect(name).toBeInTheDocument()
//   })
// })
