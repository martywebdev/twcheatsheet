
import "./App.css";
import { useSelector } from "react-redux";
function App() {
  
  
  const typography = useSelector(state => state.typography.fontStyles)
  const utilities = useSelector(state => state.utility.utilities)
  return (
    <>

      <div className={`${typography} ${utilities}`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
        molestias sapiente cupiditate quidem! Recusandae illo dolores,
        repellendus molestias voluptatibus reiciendis dolorem aut magni aliquam
        consequuntur accusamus et nesciunt. Facilis, porro?
      </div>

      
    </>
  );
}

export default App;
