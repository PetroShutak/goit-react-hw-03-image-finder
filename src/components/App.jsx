import Loader from "./Loader/Loader";

export const App = () => {
  return (
<>
<Loader />
<div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101'
      }}
    >
      Loading... Please wait...
    </div>
</>
  );
};
