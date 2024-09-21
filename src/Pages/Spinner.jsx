import { LoaderCircle } from 'lucide-react';

const Spinner = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LoaderCircle className="animate-spin" size={50} />
    </div>
  );
};
export default Spinner;
