import {
  Bell,
  CheckCheck,
  CircleAlert,
  Info,
  TriangleAlert,
} from "lucide-react";
import Alert from "./component/Ui/Alert/Alert";
import "./component/Ui/Alert/index.scss";
const App = () => {
  return (
    <div style={{ margin: "2rem" }}>
      <Alert
        type={"alert-danger"}
        icon={<CircleAlert />}
        title={"SomeThing Went Wrong"}
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        necessitatibus consectetur delectus animi veritatis consequuntur fugiat
        modi rem, ratione voluptas."
      />

      <Alert type={"alert-default"} icon={<Bell />} title={"Upgrade your plan"}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          veritatis quasi laborum consectetur dolor vero rerum beatae dicta ex
          soluta? Libero<a href="/"> iusto voluptatum</a> dolores delectus
          sapiente molestiae in autem aut?
        </p>
      </Alert>

      <Alert
        type={"alert-Success"}
        icon={<CheckCheck />}
        title={"Proses is Successes"}
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        necessitatibus consectetur delectus animi veritatis consequuntur fugiat
        modi rem, ratione voluptas."
      />
      <Alert
        type={"alert-Warning"}
        icon={<TriangleAlert />}
        title={"SomeThing Went Wrong"}
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        necessitatibus consectetur delectus animi veritatis consequuntur fugiat
        modi rem, ratione voluptas."
      />
      <Alert
        type={"alert-Info"}
        icon={<Info />}
        title={"Note"}
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        necessitatibus consectetur delectus animi veritatis consequuntur fugiat
        modi rem, ratione voluptas."
      />
    </div>
  );
};
export default App;
