import Protein from '../assets/images/protein.png'
const ProteinCard = ({color,count}) => {
  return (
    <>
      <div
        className="protein-card border-2 rounded-3xl p-5 text-center"
        style={{ borderColor:color}}
      >
        <div className='number flex justify-center items-center text-lg text-white' style={{background:color}}>
            {count}
        </div>
        <div className="protein-card-image mx-auto mt-3">
            <img src={Protein} className='w-full h-full object-cover'/>
        </div>
        <p className='text-sm my-5' style={{color:'#666666'}}>GNC Pro Performance 100% Whey Protein</p>
        <div className='flex justify-between items-center'>
            <p className='font-semibold text-primary text-sm'>MRP: ₤51.30</p>
            <button className='border border-dashed rounded-full p-1.5 px-3 fw-semibold text-sm' style={{color:'#D4AF37',borderColor:'#D4AF37'}}>51 Servings</button>
        </div>
      </div>
    </>
  );
};
export default ProteinCard;
