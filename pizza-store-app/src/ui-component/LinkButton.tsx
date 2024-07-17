import { Link, useNavigate } from "react-router-dom";

type Props = {
  children: string;
  to: string;
};

function LinkButton({ children, to }: Props) {
  const navigate = useNavigate();
  const linkClass = "text-sm text-blue-400";
  const HoverClass = "hover:t hover:text-blue-600 hover:underline";

  if (to === "-1") {
    return (
      <button className={linkClass} onClick={() => navigate(-1)}>
        &larr;
        <span className={HoverClass}>{children}</span>
      </button>
    );
  }

  return (
    <Link to={to} className={linkClass}>
      &larr;
      <span className={HoverClass}>{children}</span>
    </Link>
  );
}

export default LinkButton;
