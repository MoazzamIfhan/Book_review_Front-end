import { Search } from "@material-ui/icons";
import ListComponent from "../components/List";
import { useEffect, useState } from "react";
import {getBookbyId, getBooks} from '../service/api'
import Navbar from "../components/Navbar";
import BookDetailComponent from "../components/BookDetails";
import {useParams} from "react-router-dom";

const BooksDetail = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getBookbyId(useParams().id);
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
                <BookDetailComponent books={data}/>
            </div>
        </div>
    );
};

export default BooksDetail;

