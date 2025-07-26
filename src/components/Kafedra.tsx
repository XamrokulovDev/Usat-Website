// import image 
import kafedra from "../assets/kafedra.png";

const Kafedras = [
    {
        id: 1,
        title: "Moliya"
    }
]

const Kafedra = () => {
  return (
    <div className="w-screen h-[800px] bg-[#00000080] relative">
        <img 
          src={kafedra} 
          alt="kafedra image" 
          loading="lazy"
          className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
        />
    </div>
  )
}

export default Kafedra;