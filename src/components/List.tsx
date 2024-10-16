import React, {useEffect ,useState} from "react";
import {deleteBook, editBooks} from "../service/api";
// import {useNavigate} from "react-router-dom";
// import {editBooks} from "../service/api";


const ListComponent = (props: any) => {

    interface book {
        id: number;
        title: string;
        author: string;
        publicationDate: string;
    }
    const [books,setBooks] = useState<book[]>([]);

    useEffect(() => {
        setBooks(props.books || []);
    }, [props.books]);

    const [editingId, setEditingId] = useState<number | null>(null);
    const [editForm, setEditForm] = useState<book | null>(null);

    const handleEditClick = (book: book) => {
        setEditingId(book.id);
        setEditForm(book);
    };

    const handleDeleteClick = async (book: book) => {
      const response =  await deleteBook(book.id);
      if (response.status == 200){}
    };

    // const handleViewClick = async (id: any) => {
    //     let navigate = useNavigate();
    //     // navigate('/BookDetails/'id);
    // };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editForm) {
            const { name, value } = e.target;
            setEditForm({ ...editForm, [name]: name === 'title' ? String(value) : value,
                ...editForm, [name]: name === 'author' ? String(value) : value,
                ...editForm, [name]: name === 'publicationDate' ? String(value) : value,
            });
        }
    };

    const handleSaveClick = async () => {
        debugger;
        const book = await editBooks(editForm);
        console.log(books);
        if (book.status) {
            const newList: any = books.map((bk: any) =>
                    bk.id === book.data.id ? { id: book.data.id, title: book.data.title, author: book.data.author,
                        publicationDate: book.data.publicationDate } : bk
                );
            setBooks(newList);
        }
        // if (editForm) {
        //     setBooks((prevItems: any) =>
        //         prevItems.map((book: any) => (book.id === editingId ? editForm : book))
        //     );
        //     setEditingId(null);
        //     setEditForm(null);
        // }
    };

    const handleCancelClick = () => {
        setEditingId(null);
        setEditForm(null);
    };
console.log(books);
    return (
        <>
            <table>
                <thead>
                    <tr>
                    <td>Title</td>
                    <td>Author</td>
                    <td>publication Date</td>
                    </tr>
                </thead>
                <tbody>
                {books.length === 0 ? ( <tr>
                        <td colSpan={3} style={{ textAlign: 'center' }}>
                            No records found
                        </td>
                    </tr>
                ) : (
                    books.map((book:any) => (
                    <tr key={book.id}>
                        <td>
                            {editingId === book.id ? (
                                <input
                                    type="text"
                                    name="title"
                                    value={editForm?.title}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                book.title
                            )}
                        </td>
                        <td>
                            {editingId === book.id ? (
                                <input
                                    type="text"
                                    name="author"
                                    value={editForm?.author}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                book.author
                            )}
                           </td>
                        <td>
                            {editingId === book.id ? (
                                <input
                                    type="text"
                                    name="publicationDate"
                                    value={editForm?.publicationDate}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                book.publicationDate
                            )}
                            </td>
                        <td>
                            {editingId === book.id ? (
                                <>
                                    <button onClick={handleSaveClick}>Save</button>
                                    <button onClick={handleCancelClick}>Cancel</button>
                                </>
                            ) : (
                                <>
                                    {/*<button onClick={() => handleViewClick(book.id)}>View</button>*/}
                                    <button onClick={() => handleEditClick(book)}>Edit</button>
                                    <button onClick={() => handleDeleteClick(book)}>Delete</button>
                                </>
                            )}
                        </td>
                    </tr>
                    ))
                )}
                </tbody>
            </table>
        </>
    )
}

export default ListComponent;
