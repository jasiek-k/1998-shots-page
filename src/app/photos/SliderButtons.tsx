import { ArrowButton } from "@components";

interface IProps {
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
  handleViewAll: () => void;
}

const SliderButtons = ({ handleViewAll, handlePrevSlide, handleNextSlide }: IProps) => (
  <div className="flex flex-row justify-between md:justify-end  mx-4 md:mx-5 mt-5 md:mt-5 md:gap-4">
    <button
      type="button"
      onClick={handleViewAll}
      className="order-2 md:order-none md:mr-auto"
    >
      [ VIEW ALL ]
    </button>
    <ArrowButton
      type="button"
      variant="left"
      className="order-1 md:order-none"
      handleClick={handlePrevSlide}
    >
      Prev
    </ArrowButton>
    <ArrowButton
      type="button"
      variant="right"
      className="order-3 md:order-none"
      handleClick={handleNextSlide}
    >
      Next
    </ArrowButton>
  </div>
);

export default SliderButtons;
