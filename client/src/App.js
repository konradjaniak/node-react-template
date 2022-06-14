import { useState, useEffect } from "react";

export default function App() {
    const [data, setData] = useState();

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    return (
        <>
            <div>
                <h1>React + Node App</h1>
                {data && (
                    <div>
                        <p>
                            <strong>Timestamp:</strong> {data && data.data}
                        </p>
                        <p>
                            <strong>Message:</strong> {data && data.message}
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}
