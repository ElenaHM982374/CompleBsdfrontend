"use client"; // Esto indica que el componente debe renderizarse en el lado del cliente

export default function Cargando() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#0184ff" 
        }}>
            <div style={{
               fontSize: "1.5em",
               color: "#ffffff", // Blanco para el texto
               fontFamily: "'Titillium Web', sans-serif",
               fontWeight: "700",
               textTransform: "uppercase",
               letterSpacing: "2px"
            }}></div>
            <h1 style={{
                fontSize: "1.5em",
                color: "#800080", // Morado para el texto
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "bold"
            }}>Cargando...</h1>

            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}