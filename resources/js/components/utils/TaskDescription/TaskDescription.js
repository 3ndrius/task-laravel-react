import React from "react";


const TaskDescription = () => {
    return (
        <main role="main">
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Opis zadania</h1>
                    <p className="lead text-muted">Obecny projekt został stworzony w frameworku Laravel jako backend i bibliotece React.js jako frontend, rozbuduj go o podstronę '/posts' według poniższych instrukcji:</p>
                    <p>1. Stworz Controller w Laravelu który pobierze GET listę postów znajdującą się pod adresem https://jsonplaceholder.typicode.com/posts. Możesz to zrobić w dowolny sposób(masz do dyspozycji Guzzle - PHP HTTP client)</p>
                    <p>2. W pliku ~/routes/web.php stwórz Endpoint, pod adresem którego dostajesz zwrócone dane</p>
                    <p>3. w ~/resources/utils/ stwórz komponent React, w którym pobierzesz dane znajdujące się pod adresem z punktu 2 i wyświetl listę postów pod adresem /posts, stwórz element w menu kierujący na /posts. Możesz to zrobić w dowolny sposób(masz do dyspozycji bibliotekę axios)</p>
                    <p>4. Przy przekierowaniu w menu na /posts, zadbaj żeby ten element menu był aktywny</p>
                    <p>5. Twoja podstrona posts powinna wyglądać podobnie do poniższego zrzutu ekranu. Wykorzystano elementy '.card' z Bootstrap 4.</p>
                    <img src={screen} />
                    <p>6. Możesz używać w projekcie składni ES6(Arrow functions, Destructuring etc.), React Hooks etc.</p>
                    <h2>Powodzenia!</h2>
                </div>
            </section>
        </main>
    )
}

export default TaskDescription;
