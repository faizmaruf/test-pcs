import "../App.css";

import BarNavigation from "./Main/Footer/BarNavigation";
import CardMember from "./Main/CardMember";
import Header from "./Main/Header";
import Activity from "./Main/Activity";
import News from "./Main/News";
import Online from "./Main/Online";

function App() {
  return (
    <div className="container-main">
      <div className="container min-h-screen">
        <div className="container min-h-screen relative ">
          <Header />
          <CardMember />
          <Activity />
          <News />
          <Online />
        </div>
      </div>
      <div className="bottom-navigation">
        <BarNavigation />
      </div>
    </div>
  );
}

export default App;
