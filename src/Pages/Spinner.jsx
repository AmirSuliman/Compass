import { LuLoader2 } from 'react-icons/lu';

const Spinner = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LuLoader2 className="animate-spin" size={50} />
    </div>
  );
};
export default Spinner;
