const Layout = ({ children, titulo }) => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="bg-white p-10 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black text-center max-w-lg w-full">
          <h1 className="text-3xl font-black mb-6 uppercase italic">{titulo}</h1>
          <hr className="border-2 border-black mb-8" />
          
          {/* Aquí es donde se "inyectará" el contenido de cada ejercicio */}
          {children}
        </div>
      </div>
    );
  };
  
  export default Layout;