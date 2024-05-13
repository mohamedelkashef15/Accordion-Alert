import { ReactNode } from "react";
import "./alert.scss";
import { X } from "lucide-react";

interface IProps {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor: string;
  color: string;
  border: string;
}

const Alert = (props: IProps) => {
  return (
    <div className="alert-danger" style={{ backgroundColor: props.bgColor, color: props.color, border: props.border }}>
      <div className="alert-header">
        <div className="header-title">
          <span className="icon"> {props.icon}</span>
          <h4>{props.title}</h4>
        </div>
        <span>
          <X className="close" />
        </span>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default Alert;
