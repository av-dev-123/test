import Protein from '../assets/images/protein.png'
const CategoryCard = ({color,title}) => {
  return (
    <>
      <div
        className="protein-card bg-white border-2 rounded-3xl p-5 text-center"
        style={{ borderColor:'#D3EDFF',minHeight:'unset'}}
      >
        <div className="protein-card-image mx-auto mt-3 mb-5">
            <img src={Protein} className='w-full h-full object-cover'/>
        </div>
        <p className='font-bold text-primary text-sm'>{title}</p>
        <p className='text-xs mt-1' style={{color:'#999999'}}>526 Products</p>
      </div>
    </>
  );
};
export default CategoryCard;
