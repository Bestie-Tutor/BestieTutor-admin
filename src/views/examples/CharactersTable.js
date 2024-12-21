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

const CharactersTable = () => {

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
                                <h3 className="mb-0">Characters</h3>
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
                                    <tr key={character.email}>
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
