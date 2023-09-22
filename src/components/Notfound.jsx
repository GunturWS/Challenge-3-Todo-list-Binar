import "./Notfound";


const Notfound = () => {
    const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
  };

  return (

    <div style={centerStyle}>
      <div className="not-found">
        <div className="not-found-info Font-4xl flex: justify-center">
          <div className="text-5xl">
            <h2 className="font-bold">404 Not Found.</h2>
            <p className="font-bold">The requested page was not found on this server.</p>
            <svg></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
