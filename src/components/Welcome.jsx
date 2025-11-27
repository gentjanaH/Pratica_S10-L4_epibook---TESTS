import Alert from 'react-bootstrap/Alert';

function Welcome() {
    return (
        <Alert variant="dark" className="m-0">
            <Alert.Heading>Benvenuto in <span className="custom-font"> Epi-Books</span>!</Alert.Heading>
            <p>
                Qui troverai libri di ogni genere, da leggere dove e quando vuoi!
            </p>


        </Alert>
    );
}

export default Welcome;
