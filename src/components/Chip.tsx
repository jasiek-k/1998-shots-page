interface IProps {
  children: string;
}

export const Chip = ({ children }: IProps) => (
  <div className="flex px-4 pb-1/2 pt-3/2 border-1 rounded-full items-baseline w-max uppercase">
    {children}
  </div>
);
