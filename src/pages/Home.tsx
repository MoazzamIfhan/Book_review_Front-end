import { Search } from "@material-ui/icons";
import ListComponent from "../components/List";
import { useEffect, useState } from "react";
import  {getBooks} from '../service/api'
import Navbar from "../components/Navbar";
 
const Books = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await getBooks();
            setData(response.data);
        } catch (error) {
            alert('something went wrong');
            console.log('something went wrong', error)
        }
    };
    fetchData();
  }, []);

   return (
      <div className="container">
        <Navbar/>
         <div className="title">
         {/* <Search/> */}
         <ListComponent books={data}/>
         </div>
      </div>
   );
};
 
export default Books;

