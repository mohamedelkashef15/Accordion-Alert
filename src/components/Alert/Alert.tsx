import { ReactNode } from "react";
import "./alert.scss";
import { X } from "lucide-react";

interface IProps {
  name: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const Alert = (props: IProps) => {
  return (
    <div className={props.name}>
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
