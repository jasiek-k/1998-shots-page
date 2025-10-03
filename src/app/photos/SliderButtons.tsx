import { ArrowButton } from "@components";

interface IProps {
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
}

const SliderButtons = ({ handlePrevSlide, handleNextSlide }: IProps) => (
  <div className="flex flex-row justify-between md:justify-end  mx-4 md:mx-5 mt-5 md:mt-5 md:gap-4">
    <ArrowButton type="button" variant="left" handleClick={handlePrevSlide}>
      Prev
    </ArrowButton>
    <ArrowButton type="button" variant="right" handleClick={handleNextSlide}>
      Next
    </ArrowButton>
  </div>
);

export default SliderButtons;
