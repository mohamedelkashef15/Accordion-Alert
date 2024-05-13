import { Bell, Info, CheckCheck, Ban, TriangleAlert } from "lucide-react";
import Alert from "./components/Alert/Alert";
import "./global.scss";

const data = [
  {
    icon: <Bell />,
    title: "Upgrade your plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto nesciunt error praesentium facilis, ipsa assumenda cumque deleniti eum consequatur!",
    bgColor: "#151617",
    color: "#C8C8C8",
    border: "2px dotted #C8C8C8",
  },
  {
    icon: <Info />,
    title: "Note",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto nesciunt error praesentium facilis, ipsa assumenda cumque deleniti eum consequatur!",
    bgColor: "transparent",
    color: "#bcc0ff",
    border: "2px dotted #bcc0ff",
  },
  {
    icon: <CheckCheck />,
    title: "Your order has been processedg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto nesciunt error praesentium facilis, ipsa assumenda cumque deleniti eum consequatur!",
    bgColor: "#1f1e07",
    color: "#75c265",
    border: "2px dotted #75c265",
  },
  {
    icon: <Ban />,
    title: "Something went wrong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto nesciunt error praesentium facilis, ipsa assumenda cumque deleniti eum consequatur!",
    bgColor: "rgb(192 29 29/15%)",
    color: "#ef8d8dfa",
    border: "2px dotted rgba(255, 25, 0, 0.322)",
  },
  {
    icon: <TriangleAlert />,
    title: "Tips & Tricks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto nesciunt error praesentium facilis, ipsa assumenda cumque deleniti eum consequatur!",
    bgColor: "#090703",
    color: "#f9d051",
    border: "2px dotted #f9d051",
  },
  // {
  //   title: "Note",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto nesciunt error praesentium facilis, ipsa assumenda cumque deleniti eum consequatur!",
  // },
  // {
  //   title: "Something went wrong",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto nesciunt error praesentium facilis, ipsa assumenda cumque deleniti eum consequatur!",
  // },
];

function App() {
  return (
    <main>
      <div className="container">
        <div>
          {data.map((ele) => {
            return (
              <Alert
                icon={ele.icon}
                title={ele.title}
                description={ele.description}
                bgColor={ele.bgColor}
                color={ele.color}
                border={ele.border}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
