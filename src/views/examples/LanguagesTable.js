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

const LanguagesTable = () => {

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        const runAsync = async () => {
            const response = await getAll();
            const {data} = response;
            console.log(data.users);
            if (data.success) {
                setLanguages(data.users);
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
                                <h3 className="mb-0">Languages</h3>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Code</th>
                                    <th scope="col">Prompt</th>
                                    <th scope="col">VoiceCode</th>
                                    <th scope="col">SsmlGender</th>
                                </tr>
                                </thead>
                                <tbody>
                                {languages.map(language => (
                                    <tr key={language.email}>
                                        <th scope="row">
                                            {language.name}
                                        </th>
                                        <td>{language.email}</td>
                                        <td>{language.email}</td>
                                        <td>{language.email}</td>
                                        <td>{language.email}</td>
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

export default LanguagesTable;
