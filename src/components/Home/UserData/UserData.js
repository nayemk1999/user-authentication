import React, { useEffect, useState } from 'react';
import { Button, Container, Modal, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import UserForm from '../UserForm/UserForm';
import swal from 'sweetalert';
import ReactPaginate from 'react-paginate';
import axios from 'axios';



const UserData = () => {
    const [allUsers, setAllUser] = useState([]);
    const [show, setShow] = useState(null);
    const [update, setUpdate] = useState(true)
    const [pageNumber, setPageNumber] = useState(0);
    const [user, setUser] = useState({});


    const updateUser = (user) => {
        setShow(true)
        setUser(user)
    }


    const url = 'http://localhost:5050/auth/all-users'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllUser(data))
    }, [])

    const cardPerPage = 4
    const pagesVisited = pageNumber * cardPerPage
    // const displayCards = allUsers.slice(-4).map(propsData => setUser(propsData))
    const pageCount = Math.ceil(allUsers.length / cardPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    const handleDeleteService = id => {
        // if (id) {
        //     return swal("Permission restriction!", "As a test-admin, you don't have permission to delete 6 core services. But you can delete your added services.", "info");
        // }
        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete this service?",
            icon: "warning",
            buttons: [true, "Yes"],
            dangerMode: true
        })
        .then(wantDelete => {
            if (wantDelete) {
                axios.delete(`http://localhost:5050/user/${id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data) {
                            return swal("Successfully Deleted!", "One User has been successfully deleted.", "success");
                        }
                        swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
                    })
                    .catch(err => {
                        swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
                    })
            }
        });
    }
    return (
        <Container>
            <div className="shadow p-5 bg-white" style={{ borderRadius: "15px" }}>
                <Table className='table-style' hover responsive>
                    <thead style={{ backgroundColor: '#000000', color: '#FFFFFF' }} >
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    {
                        allUsers.map((user, index) => {
                            // console.log(user);
                            return (
                                <tbody style={{ fontWeight: "500" }}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td className="text-center">
                                            <Button className="p-1 mb-0" style={{ borderRadius: "50%", backgroundColor: '#18FF2F', marginRight: '5px' }} onClick={() => updateUser(user)}>
                                                <FontAwesomeIcon icon={faEdit} className="mx-1" />
                                            </Button>
                                            <Button variant="danger" className="p-1 ml-3 mb-0" style={{ borderRadius: "50%" }} onClick={() => handleDeleteService(user._id)}>
                                                <FontAwesomeIcon icon={faTrash} className="mx-1" />
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>)
                        })
                    }
                </Table>
                <div className="d-flex mt-5">
                    <ReactPaginate
                        previousLabel={"<<"}
                        nextLabel={">>"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
                <>
                    <Modal centered show={show} size='lg'>
                        <Modal.Header >
                            <Modal.Title className="text-center mt-2 text-success">Update User</Modal.Title>
                            <Button onClick={() => setShow(false)}>Close</Button>
                        </Modal.Header>
                        <Modal.Body >
                            <UserForm user={user} />
                        </Modal.Body>
                    </Modal>
                </>
            </div>

        </Container>
    );
};

export default UserData;