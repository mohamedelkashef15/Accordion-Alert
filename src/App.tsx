import { Bell, Info, CheckCheck, Ban, TriangleAlert } from "lucide-react";
import Alert from "./components/Alert/Alert";
import "./global.scss";

const data = [
  {
    name: "alert-defualt",
    icon: <Bell />,
    title: "Upgrade your plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto nesciunt error praesentium facilis, ipsa assumenda cumque deleniti eum consequatur!",
  },
  {
    name: "alert-info",
    icon: <Info />,
    title: "Note",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto nesciunt error praesentium facilis, ipsa assumenda cumque deleniti eum consequatur!",
  },
  {
    name: "alert-sucess",
    icon: <CheckCheck />,
    title: "Your order has been processedg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto nesciunt error praesentium facilis, ipsa assumenda cumque deleniti eum consequatur!",
  },
  {
    name: "alert-error",
    icon: <Ban />,
    title: "Something went wrong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto nesciunt error praesentium facilis, ipsa assumenda cumque deleniti eum consequatur!",
  },
  {
    name: "alert-warning",
    icon: <TriangleAlert />,
    title: "Tips & Tricks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto nesciunt error praesentium facilis, ipsa assumenda cumque deleniti eum consequatur!",
  },
];

function App() {
  return (
    <main>
      <div className="container">
        <div>
          {data.map((ele) => {
            return (
              <Alert name={ele.name} icon={ele.icon} title={ele.title} description={ele.description} key={ele.name} />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
