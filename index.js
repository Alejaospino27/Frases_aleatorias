
function App() {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("#111")

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();

    }, [])

    const getNewQuote = () => {


        const colors = [
            "#FF0000",
            "#16a085",
            "#f39c12",
            "#996699",
            "#996666",
            "#669933",
            "#9999FF",
            "#669999",
            "#CC00FF",
            "#FF9933",
            "#FF9999",
            "#CC9966",
            "#CC9999",
            "#CCCC33",
            "#FFCCFF",
            "#FFCC33",
            "#17BE90",
            "#17A2BE",
            "#BD80D0",
            "#E5ABBA"



        ];
        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
        setRandomQuote(quotes[randIndex])
        setColor(colors[randColorIndex])

    }




    return (

        <div style={{backgroundColor: color, minHeight: "100vh"}}>
            <div className="container pt-5 ml-auto mr-auto mt-0">
                <div className="jumbotron" mt="30px">
                    <div className="card" >
                        <div className="card-header">Frases de inspiración</div>
                        <div className="card-body">
                            {randomQuote ? (
                                <>
                                    <h5 className="card-title">-- {randomQuote.author || "Anonymous"}</h5>
                                    <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                                </>
                            ) : (<h2>Loading</h2>)
                            }

                            <div className="col">
                                <button onClick={getNewQuote} className="btn btn-primary ml-3">Nueva</button>
                                <a href="" className="btn btn-warning">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="" className="btn btn-danger"> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

ReactDOM.render(<App />, document.getElementById('app'))