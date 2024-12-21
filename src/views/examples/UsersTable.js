import React, {useEffect, useState} from 'react';
import Header from "../../components/Headers/Header";
import {
    Card,
    CardHeader,
    Container,
    Row,
    Table,
} from "reactstrap";
import {getAll} from "../../network/ApiAxios";

const UsersTable = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const runAsync = async () => {
            const response = await getAll();
            const {data} = response;
            console.log(data.users);
            if (data.success) {
                setUsers(data.users);
            }
        }
        runAsync();
    }, []);

    return (
        <>
            <Header/>
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Users</h3>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">Email</th>
                                    <th scope="col">Nickname</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">CreatedAt</th>
                                    <th scope="col">Preferences</th>
                                </tr>
                                </thead>
                                <tbody>
                                {users.map(user => (
                                    <tr key={user.email}>
                                        <th scope="row">
                                            {user.email}
                                        </th>
                                        <td>{user.name}</td>
                                        <td>{user.name}</td>
                                        <td>{user.name}</td>
                                        <td>{user.name}</td>
                                        <td>{user.name}</td>
                                        <td>{user.name}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default UsersTable;
