import React, {useEffect, useState} from 'react';
import Header from "../../components/Headers/Header";
import {
    Card,
    CardHeader,
    Container,
    Row,
    Table,
    Col,
    Button
} from "reactstrap";
import {getAll} from "../../network/ApiAxios";
import {useHistory} from "react-router-dom";

const CharactersTable = () => {
    const history = useHistory();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const runAsync = async () => {
            const response = await getAll();
            const {data} = response;
            console.log(data.users);
            if (data.success) {
                setCharacters(data.users);
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
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Characters</h3>
                                    </Col>
                                    <Col className="text-right" xs="4">
                                        <Button
                                            color="primary"
                                            onClick={() => history.push('/admin/character-management', { add: true })}
                                            size="sm"
                                        >
                                            Add
                                        </Button>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Appearance</th>
                                    <th scope="col">Personality</th>
                                    <th scope="col">Tone</th>
                                </tr>
                                </thead>
                                <tbody>
                                {characters.map(character => (
                                    <tr class="click-th" key={character.email} onClick={() => history.push('/admin/character-management', { character })}>
                                        <th scope="row">
                                            {character.name}
                                        </th>
                                        <td>{character.email}</td>
                                        <td>{character.email}</td>
                                        <td>{character.email}</td>
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

export default CharactersTable;
