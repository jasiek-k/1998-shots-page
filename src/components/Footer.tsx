import clsx from "clsx";

const caption = ["PHOTOGRAPHY X DESIGN", `FROM 51°45'33.30"N, 19°27'21.54"E`, "XXX"];

const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <footer className={clsx("flex justify-center flex-col", className)}>
    {caption.map((item, index) => (
      <span className="text-center font-light text-sm" key={index}>
        {item}
      </span>
    ))}
  </footer>
);

export default Footer;
