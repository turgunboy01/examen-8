import CategoryTovar from "../../components/home/CategoryTovar";
import Kabinet from "../../components/ui/Kabinet";
import Brend from "../../components/ui/Brend";
import Contact from "../../components/home/Contact";
import Statya from "../../components/statya/Statya";

const StatyaPage = () => {
  return (
    <div>
      <Statya />
      <CategoryTovar />
      <Kabinet />
      <Brend />
      <Contact />
    </div>
  );
};

export default StatyaPage;
