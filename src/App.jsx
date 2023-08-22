import { useState } from "react";
import Title from "./Title";
import menu from './data'
import Menu from "./Menu";
import Categories from "./Categories";

const tempCategories =  menu.map((item) => item.category);
const tempSet =  new Set(tempCategories);
const allCategories = ['all',...tempSet]

const App = () => {
  const [menuItem, setMenuItem] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  console.log(categories);
  return (
    <main>
      <section className="menu">
        <Title text='our menu'/>
        <Categories categories={categories} />
        <Menu items={menuItem}/>
      </section>
    </main>
  );

};
export default App;
