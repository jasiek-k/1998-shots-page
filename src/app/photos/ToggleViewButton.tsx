interface IProps {
  isViewingAll: boolean;
  onClick: () => void;
}

const ToggleViewButton = ({ isViewingAll, onClick }: IProps) => (
  <button type="button" onClick={onClick} className="uppercase font-light text-sm">
    {isViewingAll ? "[ VIEW IN SLIDER ]" : "[ VIEW IN GRID ]"}
  </button>
);

export default ToggleViewButton;
