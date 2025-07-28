// import image 
import kafedra from "../assets/kafedra.png";

const Kafedras = [
    {
        id: 1,
        title: "Moliya",
        description: "Moliya va moliyaviy texnologiyalar",
    },
    {
        id: 2,
        title: "Moliya",
        description: "Moliya va moliyaviy texnologiyalar",
    },
    {
        id: 3,
        title: "Moliya",
        description: "Moliya va moliyaviy texnologiyalar",
    },
    {
        id: 4,
        title: "Moliya",
        description: "Moliya va moliyaviy texnologiyalar",
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
        <div className=""></div>
    </div>
  )
}

export default Kafedra;