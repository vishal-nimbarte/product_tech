import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

// destructuring
const Side = ({ handleChange }) => {
  // console.log(handleChange)
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1 style={{border:'2px solid #e5e5e5',padding:'5px'}}>VN97</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        {/* <Colors handleChange={handleChange} /> */}
      </section>
    </>
  );
};

export default Side;