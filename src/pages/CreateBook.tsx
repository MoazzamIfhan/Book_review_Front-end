import React from 'react';
import Navbar from '../components/Navbar';
import BookComponent from "../components/BookForm";
import {Book} from "@material-ui/icons";
import ListComponent from "../components/List";

const Create: React.FC = () => {
  return (
      <>
          <div className="container">
              <Navbar/>
              <div className="title">
                                    <BookComponent />
              </div>
          </div>
      </>);
};


export default Create;