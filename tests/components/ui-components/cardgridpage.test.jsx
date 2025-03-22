import { render, screen } from "@testing-library/react";
import CardGridPage from "../../../src/components/ui-components/CardGridPage"
import {PiHeartDuotone} from "react-icons/pi";

describe('UI - Card Grid Page Tests', () => {

  const mockProps = {
    children: <div>child 1</div>,
    title: "Mock Title",
    desc: "Mock desc",
    icon: <PiHeartDuotone />,
  };
  
  it('should render with all props correctly', () => {
    render(<CardGridPage {...mockProps} />);
;
    expect(screen.getByText('child 1')).toBeInTheDocument();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.desc)).toBeInTheDocument();
    const svgElement = screen
      .getByTestId("card-grid-page-iconTitle-container")
      .querySelector('svg[stroke="currentColor"]');
    expect(svgElement).toBeInTheDocument();

  })

  it('should render without a description if desc prop is not provided', () => {
    render(<CardGridPage {...mockProps} desc={undefined} />);
    expect(screen.queryByText(mockProps.desc)).not.toBeInTheDocument();
  })

})