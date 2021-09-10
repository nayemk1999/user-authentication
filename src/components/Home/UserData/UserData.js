import React, { useState } from 'react';
import { Button, Container, Modal, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import UserForm from '../UserForm/UserForm';
import swal from 'sweetalert';
import ReactPaginate from 'react-paginate';



const UserData = () => {
    const [show, setShow] = useState(null);
    const [update, setUpdate] = useState(true)
    const [pageNumber, setPageNumber] = useState(0);
    const [user, setUser] = useState({});
    const [allUser, setAllUser] = useState([]);

    const cardPerPage = 4
    const pagesVisited = pageNumber * cardPerPage
    const displayCards = allUser.slice(-4).map(propsData => setUser(propsData))
    const pageCount = Math.ceil(allUser.length / cardPerPage)
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
        // .then(wantDelete => {
        //     if (wantDelete) {
        //         const loading = toast.loading('Deleting...Please wait!');
        //         const removedServices = services.filter(item => item._id !== id);
        //         axios.delete(`https://noboni-internet-service.herokuapp.com/deleted/${id}`)
        //             .then(res => {
        //                 toast.dismiss(loading);
        //                 if (res.data) {
        //                     setServices(removedServices)
        //                     return swal("Successfully Deleted!", "Your service has been successfully deleted.", "success");
        //                 }
        //                 swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
        //             })
        //             .catch(err => {
        //                 toast.dismiss(loading);
        //                 swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
        //             })
        //     }
        // });
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
                    <tbody style={{ fontWeight: "500" }}>
                        <tr>
                            <td>{"index +1 "}</td>
                            <td>{"index +1 "}</td>
                            <td>{"index +1 "}</td>
                            <td>{"index +1 "}</td>
                            <td>Name</td>
                            <td>৳ </td>
                            <td className="text-center">
                                <Button className="p-1 mb-0" style={{ borderRadius: "50%", backgroundColor: '#18FF2F', marginRight: '5px' }} onClick={() => setShow(true)}>
                                    <FontAwesomeIcon icon={faEdit} className="mx-1" />
                                </Button>
                                <Button variant="danger" className="p-1 ml-3 mb-0" style={{ borderRadius: "50%" }} onClick={() => handleDeleteService()}>
                                    <FontAwesomeIcon icon={faTrash} className="mx-1" />
                                </Button>
                            </td>
                        </tr>
                    </tbody>

                    {/* {
                                services.map((service, index) => {
                                return (
                                    <tbody key={service._id} style={{ fontWeight: "500" }}>
                                        <tr>
                                            <td>{index +1 }</td>
                                            <td>{service.name}</td>
                                            <td>৳ {service.price}</td>
                                            <td className="text-center">
                                                <Button variant="outline-success" className="p-1 mb-0" onClick={()=>handleUpdateService(service._id)}>
                                                    <FontAwesomeIcon icon={faEdit} className="mx-1" />
                                                </Button>
                                                <Button variant="outline-danger" className="p-1 ml-3 mb-0" onClick={() => handleDeleteService(service._id)}>
                                                    <FontAwesomeIcon icon={faTrash} className="mx-1" />
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>  )})
                            } */}
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
                            <UserForm update={update} />
                        </Modal.Body>
                    </Modal>
                </>
            </div>

        </Container>
    );
};

export default UserData;