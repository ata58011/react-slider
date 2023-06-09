import "./App.css";
import ImageSlider from "./components/ImageSlider";

function App() {
  const slides = [
    { url: "http://localhost:3000/image-1.jpeg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpeg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpeg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpeg", title: "city" },
    { url: "http://localhost:3000/image-5.jpeg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div className="App">
      <div style={containerStyles}>
        <ImageSlider slides={slides}></ImageSlider>
      </div>
    </div>
  );
}

export default App;
